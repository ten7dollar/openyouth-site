"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { href: "/services", label: "事業" },
  { href: "/aboutus", label: "会社" },
  { href: "/news", label: "お知らせ" },
  { href: "/recruitment", label: "採用" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      data-shrink={scrolled ? "true" : "false"}
      className={clsx(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[var(--color-slate-200)] bg-[var(--color-slate-0)]/90 backdrop-blur-lg"
          : "border-b border-transparent bg-[var(--color-slate-0)]/0"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-[1320px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12",
          scrolled ? "py-3" : "py-5"
        )}
      >
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div
            className={clsx(
              "relative transition-all duration-500",
              scrolled ? "h-7 w-7" : "h-8 w-8"
            )}
          >
            <Image
              src="/openyouth-logo.svg"
              alt="OpenYouth"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
            className="text-[15px] font-bold tracking-[-0.005em] text-[var(--color-slate-900)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            OpenYouth
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "group relative rounded-full px-4 py-1.5 text-[13.5px] font-bold transition-colors",
                  active
                    ? "text-[var(--color-navy-700)]"
                    : "text-[var(--color-slate-600)] hover:text-[var(--color-slate-900)]"
                )}
              >
                {item.label}
                <span
                  className={clsx(
                    "absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-[var(--color-navy-600)] transition-transform duration-500",
                    active ? "scale-x-100" : "group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}

          <span className="mx-3 h-4 w-px bg-[var(--color-slate-200)]" />

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-navy-700)] px-5 py-2 text-[13.5px] font-bold text-[var(--color-slate-0)] transition-all hover:bg-[var(--color-navy-600)]"
          >
            お問い合わせ
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-10 w-10 place-items-center rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] md:hidden"
        >
          <span
            className={clsx(
              "absolute h-px w-4 bg-[var(--color-slate-900)] transition-all",
              open ? "rotate-45" : "-translate-y-1"
            )}
          />
          <span
            className={clsx(
              "absolute h-px w-4 bg-[var(--color-slate-900)] transition-all",
              open ? "-rotate-45" : "translate-y-1"
            )}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={clsx(
          "overflow-hidden border-t border-[var(--color-slate-200)] bg-[var(--color-slate-0)] transition-[max-height,opacity] duration-500 md:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto flex max-w-[1320px] flex-col px-5 py-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center justify-between border-b border-[var(--color-slate-100)] py-3 text-base",
                  active
                    ? "text-[var(--color-navy-700)] font-bold"
                    : "text-[var(--color-slate-900)]"
                )}
              >
                {item.label}
                <span aria-hidden className="text-[var(--color-slate-400)]">→</span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-navy-700)] px-5 py-3 text-sm font-bold text-[var(--color-slate-0)]"
          >
            お問い合わせ →
          </Link>
        </nav>
      </div>
    </header>
  );
}
