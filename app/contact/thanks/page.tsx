// app/contact/thanks/page.tsx
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";

export const metadata = {
  title: "お問い合わせを受け付けました — OpenYouth",
  description:
    "OpenYouthへのお問い合わせを受け付けました。営業日2-3日以内にご返信いたします。",
  robots: { index: false, follow: true },
};

export default function ContactThanksPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        index="06"
        eyebrowEn="THANK YOU"
        eyebrowJp="お問い合わせ完了"
        titleJp={
          <>
            お問い合わせを、
            <br />
            <span className="text-[var(--color-navy-700)]">受け付けました。</span>
          </>
        }
        lead={
          <>
            ご連絡いただきありがとうございます。
            営業日2-3日以内に <code className="rounded bg-[var(--color-slate-100)] px-1.5 py-0.5 text-[13px] text-[var(--color-slate-900)]" style={{ fontFamily: "var(--font-mono)" }}>admin@openyouth.co.jp</code> より、担当者から直接ご返信いたします。
          </>
        }
      />

      {/* ============== Next steps ============== */}
      <section className="relative bg-[var(--color-slate-0)] py-20 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-12" data-reveal-stagger>
            {/* Confirmation card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] p-7 sm:p-10">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--color-navy-700)] text-[var(--color-slate-0)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                      aria-hidden
                    >
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      Received
                    </p>
                    <p
                      className="mt-2 text-balance text-[clamp(20px,2.2vw,28px)] font-bold leading-[1.45]"
                      style={{ fontFamily: "var(--font-display-jp)" }}
                    >
                      ご入力いただいた内容は、深谷へ直接届きます。
                    </p>
                  </div>
                </div>

                <ul className="mt-8 space-y-4 text-[14.5px] leading-[1.9] text-[var(--color-slate-700)]">
                  <li className="flex gap-3 border-t border-[var(--color-slate-200)] pt-4">
                    <span
                      className="w-6 shrink-0 text-[12px] tabular tracking-[0.18em] text-[var(--color-slate-400)]"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      01
                    </span>
                    <span>営業日2-3日以内に、担当者よりメールでご返信いたします。</span>
                  </li>
                  <li className="flex gap-3 border-t border-[var(--color-slate-200)] pt-4">
                    <span
                      className="w-6 shrink-0 text-[12px] tabular tracking-[0.18em] text-[var(--color-slate-400)]"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      02
                    </span>
                    <span>
                      メールが届かない場合は迷惑メールフォルダもご確認ください。
                      到着が確認できない場合は{" "}
                      <a
                        href="mailto:admin@openyouth.co.jp"
                        className="border-b border-[var(--color-slate-900)] text-[var(--color-slate-900)] hover:text-[var(--color-navy-700)]"
                      >
                        admin@openyouth.co.jp
                      </a>{" "}
                      まで直接お送りください。
                    </span>
                  </li>
                  <li className="flex gap-3 border-t border-[var(--color-slate-200)] pt-4">
                    <span
                      className="w-6 shrink-0 text-[12px] tabular tracking-[0.18em] text-[var(--color-slate-400)]"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      03
                    </span>
                    <span>ご希望の場合は、30分のカジュアル面談から承ります。</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar — explore other things */}
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] p-7 sm:p-8">
                <p
                  className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  Meanwhile
                </p>
                <h2
                  className="mt-3 text-balance text-[clamp(20px,2.2vw,26px)] font-bold leading-[1.4]"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  返信をお待ちの間に、ぜひこちらも。
                </h2>

                <ul className="mt-7 space-y-3">
                  {[
                    {
                      href: "/services",
                      label: "事業内容を見る",
                      sub: "4つの事業ラインを詳しく",
                    },
                    {
                      href: "/aboutus",
                      label: "会社のことを読む",
                      sub: "Vision・代表メッセージ",
                    },
                    {
                      href: "https://stock-hr.com",
                      label: "Stock-HR 公式LP",
                      sub: "stock-hr.com ↗",
                      external: true,
                    },
                  ].map((it) => {
                    const Tag = it.external ? "a" : Link;
                    const props = it.external
                      ? { href: it.href, target: "_blank", rel: "noreferrer" }
                      : { href: it.href };
                    return (
                      <li key={it.label}>
                        <Tag
                          {...(props as { href: string })}
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] p-4 transition hover:border-[var(--color-navy-700)]"
                        >
                          <div>
                            <p
                              className="text-[14px] font-bold text-[var(--color-slate-900)]"
                              style={{ fontFamily: "var(--font-display-jp)" }}
                            >
                              {it.label}
                            </p>
                            <p className="mt-0.5 text-[11.5px] text-[var(--color-slate-500)]">
                              {it.sub}
                            </p>
                          </div>
                          <span
                            aria-hidden
                            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] text-[var(--color-navy-700)] transition-all group-hover:border-[var(--color-navy-700)] group-hover:bg-[var(--color-navy-700)] group-hover:text-[var(--color-slate-0)]"
                          >
                            {it.external ? "↗" : "→"}
                          </span>
                        </Tag>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <section className="relative bg-[var(--color-slate-50)] py-16">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <p className="text-sm text-[var(--color-slate-600)]">
            お問い合わせいただき、誠にありがとうございました。
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--color-slate-900)]"
          >
            <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">←</span>
            トップに戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
