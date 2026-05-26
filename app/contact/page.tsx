// app/contact/page.tsx
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "お問い合わせ — OpenYouth",
  description:
    "株式会社OpenYouthへのお問い合わせ。Stock-HRの導入相談、採用・営業支援のご依頼、カジュアル面談、取材まで歓迎します。",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        index="06"
        eyebrowEn="CONTACT"
        eyebrowJp="お問い合わせ"
        titleJp={
          <>
            まずは30分の対話から、
            <br />
            <span className="text-[var(--color-navy-700)]">はじめましょう。</span>
          </>
        }
        lead={
          <>
            Stock-HRの導入相談、採用・営業支援のご依頼、カジュアル面談、取材まで。
            営業日2-3日以内に <code className="rounded bg-[var(--color-slate-100)] px-1.5 py-0.5 text-[13px] text-[var(--color-slate-900)]" style={{ fontFamily: "var(--font-mono)" }}>admin@openyouth.co.jp</code> より返信します。
          </>
        }
        meta={[
          { k: "ご相談カテゴリ", v: "01" },
          { k: "ご連絡先", v: "02" },
          { k: "ご相談内容", v: "03" },
        ]}
      />

      {/* ============== Form ============== */}
      <section className="relative bg-[var(--color-slate-0)] py-20 sm:py-28">
        <div className="mx-auto grid grid-cols-1 max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          {/* Sidebar info */}
          <aside className="lg:col-span-4" data-reveal>
            <div className="rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] p-7">
              <p
                className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Office
              </p>
              <p
                className="mt-3 text-xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                株式会社OpenYouth
              </p>
              <p className="mt-3 text-[13.5px] leading-[1.95] text-[var(--color-slate-600)]">
                〒150-0043
                <br />
                東京都渋谷区道玄坂１丁目１０−８
              </p>
              <div className="mt-5 border-t border-[var(--color-slate-200)] pt-5">
                <p
                  className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  Direct
                </p>
                <p
                  className="mt-2 text-[14px] tabular text-[var(--color-slate-900)]"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  admin@openyouth.co.jp
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] p-7">
              <p
                className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                対応について
              </p>
              <ul className="mt-4 space-y-2.5 text-[13.5px] leading-[1.75] text-[var(--color-slate-600)]">
                <li>・ 営業日2-3日以内に返信</li>
                <li>・ admin@openyouth.co.jp より個別対応</li>
                <li>・ 取材依頼は件名に「[取材]」と明記してください</li>
              </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8" data-reveal>
            <div className="rounded-3xl border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] p-7 shadow-[0_1px_0_var(--color-slate-200)] sm:p-10">
              <ContactForm />
            </div>

            <p className="mt-6 text-[12px] text-[var(--color-slate-400)]">
              フォームの送信が難しい場合は、
              <a
                href="mailto:admin@openyouth.co.jp"
                className="border-b border-[var(--color-slate-900)] text-[var(--color-slate-900)] hover:text-[var(--color-navy-700)]"
              >
                admin@openyouth.co.jp
              </a>
              まで直接ご連絡ください。
            </p>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <section className="relative bg-[var(--color-slate-50)] py-16">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <p className="text-sm text-[var(--color-slate-600)]">
            事業内容や会社のことを先に確認したい方は、
            <Link
              href="/services"
              className="border-b border-[var(--color-slate-900)] text-[var(--color-slate-900)] hover:text-[var(--color-navy-700)]"
            >
              事業
            </Link>{" "}
            または{" "}
            <Link
              href="/aboutus"
              className="border-b border-[var(--color-slate-900)] text-[var(--color-slate-900)] hover:text-[var(--color-navy-700)]"
            >
              会社情報
            </Link>
            をご覧ください。
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
