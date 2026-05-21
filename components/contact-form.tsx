"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

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
  { id: "other", label: "取材・協業・その他", hint: "メディア / アライアンス / ご相談" },
];

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"error" | null>(null);
  const [topic, setTopic] = useState<string>(TOPICS[0].id);

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
    };

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
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* === Topic chooser === */}
      <Fieldset
        label="01"
        title="ご相談のカテゴリ"
        hint="複数該当の場合は、もっとも近いものをひとつ選んでください。"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {TOPICS.map((t) => {
            const active = topic === t.id;
            return (
              <label
                key={t.id}
                className={clsx(
                  "group flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition",
                  active
                    ? "border-[var(--color-navy-700)] bg-[var(--color-navy-700)] text-[var(--color-slate-0)]"
                    : "border-[var(--color-slate-200)] bg-[var(--color-slate-0)] hover:border-[var(--color-slate-400)]"
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
                  className={clsx(
                    "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition",
                    active
                      ? "border-[var(--color-slate-0)] bg-[var(--color-slate-0)]"
                      : "border-[var(--color-slate-300)] bg-transparent"
                  )}
                >
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-[var(--color-navy-700)]" />
                  )}
                </span>
                <span className="flex-1">
                  <span
                    className="block text-sm font-bold"
                    style={{ fontFamily: "var(--font-display-jp)" }}
                  >
                    {t.label}
                  </span>
                  <span
                    className={clsx(
                      "mt-1 block text-[12px]",
                      active
                        ? "text-white/75"
                        : "text-[var(--color-slate-500)]"
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

      {/* === Personal info === */}
      <Fieldset label="02" title="ご連絡先">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="お名前" required placeholder="深谷 洸樹" />
          <Field
            id="email"
            label="メールアドレス"
            required
            type="email"
            placeholder="your@email.com"
          />
          <div className="sm:col-span-2">
            <Field
              id="company"
              label="会社名 / 所属"
              placeholder="株式会社〇〇"
            />
          </div>
        </div>
      </Fieldset>

      {/* === Message === */}
      <Fieldset
        label="03"
        title="ご相談内容"
        hint="背景・タイムライン・課題感など、わかる範囲で記載いただけると返信がスムーズです。"
      >
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          placeholder="例：toB SaaSのプロダクトセールス採用で、スカウト返信率が伸び悩んでいます..."
          className="w-full resize-y rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] px-4 py-3.5 text-[15px] leading-[1.85] text-[var(--color-slate-900)] placeholder:text-[var(--color-slate-400)] focus:border-[var(--color-navy-700)] focus:outline-none"
        />
      </Fieldset>

      {/* === Submit === */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-[var(--color-navy-700)] px-6 py-4 text-[15px] font-bold text-[var(--color-slate-0)] transition hover:bg-[var(--color-navy-600)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[280px]"
        >
          {isSubmitting ? "送信中…" : "送信する"}
          <span
            aria-hidden
            className="text-xl transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <p className="mt-4 text-[11.5px] leading-[1.85] text-[var(--color-slate-400)]">
          ご入力いただいた情報は、プライバシーポリシーに基づき適切に取り扱います。
          営業・勧誘を目的とした送信は固くお断りいたします。事前承諾なく営業・勧誘行為を行った場合、1件の送信につき一律3万円（税込）の対応費用を請求いたします。
        </p>

        {statusMessage && statusType === "error" && (
          <div
            role="status"
            className="mt-6 rounded-2xl border border-[var(--color-warn)]/40 bg-[var(--color-slate-0)] px-5 py-4 text-sm text-[var(--color-warn)]"
          >
            <p
              className="text-[10px] uppercase tracking-[0.32em]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Error
            </p>
            <p className="mt-1">{statusMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}

/* ============== UI bits ============== */

function Fieldset({
  label,
  title,
  hint,
  children,
}: {
  label: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="grid gap-6 border-t border-[var(--color-slate-200)] pt-8 lg:grid-cols-12">
      <legend className="hidden">{title}</legend>
      <div className="lg:col-span-4">
        <p
          className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-navy-700)] tabular"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          Step {label}
        </p>
        <p
          className="mt-2 text-xl font-bold text-[var(--color-slate-900)]"
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          {title}
        </p>
        {hint && (
          <p className="mt-2 text-[12px] leading-[1.85] text-[var(--color-slate-500)]">
            {hint}
          </p>
        )}
      </div>
      <div className="lg:col-span-8">{children}</div>
    </fieldset>
  );
}

function Field({
  id,
  label,
  required,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between text-[12px] text-[var(--color-slate-900)]"
      >
        <span style={{ fontFamily: "var(--font-display-jp)" }}>{label}</span>
        {required && (
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-warn)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            必須
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-[var(--color-slate-200)] bg-transparent px-1 py-2.5 text-[15px] text-[var(--color-slate-900)] placeholder:text-[var(--color-slate-400)] transition focus:border-[var(--color-navy-700)] focus:outline-none"
      />
    </div>
  );
}
