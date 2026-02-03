// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  // すべての絶対URL（canonical / OG など）の基準となるドメイン
  metadataBase: new URL("https://openyouth.co.jp"),
  title: "株式会社OpenYouth | Official Website",
  description:
    "株式会社OpenYouthは、初期研修医マッチングプラットフォーム「レジマッチ」をはじめ、AI開発・教育・Web制作を通じて、挑戦するすべての若者に最適な未来を提供します。",
  // favicon / ブラウザタブ / 検索結果用アイコン
  icons: {
    icon: "/favicon.ico",       // public/favicon.ico を参照
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // 各ページの canonical を co.jp に統一
  alternates: {
    canonical: "/",             // 各page.tsxごとに自動的に /〜 が付く
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {/* Google Tag Manager (OpenYouth コーポレート用) */}
        <Script id="gtm-openyouth" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M8BHFBCS');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8BHFBCS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}