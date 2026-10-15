// lib/businesses.ts
// 事業とWebメディアの単一の情報源。トップ・事業ページ・フッター・会社概要はここから数と名前を引く。
// 事業を足すときは BUSINESSES に1件足すだけで、「7つの事業」などの数も追従する。

import type { ComponentType, SVGProps } from "react";
import {
  IconStockHR,
  IconRecruitment,
  IconSales,
  IconResiMatch,
  IconSaloriku,
  IconMarketing,
  IconMedia,
} from "@/components/icons";

export type BusinessStatus = "Active" | "New" | "Beta" | "Coming Soon";

export type BusinessGroup = "product" | "support" | "media";

export const BUSINESS_GROUPS: { key: BusinessGroup; label: string }[] = [
  { key: "product", label: "プロダクト" },
  { key: "support", label: "支援" },
  { key: "media", label: "メディア" },
];

export type MediaSite = {
  slug: string;
  name: string;
  domain: string; // 領域ラベル
  lead: string; // 読者を主語にした一言
  url: string;
  host: string;
  lang: "ja" | "en";
  image: string;
};

export const MEDIA_SITES: MediaSite[] = [
  {
    slug: "goshuin",
    name: "御朱印ナビ",
    domain: "文化領域",
    lead: "参拝者が、全国768件の御朱印を探せる。",
    url: "https://goshuin-navi.com",
    host: "goshuin-navi.com",
    lang: "ja",
    image: "/images/media/goshuin.webp",
  },
  {
    slug: "onsen",
    name: "Onsen Quest",
    domain: "観光領域",
    lead: "訪日客が、タトゥー可否で温泉を選べる。",
    url: "https://onsenquest.com",
    host: "onsenquest.com",
    lang: "en",
    image: "/images/media/onsen.webp",
  },
  {
    slug: "engineer",
    name: "エンジニア進路図",
    domain: "キャリア領域",
    lead: "エンジニアが、AI時代の進路を選べる。",
    url: "https://engineer-shinrozu.com",
    host: "engineer-shinrozu.com",
    lang: "ja",
    image: "/images/media/engineer.webp",
  },
  {
    slug: "iryo",
    name: "医療サイバー対策ナビ",
    domain: "セキュリティ領域",
    lead: "医療機関が、国の基準どおりに対策できる。",
    url: "https://iryo-cyber.com",
    host: "iryo-cyber.com",
    lang: "ja",
    image: "/images/media/iryo.webp",
  },
  {
    slug: "iwakan",
    name: "違和感記録室",
    domain: "エンタメ領域",
    lead: "日常の違和感から始まる短編を、毎晩読める。",
    url: "https://kirokushitsu.com",
    host: "kirokushitsu.com",
    lang: "ja",
    image: "/images/media/iwakan.webp",
  },
];

export type Business = {
  no: string;
  slug: string;
  name: string; // 見出し内で和英を混ぜない
  tagline: string;
  category: string;
  problem: string;
  approach: string;
  highlights: string[];
  status: BusinessStatus;
  href: string;
  external?: boolean;
  group: BusinessGroup;
  hexLabel: string; // ヒーローの六角に入る短い名前
  hexSub: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const BUSINESSES: Business[] = [
  {
    no: "01",
    slug: "stockhr",
    name: "Stock-HR",
    tagline: "AIを、組織のものにする。",
    category: "Enterprise AI · HR",
    problem:
      "AIが当たり前に現場で使われる時代に、個人情報の漏洩リスク、人によってバラつく精度、組織として測れない効果――AIを「安全に・標準化して」使える状態には、まだ届かない。",
    approach:
      "Stock-HRは、学習に使われない条件でAIを使い、候補者情報を組織ごとに分けて保管します。プロの推論フレームで人による精度の差を吸収し、組織のAI活用を最大化します。最初の領域は採用です。",
    highlights: ["AIガバナンス", "標準化された推論", "組織で可視化"],
    status: "Active",
    href: "https://stock-hr.com",
    external: true,
    group: "product",
    hexLabel: "Stock-HR",
    hexSub: "Enterprise AI",
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
    group: "support",
    hexLabel: "採用支援",
    hexSub: "Recruitment",
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
    group: "support",
    hexLabel: "営業支援",
    hexSub: "Sales",
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
    group: "product",
    hexLabel: "レジマッチ",
    hexSub: "Medical Career",
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
      "採用の現場を知り尽くしたプロが、お店ごとの魅力を引き出して高品質なデザインの採用ページに仕上げます。初期費用0円・月額制で、どんな規模のサロンも自社の採用ページを持てる形にしました。",
    highlights: ["初期費用0円", "プロが制作", "月額1万円〜"],
    status: "New",
    href: "https://saloriku.com",
    external: true,
    group: "product",
    hexLabel: "サロリク",
    hexSub: "Beauty Recruit",
    Icon: IconSaloriku,
  },
  {
    no: "06",
    slug: "marketing",
    name: "マーケティング・PR支援",
    tagline: "目的に合わせて、手段を選ぶ。",
    category: "Marketing & PR",
    problem:
      "集客・PR・ブランディング——目的は会社ごとに違うのに、提案はいつも手段から始まってしまう。何から手をつけるべきかが決まらないまま、施策だけが増えていきます。",
    approach:
      "目的とゴールの言語化から入り、Web広告・メディア運用・インフルエンサー・動画のうち、必要なものだけを選んで組み立てます。企画から運用まで一貫して並走します。",
    highlights: ["Web広告運用", "メディア・SNS", "インフルエンサー"],
    status: "Active",
    href: "/services#marketing",
    group: "support",
    hexLabel: "マーケ・PR",
    hexSub: "Marketing",
    Icon: IconMarketing,
  },
  {
    no: "07",
    slug: "media",
    name: "Webメディア事業",
    tagline: "領域ごとに、専門メディアを運営する。",
    category: "Web Media",
    problem:
      "調べたいことがあっても、検索結果には広告と古いまとめ記事が並びがち。本当に知りたいことに、なかなかたどり着けません。",
    approach:
      `${MEDIA_SITES.map((m) => m.domain.replace("領域", "")).join("・")}の${MEDIA_SITES.length}つの領域で、専門メディアを運営しています。それぞれの読者が、知りたいことに最短でたどり着ける形を目指しています。`,
    highlights: [`${MEDIA_SITES.length}つの専門メディア`, "日本語・英語", "自社で開発・運営"],
    status: "Active",
    href: "/services/media",
    group: "media",
    hexLabel: "Webメディア",
    hexSub: "Media",
    Icon: IconMedia,
  },
];

export const BUSINESS_COUNT = BUSINESSES.length;
export const MEDIA_COUNT = MEDIA_SITES.length;

export function getBusiness(slug: string): Business {
  const b = BUSINESSES.find((x) => x.slug === slug);
  if (!b) throw new Error(`Unknown business: ${slug}`);
  return b;
}

export function businessesIn(group: BusinessGroup): Business[] {
  return BUSINESSES.filter((b) => b.group === group);
}
