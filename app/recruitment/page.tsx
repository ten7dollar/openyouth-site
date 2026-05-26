// app/recruitment/page.tsx
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";
import {
  IconLongBet,
  IconFieldFirst,
  IconOpenByDefault,
  IconStockHR,
  IconRecruitment,
  IconSales,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type ServiceIconKey = "Stock-HR" | "採用支援" | "営業支援";
const LINE_ICONS: Record<ServiceIconKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  "Stock-HR": IconStockHR,
  "採用支援": IconRecruitment,
  "営業支援": IconSales,
};

export const metadata = {
  title: "採用情報 — OpenYouth",
  description:
    "株式会社OpenYouthでは、プロダクト開発・採用支援・営業支援に関わる仲間を募集しています。カジュアル面談からお気軽にどうぞ。",
};

const VALUES = [
  {
    no: "01",
    en: "Solve in the field",
    jp: "現場で、解く。",
    body: "机上の戦略ではなく、現場で起きている課題に直接手を入れる。プロダクトも事業支援も、自分たちが使う側として動き、現場の手触りから組み立てていく。",
    Icon: IconFieldFirst,
  },
  {
    no: "02",
    en: "Stake on the wave",
    jp: "変化に、賭ける。",
    body: "産業革命級のAIの波を、観客の側から眺めない。当事者として、現場で動くプロダクトに落とし込みながら賭け続ける。",
    Icon: IconLongBet,
  },
  {
    no: "03",
    en: "Stay open",
    jp: "挑戦を、閉じない。",
    body: "業界・所属・経験で挑戦の機会を閉じない。私たち自身も開かれた姿勢で、次の事業を選び、次の挑戦者を迎える。",
    Icon: IconOpenByDefault,
  },
];

const ROLES = [
  {
    title: "プロダクトエンジニア",
    type: "正社員 / 業務委託",
    line: "Stock-HR",
    description:
      "Next.js / TypeScript / Supabase / Claude APIを使った、Stock-HR本体の開発。プロダクト設計まで深く関わってくれる方を歓迎します。",
  },
  {
    title: "AI / プロンプトエンジニア",
    type: "正社員 / 業務委託",
    line: "Stock-HR",
    description:
      "Stock-HRの推論層・プロンプト設計。LLMの挙動を業務に落とし込む、AIエンジニアリングのポジション。",
  },
  {
    title: "採用支援パートナー",
    type: "業務委託 / 副業可",
    line: "採用支援",
    description:
      "ペルソナ設計・スカウト運用・選考設計。Stock-HRを使った採用伴走を一緒に担うパートナーポジション。",
  },
  {
    title: "営業 / インサイドセールス",
    type: "正社員 / 業務委託",
    line: "営業支援",
    description:
      "BtoB SaaS・受託の商談クロージング、インサイドセールスの実行。リファラル経由のリードを丁寧に温める役割。",
  },
];

const ENV_TAGS = [
  "リモート前提（東京拠点）",
  "フルフレックス",
  "副業・複業OK",
  "プロダクト × 受託のハイブリッド",
  "AIツール費・書籍購入補助",
];

export default function RecruitmentPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        index="04"
        eyebrowEn="CAREERS"
        eyebrowJp="採用情報"
        titleJp={
          <>
            一緒に、次の一歩を
            <br />
            <span className="text-[var(--color-navy-700)]">設計しませんか。</span>
          </>
        }
        lead={
          <>
            正社員・業務委託・副業を問わず、一緒にプロダクトと事業をつくる仲間を探しています。
            ポジションが完全に合致しなくても、まずはカジュアル面談からどうぞ。
          </>
        }
        meta={[
          { k: "私たちの姿勢", v: "01" },
          { k: "募集職種", v: "02" },
          { k: "働く環境", v: "03" },
          { k: "応募の流れ", v: "04" },
        ]}
      />

      {/* ============== Values ============== */}
      <section className="relative bg-[var(--color-slate-0)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12" data-reveal>
            <div className="lg:col-span-4">
              <p
                className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Our Values
              </p>
              <h2
                className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.2]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                私たちが、
                <br />
                大切にしていること
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-slate-600)]">
                スキルセットも見ますが、それ以上にここに馴染めるかを大切にしています。
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-6 lg:col-span-8 lg:grid-cols-3" data-reveal-stagger>
              {VALUES.map((v) => (
                <li
                  key={v.no}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] p-7 lift"
                >
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-navy-50)] text-[var(--color-navy-700)] transition-colors group-hover:bg-[var(--color-navy-700)] group-hover:text-[var(--color-slate-0)]">
                      <v.Icon className="h-6 w-6 icon-rotate-hover" />
                    </div>
                    <div className="text-right">
                      <span
                        className="text-[34px] font-bold tabular leading-none text-[var(--color-navy-700)]"
                        style={{ fontFamily: "var(--font-display-en)", letterSpacing: "-0.02em" }}
                      >
                        {v.no}
                      </span>
                      <p
                        className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                        style={{ fontFamily: "var(--font-display-en)" }}
                      >
                        {v.en}
                      </p>
                    </div>
                  </div>
                  <p
                    className="mt-7 text-balance text-[20px] font-bold leading-[1.5]"
                    style={{ fontFamily: "var(--font-display-jp)" }}
                  >
                    {v.jp}
                  </p>
                  <p className="mt-3 text-pretty text-[13.5px] leading-[1.95] text-[var(--color-slate-600)]">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============== Roles ============== */}
      <section className="relative bg-[var(--color-slate-50)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
            data-reveal
          >
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Open Positions
              </p>
              <h2
                className="mt-4 text-[clamp(28px,3.6vw,48px)] font-bold leading-[1.2]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                募集職種
              </h2>
            </div>
            <p className="max-w-md text-[14px] text-[var(--color-slate-600)]">
              気になる職種があれば、まずはカジュアル面談から。
              該当しない場合もご相談ベースで歓迎します。
            </p>
          </div>

          <ul className="mt-12 border-t border-[var(--color-slate-200)]" data-reveal-stagger>
            {ROLES.map((r, i) => {
              const LineIcon = LINE_ICONS[r.line as ServiceIconKey];
              return (
                <li key={r.title} className="border-b border-[var(--color-slate-200)]">
                  <Link
                    href="/contact"
                    className="group grid grid-cols-12 items-center gap-4 py-7 transition hover:bg-[var(--color-slate-0)] sm:gap-8"
                  >
                    <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                      <span
                        className="text-[11px] tabular tracking-[0.18em] text-[var(--color-slate-400)]"
                        style={{ fontFamily: "var(--font-display-en)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="col-span-10 flex items-start gap-4 sm:col-span-7">
                      {LineIcon && (
                        <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--color-navy-50)] text-[var(--color-navy-700)] transition-colors group-hover:bg-[var(--color-navy-700)] group-hover:text-[var(--color-slate-0)] sm:grid">
                          <LineIcon className="h-6 w-6" />
                        </div>
                      )}
                      <div>
                        <p
                          className="text-balance text-xl font-bold text-[var(--color-slate-900)] sm:text-2xl"
                          style={{ fontFamily: "var(--font-display-jp)" }}
                        >
                          {r.title}
                        </p>
                        <p className="mt-2 text-pretty text-sm leading-relaxed text-[var(--color-slate-600)]">
                          {r.description}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-9 flex flex-wrap items-center gap-2 sm:col-span-3">
                      <span
                        className="rounded-full border border-[var(--color-slate-300)] bg-[var(--color-slate-0)] px-2.5 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-slate-600)]"
                        style={{ fontFamily: "var(--font-display-en)" }}
                      >
                        {r.line}
                      </span>
                      <span className="rounded-full bg-[var(--color-slate-100)] px-2.5 py-1 text-[11px] text-[var(--color-slate-600)]">
                        {r.type}
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className="col-span-3 grid place-items-end text-[var(--color-slate-400)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-navy-700)] sm:col-span-1"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] transition-colors group-hover:border-[var(--color-navy-700)] group-hover:bg-[var(--color-navy-700)] group-hover:text-[var(--color-slate-0)]">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ============== Environment ============== */}
      <section className="relative bg-[var(--color-slate-0)] py-24 sm:py-32">
        <div className="mx-auto grid grid-cols-1 max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
          <div className="lg:col-span-4" data-reveal>
            <p
              className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Environment
            </p>
            <h2
              className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.2]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              働く環境
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-slate-600)]">
              手を動かしやすい環境を整えています。副業・複業も歓迎、フルリモート可、フレックス。
            </p>
          </div>

          <div className="lg:col-span-8" data-reveal-stagger>
            <ul className="flex flex-wrap gap-2">
              {ENV_TAGS.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] px-4 py-2 text-[13px] text-[var(--color-slate-700)]"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] p-6">
                <p
                  className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  Tools
                </p>
                <p className="mt-3 text-[14px] leading-[1.95] text-[var(--color-slate-900)]">
                  Claude · Cursor · Next.js · Supabase · Linear · Notion · Figma · Slack
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] p-6">
                <p
                  className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  報酬
                </p>
                <p className="mt-3 text-[14px] leading-[1.95] text-[var(--color-slate-900)]">
                  経験・期待値・コミットに応じて個別設定。業務委託は時間 / 成果ベースで柔軟に。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== Apply CTA ============== */}
      <section className="relative overflow-hidden bg-[var(--color-slate-0)] py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div
            className="relative overflow-hidden rounded-3xl bg-[var(--color-navy-700)] px-8 py-16 text-[var(--color-slate-0)] sm:px-14 sm:py-20 lg:px-20"
            data-reveal
          >
            <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-50" />
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p
                  className="text-[11px] uppercase tracking-[0.32em] text-white/55"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  How to apply
                </p>
                <h2
                  className="mt-5 text-[clamp(32px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.015em]"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  まずは、
                  <br />
                  カジュアル面談から。
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-[2] text-white/75">
                  応募フォームはありません。お問い合わせから「採用相談」とご記載ください。
                  LinkedIn / 紹介 / SNS DMでも歓迎します。
                </p>
              </div>
              <div className="flex flex-col justify-end gap-3 lg:col-span-5">
                <Link
                  href="/contact"
                  className="group btn-press inline-flex items-center justify-between gap-3 rounded-full bg-[var(--color-slate-0)] px-6 py-4 text-[15px] font-bold text-[var(--color-navy-800)] transition hover:bg-[var(--color-navy-100)]"
                >
                  カジュアル面談を申し込む
                  <span aria-hidden className="text-xl arrow-slide">→</span>
                </Link>
                <Link
                  href="/aboutus"
                  className="group btn-press btn-press-light inline-flex items-center justify-between gap-3 rounded-full border border-white/35 bg-transparent px-6 py-4 text-[15px] font-bold text-white transition hover:border-white"
                >
                  会社のことを先に読む
                  <span aria-hidden className="text-xl arrow-slide">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
