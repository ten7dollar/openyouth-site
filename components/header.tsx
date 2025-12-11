"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/company", label: "Company" },
  { href: "/recruitment", label: "Recruit" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        {/* 上段：ロゴ ＋ PCナビ */}
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/openyouth-logo.svg"
                alt="OpenYouth"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden text-sm font-semibold tracking-tight text-slate-900 sm:inline">
              OpenYouth
            </span>
          </Link>

          {/* PC用ナビ */}
          <nav className="hidden gap-4 text-sm font-medium text-slate-600 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-full px-3 py-1 transition",
                  pathname === item.href
                    ? "bg-slate-900 text-white"
                    : "hover:bg-slate-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* スマホ用ナビ（横スクロール） */}
        <nav className="mt-3 flex gap-2 overflow-x-auto text-xs font-medium text-slate-600 sm:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "whitespace-nowrap rounded-full border px-3 py-1",
                pathname === item.href
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}