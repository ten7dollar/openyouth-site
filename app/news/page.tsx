// app/news/page.tsx
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";
import { NEWS_ITEMS, type NewsItem } from "@/lib/news";

export const metadata = {
  title: "お知らせ — OpenYouth",
  description:
    "株式会社OpenYouthのプレスリリース、プロダクトリリース、メディア掲載などのお知らせ一覧。",
};

function categoryStyle(c: NewsItem["category"]) {
  switch (c) {
    case "Product":
      return "bg-[var(--color-navy-700)] text-[var(--color-slate-0)]";
    case "Release":
      return "bg-[var(--color-accent)] text-[var(--color-slate-0)]";
    case "Notice":
      return "bg-[var(--color-slate-900)] text-[var(--color-slate-0)]";
    case "Press":
      return "bg-[var(--color-slate-0)] text-[var(--color-slate-900)] border border-[var(--color-slate-300)]";
    case "Media":
      return "bg-[var(--color-slate-0)] text-[var(--color-navy-700)] border border-[var(--color-navy-200)]";
    case "Event":
      return "bg-[var(--color-slate-50)] text-[var(--color-slate-700)] border border-[var(--color-slate-200)]";
    case "Recruit":
      return "bg-[var(--color-navy-50)] text-[var(--color-navy-700)] border border-[var(--color-navy-100)]";
  }
}

export default function NewsPage() {
  const hasNews = NEWS_ITEMS.length > 0;
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
        index="05"
        eyebrowEn="NEWS"
        eyebrowJp="お知らせ"
        titleJp={
          <>
            最新のお知らせ
          </>
        }
        lead={
          <>
            プロダクトのリリース、コーポレートのお知らせ、メディア掲載などを掲載しています。
            取材・寄稿のご依頼は
            <Link
              href="/contact"
              className="ml-1 border-b border-[var(--color-slate-900)] hover:text-[var(--color-navy-700)]"
            >
              お問い合わせ
            </Link>
            よりお願いします。
          </>
        }
        meta={[
          { k: "公開記事数", v: String(NEWS_ITEMS.length).padStart(2, "0") },
          { k: "対象年", v: String(years.length).padStart(2, "0") },
        ]}
      />

      <section className="relative bg-[var(--color-slate-0)] py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {hasNews ? (
            <div className="space-y-20">
              {years.map((yr) => (
                <YearBlock key={yr} year={yr} items={byYear[yr]} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[var(--color-slate-50)] py-16">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <p className="text-[15px] text-[var(--color-slate-600)]">
            取材・寄稿のご依頼は、
            <Link
              href="/contact"
              className="border-b border-[var(--color-slate-900)] text-[var(--color-slate-900)] hover:text-[var(--color-navy-700)]"
            >
              お問い合わせ
            </Link>
            からどうぞ。
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

function YearBlock({ year, items }: { year: string; items: NewsItem[] }) {
  return (
    <div data-reveal-stagger>
      <div className="flex items-baseline justify-between border-b-2 border-[var(--color-slate-900)] pb-3">
        <h2
          className="text-[clamp(40px,6vw,72px)] font-bold leading-none tabular text-[var(--color-slate-900)]"
          style={{ fontFamily: "var(--font-display-en)", letterSpacing: "-0.02em" }}
        >
          {year}
        </h2>
        <p
          className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)] tabular"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          {String(items.length).padStart(2, "0")} entries
        </p>
      </div>

      <ul>
        {items.map((it) => {
          const cls =
            "group grid grid-cols-12 items-baseline gap-4 py-7 transition hover:bg-[var(--color-slate-50)] sm:gap-8 sm:py-8";
          const inner = (
            <>
              <time
                className="col-span-12 text-[12px] tabular tracking-[0.18em] text-[var(--color-slate-400)] sm:col-span-2"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                {it.date}
              </time>
              <span
                className={
                  "col-span-12 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.28em] sm:col-span-2 " +
                  categoryStyle(it.category)
                }
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                {it.category}
              </span>
              <div className="col-span-12 sm:col-span-7">
                <p
                  className="text-lg leading-snug text-[var(--color-slate-900)] sm:text-xl"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  {it.title}
                </p>
                {it.description && (
                  <p className="mt-2 text-[13px] leading-[1.95] text-[var(--color-slate-600)]">
                    {it.description}
                  </p>
                )}
              </div>
              <span
                className="col-span-12 text-right text-[var(--color-slate-400)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-navy-700)] sm:col-span-1"
                aria-hidden
              >
                {it.href ? (it.href.startsWith("http") ? "↗" : "→") : "·"}
              </span>
            </>
          );
          return (
            <li
              key={`${it.date}-${it.title}`}
              className="border-b border-[var(--color-slate-200)]"
            >
              {it.href ? (
                it.href.startsWith("http") ? (
                  <a className={cls} href={it.href} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <Link className={cls} href={it.href}>
                    {inner}
                  </Link>
                )
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function EmptyState() {
  return (
    <div
      className="grid place-items-center rounded-3xl border border-dashed border-[var(--color-slate-200)] bg-[var(--color-slate-50)] px-6 py-20 text-center"
      data-reveal
    >
      <p
        className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
        style={{ fontFamily: "var(--font-display-en)" }}
      >
        No entries yet
      </p>
      <p
        className="mt-4 text-2xl font-bold text-[var(--color-slate-900)]"
        style={{ fontFamily: "var(--font-display-jp)" }}
      >
        まもなく、最初のお知らせを掲載します。
      </p>
      <p className="mt-3 max-w-md text-sm text-[var(--color-slate-600)]">
        プレスリリース、プロダクトリリース、メディア掲載などを順次掲載予定です。
      </p>
    </div>
  );
}
