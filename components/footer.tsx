// components/footer.tsx
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* 左：ロゴと会社名 */}
          <div>
            <p className="text-sm font-semibold text-slate-50">
              OpenYouth
            </p>
            <p className="mt-1 text-xs text-slate-400">
              株式会社OpenYouth
            </p>
            <p className="mt-1 text-xs text-slate-500">
              〒150-0043 東京都渋谷区道玄坂１丁目１０−８
            </p>
          </div>

          {/* 右：ナビゲーション */}
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300">
            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/news" className="hover:text-white">
              News
            </Link>
            <Link href="/company" className="hover:text-white">
              Company
            </Link>
            <Link href="/recruitment" className="hover:text-white">
              Recruit
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </nav>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          © {year} OpenYouth Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}