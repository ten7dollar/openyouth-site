"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "送信に失敗しました。");
      }

      setStatusType("success");
      setStatusMessage(
        "お問い合わせを受け付けました。確認のうえ、折り返しご連絡いたします。",
      );
      e.currentTarget.reset();
    } catch (error: any) {
      console.error(error);
      setStatusType("error");
      setStatusMessage(
        error?.message ||
          "送信中にエラーが発生しました。お手数ですが、時間をおいて再度お試しください。",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 pb-16">
      {/* ヘッダー */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            お問い合わせ
          </p>
        </div>
      </section>

      {/* フォームカード */}
      <section className="mt-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              {/* お名前 */}
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-800"
                >
                  お名前 <span className="text-red-500 text-xs">＊</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="山田 太郎"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring"
                />
              </div>

              {/* メールアドレス */}
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-800"
                >
                  メールアドレス{" "}
                  <span className="text-red-500 text-xs">＊</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring"
                />
              </div>

              {/* 会社名 */}
              <div className="space-y-1">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-slate-800"
                >
                  会社名
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="株式会社〇〇"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring"
                />
              </div>

              {/* お問い合わせ内容 */}
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-800"
                >
                  お問い合わせ内容{" "}
                  <span className="text-red-500 text-xs">＊</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="具体的な内容をご記入ください"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 transition focus:border-sky-400 focus:bg-white focus:ring"
                />
              </div>

              {/* 送信ボタン */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "送信中..." : "送信する ✈"}
                </button>
              </div>

              <p className="pt-1 text-[11px] text-slate-500">
                送信いただいた個人情報は、プライバシーポリシーに基づき適切に取り扱います。
              </p>

              {statusMessage && (
                <div
                  className={`mt-3 rounded-xl px-3 py-2 text-xs ${
                    statusType === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}