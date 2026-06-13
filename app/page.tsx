// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { NEWS_ITEMS, type NewsItem } from "@/lib/news";
import { CountUp } from "@/components/count-up";
import {
  IconStockHR,
  IconRecruitment,
  IconSales,
  IconResiMatch,
  IconSaloriku,
  IconLongBet,
  IconFieldFirst,
  IconOpenByDefault,
  IconArrowOut,
} from "@/components/icons";
import {
  BlueprintRings,
  GrowthSpray,
  MiniBars,
  PulseNetwork,
  QuoteBracket,
  TimelineArc,
} from "@/components/decorations";

import type { ComponentType, SVGProps } from "react";

type ServiceStatus = "Active" | "New" | "Beta" | "Coming Soon";

type Service = {
  no: string;
  slug: string;
  name: string;        // プロダクト名・サービス名（日本語/英語混在OKだが見出し内で混ぜない）
  tagline: string;     // 短い説明（1行）
  category: string;
  problem: string;     // 「どんな課題に向き合っているか」
  approach: string;    // 「どう解いているか」
  highlights: string[];
  status: ServiceStatus;
  href: string;
  external?: boolean;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const SERVICES: Service[] = [
  {
    no: "01",
    slug: "stockhr",
    name: "Stock-HR",
    tagline: "AIを、組織のものにする。",
    category: "Enterprise AI · HR",
    problem:
      "AIが当たり前に現場で使われる時代に、個人情報の漏洩リスク、人によってバラつく精度、組織として測れない効果――AIを「安全に・標準化して」使える状態には、まだ届かない。",
    approach:
      "Stock-HRは個人情報を抽象化したままAIを使える設計と、プロの推論フレームで人による精度の差を吸収する仕組みで、組織全体のAI活用を最大化します。最初の領域は採用。",
    highlights: ["AIガバナンス", "標準化された推論", "組織で可視化"],
    status: "Active",
    href: "https://stock-hr.com",
    external: true,
    Icon: IconStockHR,
  },
  {
    no: "02",
    slug: "recruitment",
    name: "採用支援",
    tagline: "母集団形成から定着まで、現場に並走。",
    category: "Recruitment Support",
    problem:
      "採用担当者の手数が足りない。スカウトも選考も日次のオペレーションも、全部を高い精度で回せる体制が組みづらい。",
    approach:
      "Stock-HRの運用知見を背景に、ペルソナ設計・スカウト運用・選考ロジック・日次の書類選考まで、業界横断で並走します。",
    highlights: ["スカウト運用", "ペルソナ設計", "選考設計"],
    status: "Active",
    href: "/services#recruitment",
    Icon: IconRecruitment,
  },
  {
    no: "03",
    slug: "sales",
    name: "営業支援",
    tagline: "BtoBセールスを、内製チームと一緒に走らせる。",
    category: "Sales Support",
    problem:
      "PMF前後のプロダクトで、内製セールスを十分に組めない。アポ獲得から商談クロージングまで、繋ぎ目で止まってしまう。",
    approach:
      "インサイドセールスから商談同席・営業資料整備まで、現場に踏み込んで一緒に走らせます。BtoB SaaS / 受託の現場知をベースに。",
    highlights: ["インサイドセールス", "商談同席", "営業設計"],
    status: "Active",
    href: "/services#sales",
    Icon: IconSales,
  },
  {
    no: "04",
    slug: "resimatch",
    name: "レジマッチ",
    tagline: "医療業界の就活を、DX化する。",
    category: "Healthcare × Career",
    problem:
      "初期研修先の選択肢は、いまだに紙とOB訪問が中心。医療業界の就活はDX化が大きく遅れています。",
    approach:
      "病院と研修医のマッチングを、情報の整理とオンライン化で改めて設計しました。病院一括比較・AIレジュメ生成・ダイレクトスカウトをひとつのプロダクトに。現在テスト運用中。",
    highlights: ["病院一括比較", "AIレジュメ生成", "ダイレクトスカウト"],
    status: "Beta",
    href: "https://www.resi-match.com/lp1",
    external: true,
    Icon: IconResiMatch,
  },
  {
    no: "05",
    slug: "saloriku",
    name: "サロリク",
    tagline: "美容師の採用を、お店専用ページで。",
    category: "Beauty × Recruitment",
    problem:
      "美容室・理容室の採用は、媒体に高い初期費用と不透明な運用費を払い続ける構造になりがち。小さなサロンほど、自分たちの採用ページを持つ余力がありません。",
    approach:
      "申し込みから簡単なヒアリングだけで、AIがそのお店専用の採用ページを生成し、公開まで完結。初期費用0円・月額制で、どんな規模のサロンも自社の採用ページを持てる形にしました。",
    highlights: ["初期費用0円", "AIでページ生成", "月額1万円〜"],
    status: "New",
    href: "https://saloriku.com",
    external: true,
    Icon: IconSaloriku,
  },
];

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
  hint?: string;
};

const NUMBERS: NumberItem[] = [
  { label: "事業ライン", value: 5, suffix: "", hint: "AI · HR · Sales · Medical · Beauty" },
  { label: "代表の採用実績", value: 100, suffix: "+", hint: "名 — 採用立ち上げ〜組織グロース" },
  { label: "支援企業", value: 10, suffix: "+", hint: "社 — BtoB · SaaS · 事業会社" },
  { label: "創業", value: "2025" as string, hint: "December · Shibuya" },
];

export default function HomePage() {
  const homeNews = NEWS_ITEMS.slice(0, 3);
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <Hero />
      <NumbersStrip />
      <VisionSection />
      <WhySection />
      <ValuesSection />
      <ServicesSection />
      <StockHRSpot />
      <FounderTeaser />
      <NewsTeaser news={homeNews} />
      <ContactCTA />
    </div>
  );
}

/* ============================================================
   Service honeycomb — pointy-top hex tiles in a staggered grid
============================================================ */

type HexTileData =
  | {
      kind: "service";
      label: string;
      sub: string;
      status: ServiceStatus;
      Icon: ComponentType<SVGProps<SVGSVGElement>>;
      href: string;
      external?: boolean;
    }
  | { kind: "exploring"; label: string };

const HEX_TILES: HexTileData[] = [
  {
    kind: "service",
    label: "Stock-HR",
    sub: "Enterprise AI",
    status: "Active",
    Icon: IconStockHR,
    href: "https://stock-hr.com",
    external: true,
  },
  {
    kind: "service",
    label: "採用支援",
    sub: "Recruitment",
    status: "Active",
    Icon: IconRecruitment,
    href: "/services#recruitment",
  },
  {
    kind: "service",
    label: "営業支援",
    sub: "Sales",
    status: "Active",
    Icon: IconSales,
    href: "/services#sales",
  },
  {
    kind: "service",
    label: "レジマッチ",
    sub: "Medical Career",
    status: "Beta",
    Icon: IconResiMatch,
    href: "https://www.resi-match.com/lp1",
    external: true,
  },
  {
    kind: "service",
    label: "サロリク",
    sub: "Beauty Recruit",
    status: "New",
    Icon: IconSaloriku,
    href: "https://saloriku.com",
    external: true,
  },
];

// Regular pointy-top hexagon
const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

function HexTile({ tile }: { tile: HexTileData }) {
  if (tile.kind === "exploring") {
    return (
      <div className="group relative aspect-[1/1.155]">
        {/* dashed-style hex via two stacked clipped layers */}
        <div
          className="absolute inset-0 bg-[var(--color-slate-300)]"
          style={{ clipPath: HEX_CLIP }}
        />
        <div
          className="absolute inset-[2px] bg-[var(--color-slate-50)]"
          style={{ clipPath: HEX_CLIP }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center text-[var(--color-slate-600)]">
          <span
            className="text-[20px] text-[var(--color-slate-400)] transition group-hover:text-[var(--color-navy-700)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            +
          </span>
          <p
            className="mt-1 text-[12px] font-bold"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            {tile.label}
          </p>
          <p
            className="mt-0.5 text-[8.5px] uppercase tracking-[0.22em] text-[var(--color-slate-400)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            Exploring
          </p>
        </div>
      </div>
    );
  }

  const isActive = tile.status === "Active";
  const isNew = tile.status === "New";
  const isBeta = tile.status === "Beta";

  // Background: solid navy for Active/New, soft navy gradient for Beta
  const bg = isActive || isNew
    ? "bg-[var(--color-navy-700)]"
    : isBeta
    ? "bg-gradient-to-br from-[var(--color-navy-400)] via-[var(--color-navy-500)] to-[var(--color-navy-700)]"
    : "bg-[var(--color-slate-100)]";

  // Outer ring: tone the ring to the background so Beta doesn't pop too hard
  const ring = isActive || isNew
    ? "bg-[var(--color-navy-900)]"
    : isBeta
    ? "bg-[var(--color-navy-700)]"
    : "bg-[var(--color-slate-300)]";

  const Tag = tile.external ? "a" : Link;
  const tagProps = tile.external
    ? { href: tile.href, target: "_blank", rel: "noreferrer" }
    : { href: tile.href };

  return (
    <Tag
      {...(tagProps as { href: string })}
      className="group relative block aspect-[1/1.155] text-white transition-transform duration-500 hover:-translate-y-1"
    >
      {/* Outer ring */}
      <div
        className={"absolute inset-0 " + ring}
        style={{ clipPath: HEX_CLIP }}
      />
      <div
        className={"absolute inset-[2px] " + bg}
        style={{ clipPath: HEX_CLIP }}
      />
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-[2px] bg-grid-navy opacity-25"
        style={{ clipPath: HEX_CLIP }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-3 text-center">
        <tile.Icon className="h-6 w-6 text-white opacity-95 icon-rotate-hover" />
        <p
          className="mt-0.5 text-[13px] font-bold leading-tight text-white"
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          {tile.label}
        </p>
        <p
          className="text-[8.5px] uppercase tracking-[0.22em] text-white/75"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          {tile.sub}
        </p>
        {isBeta && (
          <span
            className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-white/20 px-1.5 py-[1px] text-[8px] uppercase tracking-[0.18em] text-white"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            <span className="inline-block h-1 w-1 rounded-full bg-white dot-pulse" />
            β版 Testing
          </span>
        )}
        {isNew && (
          <span
            className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-[var(--color-accent)] px-1.5 py-[1px] text-[8px] uppercase tracking-[0.18em] text-white"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            <span className="inline-block h-1 w-1 rounded-full bg-white dot-pulse" />
            New
          </span>
        )}
      </div>
    </Tag>
  );
}

function ServiceHoneycomb() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
      {/* Compact label row */}
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <p
          className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-slate-500)]"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          Service Lines
        </p>
        <p
          className="inline-flex items-center gap-1.5 text-[11px] tabular tracking-[0.18em] text-[var(--color-slate-500)]"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-navy-700)] dot-pulse" />
          Now active · expanding
        </p>
      </div>

      {/* Honeycomb body */}
      <div className="relative mt-6 pb-2">
        {/* Row 1: 3 hexes filling the full width */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {HEX_TILES.slice(0, 3).map((t, i) => (
            <HexTile key={`r1-${i}`} tile={t} />
          ))}
        </div>
        {/* Row 2: 2 hexes, offset by half a hex (~16.66%), pulled up to interlock */}
        <div
          className="-mt-[11.5%] grid grid-cols-2 gap-2 sm:gap-3"
          style={{ paddingLeft: "16.66%", paddingRight: "16.66%" }}
        >
          {HEX_TILES.slice(3, 5).map((t, i) => (
            <HexTile key={`r2-${i}`} tile={t} />
          ))}
        </div>
      </div>

      {/* And more tag cloud */}
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
        <p
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[var(--color-accent)]"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-accent)] dot-pulse" />
          And more
        </p>
        {["医療DX", "BtoB SaaS", "教育", "新規ドメイン", "..."].map((t) => (
          <span
            key={t}
            className="text-[11.5px] text-[var(--color-slate-600)]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Hero
============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 hero-glow" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" />

      {/* Subtle accent in the top-right corner only — no overlap with the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-44 -top-44 hidden h-[420px] w-[420px] rounded-full bg-[var(--color-accent)]/10 blur-[120px] lg:block"
      />

      {/* Animated blueprint rings — placed bottom-left, behind copy block, slowly rotating */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-32 hidden h-[520px] w-[520px] text-[var(--color-navy-500)] opacity-25 lg:block"
      >
        <div className="ring-orbit h-full w-full">
          <BlueprintRings className="h-full w-full" />
        </div>
      </div>

      <div className="relative mx-auto flex flex-col lg:grid max-w-[1320px] gap-12 px-5 pb-28 pt-20 sm:px-8 sm:pb-32 sm:pt-24 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pb-36 lg:pt-28">
        {/* Index bar */}
        <div
          className="col-span-12 flex items-center justify-between border-t border-[var(--color-slate-200)] pt-4"
          data-reveal
        >
          <p
            className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-slate-500)] tabular"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            <span className="font-bold text-[var(--color-navy-700)]">001</span>
            <span className="mx-2 text-[var(--color-slate-300)]">/</span>
            <span>OpenYouth Inc.</span>
          </p>
          <p
            className="hidden text-[11px] uppercase tracking-[0.32em] text-[var(--color-slate-400)] sm:block"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            Est. 2025 · Tokyo
          </p>
        </div>

        {/* Main copy */}
        <div className="col-span-12 min-w-0 lg:col-span-7 xl:col-span-7" data-reveal-stagger>
          <p
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.42em] text-[var(--color-navy-700)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-navy-700)] dot-pulse" />
            For the Next Generation
          </p>

          <h1
            className="heading-jp mt-7 text-[clamp(36px,5.8vw,76px)] font-bold leading-[1.06] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            <span className="heading-tail">すべての若者に、</span>
            <br />
            <span className="heading-tail text-gradient-navy">可能性の選択肢を。</span>
          </h1>

          <p className="mt-9 max-w-[60ch] text-pretty text-[15.5px] leading-[1.95] text-[var(--color-slate-600)] sm:text-[16px]">
            テクノロジーと現場の知見で、若者の挑戦の選択肢を増やしていく会社です。組織AI活用プロダクト <strong className="font-bold text-[var(--color-slate-900)]">Stock-HR</strong> を中核に、採用・営業・医療・美容など複数の領域で実装中。
          </p>

          <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="group btn-press inline-flex items-center gap-3 rounded-full bg-[var(--color-navy-700)] px-7 py-4 text-[15px] font-bold text-[var(--color-slate-0)] transition hover:bg-[var(--color-navy-600)]"
            >
              事業を見る
              <span aria-hidden className="arrow-slide">→</span>
            </Link>
            <Link
              href="/aboutus"
              className="group inline-flex items-center gap-2 px-1 text-[15px] font-bold text-[var(--color-slate-900)]"
            >
              <span className="underline-grow">会社のことを読む</span>
              <span aria-hidden className="arrow-slide">→</span>
            </Link>
          </div>

          {/* Tag chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {["AIプロダクト", "採用支援", "営業支援", "医療キャリア", "美容採用"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)]/70 px-3 py-1 text-[12px] text-[var(--color-slate-700)] backdrop-blur"
              >
                <span className="h-1 w-1 rounded-full bg-[var(--color-navy-600)]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right rail — Service Lines (honeycomb) */}
        <aside className="col-span-12 min-w-0 lg:col-span-5 xl:col-span-5" data-reveal>
          <ServiceHoneycomb />
        </aside>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:flex lg:flex-col lg:items-center"
      >
        <span
          className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          Scroll
        </span>
        <span className="mt-2 h-10 w-px bg-gradient-to-b from-[var(--color-slate-300)] to-transparent" />
      </div>
    </section>
  );
}

/* ============================================================
   Numbers strip
============================================================ */
function NumbersStrip() {
  return (
    <section className="relative border-y border-[var(--color-slate-200)] bg-[var(--color-slate-50)]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-px overflow-hidden bg-[var(--color-slate-200)] sm:grid-cols-4">
        {NUMBERS.map((n, i) => (
          <div
            key={n.label}
            className="relative overflow-hidden bg-[var(--color-slate-50)] px-5 py-9 sm:px-8 sm:py-12 lg:px-10"
            data-reveal
          >
            <p
              className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-500)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              {n.label}
            </p>
            <p
              className="mt-3 text-[clamp(32px,4.4vw,52px)] font-bold tabular leading-[1] text-[var(--color-navy-700)]"
              style={{
                fontFamily: "var(--font-display-en)",
                letterSpacing: "-0.02em",
              }}
            >
              {typeof n.value === "number" ? (
                <CountUp value={n.value} suffix={n.suffix} />
              ) : (
                <CountUp literal={n.value} />
              )}
            </p>
            {n.hint && (
              <p
                className="mt-2 text-[11px] tracking-[0.18em] text-[var(--color-slate-400)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                {n.hint}
              </p>
            )}
            {i === NUMBERS.length - 1 && (
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-1 right-3 h-8 w-24 text-[var(--color-navy-200)]"
              >
                <MiniBars className="h-full w-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Vision Section
============================================================ */
function VisionSection() {
  return (
    <section className="relative bg-[var(--color-slate-0)] py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 top-20 hidden h-[280px] w-[280px] text-[var(--color-navy-200)] opacity-70 lg:block"
      >
        <GrowthSpray className="h-full w-full" />
      </div>

      <div className="relative mx-auto flex flex-col lg:grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-4" data-reveal>
          <p
            className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            Vision &amp; Mission
          </p>
          <p className="mt-4 text-[12px] tracking-[0.18em] text-[var(--color-slate-400)]">
            私たちの目的と、果たし方
          </p>
          <div className="mt-10 rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] p-7 lift">
            <p
              className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              社名について
            </p>
            <p
              className="mt-3 text-balance text-[17px] leading-[1.9] text-[var(--color-slate-800)]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              「Open Youth」は、若者に世界が開かれる、という意志からつけました。
            </p>
          </div>
        </div>

        <div className="lg:col-span-8" data-reveal-stagger>
          <div className="border-l-2 border-[var(--color-navy-600)] pl-6 sm:pl-10">
            <p
              className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Vision · 目指す世界
            </p>
            <p
              className="mt-4 text-balance text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.4]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              すべての若者に、
              <br />
              <span className="text-[var(--color-navy-700)]">可能性の選択肢を。</span>
            </p>
            <p className="mt-5 max-w-[44ch] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)]">
              学歴・所属・経験。これまでの「決まりごと」に縛られず、挑戦したいときに挑戦できる社会。
              選べる進路が一段増えること、信頼できる伴走者が隣にいること。
              そんな当たり前を、私たちの事業を通してひとつずつ増やしていきます。
            </p>
          </div>

          <div className="mt-14 border-l-2 border-[var(--color-accent)] pl-6 sm:pl-10">
            <p
              className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Mission · 私たちのやり方
            </p>
            <p
              className="mt-4 text-balance text-[clamp(22px,2.8vw,34px)] font-bold leading-[1.5]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              テクノロジーと現場の知見で、挑戦のための「次の一歩」を増やす。
            </p>
            <p className="mt-5 max-w-[46ch] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)]">
              プロダクトと事業支援、両方を持ち寄って、現場で起こる小さな摩擦からひとつずつ解いていく。
              スケールではなく、組織が自走できる確かさを優先します。
            </p>
          </div>
        </div>
      </div>

      {/* Connector arc */}
      <div
        aria-hidden
        className="mx-auto mt-20 hidden max-w-[800px] px-5 text-[var(--color-slate-300)] sm:px-8 lg:block"
      >
        <TimelineArc className="h-16 w-full" />
      </div>
    </section>
  );
}

/* ============================================================
   Why Section — 事業を選ぶ理由とこれから
============================================================ */
function WhySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-800)] py-28 text-[var(--color-slate-0)] sm:py-36">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[var(--color-accent)]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 bottom-12 hidden h-[280px] w-[280px] text-white/10 lg:block ring-orbit"
      >
        <BlueprintRings className="h-full w-full" />
      </div>

      <div className="relative mx-auto flex flex-col lg:grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5" data-reveal>
          <p
            className="text-[11px] uppercase tracking-[0.32em] text-white/55"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            Why we exist
          </p>
          <h2
            className="mt-5 text-balance text-[clamp(30px,4vw,56px)] font-bold leading-[1.15] tracking-[-0.015em]"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            私たちが、解こうとしていること。
          </h2>
          <p className="mt-7 max-w-[42ch] text-pretty text-[15px] leading-[2.05] text-white/75">
            事業はまだ5つ。けれど私たちは、創業時期だからこそ「いまここで取り組む課題」をひとつずつ確かに選んでいます。
            これから10、20と増えていく事業の、すべての根っこには同じ問いがあります。
          </p>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/85 backdrop-blur"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white dot-pulse" />
            4 lines today · more to come
          </div>
        </div>

        <ul className="lg:col-span-7" data-reveal-stagger>
          {[
            {
              n: "01",
              k: "AIの波に、しっかり乗ること。",
              en: "Ride the wave",
              body: "産業革命と同等以上の変化が、いまAIで起きています。波を眺めるのではなく、現場のプロダクトに落とし込みながら、私たち自身が乗り続けます。",
            },
            {
              n: "02",
              k: "関わってきた業界の、課題を解くこと。",
              en: "From the field we know",
              body: "採用・営業・医療キャリア。代表が現場で見てきた業界の不便から、事業を選んでいます。新規領域も、見知らぬ場所ではなく、手触りのある場所から始めます。",
            },
            {
              n: "03",
              k: "プロダクトと現場、両輪で進めること。",
              en: "Product × Operation",
              body: "AIで作って終わりにしません。現場で運用しながらプロダクトを育て、プロダクトで運用を底上げする。両輪が揃って初めて、組織は自走できると考えています。",
            },
            {
              n: "04",
              k: "時代に合わせて、事業は増やしていく。",
              en: "Open by design",
              body: "今やっていない領域も、明日始まるかもしれない。OpenYouthという名のとおり、開かれた状態で構えながら、社会の変化と私たちの好奇心を信じて、事業を増やしていきます。",
            },
          ].map((it) => (
            <li
              key={it.n}
              className="group grid grid-cols-[60px_1fr] gap-5 border-t border-white/15 py-7 sm:grid-cols-[80px_1fr] sm:gap-8"
            >
              <div>
                <p
                  className="text-[36px] font-bold tabular leading-none text-[var(--color-accent)]"
                  style={{ fontFamily: "var(--font-display-en)", letterSpacing: "-0.02em" }}
                >
                  {it.n}
                </p>
                <p
                  className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/45"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  {it.en}
                </p>
              </div>
              <div>
                <p
                  className="text-balance text-[clamp(20px,2.2vw,26px)] font-bold leading-[1.45]"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  {it.k}
                </p>
                <p className="mt-3 text-pretty text-[14px] leading-[1.95] text-white/70">
                  {it.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Values Section
============================================================ */
function ValuesSection() {
  return (
    <section className="relative bg-[var(--color-slate-50)] py-28 sm:py-36">
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
              Values
            </p>
            <h2
              className="mt-4 text-balance text-[clamp(28px,3.6vw,48px)] font-bold leading-[1.25]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              事業を貫く、3つの姿勢。
            </h2>
          </div>
          <p className="max-w-[28ch] text-pretty text-[14px] leading-[1.95] text-[var(--color-slate-600)]">
            プロダクトも事業支援も、これからの新規事業も。すべての営みに通底させている構えです。
          </p>
        </div>

        <ul className="mt-14 flex flex-col lg:grid gap-6 lg:grid-cols-3" data-reveal-stagger>
          {VALUES.map((v) => (
            <li
              key={v.no}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] p-8 lift"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--color-navy-50)] text-[var(--color-navy-700)] transition-colors group-hover:bg-[var(--color-navy-700)] group-hover:text-[var(--color-slate-0)]">
                  <v.Icon className="h-7 w-7 icon-rotate-hover" />
                </div>
                <div className="text-right">
                  <p
                    className="text-[40px] font-bold tabular leading-none text-[var(--color-navy-700)]"
                    style={{
                      fontFamily: "var(--font-display-en)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {v.no}
                  </p>
                  <p
                    className="mt-2 text-[11px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                    style={{ fontFamily: "var(--font-display-en)" }}
                  >
                    {v.en}
                  </p>
                </div>
              </div>
              <p
                className="mt-8 text-balance text-[22px] font-bold leading-[1.5] text-[var(--color-slate-900)]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                {v.jp}
              </p>
              <p className="mt-3 text-pretty text-[14px] leading-[1.95] text-[var(--color-slate-600)]">
                {v.body}
              </p>

              {/* decorative corner */}
              <span
                aria-hidden
                className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full border border-[var(--color-navy-100)] transition-all duration-700 group-hover:scale-110"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Services Section (4 lines)
============================================================ */
function ServicesSection() {
  return (
    <section className="relative bg-[var(--color-slate-0)] py-28 sm:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:grid gap-10 lg:grid-cols-12" data-reveal>
          <div className="lg:col-span-4">
            <p
              className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Services
            </p>
            <h2
              className="mt-4 text-balance text-[clamp(28px,3.6vw,48px)] font-bold leading-[1.25]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              5つの事業で、Visionを実装します。
            </h2>
          </div>
          <p className="max-w-[44ch] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)] lg:col-span-8">
            それぞれが独立した事業として動きつつ、「若者の挑戦を支える」というひとつの目的で繋がっています。
            プロダクトと事業支援を行き来しながら、実装を続けています。
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2" data-reveal-stagger>
          {SERVICES.map((s, i) => (
            <li
              key={s.slug}
              className={
                "relative overflow-hidden rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] lift " +
                (i === 0 ? "sm:col-span-2" : "")
              }
            >
              <Link
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noreferrer" : undefined}
                className="group block h-full"
              >
                <div className={i === 0 ? "grid items-stretch lg:grid-cols-12" : ""}>
                  {/* Featured image (only for first card) */}
                  {i === 0 && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-navy-800)] sm:aspect-[16/10] lg:col-span-5 lg:aspect-auto">
                      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-30" />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-[var(--color-accent)]/20 blur-[100px]"
                      />
                      <Image
                        src="/images/services/stockhr-mac.png"
                        alt="Stock-HR"
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-contain object-center p-6 transition-transform duration-700 group-hover:scale-[1.04] sm:p-8"
                      />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur sm:left-6 sm:top-6" style={{ fontFamily: "var(--font-display-en)" }}>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white dot-pulse" />
                        Featured Product
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                        <p
                          className="text-[10px] uppercase tracking-[0.32em] text-white/70"
                          style={{ fontFamily: "var(--font-display-en)" }}
                        >
                          stock-hr.com ↗
                        </p>
                        <s.Icon className="h-9 w-9 shrink-0 text-white/85 sm:h-10 sm:w-10" />
                      </div>
                    </div>
                  )}

                  {/* Beta product image (resimatch) */}
                  {i === 3 && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-slate-100)] sm:aspect-[16/9]">
                      <Image
                        src="/images/services/resimatch.jpg"
                        alt=""
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-900)]/75 via-[var(--color-navy-900)]/30 to-transparent" />
                      <div
                        className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white sm:left-6 sm:top-6"
                        style={{ fontFamily: "var(--font-display-en)" }}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white dot-pulse" />
                        β版 Testing
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
                        <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-3 py-2 shadow-[0_8px_24px_-12px_rgba(15,35,71,0.45)] backdrop-blur sm:gap-3 sm:px-4 sm:py-2.5">
                          <div className="relative h-8 w-8 shrink-0 sm:h-9 sm:w-9">
                            <Image
                              src="/images/services/resimatch-logo.png"
                              alt="レジマッチ ロゴ"
                              fill
                              sizes="36px"
                              className="object-contain"
                            />
                          </div>
                          <div className="leading-tight">
                            <p
                              className="text-[14px] font-bold text-[var(--color-slate-900)] sm:text-[15px]"
                              style={{ fontFamily: "var(--font-display-jp)" }}
                            >
                              レジマッチ
                            </p>
                            <p
                              className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-slate-500)]"
                              style={{ fontFamily: "var(--font-display-en)" }}
                            >
                              resi-match.com ↗
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* New product image (saloriku) */}
                  {i === 4 && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-slate-100)] sm:aspect-[16/9]">
                      <Image
                        src="/images/services/saloriku-hero.png"
                        alt="サロリク — 美容師の採用ページ"
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-900)]/60 via-transparent to-transparent" />
                      <div
                        className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white sm:left-6 sm:top-6"
                        style={{ fontFamily: "var(--font-display-en)" }}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white dot-pulse" />
                        New
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
                        <p
                          className="rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-slate-700)] backdrop-blur"
                          style={{ fontFamily: "var(--font-display-en)" }}
                        >
                          saloriku.com ↗
                        </p>
                        <s.Icon className="h-8 w-8 shrink-0 text-white sm:h-9 sm:w-9" />
                      </div>
                    </div>
                  )}

                  <div className={"p-6 sm:p-7 " + (i === 0 ? "lg:col-span-7 lg:p-10" : "")}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {i !== 0 && (
                          <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-navy-50)] text-[var(--color-navy-700)] transition-colors group-hover:bg-[var(--color-navy-700)] group-hover:text-[var(--color-slate-0)]">
                            <s.Icon className="h-5 w-5" />
                          </div>
                        )}
                        <div>
                          <p
                            className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-500)]"
                            style={{ fontFamily: "var(--font-display-en)" }}
                          >
                            Line {s.no} · {s.category}
                          </p>
                          <p
                            className={
                              "mt-1.5 font-bold leading-[1.2] text-balance text-[var(--color-slate-900)] " +
                              (i === 0
                                ? "text-[clamp(24px,2.8vw,36px)]"
                                : "text-[clamp(18px,2vw,24px)]")
                            }
                            style={{ fontFamily: "var(--font-display-jp)" }}
                          >
                            {s.name}
                          </p>
                          <p
                            className="mt-1.5 text-balance text-[13px] leading-[1.7] text-[var(--color-slate-700)]"
                            style={{ fontFamily: "var(--font-display-jp)" }}
                          >
                            {s.tagline}
                          </p>
                        </div>
                      </div>

                      <StatusBadge status={s.status} />
                    </div>

                    {/* Problem / Approach */}
                    <div
                      className={
                        "mt-5 grid gap-4 " + (i === 0 ? "sm:grid-cols-2" : "")
                      }
                    >
                      <div className="border-t border-[var(--color-slate-200)] pt-3">
                        <p
                          className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-warn)]"
                          style={{ fontFamily: "var(--font-display-en)" }}
                        >
                          Problem
                        </p>
                        <p className="mt-1.5 text-pretty text-[13px] leading-[1.85] text-[var(--color-slate-700)]">
                          {s.problem}
                        </p>
                      </div>
                      <div className="border-t border-[var(--color-navy-200)] pt-3">
                        <p
                          className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                          style={{ fontFamily: "var(--font-display-en)" }}
                        >
                          Approach
                        </p>
                        <p className="mt-1.5 text-pretty text-[13px] leading-[1.85] text-[var(--color-slate-700)]">
                          {s.approach}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {s.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] px-2.5 py-0.5 text-[11.5px] text-[var(--color-slate-600)]"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-[12.5px] font-bold text-[var(--color-navy-700)]">
                        <span className="underline-grow">詳しく見る</span>
                      </span>
                      <span
                        aria-hidden
                        className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] text-[var(--color-navy-700)] transition-all group-hover:border-[var(--color-navy-700)] group-hover:bg-[var(--color-navy-700)] group-hover:text-[var(--color-slate-0)]"
                      >
                        <IconArrowOut className="h-3.5 w-3.5 arrow-slide" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: ServiceStatus }) {
  const styles: Record<
    ServiceStatus,
    { wrap: string; dot: string; label: string }
  > = {
    Active: {
      wrap: "bg-[var(--color-navy-700)] text-[var(--color-slate-0)]",
      dot: "bg-[var(--color-slate-0)] dot-pulse",
      label: "Active",
    },
    New: {
      wrap: "bg-[var(--color-accent)] text-[var(--color-slate-0)]",
      dot: "bg-[var(--color-slate-0)] dot-pulse",
      label: "New",
    },
    Beta: {
      wrap: "bg-[var(--color-accent)] text-[var(--color-slate-0)]",
      dot: "bg-[var(--color-slate-0)] dot-pulse",
      label: "β版 Testing",
    },
    "Coming Soon": {
      wrap:
        "border border-[var(--color-slate-300)] bg-[var(--color-slate-0)] text-[var(--color-slate-500)]",
      dot: "bg-[var(--color-slate-400)]",
      label: "Coming Soon",
    },
  };
  const s = styles[status];
  return (
    <span
      className={
        "inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.24em] " +
        s.wrap
      }
      style={{ fontFamily: "var(--font-display-en)" }}
    >
      <span className={"inline-block h-1.5 w-1.5 rounded-full " + s.dot} />
      {s.label}
    </span>
  );
}

/* ============================================================
   Stock-HR Spot
============================================================ */
function StockHRSpot() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-800)] py-28 text-[var(--color-slate-0)] sm:py-36">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-[var(--color-accent)]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[460px] w-[460px] text-white/10 ring-orbit"
      >
        <PulseNetwork className="h-full w-full" />
      </div>

      <div className="relative mx-auto flex flex-col lg:grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-7" data-reveal-stagger>
          <p
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-white/70"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-white">
              <IconStockHR className="h-4 w-4" />
            </span>
            Featured Product · Stock-HR
          </p>
          <h2
            className="mt-6 text-balance text-[clamp(34px,5vw,72px)] font-bold leading-[1.05] tracking-[-0.018em]"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            AIを、組織のものに。
          </h2>
          <p className="mt-8 max-w-[64ch] text-pretty text-[16px] leading-[1.95] text-white/75">
            AIが当たり前になった時代に、組織には「安全・標準化・効果測定」の土台が必要です。
            <strong className="font-bold text-white">Stock-HR</strong> は、個人情報漏洩リスクを設計で抑え、推論フレームで人による精度差を吸収する、組織AI活用を最大化するAI。採用領域から実装中。
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              { t: "個人情報を、設計で守る", d: "候補者情報は業界カテゴリへ自動抽象化。生データをAIに渡さず、漏洩リスクを設計レベルで抑えます。" },
              { t: "プロの推論フレームを内蔵", d: "課題仮説 → 訴求軸選定 の2段階推論を組み込み済み。使う人によって出る精度のバラつきを吸収します。" },
              { t: "組織で、効果を可視化", d: "誰がどの訴求で送ったかをデータで残し、改善ループを組織として回せる土台に。" },
              { t: "運用ごと並走する", d: "ハンズオン／ハイブリッドプランでは Stock-HR のプロが選定・送付・運用設計まで担い、AIの使い方ごと組織に残します。" },
            ].map((f, i) => (
              <li key={f.t} className="border-t border-white/15 pt-4">
                <p
                  className="flex items-baseline gap-3 text-base font-bold"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  <span
                    className="text-[11px] tabular text-white/55"
                    style={{ fontFamily: "var(--font-display-en)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.t}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-[1.85] text-white/65">
                  {f.d}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="https://stock-hr.com"
              target="_blank"
              rel="noreferrer"
              className="group btn-press btn-press-light inline-flex items-center gap-3 rounded-full bg-[var(--color-slate-0)] px-7 py-4 text-sm font-bold text-[var(--color-navy-800)] transition hover:bg-[var(--color-navy-100)]"
            >
              Stock-HR 公式サイト
              <span aria-hidden className="arrow-slide">↗</span>
            </a>
            <a
              href="https://app.stock-hr.jp"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-1 text-sm font-bold text-white"
            >
              <span className="underline-grow">プロダクトを開く</span>
              <span aria-hidden className="arrow-slide">↗</span>
            </a>
          </div>
        </div>

        {/* Right visual — product dashboard */}
        <div className="relative lg:col-span-5" data-reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/services/stockhr-dashboard.png"
                alt="Stock-HR ダッシュボード — 今月のスカウト運用"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain object-center p-5 transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* Soft inner glow behind the device */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-accent)]/20 to-transparent blur-2xl"
              />
            </div>
            {/* Corner ticks */}
            <span aria-hidden className="absolute left-3 top-3 h-3 w-3 border-l border-t border-white/30" />
            <span aria-hidden className="absolute right-3 top-3 h-3 w-3 border-r border-t border-white/30" />
            <span aria-hidden className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-white/30" />
            <span aria-hidden className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-white/30" />
            {/* Caption */}
            <p
              className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.32em] text-white/55"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Stock-HR · Dashboard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Founder teaser
============================================================ */
function FounderTeaser() {
  return (
    <section className="relative bg-[var(--color-slate-0)] py-28 sm:py-36">
      <div className="mx-auto flex flex-col lg:grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5" data-reveal>
          <p
            className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            Founder
          </p>
          <h2
            className="mt-4 text-balance text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.25]"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            代表からのメッセージ
          </h2>

          <div className="relative mt-10 h-32 w-32 text-[var(--color-navy-200)]">
            <QuoteBracket className="h-full w-full" />
          </div>
        </div>

        <div className="lg:col-span-7" data-reveal-stagger>
          <blockquote
            className="text-balance text-[clamp(20px,2.2vw,28px)] font-bold leading-[1.75]"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            関わってきた業界には、まだ解かれていない当たり前の不便がある。AIによる産業革命級の変化と一緒に、その不便をひとつずつ解いていく会社にしたい。
          </blockquote>

          <div className="mt-10 flex items-center gap-4 border-t border-[var(--color-slate-200)] pt-6">
            <div
              className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-navy-700)] text-[var(--color-slate-0)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              KF
            </div>
            <div>
              <p
                className="text-base font-bold text-[var(--color-slate-900)]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                深谷 洸樹
              </p>
              <p
                className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Koki Fukaya · Founder &amp; CEO
              </p>
            </div>
            <Link
              href="/aboutus"
              className="group ml-auto inline-flex items-center gap-2 text-sm font-bold text-[var(--color-navy-700)]"
            >
              <span className="underline-grow">続きを読む</span>
              <span aria-hidden className="arrow-slide">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   News teaser
============================================================ */
function NewsTeaser({ news }: { news: NewsItem[] }) {
  return (
    <section className="relative bg-[var(--color-slate-50)] py-28 sm:py-36">
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
              News
            </p>
            <h2
              className="mt-4 text-balance text-[clamp(28px,3.6vw,48px)] font-bold leading-[1.25]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              最新のお知らせ
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--color-slate-900)]"
          >
            <span className="underline-grow">一覧をみる</span>
            <span aria-hidden className="arrow-slide">→</span>
          </Link>
        </div>

        {news.length > 0 ? (
          <ul className="mt-12 border-t border-[var(--color-slate-200)]" data-reveal-stagger>
            {news.map((n) => (
              <li key={`${n.date}-${n.title}`} className="border-b border-[var(--color-slate-200)]">
                <NewsRow item={n} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-[var(--color-slate-200)] bg-[var(--color-slate-0)] p-12 text-center text-sm text-[var(--color-slate-500)]">
            まだお知らせはありません。
          </div>
        )}
      </div>
    </section>
  );
}

function NewsRow({ item }: { item: NewsItem }) {
  const cls =
    "group grid grid-cols-12 items-baseline gap-4 py-7 transition hover:bg-[var(--color-slate-0)] sm:gap-8 sm:py-8";
  const inner = (
    <>
      <time
        className="col-span-12 text-[12px] tabular tracking-[0.18em] text-[var(--color-slate-400)] sm:col-span-2"
        style={{ fontFamily: "var(--font-display-en)" }}
      >
        {item.date}
      </time>
      <span
        className="col-span-12 inline-flex w-fit items-center rounded-full border border-[var(--color-slate-300)] bg-[var(--color-slate-0)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.28em] text-[var(--color-slate-600)] sm:col-span-2"
        style={{ fontFamily: "var(--font-display-en)" }}
      >
        {item.category}
      </span>
      <p
        className="col-span-12 text-balance text-lg leading-snug text-[var(--color-slate-900)] sm:col-span-7 sm:text-xl"
        style={{ fontFamily: "var(--font-display-jp)" }}
      >
        {item.title}
      </p>
      <span
        className="col-span-12 text-right text-[var(--color-slate-400)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-navy-700)] sm:col-span-1"
        aria-hidden
      >
        {item.href ? (item.href.startsWith("http") ? "↗" : "→") : "·"}
      </span>
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
   Contact CTA
============================================================ */
function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-slate-0)] py-28 sm:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div
          className="relative overflow-hidden rounded-3xl bg-[var(--color-navy-700)] px-8 py-16 text-[var(--color-slate-0)] sm:px-14 sm:py-20 lg:px-20"
          data-reveal
        >
          <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-50" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[var(--color-accent)]/25 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-4 bottom-0 hidden h-44 w-44 text-white/15 lg:block float-y"
          >
            <BlueprintRings className="h-full w-full" />
          </div>

          <div className="relative flex flex-col lg:grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p
                className="text-[11px] uppercase tracking-[0.32em] text-white/55"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Get in touch
              </p>
              <h2
                className="mt-5 text-balance text-[clamp(30px,4.8vw,60px)] font-bold leading-[1.15] tracking-[-0.015em]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                30分の対話から、はじめましょう。
              </h2>
              <p className="mt-6 max-w-[42ch] text-pretty text-[15px] leading-[2] text-white/75">
                Stock-HRの導入相談、採用・営業支援のご依頼、業務提携や取材、カジュアル面談など、どの入り口からでも歓迎します。
              </p>
            </div>
            <div className="flex flex-col justify-end gap-3 lg:col-span-5">
              <Link
                href="/contact"
                className="group btn-press inline-flex items-center justify-between gap-3 rounded-full bg-[var(--color-slate-0)] px-6 py-4 text-[15px] font-bold text-[var(--color-navy-800)] transition hover:bg-[var(--color-navy-100)]"
              >
                お問い合わせ
                <span aria-hidden className="text-xl arrow-slide">→</span>
              </Link>
              <Link
                href="/recruitment"
                className="group btn-press btn-press-light inline-flex items-center justify-between gap-3 rounded-full border border-white/35 bg-transparent px-6 py-4 text-[15px] font-bold text-white transition hover:border-white"
              >
                採用情報をみる
                <span aria-hidden className="text-xl arrow-slide">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
