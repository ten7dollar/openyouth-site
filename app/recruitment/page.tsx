// app/recruitment/page.tsx
import Link from "next/link";
import type { ReactNode } from "react";
import { PageMasthead } from "@/components/page-masthead";
import { ScrubText } from "@/components/motion/scrub-text";
import { PhrasedSafe as Phrased } from "@/components/motion/phrased-safe";
import { phrases } from "@/lib/phrases";

export const metadata = {
  alternates: { canonical: "/recruitment" },
  title: "採用情報 — OpenYouth",
  description:
    "株式会社OpenYouthでは、プロダクト開発・採用支援・営業支援に関わる仲間を募集しています。カジュアル面談からお気軽にどうぞ。",
};

const VALUES = [
  {
    jp: "現場で、解く。",
    body: "机上の戦略ではなく、現場で起きている課題に直接手を入れる。プロダクトも事業支援も、自分たちが使う側として動き、現場の手触りから組み立てていく。",
  },
  {
    jp: "変化に、賭ける。",
    body: "産業革命級のAIの波を、観客の側から眺めない。当事者として、現場で動くプロダクトに落とし込みながら賭け続ける。",
  },
  {
    jp: "挑戦を、閉じない。",
    body: "業界・所属・経験で挑戦の機会を閉じない。私たち自身も開かれた姿勢で、次の事業を選び、次の挑戦者を迎える。",
  },
];

const ROLES = [
  {
    title: "プロダクトエンジニア",
    type: "正社員・業務委託",
    line: "Stock-HR",
    description:
      "Next.js / TypeScript / Supabase / Claude APIを使った、Stock-HR本体の開発。プロダクト設計まで深く関わってくれる方を歓迎します。",
  },
  {
    title: "AI / プロンプトエンジニア",
    type: "正社員・業務委託",
    line: "Stock-HR",
    description:
      "Stock-HRの推論層・プロンプト設計。LLMの挙動を業務に落とし込む、AIエンジニアリングのポジション。",
  },
  {
    title: "採用支援パートナー",
    type: "業務委託・副業可",
    line: "採用支援",
    description:
      "ペルソナ設計・スカウト運用・選考設計。Stock-HRを使った採用伴走を一緒に担うパートナーポジション。",
  },
  {
    title: "営業 / インサイドセールス",
    type: "正社員・業務委託",
    line: "営業支援",
    description:
      "BtoB SaaS・受託の商談クロージング、インサイドセールスの実行。リファラル経由のリードを丁寧に温める役割。",
  },
];

type WorkItem = { k: string; v: string; note?: string; en?: boolean };

const WORK: WorkItem[] = [
  { k: "働く場所", v: "リモート前提", note: "拠点は東京です。" },
  { k: "働く時間", v: "フルフレックス" },
  { k: "副業", v: "副業・複業OK" },
  { k: "仕事の中身", v: "プロダクト × 受託のハイブリッド" },
  { k: "補助", v: "AIツール費・書籍購入補助" },
  {
    k: "報酬",
    v: "一人ずつ個別に設定",
    note: "経験・期待値・コミットに応じて決めます。業務委託は、時間・成果ベースで柔軟に。",
  },
  { k: "使っている道具", v: "Claude Cursor Next.js Supabase Linear Notion Figma Slack", en: true },
];

export default function RecruitmentPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        eyebrowJp="採用情報"
        titleLines={["一緒に、次の一歩を", "設計しませんか。"]}
        lead={
          <p>
            <Phrased text="正社員・業務委託・副業を問わず、一緒にプロダクトと事業をつくる仲間を探しています。" />
            <br />
            <Phrased text="ポジションが完全に合致しなくても、まずはカジュアル面談からどうぞ。" />
          </p>
        }
        meta={[
          { k: "大切にしていること", v: "01" },
          { k: "募集職種", v: "02" },
          { k: "働く環境", v: "03" },
          { k: "応募の流れ", v: "04" },
        ]}
      />

      <ValuesSection />
      <RolesSection />
      <WorkSection />
      <FlowSection />
      <TalkCTA />
    </div>
  );
}

/* ============================================================
   大切にしていること — 濃紺の章。姿勢を行ごとにせり上げる
============================================================ */
function ValuesSection() {
  return (
    <section id="values" className="relative bg-[var(--color-navy-800)] py-28 text-[var(--color-slate-0)] sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <p
            className="text-[15px] font-bold text-[var(--color-navy-200)] lg:col-span-3 lg:pt-4"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            大切にしていること
          </p>
          <div className="min-w-0 lg:col-span-9">
            <ScrubText
              as="h2"
              phrases={phrases("スキルセットも見ますが、それ以上に、ここに馴染めるかを大切にしています。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
              from="rgba(255,255,255,0.16)"
              to="#ffffff"
            />
          </div>
        </div>

        <ul className="mt-20 flex flex-col gap-16 sm:mt-28 sm:gap-24">
          {VALUES.map((v) => (
            <li key={v.jp} className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-end lg:gap-10" data-mask>
              <p
                aria-label={v.jp}
                className="min-w-0 text-[clamp(44px,12vw,112px)] font-bold leading-[1.08] tracking-[-0.03em] lg:col-span-7"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                {/* 読点の位置で2行に分け、行ごとにせり上げる */}
                {v.jp.split(/(?<=、)/).map((seg, si) => (
                  <span key={si} aria-hidden className="mask-line whitespace-nowrap">
                    <span style={{ ["--d" as string]: `${si * 0.12}s` }}>{seg}</span>
                  </span>
                ))}
              </p>
              <p className="min-w-0 max-w-[30em] text-[15px] leading-[2] text-white/70 lg:col-span-5 lg:pb-3">
                <Phrased text={v.body} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   募集職種 — カードを並べず、全幅の行で
============================================================ */
function RolesSection() {
  return (
    <section id="positions" className="relative bg-[var(--color-slate-0)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2
            className="text-[clamp(32px,4.6vw,64px)] font-bold leading-[1.15] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            募集職種
          </h2>
          <p className="max-w-[30em] text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px] lg:pb-2">
            <Phrased text="気になる職種があれば、まずはカジュアル面談から。該当しない場合も、ご相談ベースで歓迎します。" />
          </p>
        </div>

        <ul className="mt-12 flex flex-col gap-2 sm:mt-16" data-reveal-stagger>
          {ROLES.map((r, i) => (
            <li key={r.title}>
              <Link
                href="/contact"
                className="group flex flex-col gap-3 rounded-2xl px-1 py-7 transition-colors duration-300 hover:bg-[var(--color-slate-50)] sm:px-6 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-9"
              >
                <span
                  className="text-[14px] font-bold tabular text-[var(--color-slate-400)] lg:col-span-1"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 lg:col-span-6">
                  <h3
                    className="heading-jp text-[clamp(26px,3vw,40px)] font-bold leading-[1.25] tracking-[-0.02em] text-[var(--color-slate-900)] transition-colors duration-300 group-hover:text-[var(--color-navy-600)]"
                    style={{ fontFamily: "var(--font-display-jp)" }}
                  >
                    {r.title}
                  </h3>
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] font-bold">
                    <span className="text-[var(--color-navy-600)]">{r.line}</span>
                    <span className="text-[var(--color-slate-500)]">{r.type}</span>
                  </p>
                </div>
                <p className="mt-1 min-w-0 text-[15px] leading-[1.95] text-[var(--color-slate-600)] lg:col-span-5 lg:mt-0">
                  <Phrased text={r.description} tail />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   働く環境 — 薄灰の章。項目と中身を並べる
============================================================ */
function WorkSection() {
  return (
    <section id="work" className="relative bg-[var(--color-slate-50)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <p
            className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-4"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            働く環境
          </p>
          <div className="min-w-0 lg:col-span-9">
            <ScrubText
              as="h2"
              phrases={phrases("手を動かしやすい環境を、整えています。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
            />

            <dl className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-14" data-reveal-stagger>
              {WORK.map((w) => (
                <div key={w.k} className={"min-w-0 " + (w.en ? "sm:col-span-2" : "")}>
                  <dt className="text-[14px] font-bold text-[var(--color-slate-500)]">{w.k}</dt>
                  <dd className="mt-3">
                    {w.en ? (
                      <ul
                        className="flex flex-wrap gap-x-6 gap-y-2 text-[clamp(19px,2vw,24px)] font-bold leading-[1.5] text-[var(--color-slate-900)]"
                        style={{ fontFamily: "var(--font-display-en)" }}
                      >
                        {w.v.split(" ").map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="heading-jp text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.45] text-[var(--color-slate-900)]"
                        style={{ fontFamily: "var(--font-display-jp)" }}
                      >
                        <Phrased text={w.v} />
                      </p>
                    )}
                    {w.note && (
                      <p className="mt-3 max-w-[30em] text-[15px] leading-[1.95] text-[var(--color-slate-600)]">
                        <Phrased text={w.note} />
                      </p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   応募の流れ — 番号を大きく置いて並べる（矢印や線でつながない）
============================================================ */
function FlowSection() {
  return (
    <section id="flow" className="relative bg-[var(--color-slate-0)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <p
            className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-4"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            応募の流れ
          </p>
          <div className="min-w-0 lg:col-span-9">
            <ScrubText
              as="h2"
              phrases={phrases("応募フォームはありません。まずは、話すところから。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
            />
          </div>
        </div>

        <ol className="mt-20 flex flex-col gap-14 sm:mt-28 lg:grid lg:grid-cols-3 lg:gap-12" data-reveal-stagger>
          <FlowStep no={1} title="お問い合わせから連絡する">
            <Phrased text="お問い合わせフォームで" />
            <span className="inline-block">「採用相談・カジュアル面談」</span>
            <Phrased text="を選んで、送ってください。LinkedIn・紹介・SNSのDMでも歓迎します。" />
          </FlowStep>
          <FlowStep no={2} title="面談の日程を決める">
            <Phrased text="営業日2〜3日以内に、" />
            <span className="inline-block" style={{ fontFamily: "var(--font-display-en)" }}>
              admin@openyouth.co.jp
            </span>
            <Phrased text=" から返信します。日程は、そのやりとりで決めましょう。" />
          </FlowStep>
          <FlowStep no={3} title="30分のカジュアル面談">
            <Phrased text="お互いのことを話す時間です。ポジションが完全に合致しなくても、大丈夫です。" />
          </FlowStep>
        </ol>
      </div>
    </section>
  );
}

function FlowStep({ no, title, children }: { no: number; title: string; children: ReactNode }) {
  return (
    <li className="min-w-0">
      <span
        className="block text-[clamp(56px,7vw,96px)] font-bold leading-none tabular text-[var(--color-accent)]"
        style={{ fontFamily: "var(--font-display-en)", letterSpacing: "-0.03em" }}
      >
        {String(no).padStart(2, "0")}
      </span>
      <h3
        className="heading-jp mt-6 text-[clamp(22px,2.2vw,28px)] font-bold leading-[1.45]"
        style={{ fontFamily: "var(--font-display-jp)" }}
      >
        {title}
      </h3>
      <p className="mt-4 text-[15px] leading-[2] text-[var(--color-slate-600)]">{children}</p>
    </li>
  );
}

/* ============================================================
   最後の章 — 「話してみる」の特大文字そのものがリンク（トップの ContactCTA と同じ型）
============================================================ */
function TalkCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-600)] py-24 text-[var(--color-slate-0)] sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[15px] font-bold text-[var(--color-navy-100)]" style={{ fontFamily: "var(--font-display-jp)" }}>
          カジュアル面談
        </p>
        <Link
          href="/contact"
          className="group mt-6 inline-flex items-baseline gap-4 text-[clamp(64px,15vw,200px)] font-bold leading-[1] tracking-[-0.04em] sm:gap-8"
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          <span className="relative whitespace-nowrap">
            話してみる
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-[0.06em] w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
          </span>
        </Link>
        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[34em] text-[15px] leading-[2] text-white/80 sm:text-[16px]">
            <Phrased text="正社員・業務委託・副業を問わず、ご相談ベースで歓迎します。30分の対話から、はじめましょう。" />
          </p>
          <Link href="/aboutus" className="group inline-flex shrink-0 items-center text-[15px] font-bold text-white">
            <span className="underline-grow">会社のことを先に読む</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
