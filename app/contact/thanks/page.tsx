// app/contact/thanks/page.tsx
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";
import { PhrasedSafe as Phrased } from "@/components/motion/phrased-safe";
import { BUSINESS_COUNT } from "@/lib/businesses";

export const metadata = {
  alternates: { canonical: "/contact/thanks" },
  title: "お問い合わせを受け付けました — OpenYouth",
  description:
    "OpenYouthへのお問い合わせを受け付けました。営業日2-3日以内にご返信いたします。",
  robots: { index: false, follow: true },
};

const MAIL = "admin@openyouth.co.jp";

const NEXT_LINKS: { href: string; label: string; sub: string; external?: boolean }[] = [
  { href: "/services", label: "事業内容を見る", sub: `${BUSINESS_COUNT}つの事業を詳しく` },
  { href: "/aboutus", label: "会社のことを読む", sub: "目指す世界・代表メッセージ" },
  { href: "https://stock-hr.com", label: "Stock-HR の公式サイト", sub: "stock-hr.com", external: true },
];

export default function ContactThanksPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        eyebrowJp="お問い合わせ完了"
        titleLines={["お問い合わせを、", "受け付けました。"]}
        lead={
          <p className="text-pretty">
            <Phrased text="ご連絡いただきありがとうございます。" />
            <span className="whitespace-nowrap">営業日2-3日以内に</span>{" "}
            <span className="font-bold text-[var(--color-slate-900)]" style={{ fontFamily: "var(--font-display-en)" }}>
              {MAIL}
            </span>{" "}
            <Phrased text="より、担当者から直接ご返信いたします。" />
          </p>
        }
      />

      {/* ============== このあとの流れ ============== */}
      <section className="relative bg-[var(--color-slate-50)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
            <p
              className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-3"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              このあとの流れ
            </p>
            <div className="min-w-0 lg:col-span-9">
              <h2
                className="text-[clamp(24px,3vw,40px)] font-bold leading-[1.5] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-display-jp)" }}
                data-reveal
              >
                <Phrased text="ご入力いただいた内容は、深谷へ直接届きます。" />
              </h2>

              <ol className="mt-12 flex flex-col gap-10 sm:mt-16 sm:gap-12">
                <Step no={1}>
                  <span className="whitespace-nowrap">営業日2-3日以内に</span><Phrased text="、担当者よりメールでご返信いたします。" />
                </Step>
                <Step no={2}>
                  <Phrased text="メールが届かない場合は迷惑メールフォルダもご確認ください。到着が確認できない場合は" />{" "}
                  <a
                    href={`mailto:${MAIL}`}
                    className="font-bold text-[var(--color-slate-900)] underline decoration-1 underline-offset-4 transition-colors hover:text-[var(--color-navy-600)]"
                    style={{ fontFamily: "var(--font-display-en)" }}
                  >
                    {MAIL}
                  </a>{" "}
                  <Phrased text="まで直接お送りください。" />
                </Step>
                <Step no={3}>
                  <Phrased text="ご希望の場合は、30分のカジュアル面談から承ります。" />
                </Step>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 返信をお待ちの間に ============== */}
      <section className="relative bg-[var(--color-slate-0)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
            <p
              className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-8"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              返信をお待ちの間に
            </p>
            <div className="min-w-0 lg:col-span-9">
              <ul className="flex flex-col gap-2">
                {NEXT_LINKS.map((it) => (
                  <li key={it.label} data-reveal>
                    <NextLink {...it} />
                  </li>
                ))}
              </ul>

              <div className="mt-14 px-1 sm:mt-16 sm:px-6">
                <Link
                  href="/"
                  className="btn-press inline-flex items-center rounded-full bg-[var(--color-navy-600)] px-8 py-4 text-[15px] font-bold text-[var(--color-slate-0)] transition hover:bg-[var(--color-navy-800)]"
                >
                  トップに戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Step({ no, children }: { no: number; children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-5 sm:gap-8" data-reveal>
      <span
        className="shrink-0 text-[clamp(28px,3.4vw,44px)] font-bold leading-none tabular text-[var(--color-accent)]"
        style={{ fontFamily: "var(--font-display-en)", letterSpacing: "-0.02em" }}
      >
        {String(no).padStart(2, "0")}
      </span>
      <p className="min-w-0 max-w-[36em] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px]">
        {children}
      </p>
    </li>
  );
}

function NextLink({ href, label, sub, external }: { href: string; label: string; sub: string; external?: boolean }) {
  const cls =
    "group flex flex-col gap-2 rounded-2xl px-1 py-6 transition-colors duration-300 hover:bg-[var(--color-slate-50)] sm:px-6 lg:grid lg:grid-cols-9 lg:items-baseline lg:gap-10 lg:py-8";
  const inner = (
    <>
      <span
        className="heading-jp text-[clamp(24px,3vw,40px)] font-bold leading-[1.3] tracking-[-0.02em] text-[var(--color-slate-900)] transition-colors duration-300 group-hover:text-[var(--color-navy-600)] lg:col-span-5"
        style={{ fontFamily: "var(--font-display-jp)" }}
      >
        {label}
      </span>
      <span className="text-[15px] leading-[1.9] text-[var(--color-slate-600)] lg:col-span-4">{sub}</span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
