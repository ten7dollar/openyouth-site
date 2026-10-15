// app/services/page.tsx
// 事業ページ。7つの事業を地色で切り替わる「章」として並べる。書き方はトップ（app/page.tsx）に合わせる。
import Link from "next/link";
import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import { PageMasthead } from "@/components/page-masthead";
import { PaintTitle } from "@/components/motion/paint-title";
import { PhrasedSafe } from "@/components/motion/phrased-safe";
import {
  BUSINESSES,
  BUSINESS_COUNT,
  BUSINESS_GROUPS,
  MEDIA_SITES,
  MEDIA_COUNT,
  getBusiness,
  type Business,
} from "@/lib/businesses";

export const metadata = {
  alternates: { canonical: "/services" },
  title: "事業 — OpenYouth",
  description: `OpenYouthが手がける${BUSINESS_COUNT}つの事業ライン。${BUSINESSES.map((b) => b.name).join("、")}。`,
};

const JP = { fontFamily: "var(--font-display-jp)" };
const EN = { fontFamily: "var(--font-display-en)" };

const GROUP_LABEL = Object.fromEntries(BUSINESS_GROUPS.map((g) => [g.key, g.label])) as Record<Business["group"], string>;

type Tone = "light" | "dark";

const pad = (n: number) => String(n).padStart(2, "0");

// 文節で折り返す。製品名のハイフンと「〜」の直後では割らない（語の結合子 U+2060 を挟む）
function P({ text }: { text: string }) {
  return <PhrasedSafe text={text.replace(/〜(?=\d)/g, "〜\u2060")} />;
}

// 読点・句点の位置でだけ行を分ける（句の中は文節で折り返す）
function Segments({ text }: { text: string }) {
  return (
    <>
      {text.split(/(?<=[、。])/).map((seg, i) => (
        <span key={i} className="inline-block max-w-full">
          <P text={seg} />
        </span>
      ))}
    </>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        eyebrowJp="事業のご紹介"
        titleLines={[`${BUSINESS_COUNT}つの事業で、`, "目指す世界を形にする。"]}
        lead={
          <P text="それぞれが独立した事業として動きつつ、「若者の挑戦の選択肢を増やす」というひとつの目的で繋がっています。プロダクト・支援・メディアを行き来しながら、現場で実装を続けています。" />
        }
        meta={BUSINESSES.map((b) => ({ k: b.name, v: b.no }))}
      />

      <StockHRChapter />
      <RecruitmentChapter />
      <SalesChapter />
      <ResiMatchChapter />
      <SalorikuChapter />
      <MarketingChapter />
      <MediaChapter />
      <ContactCTA />
    </div>
  );
}

/* ============================================================
   01 Stock-HR（濃紺の章）
============================================================ */
const STOCKHR_LEAD =
  "AIが当たり前に現場で使われる時代に、組織にはAIを「安全に・標準化して・効果を測れる形で」使える土台が必要になりました。Stock-HRは、AIへの送信を学習に使われない条件で行い、候補者情報を組織ごとに分けて保管します。プロの推論フレームで人による精度の差を吸収し、組織のAI活用を最大化します。最初の領域は採用です。";

const STOCKHR_PROBLEMS = [
  {
    t: "個人情報の漏洩リスクが、AI活用を止める",
    d: "候補者情報を直接AIに貼ることはセキュリティリスクが大きく、多くの企業で規定上禁止されています。結果、AIを使いたくても使えない。生産性のボトルネックです。",
  },
  {
    t: "使う人によって、精度が大きくバラつく",
    d: "同じツールでも、プロンプトを書く人によってアウトプットの質が大きく変わる。属人化したまま運用しても、組織として安定した品質を担保できません。",
  },
  {
    t: "組織として、AIの効果が測れない",
    d: "「誰が何の訴求で送ったか」がデータに残らず、改善のサイクルが組織で回らない。AI投資の効果を経営に説明することも難しくなります。",
  },
];

const STOCKHR_FEATURES = [
  {
    t: "プロファイルエンジン",
    d: "BizReachなどからの貼り付け、PDFのアップロード、構造化フォームの3つの方法で候補者情報を取り込めます。",
  },
  {
    t: "訴求フレーム",
    d: "年齢・業界・職種・時代背景などからAIが課題仮説を立て、求人の魅力と掛け合わせて訴求軸を選びます。",
  },
  {
    t: "文面AI",
    d: "Claude APIで2〜3通りの文面を生成。SNS媒体は350〜400字、ダイレクトリクルーティング媒体は600〜800字に合わせます。",
  },
  {
    t: "運用の並走",
    d: "ハイブリッドとハンズオンのプランでは、候補者の選定から送付、運用設計まで、Stock-HRのプロが並走します。",
  },
];

const STOCKHR_PLANS = [
  { name: "セルフ運用", d: "プロダクトだけを使うプラン。社内のチームで運用を組めるケース向けです。" },
  { name: "ハイブリッド", d: "候補者のピックアップは貴社、送付と運用設計はStock-HRのチームが並走します。" },
  { name: "ハンズオン", d: "母集団形成から送付まで、Stock-HRのプロが一緒に回します。使い方ごと組織に残るプランです。" },
];

function StockHRChapter() {
  const b = getBusiness("stockhr");
  return (
    <section id="stockhr" className="relative overflow-hidden bg-[var(--color-navy-800)] py-28 text-[var(--color-slate-0)] sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="flex items-baseline gap-4" style={JP}>
          <ChapterNo no={b.no} />
          <span className="text-[15px] font-bold text-[var(--color-navy-200)]">{GROUP_LABEL[b.group]}</span>
        </p>
        <PaintTitle
          as="h2"
          onView
          lines={[{ text: "Stock-HR" }]}
          className="mt-6 text-[clamp(64px,15vw,200px)] font-bold leading-[0.95] tracking-[-0.04em] [--paint-from:rgba(255,255,255,0.14)] [--paint-to:#ffffff]"
          style={EN}
        />

        <div className="mt-12 flex flex-col gap-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="min-w-0 lg:col-span-7" data-reveal>
            <p className="text-[clamp(24px,3vw,40px)] font-bold leading-[1.4]" style={JP}>
              <Segments text={b.tagline} />
            </p>
            <p className="mt-6 max-w-[38em] text-pretty text-[15px] leading-[2] text-white/75 sm:text-[16px]">
              <P text={STOCKHR_LEAD} />
            </p>
          </div>
          <div className="min-w-0 lg:col-span-5" data-reveal>
            <div className="relative mx-auto aspect-[1600/1586] w-full max-w-[460px]">
              <Image
                src="/images/services/stockhr-mac.png"
                alt="Stock-HR を開いたノートパソコン"
                fill
                sizes="(min-width: 1024px) 36vw, 90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <Sub title="現場で起きている、3つの組織課題" tone="dark">
          <ProblemList items={STOCKHR_PROBLEMS} tone="dark" />
        </Sub>

        <Sub title="4つの機能" tone="dark">
          <FeatureList items={STOCKHR_FEATURES} tone="dark" />
        </Sub>

        <Sub title="3つのプラン" tone="dark">
          <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-10" data-reveal-stagger>
            {STOCKHR_PLANS.map((p) => (
              <li key={p.name} className="min-w-0">
                <p className="text-[clamp(22px,2.2vw,28px)] font-bold leading-[1.3]" style={JP}>
                  {p.name}
                </p>
                <p className="mt-3 text-pretty text-[15px] leading-[1.95] text-white/70">
                  <P text={p.d} />
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-pretty text-[14px] leading-[1.9] text-white/55">
            <P text="課金は求人枠ごと。生成回数や候補者数は無制限です。詳しくはお問い合わせください。" />
          </p>
          <Actions
            tone="dark"
            primary={{ href: "https://stock-hr.com", label: "公式サイトを見る", external: true }}
            secondary={{ href: "https://app.stock-hr.jp", label: "プロダクトを開く", external: true }}
          />
        </Sub>
      </div>
    </section>
  );
}

/* ============================================================
   02 採用支援（白）
============================================================ */
function RecruitmentChapter() {
  return (
    <Chapter id="recruitment" bg="bg-[var(--color-slate-0)]" short>
      <ChapterHead
        b={getBusiness("recruitment")}
        lead="採用は、いつも手が足りない領域です。スカウト送付・選考・日々のオペレーション、どれかひとつでも詰まると全体が止まる。私たちはStock-HRの運用知見を背景に、ペルソナ設計から日次の書類選考まで、現場に並走して詰まりを解いていきます。"
      />
      <Sub title="提供範囲">
        <FeatureList
          items={[
            { t: "ペルソナ・要件設計", d: "ジョブごとに想定候補者像を立て、スカウト・選考の判断軸を共通化します。" },
            { t: "スカウト運用", d: "媒体の検索条件、送付文面、返信フォローまで。Stock-HRを使って高速に回していきます。" },
            { t: "選考ロジック設計", d: "オペレーター単独の運用に耐える評価軸を作り、面接体制の標準化まで支援します。" },
            { t: "デイリー書類選考", d: "貴社のパイプライン管理に並走し、書類選考と日次の運用を肩代わりします。" },
          ]}
        />
      </Sub>
      <Sub title="得意な領域">
        <InlineList
          items={[
            "BtoB SaaS",
            "プロダクトセールス",
            "フィールドセールス",
            "カスタマーサクセス",
            "プロダクトマネージャー",
            "プロダクトマーケティング",
            "営業部長クラスの幹部",
            "業界横断（要件次第）",
          ]}
        />
        <p className="mt-6 max-w-[40em] text-pretty text-[14px] leading-[1.9] text-[var(--color-slate-500)]">
          <P text="公開できる支援先の実績は、ご相談時に個別にお伝えします。リファラル経由のご依頼を中心に、複数社の採用に並走しています。" />
        </p>
      </Sub>
    </Chapter>
  );
}

/* ============================================================
   03 営業支援（薄灰）
============================================================ */
function SalesChapter() {
  return (
    <Chapter id="sales" bg="bg-[var(--color-slate-50)]" short>
      <ChapterHead
        b={getBusiness("sales")}
        lead="PMF前後のプロダクトは、内製セールスを十分に組みづらい時期です。アポ獲得から商談クロージングまで、繋ぎ目で止まることが多くなります。私たちはインサイドセールスから商談同席・営業資料整備まで、現場に踏み込んで一緒に走らせます。"
      />
      <Sub title="提供範囲">
        <FeatureList
          items={[
            { t: "インサイドセールス", d: "LPからの問い合わせ対応、メール返信、日程調整、初回商談まで。内製チームの一員として担います。" },
            { t: "商談同席・クロージング", d: "PMF前後のプロダクトで、商談に同席し論点整理やFAQ整備まで踏み込みます。" },
            { t: "リード起こし・営業設計", d: "ターゲット選定から訴求トーク、KPIの設計までを一緒に組み立てます。" },
            { t: "資料・ピッチ整備", d: "営業資料、カンペ、FAQ、想定問答など、現場で使う資料づくりまで担います。" },
          ]}
        />
      </Sub>
      <Sub title="得意な領域">
        <InlineList items={["BtoB SaaS（PMF前後）", "受託開発", "ITプロダクト", "eKYC", "FinTech", "DevOps", "開発生産性"]} />
      </Sub>
    </Chapter>
  );
}

/* ============================================================
   04 レジマッチ（白）
============================================================ */
function ResiMatchChapter() {
  return (
    <Chapter id="resimatch" bg="bg-[var(--color-slate-0)]">
      <ChapterHead
        b={getBusiness("resimatch")}
        note="テスト運用中"
        lead="医療業界の就活は、いまだに紙とOB訪問が中心。DX化が大きく遅れている領域です。レジマッチは、初期研修医と病院のマッチングを情報の整理とオンライン化で改めて設計し直したサービス。病院一括比較・AIレジュメ生成・ダイレクトスカウトの3機能をひとつにまとめ、現在テスト運用中です。"
      >
        <Shot
          src="/images/services/resimatch-screen.webp"
          alt="レジマッチの病院比較画面"
          frame="aspect-[5/4] sm:aspect-[1472/806]"
          fit="object-[100%_0%] sm:object-top"
          caption="病院を年収・働き方・研修医の人数で絞り込み、同じ見方で比べられる画面"
        />
      </ChapterHead>
      <Sub title="何を解こうとしているか">
        <p className="max-w-[40em] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px]">
          <P text="初期研修先の選択は、医師としてのキャリアの最初の分岐点です。年収・働き方・教育体制・症例数といった検討材料はすべて散在しており、納得感のある進路選択ができる環境はまだ整っていません。レジマッチは、その散在を整理し、オンライン説明会・OB/OG訪問までを地続きにするプラットフォームを目指しています。" />
        </p>
      </Sub>
      <Sub title="3つの機能">
        <FeatureList
          items={[
            {
              t: "病院一括比較",
              d: "年収・当直体制・教育体制・症例数など、研修先の判断に必要な情報を同じ見方で並べて比較できます。",
            },
            {
              t: "AIレジュメ生成",
              d: "研修医側の応募準備をAIが支援。志望動機や自己PRをスムーズに整え、応募までの導線を短縮します。",
            },
            {
              t: "ダイレクトスカウト",
              d: "希望条件や志向に合う病院から、直接スカウトが届きます。受け身でも進路の選択肢が広がる仕組みです。",
            },
          ]}
        />
      </Sub>
      <Sub title="現在の運用ステータス">
        <p className="max-w-[40em] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px]">
          <P text="現在、レジマッチはテスト運用中です。一部の医学生・研修医・病院にご利用いただきながら、機能と運用を磨き込んでいます。導入のご相談、連携をご希望の病院様、取材のご依頼は随時受け付けています。" />
        </p>
        <Actions
          primary={{ href: "https://www.resi-match.com/lp1", label: "レジマッチを見る", external: true }}
          secondary={{ href: "/contact", label: "ご相談はこちら" }}
        />
      </Sub>
    </Chapter>
  );
}

/* ============================================================
   05 サロリク（薄灰）
============================================================ */
function SalorikuChapter() {
  return (
    <Chapter id="saloriku" bg="bg-[var(--color-slate-50)]">
      <ChapterHead
        b={getBusiness("saloriku")}
        lead="美容室・理容室の採用は、媒体に高い初期費用と不透明な運用費を払い続ける構造になりがちです。採用ページを自前で作る時間もノウハウもなく、媒体に載せるしかない。サロリクは、採用の現場を知り尽くしたプロが、お店ごとの魅力を引き出して高品質なデザインの採用ページに仕上げるサービスです。初期費用0円・月額制にして、小さなサロンでも自分たちの採用ページを持てるようにしました。"
      >
        <Shot
          src="/images/services/saloriku-sample.webp"
          alt="サロリクで仕立てた採用ページの例"
          frame="aspect-[16/10]"
          caption="サロリクで仕立てた採用ページの一例"
        />
      </ChapterHead>
      <Sub title="美容業界の採用に起きていること">
        <ProblemList
          items={[
            {
              t: "採用コストが、固定費として重い",
              d: "媒体掲載は数十万円の初期費用や不透明な月額がかかりがち。採用できてもできなくても出ていく固定費が、小さなサロンの体力を削ります。",
            },
            {
              t: "自分たちの採用ページを、持てない",
              d: "ページ制作には時間も知識も必要で、結局は媒体任せ。お店の魅力や働き方が、応募者にきちんと伝わりません。",
            },
            {
              t: "応募が「店の言葉」で語られない",
              d: "媒体のテンプレートでは、給与や勤務地以外の魅力が埋もれます。共感で人が集まる採用が、しづらい構造になっています。",
            },
          ]}
        />
      </Sub>
      <Sub title="申し込みから公開まで、3ステップ">
        <FeatureList
          items={[
            { t: "申し込み（3分）", d: "お店のURLと募集条件を入力して、お支払いまで。お店の作業はほぼこれだけです。" },
            { t: "2案が届く", d: "5営業日以内に、訴求の違う2案のプレビューをメールでお届けします。スマホで見て選ぶだけです。" },
            { t: "公開", d: "「この案でOK」の返信で公開。求人媒体やInstagramにリンクを貼ってお使いいただけます。" },
          ]}
        />
      </Sub>
      <Sub title="初期費用0円・月額制">
        <p className="max-w-[40em] text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)] sm:text-[16px]">
          <P text="初期費用は0円。月額1万円（税抜）から、追加費用なしで採用ページを持てます。買い切りプランも用意しています。いまは先着10店舗のローンチ記念として、月額プランは初月無料、買い切りプランは50%OFFでご案内しています。" />
        </p>
        <Actions
          primary={{ href: "https://saloriku.com", label: "サロリクを見る", external: true }}
          secondary={{ href: "/contact", label: "導入のご相談" }}
        />
      </Sub>
    </Chapter>
  );
}

/* ============================================================
   06 マーケティング・PR支援（白）
============================================================ */
function MarketingChapter() {
  return (
    <Chapter id="marketing" bg="bg-[var(--color-slate-0)]">
      <ChapterHead
        b={getBusiness("marketing")}
        nameLines={["マーケティング・", "PR支援"]}
        lead="「集客を伸ばしたい」「商品を知ってほしい」「ブランドを立て直したい」。目的は会社ごとに違うのに、提案はいつも手段から始まりがちです。私たちは目的とゴールの言語化から入り、Web広告・メディア運用・インフルエンサー・動画のうち、必要なものだけを選んで組み立てます。もちろん「この手段でやりたい」というご相談からでも構いません。"
      />
      <Sub title="進め方">
        <PurposeMeansDiagram />
      </Sub>
      <Sub title="4つの支援領域">
        <FeatureList
          items={[
            {
              t: "Web広告運用",
              d: "Meta・Google・Yahoo! などの主要媒体で、配信設計から日々の運用改善、クリエイティブの検証設計まで一貫して担当します。",
            },
            {
              t: "メディア・SNS運用",
              d: "オウンドメディアの立ち上げ、記事の設計、検索流入の改善、SNSアカウントの企画・運用。認知からリード獲得までを地続きに設計します。",
            },
            {
              t: "インフルエンサー活用",
              d: "「誰に・何を・どう届けるか」から逆算したキャスティングと投稿設計。広告運用で得た訴求の検証結果をそのまま持ち込みます。",
            },
            {
              t: "動画・クリエイティブ制作",
              d: "広告用の短尺から、サービス紹介・採用動画まで。離脱させない構成づくりから編集まで一貫して対応します。",
            },
          ]}
        />
      </Sub>
      <Sub title="対応する領域">
        <InlineList items={["美容サロン", "クリニック", "医療", "BtoB SaaS", "採用ブランディング", "地域", "観光", "業界横断（要件次第）"]} />
      </Sub>
    </Chapter>
  );
}

function PurposeMeansDiagram() {
  return (
    <div className="rounded-2xl bg-[var(--color-slate-50)] px-5 py-9 sm:px-10 sm:py-12" data-reveal>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10">
        <DiagramSide who="クライアント" title="目的" items={["集客", "商品PR", "売上の向上", "ブランディング", "採用強化", "新規事業"]} />
        <span
          aria-hidden
          className="text-[40px] font-bold leading-none text-[var(--color-slate-400)] lg:pt-14"
          style={EN}
        >
          ×
        </span>
        <DiagramSide who="OpenYouth" title="手段" items={["Web広告運用", "メディア・SNS", "インフルエンサー", "動画制作"]} />
      </div>
      <div className="mt-12 sm:mt-14">
        <p className="text-[14px] font-bold text-[var(--color-slate-500)]" style={JP}>
          ゴール
        </p>
        <p className="mt-2 text-[clamp(20px,2.2vw,28px)] font-bold leading-[1.5] text-[var(--color-navy-600)]" style={JP}>
          <P text="目的から逆算して手段を選び、ゴールまで並走します。" />
        </p>
        <p className="mt-3 text-pretty text-[15px] leading-[1.95] text-[var(--color-slate-600)]">
          <Segments text="まずは目的とゴールの共有から。手段ありきの提案はしません。" />
        </p>
      </div>
    </div>
  );
}

function DiagramSide({ who, title, items }: { who: string; title: string; items: string[] }) {
  return (
    <div className="min-w-0">
      <p className="text-[14px] font-bold text-[var(--color-slate-500)]" style={JP}>
        {who}
      </p>
      <p className="mt-1 text-[clamp(30px,3.2vw,42px)] font-bold leading-[1.2] text-[var(--color-slate-900)]" style={JP}>
        {title}
      </p>
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-bold leading-[1.5] text-[var(--color-slate-800)]">
        {items.map((t) => (
          <li key={t} className="whitespace-nowrap">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   07 Webメディア事業（黒に近い章）— 5媒体を行で並べる
============================================================ */
function MediaChapter() {
  const b = getBusiness("media");
  return (
    <section id="media" className="relative overflow-hidden bg-[var(--color-slate-900)] py-28 text-[var(--color-slate-0)] sm:py-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <ChapterHead
          b={b}
          tone="dark"
          lead={`調べものをしても、検索結果には広告と古いまとめ記事が並びがちです。私たちは${MEDIA_COUNT}つの領域で、読者が知りたいことに答える専門メディアを運営しています。`}
        />

        <ul className="mt-16 flex flex-col gap-2 sm:mt-24" data-reveal-stagger>
          {MEDIA_SITES.map((m) => (
            <li key={m.slug}>
              <a
                href={m.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 rounded-2xl px-1 py-6 transition-colors duration-300 hover:bg-white/[0.06] sm:px-6 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-8"
              >
                <span className="text-[14px] font-bold text-[var(--color-navy-200)] lg:col-span-2" style={JP}>
                  {m.domain}
                </span>
                <span
                  className="heading-jp text-[clamp(24px,2.6vw,36px)] font-bold leading-[1.3] tracking-[-0.02em] lg:col-span-4"
                  style={JP}
                >
                  {m.name}
                </span>
                <span className="mt-1 text-balance text-[15px] leading-[1.9] text-white/70 lg:col-span-4 lg:mt-0">
                  <P text={m.lead} />
                </span>
                <span className="whitespace-nowrap text-[13px] tabular text-white/45 lg:col-span-2 lg:text-right" style={EN}>
                  {m.host}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 sm:mt-16">
          <Link
            href="/services/media"
            className="btn-press inline-flex items-center rounded-full bg-[var(--color-slate-0)] px-8 py-4 text-[15px] font-bold text-[var(--color-slate-900)] transition hover:bg-[var(--color-navy-100)]"
          >
            各メディアの画面を見る
          </Link>
        </div>

        <Sub title="掲載・協業のご相談" tone="dark">
          <p className="max-w-[40em] text-pretty text-[15px] leading-[2] text-white/75 sm:text-[16px]">
            <P text="各メディアへの掲載や、記事・データを使った協業のご相談を承っています。お問い合わせの「運営メディアへの掲載・協業」をお選びください。" />
          </p>
          <div className="mt-8">
            <Link href="/contact" className="group inline-flex items-center px-1 text-[15px] font-bold text-white">
              <span className="underline-grow">掲載・協業を相談する</span>
            </Link>
          </div>
        </Sub>
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
          <p className="max-w-[34em] text-pretty text-[15px] leading-[2] text-white/80 sm:text-[16px]">
            <P text="どの事業も、まずは30分の対話から。カジュアル面談から承ります。事業内容に当てはまらなくても、ご相談として歓迎します。" />
          </p>
          <Link href="/aboutus" className="group inline-flex shrink-0 items-center text-[15px] font-bold text-white">
            <span className="underline-grow">会社のことを読む</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   部品
============================================================ */
function Chapter({ id, bg, short = false, children }: { id: string; bg: string; short?: boolean; children: ReactNode }) {
  return (
    <section
      id={id}
      className={
        "relative text-[var(--color-slate-900)] " + bg + " " + (short ? "py-24 sm:py-32" : "py-28 sm:py-40")
      }
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

function ChapterNo({ no }: { no: string }) {
  return (
    <span
      className="text-[clamp(28px,3.4vw,48px)] font-bold leading-none tabular text-[var(--color-accent)]"
      style={{ ...EN, letterSpacing: "-0.02em" }}
    >
      {no}
    </span>
  );
}

// 章の頭：左に番号とグループ名、右に事業名（窓からせり上がる）・一言・リード
function ChapterHead({
  b,
  lead,
  note,
  nameLines,
  tone = "light",
  children,
}: {
  b: Business;
  lead: string;
  note?: string;
  nameLines?: string[];
  tone?: Tone;
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  const lines = nameLines ?? [b.name];
  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
      <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2 lg:col-span-3 lg:flex-col lg:items-start lg:gap-3 lg:pt-3" style={JP}>
        <ChapterNo no={b.no} />
        <span className={"text-[15px] font-bold " + (dark ? "text-[var(--color-navy-200)]" : "text-[var(--color-navy-600)]")}>
          {GROUP_LABEL[b.group]}
        </span>
        {note && (
          <span className={"text-[14px] font-bold " + (dark ? "text-white/55" : "text-[var(--color-slate-500)]")}>{note}</span>
        )}
      </p>
      <div className="min-w-0 lg:col-span-9">
        <h2
          data-mask
          aria-label={lines.join("")}
          className="text-[min(10.6vw,88px)] font-bold leading-[1.12] tracking-[-0.03em] lg:text-[clamp(40px,6.4vw,88px)]"
          style={JP}
        >
          {lines.map((l, i) => (
            <span key={l} aria-hidden className="mask-line whitespace-nowrap">
              <span style={{ ["--d" as string]: `${i * 0.12}s` }}>{l}</span>
            </span>
          ))}
        </h2>
        <div data-reveal>
          <p className="mt-8 text-[clamp(20px,2.4vw,30px)] font-bold leading-[1.5]" style={JP}>
            <Segments text={b.tagline} />
          </p>
          <p
            className={
              "mt-6 max-w-[40em] text-pretty text-[15px] leading-[2] sm:text-[16px] " +
              (dark ? "text-white/75" : "text-[var(--color-slate-600)]")
            }
          >
            <P text={lead} />
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

// 章の中の小見出し：PCは左3列に日本語の太字見出し、右9列に中身
function Sub({ title, tone = "light", children }: { title: string; tone?: Tone; children: ReactNode }) {
  return (
    <div className="mt-20 flex flex-col gap-7 sm:mt-28 lg:grid lg:grid-cols-12 lg:gap-10">
      <h3
        className={
          "text-balance text-[clamp(19px,1.8vw,22px)] font-bold leading-[1.5] lg:col-span-3 " +
          (tone === "dark" ? "text-white" : "text-[var(--color-slate-900)]")
        }
        style={JP}
      >
        <P text={title} />
      </h3>
      <div className="min-w-0 lg:col-span-9">{children}</div>
    </div>
  );
}

// 線のない2列の並び（番号・題・説明）
function FeatureList({ items, tone = "light" }: { items: { t: string; d: string }[]; tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <ul className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12" data-reveal-stagger>
      {items.map((it, i) => (
        <li key={it.t} className="min-w-0">
          <p className="flex items-baseline gap-3 text-[18px] font-bold leading-[1.5]" style={JP}>
            <span className="shrink-0 text-[14px] tabular text-[var(--color-accent)]" style={EN}>
              {pad(i + 1)}
            </span>
            <span className="min-w-0">
              <P text={it.t} />
            </span>
          </p>
          <p className={"mt-3 text-pretty text-[15px] leading-[1.95] " + (dark ? "text-white/65" : "text-[var(--color-slate-600)]")}>
            <P text={it.d} />
          </p>
        </li>
      ))}
    </ul>
  );
}

// 課題の並び（1列・大きめの番号）
function ProblemList({ items, tone = "light" }: { items: { t: string; d: string }[]; tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <ol className="flex flex-col gap-12 sm:gap-14">
      {items.map((p, i) => (
        <li key={p.t} className="flex flex-col gap-3 sm:flex-row sm:gap-8" data-reveal>
          <span
            className="text-[clamp(28px,3vw,40px)] font-bold leading-none tabular text-[var(--color-accent)] sm:w-[2.2em] sm:shrink-0"
            style={{ ...EN, letterSpacing: "-0.02em" }}
          >
            {pad(i + 1)}
          </span>
          <div className="min-w-0">
            <p className="text-balance text-[clamp(19px,2vw,24px)] font-bold leading-[1.5]" style={JP}>
              <P text={p.t} />
            </p>
            <p className={"mt-3 max-w-[38em] text-pretty text-[15px] leading-[2] " + (dark ? "text-white/70" : "text-[var(--color-slate-600)]")}>
              <P text={p.d} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// 「・」区切りの文字の並び。項目の途中では折り返さない
function InlineList({ items }: { items: string[] }) {
  return (
    <p className="text-balance text-[16px] font-bold leading-[2.1] text-[var(--color-slate-900)] sm:text-[18px]" style={JP}>
      {items.map((t, i) => (
        <Fragment key={t}>
          {i > 0 && (
            <>
              <span aria-hidden className="text-[var(--color-slate-400)]">
                ・
              </span>
              <wbr />
            </>
          )}
          <span className="whitespace-nowrap">{t}</span>
        </Fragment>
      ))}
    </p>
  );
}

function Shot({ src, alt, frame, fit = "object-top", caption }: { src: string; alt: string; frame: string; fit?: string; caption: string }) {
  return (
    <figure className="mt-12 sm:mt-16" data-reveal>
      <div className={"relative w-full overflow-hidden rounded-2xl bg-[var(--color-slate-100)] " + frame}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 62vw, 100vw" className={"object-cover " + fit} />
      </div>
      <figcaption className="mt-4 text-[13px] leading-[1.8] text-[var(--color-slate-500)]">
        <P text={caption} />
      </figcaption>
    </figure>
  );
}

type ActionLink = { href: string; label: string; external?: boolean };

function Actions({ primary, secondary, tone = "light" }: { primary: ActionLink; secondary?: ActionLink; tone?: Tone }) {
  const dark = tone === "dark";
  const primaryCls = dark
    ? "btn-press inline-flex items-center rounded-full bg-[var(--color-slate-0)] px-8 py-4 text-[15px] font-bold text-[var(--color-navy-800)] transition hover:bg-[var(--color-navy-100)]"
    : "btn-press inline-flex items-center rounded-full bg-[var(--color-navy-600)] px-8 py-4 text-[15px] font-bold text-[var(--color-slate-0)] transition hover:bg-[var(--color-navy-800)]";
  const secondaryCls =
    "group inline-flex items-center px-1 text-[15px] font-bold " + (dark ? "text-white" : "text-[var(--color-slate-900)]");
  return (
    <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
      <ActionAnchor link={primary} className={primaryCls}>
        {primary.label}
      </ActionAnchor>
      {secondary && (
        <ActionAnchor link={secondary} className={secondaryCls}>
          <span className="underline-grow">{secondary.label}</span>
        </ActionAnchor>
      )}
    </div>
  );
}

function ActionAnchor({ link, className, children }: { link: ActionLink; className: string; children: ReactNode }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {children}
    </Link>
  );
}
