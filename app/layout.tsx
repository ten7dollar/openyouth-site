// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import {
  Bricolage_Grotesque,
  Zen_Kaku_Gothic_New,
  Murecho,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal-observer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-en",
  weight: ["300", "400", "500", "600", "700"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-jp",
  weight: ["400", "500", "700", "900"],
  // Note: Zen Kaku Gothic New ships in steps of 100; for `font-semibold` (600)
  // the browser synthesizes between 500 and 700, which works fine. We keep the
  // declared weights as the available files to avoid asking for one Google Fonts
  // does not serve.
});

const murecho = Murecho({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-jp",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openyouth.co.jp"),
  title: "株式会社OpenYouth",
  description:
    "株式会社OpenYouthは、テクノロジーと現場の知見で、若者が挑戦するための選択肢を増やしていく会社です。スカウト運用AI Stock-HRをはじめ、採用支援・営業支援・新規事業の立ち上げに伴走します。",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "株式会社OpenYouth",
    description:
      "若者が挑戦するための選択肢を、テクノロジーと現場知でひとつずつ増やしていく会社です。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${bricolage.variable} ${zenKaku.variable} ${murecho.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
        <Script id="gtm-openyouth" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M8BHFBCS');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8BHFBCS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <RevealObserver />
        <Header />
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
