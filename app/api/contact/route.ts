// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkContactRateLimit, getClientIp } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

// 各フィールドの上限
const LIMITS = {
  name: 80,
  email: 254, // RFC上限
  company: 120,
  message: 3000,
} as const;

// Cloudflare Turnstile（環境変数が無ければスキップ）
async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile 未設定なら検証スキップ
  if (!token) return false; // 設定済みなのにトークンなしは拒否

  try {
    const formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", token);
    formData.append("remoteip", ip);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: formData },
    );
    const json = (await res.json()) as { success?: boolean };
    return !!json.success;
  } catch (e) {
    console.error("Turnstile verification error:", e);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // ① レート制限チェック
    const rate = checkContactRateLimit(ip);
    if (!rate.ok) {
      return NextResponse.json(
        { error: `送信が多すぎます（${rate.reason}）。${rate.retryAfterSec}秒後に再度お試しください。` },
        { status: 429, headers: { "Retry-After": String(rate.retryAfterSec) } },
      );
    }

    // ② Content-Length チェック（巨大ボディを早期拒否）
    const contentLength = Number(req.headers.get("content-length") ?? "0");
    if (contentLength > 20 * 1024) {
      // 20KB 以上のJSONは送られてこないはず
      return NextResponse.json(
        { error: "リクエストサイズが大きすぎます。" },
        { status: 413 },
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      company,
      message,
      website, // honeypot field
      turnstileToken,
    } = body as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
      website?: string;
      turnstileToken?: string;
    };

    // ③ Honeypot：bot が入力したら静かに success を返す（bot 学習を防ぐ）
    if (website && website.trim().length > 0) {
      console.warn(`[contact] honeypot triggered from ip=${ip}`);
      return NextResponse.json({ ok: true });
    }

    // ④ 必須フィールドチェック
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "お名前・メールアドレス・お問い合わせ内容は必須です。" },
        { status: 400 },
      );
    }

    // ⑤ 長さ制限（フロント側のmaxLengthもセットしてあるが、サーバー側でも検証）
    if (name.length > LIMITS.name) {
      return NextResponse.json(
        { error: `お名前は${LIMITS.name}文字以内で入力してください。` },
        { status: 400 },
      );
    }
    if (email.length > LIMITS.email) {
      return NextResponse.json(
        { error: "メールアドレスが長すぎます。" },
        { status: 400 },
      );
    }
    if (company && company.length > LIMITS.company) {
      return NextResponse.json(
        { error: `会社名は${LIMITS.company}文字以内で入力してください。` },
        { status: 400 },
      );
    }
    if (message.length > LIMITS.message) {
      return NextResponse.json(
        { error: `ご相談内容は${LIMITS.message}文字以内で入力してください。` },
        { status: 400 },
      );
    }

    // ⑥ メールアドレス形式の簡易チェック
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません。" },
        { status: 400 },
      );
    }

    // ⑦ Cloudflare Turnstile（環境変数があれば検証、なければスキップ）
    const turnstileOk = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: "ボット検証に失敗しました。ページを再読込してお試しください。" },
        { status: 400 },
      );
    }

    // ⑧ 環境変数チェック
    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      console.error("CONTACT_TO_EMAIL is not set");
      return NextResponse.json(
        { error: "メール送信先が設定されていません。" },
        { status: 500 },
      );
    }
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "メール送信設定が正しく構成されていません。" },
        { status: 500 },
      );
    }

    const fromAddress = process.env.SMTP_FROM_EMAIL || "onboarding@resend.dev";

    // ⑨ メール本文組み立て（HTML はエスケープして XSS 防止）
    const esc = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const subject = `【OpenYouth HP】お問い合わせ: ${name}`;
    const plainText = `
OpenYouth コーポレートサイトからお問い合わせがありました。

■ お名前
${name}

■ メールアドレス
${email}

■ 会社名
${company || "-"}

■ お問い合わせ内容
${message}

---
IP: ${ip}
（このメールは Resend 経由で自動送信されています）
    `.trim();

    const html = `
      <p>OpenYouth コーポレートサイトからお問い合わせがありました。</p>
      <p><strong>■ お名前</strong><br/>${esc(name)}</p>
      <p><strong>■ メールアドレス</strong><br/>${esc(email)}</p>
      <p><strong>■ 会社名</strong><br/>${esc(company || "-")}</p>
      <p><strong>■ お問い合わせ内容</strong><br/>${esc(message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="font-size:11px;color:#888">IP: ${ip}<br/>このメールは Resend 経由で自動送信されています</p>
    `;

    const { error } = await resend.emails.send({
      from: `OpenYouth Website <${fromAddress}>`,
      to: [to],
      replyTo: email,
      subject,
      text: plainText,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メール送信に失敗しました。" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "メール送信に失敗しました。" },
      { status: 500 },
    );
  }
}
