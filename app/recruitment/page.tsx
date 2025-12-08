import Link from "next/link";

type Job = {
  title: string;
  type: "Full-time" | "Part-time / Outsourcing" | "Full-time / Intern";
  description: string;
};

const JOBS: Job[] = [
  {
    title: "Webエンジニア",
    type: "Full-time / Intern",
    description: "React, Next.js, Supabase などを使用した自社プロダクトの開発",
  },
  {
    title: "AIエンジニア",
    type: "Full-time",
    description: "LLM を活用した新機能の実装、受託案件の開発",
  },
  {
    title: "セールス・事業開発",
    type: "Full-time",
    description: "レジマッチをはじめとする事業のグロースハック",
  },
  {
    title: "Webデザイナー",
    type: "Part-time / Outsourcing",
    description: "LP制作、UI/UXデザイン、ブランドクリエイティブの制作",
  },
];

const WORK_ENV_TAGS = [
  "フルリモート可",
  "フルフレックス",
  "最新PC支給",
  "書籍購入補助",
  "学習支援制度",
  "フリードリンク",
];

export default function RecruitmentPage() {
  return (
    <div className="bg-slate-50 pb-16">
      {/* Hero */}
      <section className="bg-linear-to-r from-slate-900 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Join Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
            OpenYouthでは、ミッションの実現に向けて共に挑戦する仲間を募集しています。
            圧倒的な成長環境で、あなたの可能性を試してみませんか？
          </p>
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Value Cards */}
        <section>
          <div className="grid gap-4 md:grid-cols-3">
            <ValueCard
              title="Be Bold."
              description="失敗を恐れず、大胆に挑戦しよう。小さな成功よりも、大きな学びを掴みにいきます。"
            />
            <ValueCard
              title="Tech First."
              description="すべての課題解決において、テクノロジーの可能性を最初に検討します。"
            />
            <ValueCard
              title="User Obsession."
              description="ユーザーの人生に寄り添い、本質的な価値提供をすることに執着します。"
            />
          </div>
        </section>

        {/* Jobs */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            募集職種
          </h2>

          <div className="space-y-3">
            {JOBS.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </section>

        {/* Work Environment */}
        <section className="rounded-3xl bg-sky-50 px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl text-center">
            働く環境
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-700 text-center">
            フルリモート・フルフレックスなど、個人のパフォーマンスを最大化するための柔軟な働き方を推奨しています。
            書籍購入補助や学習支援制度も充実しており、自ら学び続けるメンバーを全力で応援します。
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {WORK_ENV_TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

/* =========================
   Components
========================= */

type ValueCardProps = {
  title: string;
  description: string;
};

function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-5 py-6 text-left shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
        {title}
      </h3>
      <p className="mt-2 text-xs text-slate-600 sm:text-sm">{description}</p>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="flex flex-col items-stretch justify-between gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm shadow-sm sm:flex-row sm:items-center sm:px-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            {job.title}
          </h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">
            {job.type}
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-600 sm:text-sm">
          {job.description}
        </p>
      </div>

      <div className="flex shrink-0 items-center justify-end">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:text-sm"
        >
          応募する
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}