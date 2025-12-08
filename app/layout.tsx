import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "株式会社OpenYouth | Official Website",
  description:
    "株式会社OpenYouthは、初期研修医マッチングプラットフォーム「レジマッチ」をはじめ、AI開発・教育・Web制作を通じて、挑戦するすべての若者に最適な未来を提供します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
