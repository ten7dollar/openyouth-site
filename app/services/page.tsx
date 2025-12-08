import Image from "next/image";
import Link from "next/link";

const SERVICE_IMAGES = {
  regimatch: "/images/services/resimatch.jpg",
  makeAi: "/images/services/make-ai.jpg",
  aiAcademy: "/images/services/ai-academy.jpg",
  makeFace: "/images/services/make-face.jpg",
};

const CASE_STUDIES = [
  {
    id: "a",
    label: "医療",
    client: "国立大学病院 A様",
    highlight: "マッチング率 150% UP",
    description:
      "オンライン面談の導入と病院側の魅力発信コンテンツの強化により、地方在住の初期研修医とのマッチング数が大幅に増加しました。",
    tags: ["ResiMatch", "医師採用", "地方病院"],
  },
  {
    id: "b",
    label: "AI・DX",
    client: "大手不動産デベロッパー B社様",
    highlight: "問い合わせ対応工数 70% 削減",
    description:
      "社内向けナレッジ検索AIツールを構築し、営業・カスタマーサポートからの定型問い合わせ対応を自動化しました。",
    tags: ["Make AI", "社内ナレッジ", "効率化"],
  },
  {
    id: "c",
    label: "AI人材育成",
    client: "メガベンチャー C社様",
    highlight: "エンジニア生産性 1.5倍",
    description:
      "GitHub Copilot を中心とした生成AI活用研修を実施。開発プロセスの見直しとセットで行うことで、チーム全体の生産性向上に繋がりました。",
    tags: ["AI Academy", "研修", "エンジニア組織"],
  },
  {
    id: "d",
    label: "Web制作",
    client: "SaaSスタートアップ D社様",
    highlight: "CVR 2.5倍改善",
    description:
      "サービスサイトをフルリニューアルし、提供価値と導入効果が直感的に伝わる情報設計へ。リード獲得数の増加に貢献しました。",
    tags: ["Make Face", "Web制作", "BtoB SaaS"],
  },
  {
    id: "e",
    label: "AI・DX",
    client: "地方自治体 E様",
    highlight: "業務時間の 90% 削減",
    description:
      "問い合わせ対応や申請書類作成の一部をAIで自動化。職員の負荷軽減と住民対応の品質向上を同時に実現しました。",
    tags: ["Make AI", "自治体DX"],
  },
  {
    id: "f",
    label: "医療",
    client: "総合病院 F様",
    highlight: "見学〜内定決定 3倍",
    description:
      "レジマッチを活用した情報発信とオンライン説明会の設計により、母集団形成から内定承諾までのフローを最適化しました。",
    tags: ["ResiMatch", "医師採用", "初期研修"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 pb-16">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Services
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            医療・AI・教育・クリエイティブの4領域で事業を展開しています。
          </p>

          {/* カテゴリタブ（見た目だけ・フィルタ機能は後で必要なら追加） */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs sm:text-sm">
            {["すべて", "医療・ヘルスケア", "AI・DX", "教育・リスキリング", "クリエイティブ"].map(
              (label, index) => (
                <button
                  key={label}
                  type="button"
                  className={
                    index === 0
                      ? "rounded-full bg-slate-900 px-4 py-1.5 font-medium text-white"
                      : "rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600"
                  }
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* ResiMatch Hero Service */}
      <section className="mt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-2">
              {/* 画像エリア：ResiMatch のビジュアルをここに */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200 md:h-full">
                {/* 
                  ここに RegiMatch のメイン画像を入れてください。
                  /public/images/services/regimatch.jpg を置いた場合：
                */}
                <Image
                  src={SERVICE_IMAGES.regimatch}
                  alt="ResiMatch service visual"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* テキストエリア */}
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div className="space-y-4">
                  <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    Medical Platform
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                      ResiMatch
                    </h2>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      初期研修医マッチングプラットフォーム
                    </p>
                  </div>

                  <p className="text-sm text-slate-700 sm:text-[15px]">
                    医学生と病院のミスマッチを解消するためのマッチングプラットフォームです。
                    年収・働き方・教育体制などの情報を可視化し、オンライン説明会や OB・OG 訪問なども含めた、
                    一連のコミュニケーションを最適化します。
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                  >
                    詳細を見る
                  </Link>
                  <p className="text-xs text-slate-500">
                    ※ レジマッチのプロダクトサイト / LP へのリンクを後ほど設定できます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* サブサービスカード群 */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Make AI */}
            <ServiceCard
              label="MAKE AI"
              title="生成AI導入・DX支援"
              description="業務設計からPoC、社内展開まで伴走するAI導入支援サービス。ChatGPTや各種モデルを活用し、ビジネスインパクトのあるワークフローを共に設計・実装します。"
              imageSrc={SERVICE_IMAGES.makeAi}
              tag="AI / DX"
            />
            {/* AI Academy */}
            <ServiceCard
              label="AI ACADEMY"
              title="AI人材育成・研修"
              description="ビジネスパーソン・エンジニア向けに、実務でAIを使いこなすための研修プログラムを提供。累計1,000名以上が受講した実践型コンテンツです。"
              imageSrc={SERVICE_IMAGES.aiAcademy}
              tag="Education"
            />
            {/* Make Face */}
            <ServiceCard
              label="MAKE FACE"
              title="Web制作・マーケティング支援"
              description="事業の世界観と提供価値を伝えるWebサイト・LP制作を支援。情報設計・デザイン・実装・改善提案まで一気通貫で伴走します。"
              imageSrc={SERVICE_IMAGES.makeFace}
              tag="Creative"
            />
          </div>
        </div>
      </section>

      {/* 導入実績・事例 */}
      <section className="mt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-slate-500">
            導入実績・事例
          </h2>
          <p className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
            さまざまな現場で挑戦を支援しています。
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.id} {...cs} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================
   Components
========================= */

type ServiceCardProps = {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  tag: string;
};

function ServiceCard({
  label,
  title,
  description,
  imageSrc,
  tag,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-40 w-full bg-slate-200">
        {/* サービスごとの画像をここに */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {label}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">
              {tag}
            </span>
          </div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-600">{description}</p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="text-xs font-semibold text-sky-600 hover:text-sky-700"
          >
            View More →
          </button>
        </div>
      </div>
    </div>
  );
}

type CaseStudyProps = {
  id: string;
  label: string;
  client: string;
  highlight: string;
  description: string;
  tags: string[];
};

function CaseStudyCard({
  label,
  client,
  highlight,
  description,
  tags,
}: CaseStudyProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {label}
          </span>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {highlight}
          </span>
        </div>
        <p className="mt-1 text-sm font-semibold text-slate-900">{client}</p>
        <p className="text-xs text-slate-600">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}