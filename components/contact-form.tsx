"use client";

import { FormEvent, Fragment, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { MEDIA_COUNT } from "@/lib/businesses";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// 各フィールドの上限（サーバー側と一致させる）
const FIELD_LIMITS = {
  name: 80,
  email: 254,
  company: 120,
  message: 3000,
} as const;

type Topic = {
  id: string;
  label: string;
  hint: string;
};

const TOPICS: Topic[] = [
  { id: "stockhr", label: "Stock-HR の導入相談", hint: "プロダクト体験 / 見積 / プラン相談" },
  { id: "recruit", label: "採用支援のご相談", hint: "ペルソナ設計 / スカウト運用 / 選考設計" },
  { id: "sales", label: "営業支援のご相談", hint: "アポ獲得 / 商談同席 / セールス設計" },
  { id: "career", label: "採用相談・カジュアル面談", hint: "副業・業務委託・正社員ポジション" },
  { id: "media", label: "運営メディアへの掲載・協業", hint: `御朱印ナビ / エンジニア進路図 など${MEDIA_COUNT}つのメディア` },
  { id: "other", label: "取材・その他", hint: "取材 / 業務提携 / ご相談" },
];

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"error" | null>(null);
  const [topic, setTopic] = useState<string>(TOPICS[0].id);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileWidgetRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  // Cloudflare Turnstile ウィジェット初期化（環境変数が設定されてる場合のみ）
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    const tryRender = () => {
      const w = window as unknown as {
        turnstile?: {
          render: (el: HTMLElement, opts: { sitekey: string; callback: (token: string) => void; "expired-callback"?: () => void; theme?: string }) => string;
          remove: (id: string) => void;
        };
      };
      if (!w.turnstile || !turnstileWidgetRef.current) {
        setTimeout(tryRender, 200);
        return;
      }
      if (turnstileWidgetId.current) return;
      turnstileWidgetId.current = w.turnstile.render(turnstileWidgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        theme: "light",
      });
    };
    tryRender();
    return () => {
      const w = window as unknown as { turnstile?: { remove: (id: string) => void } };
      if (turnstileWidgetId.current && w.turnstile) {
        w.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    const formData = new FormData(form);
    const topicLabel = TOPICS.find((t) => t.id === topic)?.label ?? topic;

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      message:
        `[ご相談カテゴリ] ${topicLabel}\n\n` +
        ((formData.get("message") as string) || ""),
      website: (formData.get("website") as string) || "", // honeypot
      turnstileToken: turnstileToken ?? undefined,
    };

    // Turnstile 必須なのに未取得なら早期に止める
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatusType("error");
      setStatusMessage("ボット検証を完了してから送信してください。");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "送信に失敗しました。");
      }
      // Reset form, then navigate to the Thanks page.
      form.reset();
      setTopic(TOPICS[0].id);
      setTurnstileToken(null);
      router.push("/contact/thanks");
    } catch (error: unknown) {
      const msg =
        error instanceof Error
          ? error.message
          : "送信中にエラーが発生しました。時間をおいて再度お試しください。";
      setStatusType("error");
      setStatusMessage(msg);
      setIsSubmitting(false);
    }
  };


  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
          strategy="afterInteractive"
        />
      )}
    <form onSubmit={handleSubmit} className="flex flex-col gap-20 sm:gap-24">
      {/* honeypot: 通常ユーザーには見えない、bot は自動で埋めがち */}
      <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* === 相談の分類：選んだ行の地色が変わる === */}
      <Fieldset
        no="01"
        title="ご相談のカテゴリ"
        hint="複数該当の|場合は、|もっとも|近いものを|ひとつ|選んでください。"
      >
        <div className="flex flex-col gap-1">
          {TOPICS.map((t, i) => {
            const active = topic === t.id;
            return (
              <label
                key={t.id}
                className={clsx(
                  "flex cursor-pointer items-baseline gap-4 rounded-2xl px-4 py-4 transition-colors duration-200 sm:gap-6 sm:px-6 sm:py-5",
                  "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--color-navy-600)]",
                  active
                    ? "bg-[var(--color-navy-600)] text-[var(--color-slate-0)]"
                    : "bg-transparent text-[var(--color-slate-900)] hover:bg-[var(--color-slate-100)]"
                )}
              >
                <input
                  type="radio"
                  name="topic"
                  value={t.id}
                  checked={active}
                  onChange={() => setTopic(t.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={clsx(
                    "shrink-0 text-[13px] font-bold tabular",
                    active ? "text-[var(--color-navy-200)]" : "text-[var(--color-slate-400)]"
                  )}
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 lg:grid lg:grid-cols-2 lg:items-baseline lg:gap-6">
                  <span
                    className="phrased block text-[16px] font-bold leading-[1.6]"
                    style={{ fontFamily: "var(--font-display-jp)" }}
                  >
                    {t.label}
                  </span>
                  <span
                    className={clsx(
                      "phrased mt-1 block text-[13px] leading-[1.7] lg:mt-0",
                      active ? "text-white/75" : "text-[var(--color-slate-500)]"
                    )}
                  >
                    {t.hint}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </Fieldset>

      {/* === ご連絡先 === */}
      <Fieldset no="02" title="ご連絡先">
        <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:gap-x-5">
          <Field
            id="name"
            label="お名前"
            required
            placeholder="山田 太郎"
            maxLength={FIELD_LIMITS.name}
            autoComplete="name"
          />
          <Field
            id="email"
            label="メールアドレス"
            required
            type="email"
            placeholder="your@email.com"
            maxLength={FIELD_LIMITS.email}
            autoComplete="email"
          />
          <div className="min-w-0 sm:col-span-2">
            <Field
              id="company"
              label="会社名 / 所属"
              placeholder="株式会社〇〇"
              maxLength={FIELD_LIMITS.company}
              autoComplete="organization"
            />
          </div>
        </div>
      </Fieldset>

      {/* === ご相談内容 === */}
      <Fieldset
        no="03"
        title="ご相談内容"
        required
        hint="背景・|タイムライン・|課題感など、|わかる|範囲で|記載いただけると|返信が|スムーズです。"
      >
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          maxLength={FIELD_LIMITS.message}
          placeholder="例：toB SaaSのプロダクトセールス採用で、スカウト返信率が伸び悩んでいます..."
          className={clsx(INPUT_CLS, "block resize-y leading-[1.85]")}
        />
        <p className="mt-3 text-[12px] text-[var(--color-slate-500)]">
          最大 {FIELD_LIMITS.message.toLocaleString()} 文字まで
        </p>
      </Fieldset>

      {/* === 送信（ボット検証は環境変数が設定されている場合のみ表示） === */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-9 lg:col-start-4">
          {TURNSTILE_SITE_KEY && (
            <div ref={turnstileWidgetRef} className="mb-8 flex justify-start" />
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-press inline-flex w-full items-center justify-center rounded-full bg-[var(--color-navy-600)] px-8 py-4 text-[15px] font-bold text-[var(--color-slate-0)] transition hover:bg-[var(--color-navy-800)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[240px]"
          >
            {isSubmitting ? "送信中…" : "送信する"}
          </button>

          <p className="mt-6 max-w-[46em] text-pretty text-[13px] leading-[1.9] text-[var(--color-slate-500)]">
            <Jp t="ご入力いただいた|情報は、|プライバシーポリシーに|基づき|適切に|取り扱います。" />
            <Jp t="営業・勧誘を|目的とした|送信は|固く|お断りいたします。|事前承諾なく|営業・勧誘行為を|行った|場合、|1件の|送信につき|一律3万円（税込）の|対応費用を|請求いたします。" />
          </p>

          {statusMessage && statusType === "error" && (
            <div
              role="status"
              className="mt-6 rounded-xl bg-[var(--color-warn)]/[0.07] px-5 py-4 text-[14px] leading-[1.8] text-[var(--color-warn)]"
            >
              <p className="font-bold">送信できませんでした</p>
              <p className="mt-1">{statusMessage}</p>
            </div>
          )}
        </div>
      </div>
    </form>
    </>
  );
}

/* ============== UI bits ============== */

// 入力欄は塗りの地色。太い枠は使わず、入力中だけ白地＋細い線で示す
const INPUT_CLS =
  "w-full rounded-xl bg-[var(--color-slate-100)] px-4 py-3.5 text-[16px] text-[var(--color-slate-900)] placeholder:text-[var(--color-slate-400)] transition-[background-color,box-shadow] duration-200 focus:bg-[var(--color-slate-0)] focus:outline-none focus:ring-1 focus:ring-[var(--color-navy-600)]";

// 文節の切れ目（"|"）でだけ折り返す。クライアント側なので BudouX を使わず手で区切る
function Jp({ t }: { t: string }) {
  const parts = t.split("|");
  return (
    <span className="phrased">
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {p}
        </Fragment>
      ))}
    </span>
  );
}

function Fieldset({
  no,
  title,
  hint,
  required,
  children,
}: {
  no: string;
  title: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">{title}</legend>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10" data-reveal>
        <div className="min-w-0 lg:col-span-3 lg:pt-1">
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              className="text-[14px] font-bold tabular text-[var(--color-accent)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              {no}
            </span>
            <span
              className="text-[20px] font-bold leading-[1.4] text-[var(--color-slate-900)] sm:text-[22px]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              {title}
            </span>
            {required && (
              <span className="text-[12px] font-bold text-[var(--color-warn)]">必須</span>
            )}
          </p>
          {hint && (
            <p className="mt-3 text-pretty text-[14px] leading-[1.9] text-[var(--color-slate-500)]">
              <Jp t={hint} />
            </p>
          )}
        </div>
        <div className="min-w-0 lg:col-span-9">{children}</div>
      </div>
    </fieldset>
  );
}

function Field({
  id,
  label,
  required,
  type = "text",
  placeholder,
  maxLength,
  autoComplete,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  autoComplete?: string; // スマホの自動入力用（送信内容は変わらない）
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="flex items-baseline gap-2 text-[14px] font-bold text-[var(--color-slate-900)]"
      >
        <span style={{ fontFamily: "var(--font-display-jp)" }}>{label}</span>
        {required && (
          <span className="text-[12px] font-bold text-[var(--color-warn)]">必須</span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className={clsx(INPUT_CLS, "mt-2.5")}
      />
    </div>
  );
}
