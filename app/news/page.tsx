// app/news/page.tsx

type NewsItem = {
  date: string; // YYYY.MM.DD 表記
  category: "Press Release" | "Event" | "Media" | "Recruit";
  title: string;
  description: string;
};

/**
 * 🔔 NEWS_ITEMS の使い方
 *
 * 実際のお知らせを追加するときは、この配列にオブジェクトを足せばOKです。
 *
 * 例:
 * const NEWS_ITEMS: NewsItem[] = [
 *   {
 *     date: "2025.01.15",
 *     category: "Press Release",
 *     title: "◯◯◯◯◯◯をリリースしました",
 *     description: "本文をここに書く...",
 *   },
 *   ...
 * ];
 */
const NEWS_ITEMS: NewsItem[] = []; // ← 今はダミーなしで公開するため空にしておく

export default function NewsPage() {
  const hasNews = NEWS_ITEMS.length > 0;

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

      {/* 一覧 or プレースホルダー */}
      <section className="mt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {hasNews ? (
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
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-sm text-slate-500 shadow-sm sm:px-8">
              <p>現在公開中のお知らせはありません。</p>
              <p className="mt-2">
                新しいプレスリリースやイベント情報などは、
                順次こちらに掲載予定です。
              </p>
              <p className="mt-4 text-xs text-slate-400">
                ※ お知らせを追加する場合は、このページ上部の
                <code className="mx-1 rounded bg-slate-100 px-1 py-0.5">
                  NEWS_ITEMS
                </code>
                配列にデータを追加してください。
              </p>
            </div>
          )}
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