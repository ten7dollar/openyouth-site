"use client";

import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver to flip `data-revealed="true"`
 * on any element decorated with `data-reveal` or `data-reveal-stagger`.
 * The CSS in globals.css handles the actual transitions.
 */
export function RevealObserver() {
  useEffect(() => {
    const selector = "[data-reveal], [data-reveal-stagger]";
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    targets.forEach((el) => io.observe(el));

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches?.(selector)) io.observe(node);
          node.querySelectorAll?.(selector).forEach((el) => io.observe(el));
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
