// lib/news.ts
// Single source of truth for the journal entries shown on the home page and /news.

export type NewsCategory =
  | "Product"
  | "Release"
  | "Notice"
  | "Press"
  | "Media"
  | "Event"
  | "Recruit";

export type NewsItem = {
  date: string; // "YYYY.MM.DD"
  category: NewsCategory;
  title: string;
  description?: string;
  href?: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2026.06.13",
    category: "Release",
    title: "美容師採用ページ「サロリク」をリリースしました。",
    description:
      "美容室・理容室向けに、初期費用0円・月額制でお店専用の採用ページを持てる「サロリク」を公開しました。採用の現場を知るプロが高品質なデザインで仕上げます。",
    href: "https://saloriku.com",
  },
  {
    date: "2026.05.30",
    category: "Notice",
    title: "創業のご報告と、これからのこと。",
    description:
      "株式会社OpenYouth創業の正式なご報告。事業の現在地と、次の章で取り組むテーマを綴ります。",
  },
  {
    date: "2026.04.30",
    category: "Product",
    title: "Stock-HRの新LPを公開しました。",
    description:
      "スカウト運用AI「Stock-HR」のコンセプトと機能を、写真風ヒーロー＋3痛み＋4機能の構成で再編成しました。",
    href: "https://stock-hr.com",
  },
  {
    date: "2026.04.28",
    category: "Release",
    title: "Stock-HRアプリ本体（app.stock-hr.jp）が稼働を開始しました。",
    description:
      "認証・組織共有・Sentry監視・本番ドメインまで揃え、β顧客向けの稼働を開始しました。",
    href: "https://app.stock-hr.jp",
  },
  {
    date: "2026.01.04",
    category: "Release",
    title: "Stock-HR事業を開始しました。",
    description:
      "組織のAI活用を最大化するプロダクト「Stock-HR」の提供を開始しました。採用領域から実装を進めています。",
    href: "https://stock-hr.com",
  },
];
