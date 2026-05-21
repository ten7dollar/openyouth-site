// components/footer.tsx
import Link from "next/link";
import Image from "next/image";

const footerNav = [
  {
    label: "事業",
    items: [
      { href: "/services#stockhr", label: "Stock-HR" },
      { href: "/services#recruitment", label: "採用支援" },
      { href: "/services#sales", label: "営業支援" },
      { href: "/services#resimatch", label: "ResiMatch" },
    ],
  },
  {
    label: "会社",
    items: [
      { href: "/aboutus", label: "会社概要" },
      { href: "/aboutus#message", label: "代表メッセージ" },
      { href: "/news", label: "お知らせ" },
    ],
  },
  {
    label: "その他",
    items: [
      { href: "/recruitment", label: "採用情報" },
      { href: "/contact", label: "お問い合わせ" },
      { href: "/privacy-policy", label: "プライバシーポリシー" },
    ],
  },
];

const externalLinks = [
  { href: "https://stock-hr.com", label: "Stock-HR 公式" },
  { href: "https://app.stock-hr.jp", label: "Stock-HR アプリ" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--color-navy-800)] text-[var(--color-slate-0)]">
      {/* Decorative grid backdrop */}
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[var(--color-accent)]/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12">
        {/* Top: tagline + CTA */}
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative inline-block h-9 w-9">
                <Image
                  src="/openyouth-logo.svg"
                  alt="OpenYouth"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </span>
              <span
                className="text-xl font-bold tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                OpenYouth
              </span>
            </Link>
            <p
              className="mt-7 max-w-xl text-[clamp(22px,2.6vw,32px)] font-bold leading-[1.45]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              すべての若者に、
              <br />
              可能性の選択肢を。
            </p>
            <p className="mt-5 max-w-md text-[14px] leading-[1.85] text-white/65">
              テクノロジーと現場の知見で、若者が挑戦するための選択肢を、ひとつずつ増やしていく会社です。
            </p>
          </div>

          <div className="flex flex-col justify-end gap-3 lg:col-span-5">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-[var(--color-slate-0)] px-6 py-4 text-[15px] font-bold text-[var(--color-navy-800)] transition hover:bg-[var(--color-navy-100)]"
            >
              お問い合わせ
              <span aria-hidden className="text-lg transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/recruitment"
              className="group inline-flex items-center justify-between gap-3 rounded-full border border-white/25 bg-transparent px-6 py-4 text-[15px] font-bold text-white transition hover:border-white"
            >
              採用情報を見る
              <span aria-hidden className="text-lg transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Mid: nav columns + meta */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.32em] text-white/45"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Office
            </p>
            <div className="mt-5 text-[14px] leading-[1.95] text-white/80">
              <p>株式会社OpenYouth</p>
              <p className="text-white/55">
                〒150-0043
                <br />
                東京都渋谷区道玄坂１丁目１０−８
              </p>
              <p
                className="mt-3 tabular text-white/85"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                admin@openyouth.co.jp
              </p>
            </div>

            <div className="mt-8">
              <p
                className="text-[11px] uppercase tracking-[0.32em] text-white/45"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Products
              </p>
              <ul className="mt-3 space-y-2">
                {externalLinks.map((it) => (
                  <li key={it.href}>
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[14px] text-white/85 transition hover:text-white"
                    >
                      {it.label}
                      <span
                        aria-hidden
                        className="text-[10px] text-white/45 transition group-hover:translate-x-0.5 group-hover:text-white"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.label}>
              <p
                className="text-[11px] uppercase tracking-[0.32em] text-white/45"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                {col.label}
              </p>
              <ul className="mt-5 space-y-3">
                {col.items.map((it) => (
                  <li key={it.href + it.label}>
                    <Link
                      href={it.href}
                      className="text-[14px] text-white/85 transition hover:text-white"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant wordmark */}
        <div className="overflow-hidden border-t border-white/10 pt-12">
          <p
            aria-hidden
            className="select-none whitespace-nowrap text-[clamp(80px,16vw,260px)] font-bold leading-[0.8] tracking-[-0.04em] text-white/[0.06]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            OpenYouth
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-[11.5px] text-white/45 sm:flex-row sm:items-center">
          <p
            className="tabular tracking-wider"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            © {year} OpenYouth Inc. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-white/55 transition hover:text-white"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
