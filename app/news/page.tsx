// app/news/page.tsx
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";
import { PhrasedSafe as Phrased } from "@/components/motion/phrased-safe";
import { NEWS_ITEMS, NEWS_CATEGORY_LABEL, type NewsItem } from "@/lib/news";

export const metadata = {
  alternates: { canonical: "/news" },
  title: "お知らせ — OpenYouth",
  description:
    "株式会社OpenYouthのプレスリリース、プロダクトリリース、メディア掲載などのお知らせ一覧。",
};

export default function NewsPage() {
  const byYear = NEWS_ITEMS.reduce<Record<string, NewsItem[]>>((acc, n) => {
    const yr = n.date.slice(0, 4);
    acc[yr] = acc[yr] || [];
    acc[yr].push(n);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        titleLines={["お知らせ"]}
        lead={
          <p className="text-pretty">
            <Phrased text="プロダクトのリリース、コーポレートのお知らせ、メディア掲載などを掲載しています。" />
            <Phrased text="取材・寄稿のご依頼は、" />
            <Link
              href="/contact"
              className="font-bold text-[var(--color-slate-900)] underline decoration-1 underline-offset-[6px] transition-colors hover:text-[var(--color-navy-600)]"
            >
              お問い合わせ
            </Link>
            <Phrased text="からお願いします。" />
          </p>
        }
      />

      <section className="relative bg-[var(--color-slate-50)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {years.length > 0 ? (
            <div className="flex flex-col gap-24 sm:gap-32">
              {years.map((yr) => (
                <YearBlock key={yr} year={yr} items={byYear[yr]} />
              ))}
            </div>
          ) : (
            <p
              className="text-[clamp(22px,2.6vw,32px)] font-bold leading-[1.5]"
              style={{ fontFamily: "var(--font-display-jp)" }}
              data-reveal
            >
              お知らせは、まだありません。
            </p>
          )}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

/* ============================================================
   年ごとのまとまり — 年の数字の下に、行を並べる
============================================================ */
function YearBlock({ year, items }: { year: string; items: NewsItem[] }) {
  return (
    <div>
      <div className="flex items-baseline gap-4 px-1 sm:px-6" data-reveal>
        <h2 className="flex items-baseline gap-1.5 font-bold">
          <span
            className="text-[clamp(44px,6vw,84px)] leading-none tabular"
            style={{ fontFamily: "var(--font-display-en)", letterSpacing: "-0.03em" }}
          >
            {year}
          </span>
          <span className="text-[16px] text-[var(--color-slate-600)]" style={{ fontFamily: "var(--font-display-jp)" }}>
            年
          </span>
        </h2>
        <p className="text-[14px] font-bold text-[var(--color-slate-500)]">
          <span className="tabular" style={{ fontFamily: "var(--font-display-en)" }}>
            {items.length}
          </span>
          件
        </p>
      </div>

      <ul className="mt-8 flex flex-col gap-2 sm:mt-10">
        {items.map((it) => (
          <li key={`${it.date}-${it.title}`} data-reveal>
            <NewsRow item={it} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   1件の行 — 日付・分類・題名・説明。リンク先がある行は行全体がリンク
============================================================ */
function NewsRow({ item }: { item: NewsItem }) {
  const linked = Boolean(item.href);
  const cls =
    "flex flex-col gap-2 rounded-2xl px-1 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-8" +
    (linked ? " group transition-colors duration-300 hover:bg-[var(--color-slate-0)]" : "");
  const inner = (
    <>
      <p className="flex items-baseline gap-4 lg:col-span-3">
        <time className="text-[14px] tabular text-[var(--color-slate-500)]" style={{ fontFamily: "var(--font-display-en)" }}>
          {item.date}
        </time>
        <span className="text-[13px] font-bold text-[var(--color-navy-600)]">{NEWS_CATEGORY_LABEL[item.category]}</span>
      </p>
      <div className="min-w-0 lg:col-span-9">
        <p
          className={
            "text-balance text-[17px] font-bold leading-[1.6] text-[var(--color-slate-900)] sm:text-[19px]" +
            (linked ? " transition-colors group-hover:text-[var(--color-navy-600)]" : "")
          }
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          <Phrased text={item.title} />
        </p>
        {item.description && (
          <p className="mt-3 max-w-[46em] text-pretty text-[14px] leading-[1.95] text-[var(--color-slate-600)] sm:text-[15px]">
            <Phrased text={item.description} />
          </p>
        )}
      </div>
    </>
  );
  if (!item.href) return <div className={cls}>{inner}</div>;
  if (item.href.startsWith("http")) {
    return (
      <a className={cls} href={item.href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={item.href}>
      {inner}
    </Link>
  );
}

/* ============================================================
   お問い合わせ — トップと同じ型。「相談する」の特大文字そのものがリンク
============================================================ */
function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-600)] py-24 text-[var(--color-slate-0)] sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[15px] font-bold text-[var(--color-navy-100)]" style={{ fontFamily: "var(--font-display-jp)" }}>
          お問い合わせ
        </p>
        <Link
          href="/contact"
          className="group mt-6 inline-flex items-baseline gap-4 text-[clamp(64px,15vw,200px)] font-bold leading-[1] tracking-[-0.04em] sm:gap-8"
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          <span className="relative">
            相談する
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-[0.06em] w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
          </span>
        </Link>
        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[34em] text-pretty text-[15px] leading-[2] text-white/80 sm:text-[16px]">
            <Phrased text="取材・寄稿のご依頼から、Stock-HRの導入相談、採用・営業支援のご依頼まで。30分の対話から、はじめましょう。" />
          </p>
          <Link href="/recruitment" className="group inline-flex shrink-0 items-center text-[15px] font-bold text-white">
            <span className="underline-grow">採用情報を見る</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
