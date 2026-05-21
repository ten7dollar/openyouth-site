"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Final numeric value. Use this if value is purely numeric. */
  value?: number;
  /** When value is non-numeric (e.g. "2025", "Tokyo"), pass it here. */
  literal?: string;
  /** Suffix appended after the number (e.g. "+") */
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Count-up number that animates when scrolled into view.
 * Falls back gracefully for non-numeric values.
 */
export function CountUp({
  value,
  literal,
  suffix = "",
  duration = 1400,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<string>(
    literal ?? (typeof value === "number" ? "0" : "")
  );
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      if (typeof value === "number") setShown(String(value) + suffix);
      else if (literal) setShown(literal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            io.disconnect();
            run();
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);

    function run() {
      // Non-numeric literal: fade-in only
      if (typeof value !== "number") {
        setShown(literal ?? "");
        return;
      }
      const target = value as number;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // ease-out-cubic
        const eased = 1 - Math.pow(1 - t, 3);
        const v = Math.round(target * eased);
        setShown(`${v}${suffix}`);
        if (t < 1) requestAnimationFrame(tick);
        else setShown(`${target}${suffix}`);
      };
      requestAnimationFrame(tick);
    }

    return () => io.disconnect();
  }, [value, literal, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
