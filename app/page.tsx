// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { NEWS_ITEMS, NEWS_CATEGORY_LABEL, type NewsItem } from "@/lib/news";
import { CountUp } from "@/components/count-up";
import { PaintTitle } from "@/components/motion/paint-title";
import { ScrubText } from "@/components/motion/scrub-text";
import { FieldTicker } from "@/components/motion/field-ticker";
import { Phrased } from "@/components/motion/phrased";
import { PhrasedSafe } from "@/components/motion/phrased-safe";
import { ParallaxRow } from "@/components/motion/parallax-row";
import { phrases } from "@/lib/phrases";
import {
  IconLongBet,
  IconFieldFirst,
  IconOpenByDefault,
} from "@/components/icons";
import {
  BUSINESS_COUNT,
  MEDIA_COUNT,
  MEDIA_SITES,
  getBusiness,
  businessesIn,
  type Business,
} from "@/lib/businesses";

import type { ComponentType, SVGProps } from "react";

type Service = Business;

type ValueItem = {
  no: string;
  en: string;
  jp: string;
  body: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const VALUES: ValueItem[] = [
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

type NumberItem = {
  label: string;
  value: number | string;
  suffix?: string;
  unit: string;
};

const NUMBERS: NumberItem[] = [
  { label: "事業", value: BUSINESS_COUNT, unit: "つ" },
  { label: "代表の採用実績", value: 100, suffix: "+", unit: "名" },
  { label: "支援企業", value: 10, suffix: "+", unit: "社" },
  { label: "創業", value: "2025", unit: "年" },
];

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const homeNews = NEWS_ITEMS.slice(0, 4);
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <Hero />
      <VisionSection />
      <WhySection />
      <ValuesSection />
      <ServicesSection />
      <FounderTeaser />
      <NewsTeaser news={homeNews} />
      <ContactCTA />
    </div>
  );
}

/* ============================================================
   Hero — 題字だけで立つ。事業は置かない
============================================================ */
const FIELDS = ["AI", "採用", "営業", "医療", "美容", "マーケティング", "文化", "観光", "キャリア", "セキュリティ", "エンタメ"];

function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-slate-0)]">
        <div className="relative mx-auto flex min-h-[calc(100svh-170px)] max-w-[1320px] flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <PaintTitle
            lines={[
              { text: "すべての若者に、", segments: ["すべての", "若者に、"], className: "[--paint-to:var(--color-slate-900)]" },
              { text: "可能性の選択肢を。", segments: ["可能性の", "選択肢を。"], className: "[--paint-to:var(--color-navy-600)]" },
            ]}
            className="text-[16.5vw] font-bold leading-[1.12] tracking-[-0.035em] lg:text-[clamp(34px,9.4vw,136px)] lg:leading-[1.14]"
            style={{ fontFamily: "var(--font-display-jp)" }}
            delay={0.15}
          />

          <div
            className="after-paint mt-10 flex flex-col gap-9 sm:mt-12 lg:mt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
            style={{ ["--after-delay" as string]: "0.85s" }}
          >
            <p className="max-w-[38em] text-[15.5px] leading-[1.95] text-[var(--color-slate-600)] sm:text-[17px]">
              <Phrased text="テクノロジーと現場の知見で、若者の挑戦の選択肢を増やしていく会社です。" />
              <br />
              <Phrased text="組織AI活用プロダクト" />{" "}
              <strong className="font-bold text-[var(--color-slate-900)]">Stock-HR</strong>{" "}
              <Phrased text={`を中核に、${BUSINESS_COUNT}つの事業を展開しています。`} />
            </p>
            <div className="flex shrink-0 flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link
                href="/services"
                className="btn-press inline-flex items-center rounded-full bg-[var(--color-navy-600)] px-8 py-4 text-[15px] font-bold text-[var(--color-slate-0)] transition hover:bg-[var(--color-navy-800)]"
              >
                事業を見る
              </Link>
              <Link
                href="/aboutus"
                className="group inline-flex items-center px-1 text-[15px] font-bold text-[var(--color-slate-900)]"
              >
                <span className="underline-grow">会社のことを読む</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FieldTicker words={FIELDS} />
    </>
  );
}

/* ============================================================
   Vision / Mission — スクロールに合わせて文節ごとに塗る
============================================================ */
function VisionSection() {
  return (
    <section className="relative bg-[var(--color-slate-0)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <p
            className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-4"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            目指す世界
          </p>
          <div className="lg:col-span-9">
            <ScrubText
              phrases={phrases("学歴・所属・経験。これまでの決まりごとに縛られず、挑戦したいときに挑戦できる社会へ。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
            />
            <p className="mt-8 max-w-[38em] text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px]">
              <PhrasedSafe text="選べる進路が一段増えること、信頼できる伴走者が隣にいること。そんな当たり前を、私たちの事業を通してひとつずつ増やしていきます。" tail />
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 sm:mt-32 lg:grid lg:grid-cols-12 lg:gap-10">
          <p
            className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-4"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            私たちのやり方
          </p>
          <div className="lg:col-span-9">
            <ScrubText
              phrases={phrases("テクノロジーと現場の知見で、挑戦のための「次の一歩」を増やす。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
            />
            <p className="mt-8 max-w-[38em] text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px]">
              <PhrasedSafe text="プロダクトと事業支援、両方を持ち寄って、現場で起こる小さな摩擦からひとつずつ解いていく。スケールではなく、組織が自走できる確かさを優先します。" tail />
            </p>
          </div>
        </div>

        <p className="mt-24 text-[14px] leading-[1.9] text-[var(--color-slate-500)] sm:mt-32 lg:ml-[25%] lg:pl-2">
          <PhrasedSafe text="社名の「Open Youth」は、若者に世界が開かれる、という意志からつけました。" tail />
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   Why — 解こうとしていること（濃紺の章）＋数字
============================================================ */
const WHY_ITEMS = [
  {
    k: "AIの波に、しっかり乗ること。",
    body: "産業革命と同等以上の変化が、いまAIで起きています。波を眺めるのではなく、現場のプロダクトに落とし込みながら、私たち自身が乗り続けます。",
  },
  {
    k: "関わってきた業界の、課題を解くこと。",
    body: "採用・営業・医療キャリア。代表が現場で見てきた業界の不便から、事業を選んでいます。新しい領域も、手触りのある場所から始めます。",
  },
  {
    k: "プロダクトと現場、両輪で進めること。",
    body: "作って終わりにしません。現場で運用しながらプロダクトを育て、プロダクトで運用を底上げする。両輪が揃って初めて、組織は自走できると考えています。",
  },
  {
    k: "時代に合わせて、事業は増やしていく。",
    body: "今やっていない領域も、明日始まるかもしれない。社会の変化と私たちの好奇心を信じて、事業を増やしていきます。",
  },
];

function WhySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-800)] py-28 text-[var(--color-slate-0)] sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <p
            className="text-[15px] font-bold text-[var(--color-navy-200)] lg:col-span-3 lg:pt-4"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            解こうとしていること
          </p>
          <div className="lg:col-span-9">
            <ScrubText
              as="h2"
              phrases={phrases("事業はまだ" + BUSINESS_COUNT + "つ。すべての根っこには、同じ問いがあります。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
              from="rgba(255,255,255,0.16)"
              to="#ffffff"
            />
          </div>
        </div>

        <ol className="mt-20 flex flex-col gap-14 sm:mt-28 sm:gap-20">
          {WHY_ITEMS.map((it, i) => (
            <li key={it.k} className="flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-10" data-reveal>
              <span
                className="text-[clamp(40px,5vw,64px)] font-bold leading-none tabular text-[var(--color-accent)] lg:col-span-3"
                style={{ fontFamily: "var(--font-display-en)", letterSpacing: "-0.02em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:col-span-9 lg:grid lg:grid-cols-9 lg:gap-10">
                <p
                  className="text-[clamp(22px,2.6vw,32px)] font-bold leading-[1.45] lg:col-span-5"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  <PhrasedSafe text={it.k} tail />
                </p>
                <p className="mt-4 text-[15px] leading-[2] text-white/70 lg:col-span-4 lg:mt-1">
                  <PhrasedSafe text={it.body} tail />
                </p>
              </div>
            </li>
          ))}
        </ol>

        <dl className="mt-24 grid grid-cols-2 gap-x-6 gap-y-12 sm:mt-32 lg:grid-cols-4" data-reveal-stagger>
          {NUMBERS.map((n) => (
            <div key={n.label} className="min-w-0">
              <dt className="text-[14px] font-bold text-[var(--color-navy-200)]">{n.label}</dt>
              <dd className="mt-3 flex items-baseline gap-1.5">
                <span
                  className="text-[clamp(44px,6vw,84px)] font-bold leading-none tabular"
                  style={{ fontFamily: "var(--font-display-en)", letterSpacing: "-0.03em" }}
                >
                  {typeof n.value === "number" ? <CountUp value={n.value} suffix={n.suffix} /> : <CountUp literal={n.value} />}
                </span>
                <span className="text-[16px] font-bold text-white/70">{n.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ============================================================
   Values — 3つの姿勢（行ごとに窓からせり上がる）
============================================================ */
function ValuesSection() {
  return (
    <section className="relative bg-[var(--color-slate-0)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <h2
          className="text-[15px] font-bold text-[var(--color-navy-600)]"
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          事業を貫く、3つの姿勢
        </h2>
        <ul className="mt-14 flex flex-col gap-16 sm:mt-20 sm:gap-24">
          {VALUES.map((v) => (
            <li key={v.no} className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-end lg:gap-10" data-mask>
              <p
                aria-label={v.jp}
                className="text-[clamp(48px,14vw,128px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--color-slate-900)] lg:col-span-7"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                {/* 読点の位置で2行に分け、行ごとにせり上げる */}
                {v.jp.split(/(?<=、)/).map((seg, si) => (
                  <span key={si} aria-hidden className="mask-line whitespace-nowrap">
                    <span style={{ ["--d" as string]: `${si * 0.12}s` }}>{seg}</span>
                  </span>
                ))}
              </p>
              <p className="max-w-[30em] text-[15px] leading-[2] text-[var(--color-slate-600)] lg:col-span-5 lg:pb-3">
                <PhrasedSafe text={v.body} tail />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Services — 見出し → Stock-HR（濃紺の章）→ ほかの事業の行
============================================================ */
function ServicesSection() {
  return (
    <>
      <section className="relative bg-[var(--color-slate-50)] pt-28 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
            <p
              className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-4"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              事業
            </p>
            <div className="lg:col-span-9">
              <ScrubText
                as="h2"
                phrases={phrases(BUSINESS_COUNT + "つの事業で、目指す世界を形にする。")}
                className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
              />
              <p className="mt-8 max-w-[38em] text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px]">
                <PhrasedSafe text="それぞれが独立して動きつつ、「若者の挑戦を支える」というひとつの目的で繋がっています。" tail />
              </p>
            </div>
          </div>
        </div>
      </section>

      <StockHRChapter />

      <section className="relative bg-[var(--color-slate-0)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <BusinessGroup label="プロダクト" items={[getBusiness("resimatch"), getBusiness("saloriku")]} />
          <BusinessGroup label="支援" items={businessesIn("support")} className="mt-20 sm:mt-28" />
        </div>
      </section>

      <MediaChapter />
    </>
  );
}

function BusinessGroup({ label, items, className = "" }: { label: string; items: Service[]; className?: string }) {
  return (
    <div className={className}>
      <h3
        className="text-[15px] font-bold text-[var(--color-navy-600)]"
        style={{ fontFamily: "var(--font-display-jp)" }}
      >
        {label}
      </h3>
      <ul className="mt-6 flex flex-col gap-3 sm:mt-8">
        {items.map((s) => (
          <li key={s.slug} data-reveal>
            <BusinessRow s={s} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const BUSINESS_IMAGE: Record<string, { src: string; alt: string; pos: string }> = {
  saloriku: { src: "/images/services/saloriku-hero.png", alt: "サロリクの画面", pos: "object-top" },
  resimatch: { src: "/images/services/resimatch.jpg", alt: "レジマッチの画面", pos: "object-left" },
};

function BusinessRow({ s }: { s: Service }) {
  const img = BUSINESS_IMAGE[s.slug];
  return (
    <Link
      href={s.href}
      target={s.external ? "_blank" : undefined}
      rel={s.external ? "noreferrer" : undefined}
      className="group flex flex-col gap-5 rounded-2xl px-1 py-6 transition-colors duration-300 hover:bg-[var(--color-slate-50)] sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-8"
    >
      <span
        className="text-[14px] font-bold tabular text-[var(--color-slate-400)] lg:col-span-1"
        style={{ fontFamily: "var(--font-display-en)" }}
      >
        {s.no}
      </span>
      <div className={"min-w-0 " + (img ? "lg:col-span-6" : "lg:col-span-11 lg:grid lg:grid-cols-11 lg:items-baseline lg:gap-10")}>
        <p
          className={
            "heading-jp text-[clamp(28px,3.6vw,48px)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--color-slate-900)] transition-colors duration-300 group-hover:text-[var(--color-navy-600)] " +
            (img ? "" : "lg:col-span-6")
          }
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          {s.name}
        </p>
        <p className={"mt-3 text-[15px] leading-[1.9] text-[var(--color-slate-600)] " + (img ? "" : "lg:col-span-5 lg:mt-0")}>
          <PhrasedSafe text={s.tagline} tail />
        </p>
      </div>
      {img && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[var(--color-slate-100)] lg:col-span-5">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className={"object-cover transition-transform duration-700 group-hover:scale-[1.04] " + img.pos}
          />
        </div>
      )}
    </Link>
  );
}

/* ============================================================
   Stock-HR — 代表的な事業（濃紺の章）
============================================================ */
function StockHRChapter() {
  const s = getBusiness("stockhr");
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-800)] py-28 text-[var(--color-slate-0)] sm:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p
          className="text-[15px] font-bold text-[var(--color-navy-200)]"
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          代表的な事業
        </p>
        <PaintTitle
          as="h2"
          onView
          lines={[{ text: "Stock-HR" }]}
          className="mt-6 text-[clamp(64px,15vw,200px)] font-bold leading-[0.95] tracking-[-0.04em] [--paint-from:rgba(255,255,255,0.14)] [--paint-to:#ffffff]"
          style={{ fontFamily: "var(--font-display-en)" }}
        />

        <div className="mt-12 flex flex-col gap-14 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-6" data-reveal-stagger>
            <p
              className="text-[clamp(24px,3vw,40px)] font-bold leading-[1.4]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              {s.tagline}
            </p>
            <p className="mt-6 text-[15px] leading-[2] text-white/75 sm:text-[16px]">
              <PhrasedSafe text={s.approach} tail />
            </p>
            <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {STOCKHR_POINTS.map((f, i) => (
                <li key={f.t}>
                  <p className="flex items-baseline gap-3 text-[17px] font-bold" style={{ fontFamily: "var(--font-display-jp)" }}>
                    <span className="text-[13px] tabular text-[var(--color-accent)]" style={{ fontFamily: "var(--font-display-en)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.t}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.9] text-white/65">
                    <PhrasedSafe text={f.d} tail />
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href="https://stock-hr.com"
                target="_blank"
                rel="noreferrer"
                className="btn-press inline-flex items-center rounded-full bg-[var(--color-slate-0)] px-8 py-4 text-[15px] font-bold text-[var(--color-navy-800)] transition hover:bg-[var(--color-navy-100)]"
              >
                Stock-HR の公式サイト
              </a>
              <a
                href="https://app.stock-hr.jp"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center px-1 text-[15px] font-bold text-white"
              >
                <span className="underline-grow">プロダクトを開く</span>
              </a>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-6" data-reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white/[0.04]">
              <Image
                src="/images/services/stockhr-dashboard.png"
                alt="Stock-HR のダッシュボード"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-center p-4 sm:p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STOCKHR_POINTS = [
  { t: "個人情報を、設計で守る", d: "AIへの送信は学習に使われない条件で行い、候補者情報は組織ごとに分けて保管します。" },
  { t: "プロの推論を内蔵", d: "課題仮説を立ててから訴求を選ぶ2段階の推論で、使う人による精度の差を吸収します。" },
  { t: "組織で効果が見える", d: "誰がどの訴求で送ったかが残り、改善を組織として回せます。" },
  { t: "運用ごと並走する", d: "上位のプランでは、プロが選定から運用設計まで一緒に回し、使い方ごと組織に残します。" },
];

/* ============================================================
   Webメディア事業（黒に近い章）— 媒体名の帯＋スマホ画面の列
============================================================ */
const PHONE_DEPTH = [0.9, -0.4, 0.6, -0.8, 0.3];

function MediaChapter() {
  const media = getBusiness("media");
  return (
    <section className="relative overflow-hidden bg-[var(--color-slate-900)] text-[var(--color-slate-0)]">
      <FieldTicker words={MEDIA_SITES.map((m) => m.name)} className="bg-[var(--color-accent)] text-white" />
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <p
            className="text-[15px] font-bold text-[var(--color-navy-200)] lg:col-span-3 lg:pt-4"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            {media.name}
          </p>
          <div className="lg:col-span-9">
            <ScrubText
              as="h2"
              phrases={phrases(MEDIA_COUNT + "つの領域で、知りたいことに答える専門メディアを。")}
              className="text-[clamp(26px,4.2vw,58px)] font-bold leading-[1.5] tracking-[-0.02em]"
              from="rgba(255,255,255,0.16)"
              to="#ffffff"
            />
          </div>
        </div>

        <ParallaxRow className="no-scrollbar -mx-5 mt-16 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:mt-24 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0 lg:py-16">
          {MEDIA_SITES.map((m, i) => (
            <a
              key={m.slug}
              href={m.url}
              target="_blank"
              rel="noreferrer"
              data-depth={PHONE_DEPTH[i]}
              className="group w-[58vw] max-w-[260px] shrink-0 snap-start lg:w-auto lg:max-w-none"
            >
              <div className="relative aspect-[600/1298] overflow-hidden rounded-[22px] bg-white/5 ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src={`/images/media/sp/${m.slug}.webp`}
                  alt={`${m.name}のスマホ画面`}
                  fill
                  sizes="(min-width: 1024px) 18vw, 58vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-5 text-[13px] font-bold text-[var(--color-navy-200)]">{m.domain}</p>
              <p className="mt-1 text-[18px] font-bold leading-snug" style={{ fontFamily: "var(--font-display-jp)" }}>
                {m.name}
              </p>
            </a>
          ))}
        </ParallaxRow>

        <div className="mt-14 sm:mt-16">
          <Link
            href="/services/media"
            className="btn-press inline-flex items-center rounded-full bg-[var(--color-slate-0)] px-8 py-4 text-[15px] font-bold text-[var(--color-slate-900)] transition hover:bg-[var(--color-navy-100)]"
          >
            {MEDIA_COUNT}つのメディアを見る
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Founder — 代表から
============================================================ */
function FounderTeaser() {
  return (
    <section className="relative bg-[var(--color-slate-0)] py-28 sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
          <p
            className="text-[15px] font-bold text-[var(--color-navy-600)] lg:col-span-3 lg:pt-4"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            代表から
          </p>
          <div className="lg:col-span-9">
            <ScrubText
              as="blockquote"
              phrases={phrases("関わってきた業界には、まだ解かれていない当たり前の不便がある。AIによる変化と一緒に、その不便をひとつずつ解いていく会社にしたい。")}
              className="text-[clamp(22px,3.2vw,44px)] font-bold leading-[1.6] tracking-[-0.01em]"
            />
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[15px] font-bold text-[var(--color-slate-900)]" style={{ fontFamily: "var(--font-display-jp)" }}>
                代表取締役　深谷 洸樹
              </p>
              <Link href="/aboutus#message" className="group inline-flex items-center text-[15px] font-bold text-[var(--color-navy-600)]">
                <span className="underline-grow">メッセージを読む</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   News
============================================================ */
function NewsTeaser({ news }: { news: NewsItem[] }) {
  return (
    <section className="relative bg-[var(--color-slate-50)] py-28 sm:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <h2
            className="text-[clamp(32px,4.6vw,64px)] font-bold leading-[1.15] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            お知らせ
          </h2>
          <Link href="/news" className="group inline-flex shrink-0 items-center pb-2 text-[15px] font-bold text-[var(--color-slate-900)]">
            <span className="underline-grow">一覧を見る</span>
          </Link>
        </div>

        <ul className="mt-12 flex flex-col gap-2" data-reveal-stagger>
          {news.map((n) => (
            <li key={`${n.date}-${n.title}`}>
              <NewsRow item={n} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NewsRow({ item }: { item: NewsItem }) {
  const cls =
    "group flex flex-col gap-2 rounded-2xl px-1 py-6 transition-colors duration-300 hover:bg-[var(--color-slate-0)] sm:px-6 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-8";
  const inner = (
    <>
      <p className="flex items-baseline gap-4 lg:col-span-3">
        <time className="text-[14px] tabular text-[var(--color-slate-500)]" style={{ fontFamily: "var(--font-display-en)" }}>
          {item.date}
        </time>
        <span className="text-[13px] font-bold text-[var(--color-navy-600)]">{NEWS_CATEGORY_LABEL[item.category]}</span>
      </p>
      <p
        className="text-balance text-[17px] font-bold leading-[1.6] text-[var(--color-slate-900)] transition-colors group-hover:text-[var(--color-navy-600)] sm:text-[19px] lg:col-span-9"
        style={{ fontFamily: "var(--font-display-jp)" }}
      >
        {item.title}
      </p>
    </>
  );
  if (!item.href) return <div className={cls}>{inner}</div>;
  if (item.href.startsWith("http")) {
    return (
      <a className={cls} href={item.href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={item.href}>
      {inner}
    </Link>
  );
}

/* ============================================================
   Contact — 「相談する」の特大文字そのものがボタン
============================================================ */
function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-600)] py-24 text-[var(--color-slate-0)] sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[15px] font-bold text-[var(--color-navy-100)]" style={{ fontFamily: "var(--font-display-jp)" }}>
          お問い合わせ
        </p>
        <Link
          href="/contact"
          className="group mt-6 inline-flex items-baseline gap-4 text-[clamp(64px,15vw,200px)] font-bold leading-[1] tracking-[-0.04em] sm:gap-8"
          style={{ fontFamily: "var(--font-display-jp)" }}
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
            <PhrasedSafe text="Stock-HRの導入相談、採用・営業支援のご依頼、メディアへの掲載や協業、カジュアル面談まで。30分の対話から、はじめましょう。" tail />
          </p>
          <Link href="/recruitment" className="group inline-flex shrink-0 items-center text-[15px] font-bold text-white">
            <span className="underline-grow">採用情報を見る</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
