"use client";
// components/motion/parallax-row.tsx
// 子要素の data-depth に応じて、スクロールで上下に少しずつずらす（PCのみ）。
// スマホと、動きを減らす設定の端末では動かさない。
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ParallaxRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-depth]", ref.current).forEach((el) => {
          const d = Number(el.dataset.depth || 0);
          gsap.fromTo(
            el,
            { y: d * 70 },
            {
              y: d * -70,
              ease: "none",
              scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
