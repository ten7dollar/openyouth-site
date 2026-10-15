// components/page-masthead.tsx
// 下層ページ共通の見出し。題字はトップと同じく斜線の角度で1字ずつ塗る。
// 題字の各行は折り返さないので、いちばん長い行の字数から文字の大きさを決めて、スマホではみ出さないようにする。
import type { ReactNode } from "react";
import { PaintTitle } from "@/components/motion/paint-title";

type Props = {
  index?: string; // 互換のため残す（表示しない）
  eyebrowEn?: string; // 互換のため残す（表示しない）
  eyebrowJp?: string; // 題字の上に出す日本語のラベル
  titleLines: string[]; // 題字（1行ずつ）。2行目以降はネイビー
  lead?: ReactNode;
  meta?: { k: string; v: string }[];
};

export function PageMasthead({ eyebrowJp, titleLines, lead, meta }: Props) {
  const longest = Math.max(...titleLines.map((l) => Array.from(l).length));
  const fontSize = `min(96px, calc((100vw - 48px) / ${longest}), ${Math.floor(780 / longest)}px)`;
  return (
    <section className="relative overflow-hidden bg-[var(--color-slate-0)]">
      <div className="relative mx-auto max-w-[1320px] px-5 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pt-32">
        {eyebrowJp && (
          <p
            className="text-[15px] font-bold text-[var(--color-navy-600)]"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            {eyebrowJp}
          </p>
        )}

        <div className="flex flex-col gap-12 pb-16 pt-6 sm:pb-24 lg:grid lg:grid-cols-12 lg:gap-10 lg:pb-28">
          <div className="min-w-0 lg:col-span-8">
            <PaintTitle
              lines={titleLines.map((text, i) => ({
                text,
                className: i === 0 ? "[--paint-to:var(--color-slate-900)]" : "[--paint-to:var(--color-navy-600)]",
              }))}
              className="font-bold leading-[1.18] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display-jp)", fontSize }}
              delay={0.1}
            />

            {lead && (
              <div
                className="after-paint mt-10 max-w-[38em] text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-base"
                style={{ ["--after-delay" as string]: "0.6s" }}
              >
                {lead}
              </div>
            )}
          </div>

          {meta && meta.length > 0 && (
            <aside className="after-paint min-w-0 lg:col-span-4 lg:pl-8" style={{ ["--after-delay" as string]: "0.75s" }}>
              <p className="text-[14px] font-bold text-[var(--color-slate-500)]">このページの内容</p>
              <ul className="mt-4 flex flex-col gap-1">
                {meta.map((m) => (
                  <li key={m.k} className="flex items-baseline gap-4 py-2 text-[15px]">
                    <span className="min-w-0 flex-1 font-bold text-[var(--color-slate-900)]">{m.k}</span>
                    <span className="shrink-0 text-[13px] text-[var(--color-slate-500)]">{m.v}</span>
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
