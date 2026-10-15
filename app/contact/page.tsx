// app/contact/page.tsx
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";
import { ContactForm } from "@/components/contact-form";
import { PhrasedSafe as Phrased } from "@/components/motion/phrased-safe";

export const metadata = {
  alternates: { canonical: "/contact" },
  title: "お問い合わせ — OpenYouth",
  description:
    "株式会社OpenYouthへのお問い合わせ。Stock-HRの導入相談、採用・営業支援のご依頼、カジュアル面談、取材まで歓迎します。",
};

const MAIL = "admin@openyouth.co.jp";

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        eyebrowJp="お問い合わせ"
        titleLines={["まずは30分の対話から、", "はじめましょう。"]}
        lead={
          <p className="text-pretty">
            <Phrased text="Stock-HRの導入相談、採用・営業支援のご依頼、カジュアル面談、取材まで。" />
            <span className="whitespace-nowrap">営業日2-3日以内に</span>{" "}
            <span className="font-bold text-[var(--color-slate-900)]" style={{ fontFamily: "var(--font-display-en)" }}>
              {MAIL}
            </span>{" "}
            <Phrased text="より返信します。" />
          </p>
        }
      />

      {/* ============== フォーム ============== */}
      <section className="relative bg-[var(--color-slate-0)] pb-28 pt-4 sm:pb-40 sm:pt-8">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <ContactForm />

          <div className="mt-10 flex flex-col lg:grid lg:grid-cols-12 lg:gap-10">
            <p className="min-w-0 text-pretty text-[13px] leading-[1.9] text-[var(--color-slate-500)] lg:col-span-9 lg:col-start-4">
              <Phrased text="フォームの送信が難しい場合は、" />
              <a
                href={`mailto:${MAIL}`}
                className="font-bold text-[var(--color-slate-900)] underline decoration-1 underline-offset-4 transition-colors hover:text-[var(--color-navy-600)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                {MAIL}
              </a>
              <Phrased text="まで直接ご連絡ください。" />
            </p>
          </div>
        </div>
      </section>

      {/* ============== 直接のご連絡 ============== */}
      <section className="relative bg-[var(--color-slate-50)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
            <p
              className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-3"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              直接のご連絡
            </p>
            <div className="min-w-0 lg:col-span-9" data-reveal>
              <h2
                className="text-[clamp(28px,3.6vw,48px)] font-bold leading-[1.3] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                株式会社OpenYouth
              </h2>

              <dl className="mt-10 grid text-pretty gap-x-10 gap-y-9 sm:mt-12 sm:grid-cols-2">
                <div className="min-w-0">
                  <dt className="text-[14px] font-bold text-[var(--color-slate-500)]">所在地</dt>
                  <dd className="mt-2 text-[16px] leading-[1.9] text-[var(--color-slate-900)]">
                    〒150-0043
                    <br />
                    東京都渋谷区道玄坂１丁目１０−８
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[14px] font-bold text-[var(--color-slate-500)]">メール</dt>
                  <dd className="mt-2 text-[16px] leading-[1.9]">
                    <a
                      href={`mailto:${MAIL}`}
                      className="group font-bold text-[var(--color-slate-900)]"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      <span className="underline-grow">{MAIL}</span>
                    </a>
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[14px] font-bold text-[var(--color-slate-500)]">返信</dt>
                  <dd className="mt-2 text-[16px] leading-[1.9] text-[var(--color-slate-900)]">
                    <span className="whitespace-nowrap">営業日2-3日以内に</span><Phrased text="、メールで個別にご返信します。" />
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[14px] font-bold text-[var(--color-slate-500)]">取材のご依頼</dt>
                  <dd className="mt-2 text-[16px] leading-[1.9] text-[var(--color-slate-900)]">
                    <Phrased text="件名に「[取材]」と明記してください。" />
                  </dd>
                </div>
              </dl>

              <div className="mt-14 flex flex-col items-start gap-5 sm:mt-16 sm:flex-row sm:items-center sm:gap-10">
                <Link href="/services" className="group inline-flex items-center px-1 text-[15px] font-bold text-[var(--color-slate-900)]">
                  <span className="underline-grow">事業を見る</span>
                </Link>
                <Link href="/aboutus" className="group inline-flex items-center px-1 text-[15px] font-bold text-[var(--color-slate-900)]">
                  <span className="underline-grow">会社のことを読む</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
