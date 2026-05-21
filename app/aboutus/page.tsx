// app/aboutus/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";
import {
  IconLongBet,
  IconFieldFirst,
  IconOpenByDefault,
  IconCompass,
} from "@/components/icons";
import { GrowthSpray, QuoteBracket, TimelineArc } from "@/components/decorations";

export const metadata = {
  title: "会社情報 — OpenYouth",
  description:
    "株式会社OpenYouthのVision・Mission・Value、代表メッセージ、会社概要、沿革。",
};

const TIMELINE = [
  {
    year: "—",
    body: "京都大学 農学部 卒業。",
  },
  {
    year: "—",
    body: "教育系大手事業会社・総合コンサルティングファームで、新規事業開発と経営支援に従事。",
  },
  {
    year: "—",
    body: "Tech系スタートアップで事業統括として、プロダクト開発と組織マネジメントをリード。",
  },
  {
    year: "—",
    body: "IT系事業会社のグループ会社代表に就任。事業責任者として、プロダクト・採用・組織の全レイヤーに関わる。",
    accent: true,
  },
  {
    year: "—",
    body: "採用責任者として、組織の採用立ち上げから 100名規模 までグロース。エンジニア・セールス・カスタマーサクセス・マネージャー層まで一気通貫で採用を設計・運用。",
    accent: true,
  },
  {
    year: "—",
    body: "10社以上のBtoB企業の採用・営業支援に並走。プロダクトセールス・FS・営業部長候補・PdMなど多様なポジションのスカウト運用・選考設計を担い、Stock-HRの基盤となる現場知見を蓄積。",
    accent: true,
  },
  {
    year: "2025.12",
    body: "株式会社OpenYouth創業。「Open Youth」の名のもと、若者の挑戦の選択肢を増やすことを掲げ、複数の事業ラインで実装を開始。",
    accent: true,
  },
  {
    year: "2026.04",
    body: "Stock-HRを正式公開。AIが現場で当たり前に使われる時代に、組織がAIを「安全に・標準化して・効果を測れる形で」使うためのAIプロダクトとして、最初の領域に採用を選んで実装。",
    accent: true,
  },
  {
    year: "2026-",
    body: "Stock-HR / 採用支援 / 営業支援 / レジマッチ（医療キャリア）の4事業を並走。AIの波と、出会う課題に合わせて、事業ラインを増やしていく。",
  },
];

const PROFILE_ROWS = [
  { k: "会社名", v: "株式会社OpenYouth" },
  { k: "代表者", v: "代表取締役 深谷 洸樹" },
  { k: "設立", v: "2025年12月26日" },
  { k: "資本金", v: "100万円" },
  { k: "所在地", v: "〒150-0043 東京都渋谷区道玄坂１丁目１０−８" },
  { k: "事業内容", v: "組織AI活用プロダクト Stock-HR / 採用支援 / 営業支援 / レジマッチ（医療キャリア・β）" },
  { k: "問い合わせ", v: "admin@openyouth.co.jp" },
];

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

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        index="02"
        eyebrowEn="ABOUT"
        eyebrowJp="会社情報"
        titleJp={
          <>
            若者の挑戦の隣に、
            <br className="hidden sm:block" />
            <span className="text-[var(--color-navy-700)]">テクノロジーで立つ。</span>
          </>
        }
        lead={
          <>
            株式会社OpenYouthは、テクノロジーと現場の知見で、若者が挑戦するための選択肢を増やしていく会社です。
            複数の事業を行き来しながら、プロダクトと運用支援、両方の手段で社会への実装を進めています。
          </>
        }
        meta={[
          { k: "Vision・Mission", v: "01" },
          { k: "Value", v: "02" },
          { k: "代表メッセージ", v: "03" },
          { k: "沿革・会社概要", v: "04" },
        ]}
      />

      {/* ============== Vision & Mission ============== */}
      <section className="relative overflow-hidden bg-[var(--color-slate-0)] py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 hidden h-[320px] w-[320px] text-[var(--color-navy-100)] lg:block"
        >
          <GrowthSpray className="h-full w-full" />
        </div>

        <div className="relative mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
          <div className="lg:col-span-4" data-reveal>
            <p
              className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Vision &amp; Mission
            </p>
            <p
              className="mt-4 text-[12px] tracking-[0.18em] text-[var(--color-slate-400)]"
            >
              目指す世界と、そのやり方
            </p>

            <div className="mt-10 rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] p-7 lift">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-navy-700)] text-[var(--color-slate-0)]">
                <IconCompass className="h-6 w-6" />
              </div>
              <p
                className="mt-6 text-balance text-[16.5px] leading-[1.95] text-[var(--color-slate-800)]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                「Open Youth」は、若者に世界が開かれる、という意志からつけた社名です。
              </p>
            </div>
          </div>

          <div className="lg:col-span-8" data-reveal-stagger>
            <div className="border-l-2 border-[var(--color-navy-600)] pl-6 sm:pl-10">
              <p
                className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Vision
              </p>
              <p
                className="mt-4 text-balance text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.4]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                すべての若者に、
                <br />
                <span className="text-[var(--color-navy-700)]">可能性の選択肢を。</span>
              </p>
              <p className="mt-5 max-w-[46ch] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)]">
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
                Mission
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

        <div
          aria-hidden
          className="mx-auto mt-20 hidden max-w-[800px] px-5 text-[var(--color-slate-300)] lg:block"
        >
          <TimelineArc className="h-16 w-full" />
        </div>
      </section>

      {/* ============== Values ============== */}
      <section className="relative bg-[var(--color-slate-50)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12" data-reveal>
            <div className="lg:col-span-4">
              <p
                className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Values
              </p>
              <h2
                className="mt-4 text-balance text-[clamp(28px,3.6vw,44px)] font-bold leading-[1.25]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                事業を貫く、3つの姿勢
              </h2>
            </div>
            <p className="max-w-[44ch] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)] lg:col-span-8">
              何をするか以前に、どう構えるか。
              すべての事業に通底させている、私たちの構えです。
            </p>
          </div>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3" data-reveal-stagger>
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
                  className="mt-8 text-balance text-[22px] font-bold leading-[1.5]"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  {v.jp}
                </p>
                <p className="mt-3 text-pretty text-[14px] leading-[1.95] text-[var(--color-slate-600)]">
                  {v.body}
                </p>
                <span
                  aria-hidden
                  className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full border border-[var(--color-navy-100)] transition-all duration-700 group-hover:scale-110"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============== Founder Message ============== */}
      <section id="message" className="relative overflow-hidden bg-[var(--color-slate-0)] py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-12 hidden h-20 w-20 -translate-x-1/2 text-[var(--color-navy-200)] lg:block"
        >
          <QuoteBracket className="h-full w-full" />
        </div>

        <div className="relative mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
          <div className="lg:col-span-4" data-reveal>
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

            <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] p-1.5 lift">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[var(--color-slate-100)]">
                <Image
                  src="/images/company/ceo.jpg"
                  alt="代表取締役 深谷洸樹"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 80vw"
                />
                {/* Tag overlay */}
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-slate-0)]/85 px-3 py-1 text-[11px] text-[var(--color-slate-700)] backdrop-blur">
                  <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-navy-700)] dot-pulse" />
                  Founder &amp; CEO
                </div>
              </div>
              <div className="px-3 pb-2 pt-4 text-center">
                <p
                  className="text-sm font-bold"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  深谷 洸樹
                </p>
                <p
                  className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  Koki Fukatani
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8" data-reveal-stagger>
            <div className="space-y-6 text-pretty text-[16px] leading-[2.1] text-[var(--color-slate-800)]">
              <p>
                株式会社OpenYouth 代表の深谷洸樹です。OpenYouthへの関心を、ありがとうございます。
              </p>
              <p>
                京都大学農学部を卒業したあと、教育系の事業会社・総合コンサル・スタートアップの事業統括・IT系グループ会社の代表と、業界を渡り歩いてきました。共通点は、新しいプロダクトと組織を立ち上げては、現場の採用と事業開発の最前線に関わってきたことです。
              </p>
              <p>
                とくに大きな経験は、<strong className="font-bold text-[var(--color-navy-700)]">採用責任者として組織の採用を立ち上げ、100名規模までグロースさせた</strong>こと。エンジニアからセールス、CS、マネージャー層まで、ゼロからの母集団形成・スカウト運用・選考設計・面接体制構築・オンボーディングまで、採用のすべての工程に責任を持ってきました。並行して、10社以上のBtoB企業の採用・営業支援にも並走し、現場の地味で本質的な不便を浴びるように見てきました。
              </p>
              <p>
                その中で、ずっと気になっていたことがあります。<strong className="font-bold text-[var(--color-navy-700)]">どの業界にも、まだ解かれていない当たり前の不便</strong>がある。採用のスカウト一通、医療業界の就活、BtoBのアポ獲得。
                どれも、誰かが本気で向き合えば、もっと速く・もっと丁寧に進められるはずなのに、その「誰か」が空いていない。
              </p>
              <p>
                同時に、AIによって<strong className="font-bold text-[var(--color-navy-700)]">産業革命と同等以上の変化</strong>が、いま起きています。
                これは、私たちが関わってきた業界の不便を、まとめて解き直せる稀有なタイミングだと感じています。
                OpenYouthは、その波に乗りながら、私自身が関わってきた業界の課題を、ひとつずつプロダクトと事業支援の両輪で解いていく会社です。
              </p>
              <p>
                いま走っているのはStock-HR / 採用支援 / 営業支援 / レジマッチの4事業です。プロダクトを現場で運用しながら育て、その手触りで次の事業を立ち上げる。これを繰り返しながら、AIと現場の知見で「<strong className="font-bold text-[var(--color-navy-700)]">若者の挑戦の選択肢</strong>」を一段ずつ増やしていきます。
              </p>
              <p>
                Stock-HRの導入、採用や営業の支援、業務提携、取材、ご一緒する仲間としての参画。どの入り口からでも、お声がけください。
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-[var(--color-slate-200)] pt-6">
              <p
                className="text-base font-bold"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                深谷 洸樹
              </p>
              <span className="h-3 w-px bg-[var(--color-slate-200)]" />
              <p
                className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                Koki Fukatani · Founder &amp; CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== Timeline ============== */}
      <section className="relative bg-[var(--color-slate-50)] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
          <div className="lg:col-span-4" data-reveal>
            <p
              className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Timeline
            </p>
            <h2
              className="mt-4 text-balance text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.25]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              これまでの歩み
            </h2>
          </div>

          <div className="lg:col-span-8" data-reveal-stagger>
            <ol className="relative">
              {TIMELINE.map((t, i) => (
                <li
                  key={i}
                  className="relative grid grid-cols-[100px_1fr] gap-6 border-t border-[var(--color-slate-200)] py-7 sm:grid-cols-[140px_1fr] sm:gap-10"
                >
                  <span
                    className="absolute left-[88px] top-9 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-navy-700)] sm:left-[120px]"
                    style={{
                      backgroundColor: t.accent
                        ? "var(--color-navy-700)"
                        : "var(--color-slate-300)",
                    }}
                  />
                  <span
                    className={
                      "text-sm tabular tracking-[0.12em] " +
                      (t.accent
                        ? "font-bold text-[var(--color-navy-700)]"
                        : "text-[var(--color-slate-400)]")
                    }
                    style={{ fontFamily: "var(--font-display-en)" }}
                  >
                    {t.year}
                  </span>
                  <p
                    className={
                      "text-balance text-[15px] leading-[1.95] " +
                      (t.accent
                        ? "font-bold text-[var(--color-slate-900)]"
                        : "text-[var(--color-slate-600)]")
                    }
                    style={{ fontFamily: "var(--font-display-jp)" }}
                  >
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============== Corporate Profile ============== */}
      <section id="colophon" className="relative bg-[var(--color-slate-0)] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
          <div className="lg:col-span-4" data-reveal>
            <p
              className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-navy-700)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Corporate Profile
            </p>
            <h2
              className="mt-4 text-balance text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.25]"
              style={{ fontFamily: "var(--font-display-jp)" }}
            >
              会社概要
            </h2>
            <p className="mt-5 max-w-[26ch] text-pretty text-sm leading-relaxed text-[var(--color-slate-600)]">
              お取引・契約・取材に関するご連絡は
              <Link
                href="/contact"
                className="ml-1 border-b border-[var(--color-slate-900)] hover:text-[var(--color-navy-700)]"
              >
                お問い合わせ
              </Link>
              までお願いいたします。
            </p>
          </div>

          <dl
            className="grid gap-x-10 gap-y-6 text-sm sm:grid-cols-2 lg:col-span-8"
            data-reveal-stagger
          >
            {PROFILE_ROWS.map((row) => (
              <div
                key={row.k}
                className="border-t border-[var(--color-slate-200)] pt-4"
              >
                <dt
                  className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  {row.k}
                </dt>
                <dd
                  className="mt-2 text-balance text-base font-bold text-[var(--color-slate-900)]"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
