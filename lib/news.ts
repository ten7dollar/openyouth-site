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

// 画面に出すときの日本語の分類名
export const NEWS_CATEGORY_LABEL: Record<NewsCategory, string> = {
  Product: "プロダクト",
  Release: "リリース",
  Notice: "お知らせ",
  Press: "プレス",
  Media: "メディア",
  Event: "イベント",
  Recruit: "採用",
};

export type NewsItem = {
  date: string; // "YYYY.MM.DD"
  category: NewsCategory;
  title: string;
  description?: string;
  href?: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2026.10.16",
    category: "Release",
    title: "Webメディア事業を、7つ目の事業ラインに加えました。",
    description:
      "文化・観光・キャリア・セキュリティ・エンタメの5つの領域で、専門メディアを運営しています。",
    href: "/services/media",
  },
  {
    date: "2026.10.05",
    category: "Release",
    title: "Stock-HRに、複数の求人の基準でまとめて評価する機能を追加しました。",
    description:
      "1回の取り込みで複数の求人の基準を当て、求人ごとに並べて確認できます。評価軸を直したときは、保存してそのまま評価済みの人を評価し直せます。",
    href: "https://stock-hr.com/#features",
  },
  {
    date: "2026.10.05",
    category: "Release",
    title: "Stock-HRに、送付候補を自動で選ぶ機能を追加しました。",
    description:
      "S・Aの評価が出た人は、確認が必要な点がなければ自動で送付候補に入り、文面の作成も始まります。送信の画面で評価を見ながら、最終確認ができます。",
    href: "https://stock-hr.com/#features",
  },
  {
    date: "2026.08.03",
    category: "Release",
    title: "Stock-HRに、候補者ファイルを一括で評価する機能を追加しました。",
    description:
      "ビズリーチなどから書き出したファイルを取り込むと、求人の評価軸で全員を採点して並べます。送ると決めた人には、文面まで続けて作成できます。",
    href: "https://stock-hr.com/#features",
  },
  {
    date: "2026.06.27",
    category: "Release",
    title:
      "Stock-HRに、LinkedIn採用向けの新機能をリリースしました。",
    description:
      "気になった候補者の氏名と現職社名（または LinkedIn の PDF）を入れるだけで、note・X・登壇・寄稿・メディア記事など Web 上の公開情報まで自動で探索。求人との適合度・強み・スカウト切り口を整理した候補者プロファイルから、その人にだけ刺さるスカウト文面を生成します。",
    href: "https://stock-hr.com/#linkedin",
  },
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
