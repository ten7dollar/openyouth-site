// app/aboutus/page.tsx
// 会社概要。トップ（app/page.tsx）と同じ文法：章は地色で切り替え、見出しは日本語の短いラベル、一覧は行。
// Vision／Mission・3つの姿勢はトップにも出るので、ここでは文章を読ませる形にする。
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { PageMasthead } from "@/components/page-masthead";
import { ScrubText } from "@/components/motion/scrub-text";
import { phrases } from "@/lib/phrases";
import { keepHyphen } from "@/components/motion/phrased-safe";
import { BUSINESS_COUNT } from "@/lib/businesses";

export const metadata = {
  alternates: { canonical: "/aboutus" },
  title: "会社情報 — OpenYouth",
  description:
    "株式会社OpenYouthの目指す世界とやり方、3つの姿勢、代表メッセージ、沿革、会社概要。",
};

const LABEL = "text-[15px] font-bold text-[var(--color-navy-600)]";
const JP = { fontFamily: "var(--font-display-jp)" } as const;
const EN = { fontFamily: "var(--font-display-en)" } as const;

/* ---------- 文節で折り返す（Phrased と同じ仕組み）＋このページ用の3つの手当て ----------
   1. BudouX が「増や｜して」「ひと｜つずつ」「持ち｜寄って」「と｜いう」のように語の途中で分けるのを戻す
   2. 最後の文節が短いと1行に取り残される（「ます。」だけの行）ので、前の文節とつなぐ
   3. Stock-HR のハイフンでは割らない（keepHyphen） */
const JOIN: [RegExp, RegExp][] = [
  [/./, /^して/],
  [/と$/, /^いう/],
  [/ひと$/, /^つずつ/],
  [/持ち$/, /^寄/],
  [/から$/, /^でも/],
];

function chunks(text: string, glueTail = true): string[] {
  const out: string[] = [];
  for (const p of phrases(keepHyphen(text))) {
    const prev = out[out.length - 1];
    if (prev !== undefined && JOIN.some(([a, b]) => a.test(prev) && b.test(p))) out[out.length - 1] = prev + p;
    else out.push(p);
  }
  while (glueTail && out.length > 1 && Array.from(out[out.length - 1]).length < 6) {
    const last = out.pop() as string;
    out[out.length - 1] += last;
  }
  return out;
}

function T({ text, parts, glueTail = true }: { text?: string; parts?: string[]; glueTail?: boolean }) {
  const ps = parts ?? chunks(text ?? "", glueTail);
  // 「」や・の直後でも割れないよう、手で区切った塊と、短い最後の塊は1行に保つ
  const keep = (i: number) =>
    parts !== undefined || (glueTail && i === ps.length - 1 && Array.from(ps[i]).length <= 12);
  return (
    <span className="phrased">
      {ps.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {keep(i) ? <span className="whitespace-nowrap">{p}</span> : p}
        </Fragment>
      ))}
    </span>
  );
}

/* ---------- 3つの姿勢 ---------- */
const VALUES = [
  {
    no: "01",
    jp: "現場で、解く。",
    body: "机上の戦略ではなく、現場で起きている課題に直接手を入れる。プロダクトも事業支援も、自分たちが使う側として動き、現場の手触りから組み立てていく。",
  },
  {
    no: "02",
    jp: "変化に、賭ける。",
    body: "産業革命級のAIの波を、観客の側から眺めない。当事者として、現場で動くプロダクトに落とし込みながら賭け続ける。",
  },
  {
    no: "03",
    jp: "挑戦を、閉じない。",
    body: "業界・所属・経験で挑戦の機会を閉じない。私たち自身も開かれた姿勢で、次の事業を選び、次の挑戦者を迎える。",
  },
];

/* ---------- 代表メッセージ（強調は { em } で渡す） ---------- */
type Part = string | { em: string };

const MESSAGE: Part[][] = [
  ["株式会社OpenYouth 代表の深谷洸樹です。OpenYouthへの関心を、ありがとうございます。"],
  [
    "京都大学農学部を卒業したあと、教育系の事業会社・総合コンサル・スタートアップの事業統括・IT系グループ会社の代表と、業界を渡り歩いてきました。共通点は、新しいプロダクトと組織を立ち上げては、現場の採用と事業開発の最前線に関わってきたことです。",
  ],
  [
    "とくに大きな経験は、",
    { em: "採用責任者として組織の採用を立ち上げ、100名規模までグロースさせた" },
    "こと。エンジニアからセールス、カスタマーサクセス、マネージャー層まで、ゼロからの母集団形成・スカウト運用・選考設計・面接体制構築・オンボーディングまで、採用のすべての工程に責任を持ってきました。並行して、10社以上のBtoB企業の採用・営業支援にも並走し、現場の地味で本質的な不便を浴びるように見てきました。",
  ],
  [
    "その中で、ずっと気になっていたことがあります。",
    { em: "どの業界にも、まだ解かれていない当たり前の不便" },
    "がある。採用のスカウト一通、医療業界の就活、BtoBのアポ獲得。どれも、誰かが本気で向き合えば、もっと速く・もっと丁寧に進められるはずなのに、その「誰か」が空いていない。",
  ],
  [
    "同時に、AIによって",
    { em: "産業革命と同等以上の変化" },
    "が、いま起きています。これは、私たちが関わってきた業界の不便を、まとめて解き直せる稀有なタイミングだと感じています。OpenYouthは、その波に乗りながら、私自身が関わってきた業界の課題を、ひとつずつプロダクトと事業支援の両輪で解いていく会社です。",
  ],
  [
    `いま走っているのは、Stock-HRをはじめ、${BUSINESS_COUNT}つの事業です。プロダクトを現場で運用しながら育て、その手触りで次の事業を立ち上げる。これを繰り返しながら、AIと現場の知見で「`,
    { em: "若者の挑戦の選択肢" },
    "」を一段ずつ増やしていきます。",
  ],
  [
    "Stock-HRの導入、採用や営業の支援、業務提携、取材、ご一緒する仲間としての参画。どの入り口からでも、お声がけください。",
  ],
];

/* ---------- 代表の経歴（年の記載がないものは、会社の沿革と分けて代表の欄に置く） ---------- */
const CAREER = [
  "京都大学 農学部 卒業。",
  "教育系大手事業会社・総合コンサルティングファームで、新規事業開発と経営支援に従事。",
  "テック系スタートアップで事業統括として、プロダクト開発と組織マネジメントをリード。",
  "IT系事業会社のグループ会社代表に就任。事業責任者として、プロダクト・採用・組織の全レイヤーに関わる。",
  "採用責任者として、組織の採用立ち上げから100名規模までグロース。エンジニア・セールス・カスタマーサクセス・マネージャー層まで一気通貫で採用を設計・運用。",
  "10社以上のBtoB企業の採用・営業支援に並走。プロダクトセールス・フィールドセールス・営業部長候補・プロダクトマネージャーなど多様なポジションのスカウト運用・選考設計を担い、Stock-HRの基盤となる現場知見を蓄積。",
];

/* ---------- 会社の沿革 ---------- */
const HISTORY = [
  {
    year: "2025.12",
    title: "株式会社OpenYouth創業",
    body: "「Open Youth」の名のもと、若者の挑戦の選択肢を増やすことを掲げ、複数の事業ラインで実装を開始。",
  },
  {
    year: "2026.04",
    title: "Stock-HRを正式公開",
    body: "AIが現場で当たり前に使われる時代に、組織がAIを「安全に・標準化して・効果を測れる形で」使うためのAIプロダクトとして、最初の領域に採用を選んで実装。",
  },
  {
    year: "2026–",
    title: `Stock-HRをはじめ、${BUSINESS_COUNT}つの事業を並走`,
    body: "AIの波と、出会う課題に合わせて、事業ラインを増やしていく。",
  },
];

/* ---------- 会社概要 ---------- */
const PROFILE_ROWS: { k: string; v: string[]; mail?: boolean }[] = [
  { k: "会社名", v: ["株式会社OpenYouth"] },
  { k: "代表者", v: ["代表取締役 深谷 洸樹"] },
  { k: "設立", v: ["2025年12月26日"] },
  { k: "資本金", v: ["100万円"] },
  { k: "所在地", v: ["〒150-0043", "東京都渋谷区道玄坂１丁目１０−８"] },
  {
    k: "事業内容",
    v: [
      "組織AI活用プロダクト Stock-HR",
      "採用支援",
      "営業支援",
      "レジマッチ（医療キャリア・β）",
      "サロリク（美容採用）",
      "マーケティング・PR支援",
      "Webメディア事業",
    ],
  },
  { k: "問い合わせ", v: ["admin@openyouth.co.jp"], mail: true },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        eyebrowJp="会社情報"
        titleLines={["若者の挑戦の隣に、", "テクノロジーで立つ。"]}
        lead={
          <T text="株式会社OpenYouthは、テクノロジーと現場の知見で、若者が挑戦するための選択肢を増やしていく会社です。複数の事業を行き来しながら、プロダクトと運用支援、両方の手段で社会への実装を進めています。" />
        }
        meta={[
          { k: "目指す世界とやり方", v: "01" },
          { k: "3つの姿勢", v: "02" },
          { k: "代表メッセージ", v: "03" },
          { k: "沿革", v: "04" },
          { k: "会社概要", v: "05" },
        ]}
      />
      <VisionSection />
      <ValuesSection />
      <MessageSection />
      <HistorySection />
      <ProfileSection />
      <ContactCTA />
    </div>
  );
}

/* ============================================================
   社名と、目指す世界・やり方 — 読ませる章（トップのように塗らない）
============================================================ */
function VisionSection() {
  return (
    <section className="relative bg-[var(--color-slate-50)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <h2 className={LABEL + " lg:col-span-3 lg:pt-4"} style={JP}>
            社名に込めたこと
          </h2>
          <div className="min-w-0 lg:col-span-9">
            <ScrubText
              phrases={chunks("「Open Youth」は、若者に世界が開かれる、という意志からつけた社名です。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
            />
          </div>
        </div>

        <div className="mt-20 sm:mt-28 lg:grid lg:grid-cols-12 lg:gap-10">
          <div
            className="flex flex-col gap-16 sm:gap-20 lg:col-span-9 lg:col-start-4 xl:grid xl:grid-cols-2 xl:gap-14"
            data-reveal-stagger
          >
            <div className="min-w-0">
              <p className={LABEL} style={JP}>
                目指す世界
              </p>
              <h3
                className="mt-5 text-[min(23px,6.2vw)] sm:text-[clamp(23px,2.1vw,28px)] font-bold leading-[1.5] tracking-[-0.01em] text-[var(--color-slate-900)]"
                style={JP}
              >
                <T parts={["すべての若者に、"]} />
                <wbr />
                <span className="text-[var(--color-navy-600)]">
                  <T parts={["可能性の選択肢を。"]} />
                </span>
              </h3>
              <p className="mt-6 text-[16px] leading-[2.05] text-[var(--color-slate-600)]">
                <T text="学歴・所属・経験。これまでの「決まりごと」に縛られず、挑戦したいときに挑戦できる社会。選べる進路が一段増えること、信頼できる伴走者が隣にいること。そんな当たり前を、私たちの事業を通してひとつずつ増やしていきます。" />
              </p>
            </div>
            <div className="min-w-0">
              <p className={LABEL} style={JP}>
                私たちのやり方
              </p>
              <h3
                className="mt-5 text-[min(23px,6.2vw)] sm:text-[clamp(23px,2.1vw,28px)] font-bold leading-[1.5] tracking-[-0.01em] text-[var(--color-slate-900)]"
                style={JP}
              >
                <T parts={["テクノロジーと現場の知見で、", "挑戦のための", "「次の一歩」を増やす。"]} />
              </h3>
              <p className="mt-6 text-[16px] leading-[2.05] text-[var(--color-slate-600)]">
                <T text="プロダクトと事業支援、両方を持ち寄って、現場で起こる小さな摩擦からひとつずつ解いていく。スケールではなく、組織が自走できる確かさを優先します。" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3つの姿勢 — 濃紺の章。PCは3列、スマホは縦に積む
============================================================ */
function ValuesSection() {
  return (
    <section className="relative bg-[var(--color-navy-800)] py-28 text-[var(--color-slate-0)] sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <h2
            className="text-[15px] font-bold text-[var(--color-navy-200)] lg:col-span-3 lg:pt-4"
            style={JP}
          >
            事業を貫く、3つの姿勢
          </h2>
          <div className="min-w-0 lg:col-span-9">
            <ScrubText
              phrases={chunks("何をするか以前に、どう構えるか。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
              from="rgba(255,255,255,0.16)"
              to="#ffffff"
            />
            <p className="mt-8 max-w-[38em] text-[15px] leading-[2] text-white/70 sm:text-[16px]">
              <T text="すべての事業に通底させている、私たちの構えです。" />
            </p>
          </div>
        </div>

        <ol
          className="mt-20 flex flex-col gap-16 sm:mt-28 lg:grid lg:grid-cols-3 lg:gap-12"
          data-reveal-stagger
        >
          {VALUES.map((v) => (
            <li key={v.no} className="min-w-0">
              <span
                className="block text-[clamp(40px,4.4vw,60px)] font-bold leading-none tabular text-[var(--color-accent)]"
                style={{ ...EN, letterSpacing: "-0.02em" }}
              >
                {v.no}
              </span>
              <h3
                className="mt-6 whitespace-nowrap text-[clamp(30px,3vw,40px)] font-bold leading-[1.3] tracking-[-0.02em]"
                style={JP}
              >
                {v.jp}
              </h3>
              <p className="mt-5 text-[15px] leading-[2] text-white/70 sm:text-[16px]">
                <T text={v.body} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   代表メッセージ — 写真は左で止め、本文は右で読む
============================================================ */
function Rich({ parts }: { parts: Part[] }) {
  return (
    <>
      {parts.map((p, i) => {
        const prev = parts[i - 1];
        const prevText = prev === undefined ? "" : typeof prev === "string" ? prev : prev.em;
        const curText = typeof p === "string" ? p : p.em;
        // 始め括弧の直後・句読点や閉じ括弧の直前では折り返さない
        const canBreak = i > 0 && !/[「（]$/.test(prevText) && !/^[、。」）]/.test(curText);
        return (
          <Fragment key={i}>
            {canBreak && <wbr />}
            {typeof p === "string" ? (
              <T text={p} glueTail={i === parts.length - 1} />
            ) : (
              <strong className="font-bold text-[var(--color-navy-600)]">
                <T text={p.em} glueTail={i === parts.length - 1} />
              </strong>
            )}
          </Fragment>
        );
      })}
    </>
  );
}

function MessageSection() {
  return (
    <section id="message" className="relative scroll-mt-16 bg-[var(--color-slate-0)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className={LABEL} style={JP}>
                代表メッセージ
              </h2>
              <figure className="mt-6 lg:mt-8" data-reveal>
                <div className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl bg-[var(--color-slate-100)] lg:aspect-[4/5] lg:max-w-[340px]">
                  <Image
                    src="/images/company/ceo-2026-v2.jpg"
                    alt="代表取締役 深谷洸樹"
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 420px, 92vw"
                    className="object-cover object-[50%_16%] lg:object-center"
                  />
                </div>
                <figcaption className="mt-5">
                  <span className="block text-[14px] font-bold text-[var(--color-slate-500)]">代表取締役</span>
                  <span className="mt-1 block text-[22px] font-bold" style={JP}>
                    深谷 洸樹
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <div
              className="max-w-[36em] space-y-7 text-[16px] leading-[2.05] text-[var(--color-slate-800)] sm:text-[17px]"
              data-reveal-stagger
            >
              {MESSAGE.map((parts, i) => (
                <p key={i}>
                  <Rich parts={parts} />
                </p>
              ))}
            </div>
            <p className="mt-12 text-[15px] font-bold text-[var(--color-slate-900)]" style={JP}>
              代表取締役　深谷 洸樹
            </p>

            <div className="mt-24 sm:mt-32">
              <h3 className={LABEL} style={JP}>
                代表の経歴
              </h3>
              <ol className="mt-6 flex flex-col gap-1 sm:mt-8" data-reveal-stagger>
                {CAREER.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-4 px-1 py-3 sm:gap-6 sm:px-6"
                  >
                    <span
                      className="w-6 shrink-0 text-[14px] font-bold tabular text-[var(--color-slate-400)]"
                      style={EN}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="min-w-0 text-[15px] leading-[1.95] text-[var(--color-slate-600)] sm:text-[16px]">
                      <T text={c} />
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   沿革 — 年を大きく、説明を横に置く行
============================================================ */
function HistorySection() {
  return (
    <section className="relative bg-[var(--color-slate-50)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <h2 className={LABEL + " lg:col-span-3 lg:pt-4"} style={JP}>
            沿革
          </h2>
          <ol className="flex min-w-0 flex-col gap-14 sm:gap-20 lg:col-span-9" data-reveal-stagger>
            {HISTORY.map((h) => (
              <li key={h.year} className="flex flex-col gap-5 lg:grid lg:grid-cols-9 lg:items-baseline lg:gap-10">
                <p
                  className="whitespace-nowrap text-[clamp(48px,5vw,72px)] font-bold leading-none tabular tracking-[-0.03em] text-[var(--color-navy-600)] lg:col-span-3"
                  style={EN}
                >
                  {h.year}
                </p>
                <div className="min-w-0 lg:col-span-6">
                  <h3 className="text-[clamp(20px,1.9vw,24px)] font-bold leading-[1.55]" style={JP}>
                    <T text={h.title} />
                  </h3>
                  <p className="mt-3 text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px]">
                    <T text={h.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   会社概要 — 線を引かず、行の地色と余白で区切る
============================================================ */
function ProfileSection() {
  return (
    <section id="colophon" className="relative bg-[var(--color-slate-0)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <h2 className={LABEL + " lg:col-span-3 lg:pt-6"} style={JP}>
            会社概要
          </h2>
          <div className="min-w-0 lg:col-span-9">
            <dl className="flex flex-col" data-reveal>
              {PROFILE_ROWS.map((row, i) => (
                <div
                  key={row.k}
                  className={
                    "flex flex-col gap-2 rounded-2xl px-5 py-5 sm:px-8 sm:py-6 lg:grid lg:grid-cols-9 lg:items-baseline lg:gap-10 " +
                    (i % 2 === 0 ? "bg-[var(--color-slate-50)]" : "")
                  }
                >
                  <dt className="text-[14px] font-bold text-[var(--color-slate-500)] lg:col-span-2">{row.k}</dt>
                  <dd className="min-w-0 text-[16px] font-bold leading-[1.8] text-[var(--color-slate-900)] lg:col-span-7" style={JP}>
                    {row.mail ? (
                      <a href={`mailto:${row.v[0]}`} className="group inline-flex">
                        <span className="underline-grow" style={EN}>
                          {row.v[0]}
                        </span>
                      </a>
                    ) : row.v.length === 1 ? (
                      row.v[0]
                    ) : (
                      <ul className="flex flex-col gap-1">
                        {row.v.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 px-1 text-[15px] leading-[2] text-[var(--color-slate-600)] sm:px-8">
              <T text="お取引・契約・取材に関するご連絡は、" />
              <wbr />
              <Link href="/contact" className="group inline-flex font-bold text-[var(--color-navy-600)]">
                <span className="underline-grow">お問い合わせ</span>
              </Link>
              <T text="までお願いいたします。" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   お問い合わせ — トップの ContactCTA と同じ型
============================================================ */
function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-600)] py-24 text-[var(--color-slate-0)] sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[15px] font-bold text-[var(--color-navy-100)]" style={JP}>
          お問い合わせ
        </p>
        <Link
          href="/contact"
          className="group mt-6 inline-flex items-baseline gap-4 text-[clamp(64px,15vw,200px)] font-bold leading-[1] tracking-[-0.04em] sm:gap-8"
          style={JP}
        >
          <span className="relative">
            相談する
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-[0.06em] w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
          </span>
        </Link>
        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[34em] text-[15px] leading-[2] text-white/80 sm:text-[16px]">
            <T text="Stock-HRの導入相談、採用・営業支援のご依頼、メディアへの掲載や協業、カジュアル面談まで。30分の対話から、はじめましょう。" />
          </p>
          <Link href="/recruitment" className="group inline-flex shrink-0 items-center text-[15px] font-bold text-white">
            <span className="underline-grow">採用情報を見る</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
