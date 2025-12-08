type NewsItem = {
  date: string; // YYYY.MM.DD 表記
  category: "Press Release" | "Event" | "Media" | "Recruit";
  title: string;
  description: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2025.01.15",
    category: "Press Release",
    title: "総額1億円の資金調達を実施しました。",
    description:
      "株式会社OpenYouthは、さらなる事業拡大に向け、第三者割当増資を実施いたしました。",
  },
  {
    date: "2024.12.20",
    category: "Event",
    title: "「AI Academy」受講生1,000名突破記念キャンペーンを開始",
    description:
      "皆様への感謝を込めて、期間限定の特別割引キャンペーンを実施します。",
  },
  {
    date: "2024.11.10",
    category: "Media",
    title: "TechCrunch Japanに代表・深谷のインタビューが掲載されました",
    description:
      "「若者のキャリア選択を変える」をテーマに、創業の背景や今後の展望について語っています。",
  },
  {
    date: "2024.10.01",
    category: "Recruit",
    title: "2026年度新卒採用のエントリー受付を開始しました",
    description:
      "エンジニア、ビジネス職ともに、挑戦にあふれる環境で働きたい方のご応募をお待ちしています。",
  },
];

export default function NewsPage() {
  return (
    <div className="bg-slate-50 pb-16">
      {/* ヘッダー */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            News
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            最新のお知らせ
          </p>
        </div>
      </section>

      {/* 一覧 */}
      <section className="mt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-sm">
            {NEWS_ITEMS.map((item, idx) => (
              <article
                key={`${item.date}-${idx}`}
                className="flex flex-col gap-3 px-4 py-4 text-sm text-slate-800 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-5"
              >
                {/* 左：日付 & カテゴリ */}
                <div className="flex flex-col items-start gap-2 sm:w-44 sm:items-start">
                  <time className="text-xs font-medium text-slate-500">
                    {item.date}
                  </time>
                  <span className={categoryClass(item.category)}>
                    {item.category}
                  </span>
                </div>

                {/* 右：タイトル＆本文 */}
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function categoryClass(category: NewsItem["category"]): string {
  switch (category) {
    case "Press Release":
      return "inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700";
    case "Event":
      return "inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700";
    case "Media":
      return "inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold text-violet-700";
    case "Recruit":
      return "inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700";
    default:
      return "inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700";
  }
}