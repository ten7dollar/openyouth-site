// components/page-masthead.tsx
import type { ReactNode } from "react";

type Props = {
  index: string;              // "01" / "02"
  eyebrowEn: string;          // "SERVICES"
  eyebrowJp?: string;         // 任意の日本語サブラベル
  titleJp: ReactNode;         // 大判日本語タイトル（多行可）
  lead?: ReactNode;           // 日本語のリード文
  meta?: { k: string; v: string }[];
};

export function PageMasthead({
  index,
  eyebrowEn,
  eyebrowJp,
  titleJp,
  lead,
  meta,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-slate-0)]">
      {/* Soft grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fine opacity-50"
      />
      {/* Right-side decorative panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[36%] bg-gradient-to-l from-[var(--color-navy-50)] to-transparent lg:block"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-28">
        {/* Top index bar (English ONLY) */}
        <div
          className="flex items-center justify-between border-t-2 border-[var(--color-navy-700)] pt-4"
          data-reveal
        >
          <p
            className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)] tabular"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            <span className="font-bold">{index}</span>
            <span className="mx-2 text-[var(--color-slate-300)]">/</span>
            <span>{eyebrowEn}</span>
          </p>
          {eyebrowJp && (
            <p className="text-[12px] tracking-[0.18em] text-[var(--color-slate-500)]">
              {eyebrowJp}
            </p>
          )}
        </div>

        <div className="grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-8" data-reveal-stagger>
            <h1
              className="text-[clamp(38px,6vw,80px)] font-bold leading-[1.05] tracking-[-0.018em] text-[var(--color-slate-900)]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              {titleJp}
            </h1>

            {lead && (
              <div className="mt-8 max-w-xl text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-base">
                {lead}
              </div>
            )}
          </div>

          {meta && meta.length > 0 && (
            <aside
              className="lg:col-span-4 lg:border-l lg:border-[var(--color-slate-200)] lg:pl-8"
              data-reveal-stagger
            >
              <p
                className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Contents
              </p>
              <ul className="mt-5 space-y-3">
                {meta.map((m, i) => (
                  <li
                    key={m.k}
                    className="flex items-baseline gap-4 border-b border-dashed border-[var(--color-slate-200)] pb-3 text-sm"
                  >
                    <span
                      className="w-8 shrink-0 tabular text-[12px] text-[var(--color-slate-400)]"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[var(--color-slate-900)]">{m.k}</span>
                    <span className="text-[var(--color-slate-500)]">{m.v}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
