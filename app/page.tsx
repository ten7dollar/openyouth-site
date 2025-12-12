// app/page.tsx
import Image from "next/image";
import Link from "next/link";

/**
 * 🔔 HOME_NEWS の使い方
 *
 * - News ページ（app/news/page.tsx）の NEWS_ITEMS と同じ内容を、
 *   「トップに載せたい最新◯件」だけここにコピーする想定です。
 * - いまは公開前のダミーを消すために空配列にしています。
 * - 実際にお知らせを追加したら、この配列に
 *   { date, title } を追加すればトップの「Latest News」に反映されます。
 *
 * 例:
 * const HOME_NEWS: HomeNewsItem[] = [
 *   { date: "2026.01.01", title: "◯◯◯◯◯◯をリリースしました。" },
 * ];
 */
type HomeNewsItem = {
  date: string; // YYYY.MM.DD 表記
  title: string;
};

const HOME_NEWS: HomeNewsItem[] = []; // ← 今はダミーを消すため空にしておく

export default function HomePage() {
  const hasHomeNews = HOME_NEWS.length > 0;

  return (
    <div>
      {/* ================================
          Hero Section 
          ※ 背景画像: /public/images/home/hero.jpg を想定
      ================================= */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/images/home/hero.jpg"
            alt="OpenYouth Hero Visual"
            fill
            priority
            className="object-cover"
          />
          {/* 黒いオーバーレイ */}
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        {/* コンテンツ */}
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20">
          <div className="flex-1 space-y-4">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-sky-200">
              OPENGYOUTH MISSION
            </p>

            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              挑戦するすべての若者へ、
              <span className="block text-sky-300">最適な未来を。</span>
            </h1>

            <p className="max-w-xl text-sm text-slate-100 sm:text-base">
              テクノロジーと教育で、キャリア選択の不確実性をなくす。
              初期研修医マッチングプラットフォーム「レジマッチ」をはじめ、
              AI開発・AI教育・Web制作事業を展開しています。
            </p>

            <p className="text-xs font-medium text-slate-200">
              Shaping the Future for Every Young Challenger.
            </p>

            {/* CTA：スマホは縦並び＆全幅、PCは横並び */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/aboutus"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 sm:w-auto"
              >
                About Us を見る
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-sky-300 hover:bg-slate-900/40 sm:w-auto"
              >
                Services へ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          Mission Section
      ================================= */}
      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-800 px-6 py-10 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              Mission
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-50 sm:text-2xl">
              テクノロジーと教育で、キャリア選択の不確実性をなくす。
            </p>
            <p className="mt-3 text-sm text-slate-200">
              医療・AI・教育・クリエイティブの4つの事業を通じて、若者が自分らしく挑戦できる
              キャリアの選択肢を増やしていきます。
            </p>
          </div>
        </div>
      </section>

      {/* ================================
          Three Keywords Section
      ================================= */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            OpenYouth を表す「3つのキーワード」
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <KeywordCard
              title="AI / テクノロジー"
              description="最新のAI・LLM技術を活用し、医療・教育・ビジネスの現場にデプロイします。"
            />
            <KeywordCard
              title="教育・スキルアップ"
              description="AI Academy などのコンテンツを通じて、個人の学びと挑戦を支えます。"
            />
            <KeywordCard
              title="医療 × キャリア支援"
              description="レジマッチを中心に、医学生・初期研修医が納得して進路を選べる環境をつくります。"
            />
          </div>
        </div>
      </section>

      {/* ================================
          Main Service Highlight (RegiMatch)
      ================================= */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* 左側：テキスト */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500">
                Our Business
              </p>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                家から、病院訪問しよう。新時代の初期研修マッチング「レジマッチ」
              </h2>
              <p className="text-sm text-slate-700">
                レジマッチは、初期研修医と病院のミスマッチを解消するためのプラットフォームです。
                年収・働き方・教育体制などの情報をわかりやすく整理し、オンライン説明会や
                OB・OG 訪問も含めて、納得感のある進路選択をサポートします。
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Services で詳しく見る
                </Link>
                <Link
                  href="/company"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  Company 情報へ
                </Link>
              </div>
            </div>

            {/* 右側：RegiMatch の画像 */}
            <div className="relative h-56 overflow-hidden rounded-3xl bg-slate-200 shadow-sm sm:h-64 lg:h-72">
              <Image
                src="/images/services/resimatch.jpg"
                alt="レジマッチのイメージ"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          Service Cards (4事業)
      ================================= */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Our Business
          </h2>
          <p className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
            事業紹介
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              name="レジマッチ"
              description="初期研修医と病院をつなぐマッチングプラットフォーム。"
            />
            <ServiceCard
              name="Make AI"
              description="企業向けAI受託開発。業務設計からPoC、実装まで伴走します。"
            />
            <ServiceCard
              name="AI Academy"
              description="累計1,000名以上が受講した、実務で使えるAI講座コンテンツ。"
            />
            <ServiceCard
              name="Make Face"
              description="成果にこだわるWeb/LP制作。事業の魅力を伝えるクリエイティブ。"
            />
          </div>

          <div className="mt-6 text-right text-xs">
            <Link
              href="/services"
              className="font-semibold text-sky-600 hover:text-sky-700"
            >
              Services ページへ →
            </Link>
          </div>
        </div>
      </section>

      {/* ================================
          Latest News
      ================================= */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Latest News
              </h2>
              <p className="mt-1 text-xl font-semibold text-slate-900">
                最新のお知らせ
              </p>
            </div>
            <Link
              href="/news"
              className="text-xs font-semibold text-sky-600 hover:text-sky-700"
            >
              一覧を見る →
            </Link>
          </div>

          {hasHomeNews ? (
            <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white text-sm shadow-sm">
              {HOME_NEWS.map((item) => (
                <div
                  key={`${item.date}-${item.title}`}
                  className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
                >
                  <time className="text-xs font-medium text-slate-500 sm:w-32">
                    {item.date}
                  </time>
                  <p className="flex-1 text-sm text-slate-800">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-center text-xs text-slate-500 sm:px-6">
              <p>現在、トップページに表示中のお知らせはありません。</p>
            </div>
          )}
        </div>
      </section>

      {/* ================================
          Corporate Profile Digest
      ================================= */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Company
          </h2>
          <p className="mt-2 text-xl font-semibold text-slate-900">
            Corporate Profile
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="grid gap-x-10 gap-y-4 px-6 py-6 text-sm text-slate-700 sm:grid-cols-2">
              <InfoRow label="会社名" value="株式会社OpenYouth" />
              <InfoRow label="代表者" value="深谷洸樹" />
              <InfoRow
                label="所在地"
                value="〒150-0043 東京都渋谷区道玄坂１丁目１０−８"
              />
              <InfoRow
                label="事業"
                value="レジマッチ / Make AI / AI Academy / Make Face"
              />
            </div>
          </div>

          <div className="mt-4 text-right text-xs">
            <Link
              href="/company"
              className="font-semibold text-sky-600 hover:text-sky-700"
            >
              Company ページへ →
            </Link>
          </div>
        </div>
      </section>

      {/* ================================
          Recruitment CTA
      ================================= */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            We are Hiring!
          </h2>
          <p className="mt-2 text-xl font-semibold sm:text-2xl">
            OpenYouthでは、一緒に未来のキャリアインフラをつくる仲間を募集しています。
          </p>
          <p className="mt-2 max-w-2xl text-sm text-slate-200">
            エンジニア、事業開発、デザイナーなど、ミッションに共感してくださる方を歓迎します。
          </p>
          <div className="mt-5">
            <Link
              href="/recruitment"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              採用情報を見る
            </Link>
          </div>
        </div>
      </section>

      {/* ================================
          Contact CTA
      ================================= */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Contact
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            サービスに関するご質問やご相談、取材・協業のご依頼など、
            こちらのフォームよりお気軽にお問い合わせください。
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              お問い合わせページへ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================
   Components
========================= */

type KeywordCardProps = {
  title: string;
  description: string;
};

function KeywordCard({ title, description }: KeywordCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-6 text-left shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
        {title}
      </h3>
      <p className="mt-2 text-xs text-slate-600 sm:text-sm">{description}</p>
    </div>
  );
}

function ServiceCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
      <p className="font-semibold text-slate-900">{name}</p>
      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="mt-1 text-sm text-slate-800">{value}</p>
    </div>
  );
}