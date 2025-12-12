// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "お名前・メールアドレス・お問い合わせ内容は必須です。" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      console.error("CONTACT_TO_EMAIL is not set");
      return NextResponse.json(
        { error: "メール送信先が設定されていません。" },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "メール送信設定が正しく構成されていません。" },
        { status: 500 }
      );
    }

    const fromAddress =
      process.env.SMTP_FROM_EMAIL || "onboarding@resend.dev";

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

（このメールは Resend 経由で自動送信されています）
    `.trim();

    const html = `
      <p>OpenYouth コーポレートサイトからお問い合わせがありました。</p>
      <p><strong>■ お名前</strong><br/>${name}</p>
      <p><strong>■ メールアドレス</strong><br/>${email}</p>
      <p><strong>■ 会社名</strong><br/>${company || "-"}</p>
      <p><strong>■ お問い合わせ内容</strong><br/>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>
      <hr/>
      <p>（このメールは Resend 経由で自動送信されています）</p>
    `;

    const { error } = await resend.emails.send({
      from: `OpenYouth Website <${fromAddress}>`,
      to: [to],        // 宛先（例: ten.seven.mail@gmail.com）
      replyTo: email,  // 返信先はフォーム入力のメールアドレス
      subject,
      text: plainText,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メール送信に失敗しました。" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "メール送信に失敗しました。" },
      { status: 500 }
    );
  }
}