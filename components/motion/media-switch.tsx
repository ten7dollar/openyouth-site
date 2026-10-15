"use client";
// components/motion/media-switch.tsx
// 媒体ページの「画面の切り替わり」。
// PC（lg以上）：左の列を CSS の sticky で止め、右の列の画面が画面の中央に来た媒体に合わせて、左の表示を差し替える。
//   差し替えは、領域ラベルが下からせり上がり、ほかの文字は時差で浮かび上がる（0.5〜0.6秒）。
// スマホ：sticky も切り替えも使わず、媒体ごとに縦に積む（領域・媒体名・一言・ボタン・画面）。
// 動きを減らす設定の端末では、差し替えの動きを止める（表示は切り替わる）。
// 一言の文節分け（BudouX）はサーバー側で済ませて渡す（このファイルに BudouX を持ち込まない）。
import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";

export type MediaSwitchItem = {
  slug: string;
  name: string;
  domain: string;
  lead: string[]; // 文節に分けた一言
  url: string;
  host: string;
  lang: "ja" | "en";
  image: string;
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const JP = { fontFamily: "var(--font-display-jp)" } as const;
const EN = { fontFamily: "var(--font-display-en)" } as const;

function Phrases({ parts }: { parts: string[] }) {
  return (
    <span className="phrased">
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {p}
        </Fragment>
      ))}
    </span>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

export function MediaSwitch({ items }: { items: MediaSwitchItem[] }) {
  const [active, setActive] = useState(0);
  const screens = useRef<(HTMLDivElement | null)[]>([]);

  // 画面の中央付近の帯に入った画面を「いまの媒体」にする。帯から外れている間は直前の媒体のまま
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    screens.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const total = pad(items.length);
  // 領域ラベルは全媒体で同じ大きさにする。いちばん長いラベルが列の幅に1行で収まる大きさ
  const longest = Math.max(...items.map((m) => Array.from(m.domain).length));
  const domainSize = (cap: number): CSSProperties => ({ fontSize: `min(${cap}px, calc(100cqw / ${(longest * 0.99).toFixed(2)}))` });

  // 差し替えの動き。いまの媒体より上の媒体は上へ、下の媒体は下で待つ
  const part = (i: number, k: number): CSSProperties => {
    const on = i === active;
    return {
      opacity: on ? 1 : 0,
      transform: on ? "none" : `translate3d(0, ${i < active ? -14 : 22}px, 0)`,
      transitionDuration: on ? "420ms" : "200ms",
      transitionDelay: on ? `${60 + k * 40}ms` : "0ms",
      transitionTimingFunction: EASE,
    };
  };
  const rise = (i: number): CSSProperties => {
    const on = i === active;
    return {
      transform: on ? "none" : `translate3d(0, ${i < active ? -110 : 110}%, 0)`,
      transitionDuration: "560ms",
      transitionTimingFunction: EASE,
    };
  };
  const MOTION = "transition-[opacity,transform] motion-reduce:transition-none";

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10">
      {/* PC：左の列（sticky）。スマホでは出さない */}
      <div className="hidden min-w-0 lg:col-span-5 lg:block">
        <div className="sticky top-[calc(50svh+2rem-max(31svh,280px))] flex h-[max(62svh,560px)] flex-col justify-center">
          <p className="flex items-baseline gap-5">
            <span className="text-[15px] font-bold text-[var(--color-navy-600)]" style={JP}>
              運営しているメディア
            </span>
            <span className="flex items-baseline gap-1.5 text-[15px] font-bold tabular" style={EN} aria-hidden>
              <span className="grid overflow-hidden text-[var(--color-accent)]">
                {items.map((m, i) => (
                  <span key={m.slug} className={"[grid-area:1/1] " + MOTION} style={rise(i)}>
                    {pad(i + 1)}
                  </span>
                ))}
              </span>
              <span className="text-[var(--color-slate-400)]">/ {total}</span>
            </span>
          </p>

          <div className="@container mt-8 grid">
            {items.map((m, i) => {
              const on = i === active;
              return (
                <div
                  key={m.slug}
                  className={"min-w-0 self-start [grid-area:1/1] " + (on ? "" : "pointer-events-none")}
                  inert={!on}
                  aria-hidden={on ? undefined : true}
                >
                  <div className="overflow-hidden pb-[0.1em]">
                    <p
                      className={"whitespace-nowrap font-bold leading-[1.15] tracking-[-0.03em] text-[var(--color-navy-600)] " + MOTION}
                      style={{ ...JP, ...domainSize(112), ...rise(i) }}
                    >
                      {m.domain}
                    </p>
                  </div>
                  <p
                    className={"mt-6 text-[clamp(26px,2.6vw,36px)] font-bold leading-[1.3] tracking-[-0.01em] text-[var(--color-slate-900)] " + MOTION}
                    style={{ ...JP, ...part(i, 1) }}
                  >
                    {m.name}
                  </p>
                  <p className={"mt-4 text-[16px] leading-[1.9] text-[var(--color-slate-600)] " + MOTION} style={part(i, 2)}>
                    <Phrases parts={m.lead} />
                    {m.lang === "en" && (
                      <span className="mt-1 block text-[13px] text-[var(--color-slate-500)]">英語で運営しています。</span>
                    )}
                  </p>
                  <div className={"mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 " + MOTION} style={part(i, 3)}>
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-press inline-flex items-center rounded-full bg-[var(--color-navy-600)] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[var(--color-navy-800)]"
                    >
                      サイトを見る
                    </a>
                    <span className="text-[14px] text-[var(--color-slate-500)]" style={EN}>
                      {m.host}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 右の列（PC）／媒体ごとの縦積み（スマホ） */}
      <div className="flex min-w-0 flex-col gap-24 sm:gap-32 lg:col-span-7 lg:gap-0">
        {items.map((m, i) => {
          const on = i === active;
          return (
            <article
              key={m.slug}
              id={m.slug}
              className="min-w-0 scroll-mt-24 lg:flex lg:min-h-[max(62svh,560px)] lg:scroll-mt-[calc(50svh+2rem-max(31svh,280px))] lg:flex-col lg:justify-center"
            >
              <div className="@container flex flex-col" data-reveal-stagger>
                <p className="flex items-baseline gap-1.5 text-[14px] font-bold tabular lg:hidden" style={EN}>
                  <span className="text-[var(--color-accent)]">{pad(i + 1)}</span>
                  <span className="text-[var(--color-slate-400)]">/ {total}</span>
                </p>
                <p
                  className="mt-4 whitespace-nowrap font-bold leading-[1.15] tracking-[-0.03em] text-[var(--color-navy-600)] lg:hidden"
                  style={{ ...JP, ...domainSize(72) }}
                >
                  {m.domain}
                </p>
                <h2
                  className="heading-jp mt-5 text-[clamp(26px,6.4vw,36px)] font-bold leading-[1.3] tracking-[-0.01em] text-[var(--color-slate-900)] lg:sr-only"
                  style={JP}
                >
                  {m.name}
                </h2>
                <p className="mt-3 text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px] lg:hidden">
                  <Phrases parts={m.lead} />
                  {m.lang === "en" && (
                    <span className="block text-[13px] text-[var(--color-slate-500)]">英語で運営しています。</span>
                  )}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 lg:hidden">
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-press inline-flex items-center rounded-full bg-[var(--color-navy-600)] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[var(--color-navy-800)]"
                  >
                    サイトを見る
                  </a>
                  <span className="text-[13px] text-[var(--color-slate-500)]" style={EN}>
                    {m.host}
                  </span>
                </div>
              </div>

              <div
                ref={(el) => {
                  screens.current[i] = el;
                }}
                data-index={i}
                className={
                  "mt-10 transition-[opacity,scale] duration-700 motion-reduce:transition-none lg:mt-0 " +
                  (on ? "" : "lg:scale-[0.94] lg:opacity-35")
                }
                style={{ transitionTimingFunction: EASE }}
              >
                <a href={m.url} target="_blank" rel="noreferrer" className="group block" data-reveal>
                  <span className="relative block aspect-[1440/900] overflow-hidden rounded-xl bg-[var(--color-slate-100)] shadow-[0_28px_56px_-36px_rgba(16,35,72,0.35)]">
                    <Image
                      src={m.image}
                      alt={`${m.name}（${m.host}）のトップ画面`}
                      fill
                      sizes="(min-width: 1024px) 54vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
