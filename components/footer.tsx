// components/footer.tsx
// 各ページの末尾には「相談する」の章があるので、フッターは案内と連絡先に絞る。
// 地色は黒に近い色（直前の濃紺の章と切り替わる）。英字ラベル・矢印・区切り線・装飾は使わない。
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESSES } from "@/lib/businesses";

const footerNav = [
  {
    label: "事業",
    items: BUSINESSES.map((b) => ({ href: `/services#${b.slug}`, label: b.name })),
  },
  {
    label: "会社",
    items: [
      { href: "/aboutus", label: "会社概要" },
      { href: "/aboutus#message", label: "代表メッセージ" },
      { href: "/news", label: "お知らせ" },
      { href: "/recruitment", label: "採用情報" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
];

const externalLinks = [
  { href: "https://stock-hr.com", label: "Stock-HR 公式サイト" },
  { href: "https://app.stock-hr.jp", label: "Stock-HR アプリ" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--color-slate-900)] text-[var(--color-slate-0)]">
      <div className="relative mx-auto max-w-[1320px] px-5 pb-10 pt-20 sm:px-8 sm:pt-24 lg:px-12">
        <div className="flex flex-col gap-14 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative inline-block h-9 w-9">
                <Image src="/openyouth-logo.svg" alt="OpenYouth" fill className="object-contain brightness-0 invert" />
              </span>
              <span className="text-xl font-bold tracking-[-0.01em]" style={{ fontFamily: "var(--font-display-en)" }}>
                OpenYouth
              </span>
            </Link>
            <p
              className="mt-8 text-[clamp(24px,2.8vw,34px)] font-bold leading-[1.45]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              すべての若者に、
              <br />
              可能性の選択肢を。
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-12 lg:col-span-7 lg:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.label} className="min-w-0">
                <p className="text-[14px] font-bold text-[var(--color-navy-200)]">{col.label}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.items.map((it) => (
                    <li key={it.href + it.label}>
                      <Link href={it.href} className="text-[14px] text-white/80 transition [word-break:keep-all] hover:text-white">
                        {/* 「・」の後ろでだけ折り返す（語の途中で割らない） */}
                        {it.label.split("・").map((part, i) => (
                          <Fragment key={i}>
                            {i > 0 && (
                              <>
                                ・<wbr />
                              </>
                            )}
                            {part}
                          </Fragment>
                        ))}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 min-w-0 lg:col-span-1">
              <p className="text-[14px] font-bold text-[var(--color-navy-200)]">所在地</p>
              <div className="mt-5 text-[14px] leading-[1.9] text-white/80">
                <p>株式会社OpenYouth</p>
                <p className="text-white/60">
                  〒150-0043
                  <br />
                  東京都渋谷区道玄坂１丁目１０−８
                </p>
                <a href="mailto:admin@openyouth.co.jp" className="mt-3 inline-block text-white/80 transition hover:text-white">
                  admin@openyouth.co.jp
                </a>
              </div>

              <p className="mt-10 text-[14px] font-bold text-[var(--color-navy-200)]">プロダクト</p>
              <ul className="mt-5 flex flex-col gap-3">
                {externalLinks.map((it) => (
                  <li key={it.href}>
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[14px] text-white/80 transition hover:text-white"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 社名の特大の文字（装飾。読み上げない） */}
        <div className="mt-20 overflow-hidden sm:mt-28">
          <p
            aria-hidden
            className="select-none whitespace-nowrap text-[clamp(72px,17vw,260px)] font-bold leading-[0.8] tracking-[-0.04em] text-white/[0.07]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            OpenYouth
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-[12px] text-white/50 sm:flex-row sm:items-center">
          <p className="tabular" style={{ fontFamily: "var(--font-display-en)" }}>
            © {year} OpenYouth Inc.
          </p>
          <Link href="/privacy-policy" className="transition hover:text-white">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
