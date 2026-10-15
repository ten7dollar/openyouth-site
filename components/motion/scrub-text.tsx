"use client";
// components/motion/scrub-text.tsx
// スクロールに合わせて、文節ごとに薄いグレーからネイビーへ塗る。
// 文節は lib/phrases.ts（BudouX）でサーバー側に分けて渡す。折り返しも文節の切れ目だけになる。
// 動きを減らす設定の端末では塗らずに最初から表示する。
import { useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ScrubText({
  phrases,
  as: Tag = "p",
  className = "",
  from = "var(--color-slate-300)",
  to = "var(--color-navy-800)",
}: {
  phrases: string[];
  as?: ElementType;
  className?: string;
  from?: string;
  to?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-phrase]", ref.current);
        gsap.fromTo(
          items,
          { color: from },
          {
            color: to,
            ease: "none",
            stagger: 0.12,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 82%",
              end: "bottom 48%",
              scrub: 0.6,
            },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} aria-label={phrases.join("")} className={"scrub-text " + className} style={{ color: to }}>
      {phrases.map((p, i) => (
        <span key={i} aria-hidden data-phrase className="inline-block">
          {p}
        </span>
      ))}
    </Tag>
  );
}
