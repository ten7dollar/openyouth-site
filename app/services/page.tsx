// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import { PageMasthead } from "@/components/page-masthead";
import {
  IconStockHR,
  IconRecruitment,
  IconSales,
  IconResiMatch,
  IconSaloriku,
} from "@/components/icons";
import { PulseNetwork } from "@/components/decorations";
import type { ComponentType, SVGProps } from "react";

export const metadata = {
  title: "事業 — OpenYouth",
  description:
    "OpenYouthが手がける5つの事業ライン。Stock-HR、採用支援、営業支援、医療キャリアマッチング、美容採用のサロリク。",
};

const INDEX = [
  { no: "01", nameJp: "Stock-HR", nameEn: "HR Tech · AI", anchor: "stockhr" },
  { no: "02", nameJp: "採用支援", nameEn: "Recruitment", anchor: "recruitment" },
  { no: "03", nameJp: "営業支援", nameEn: "Sales", anchor: "sales" },
  { no: "04", nameJp: "レジマッチ", nameEn: "Medical Career", anchor: "resimatch" },
  { no: "05", nameJp: "サロリク", nameEn: "Beauty Recruit", anchor: "saloriku" },
];

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        index="03"
        eyebrowEn="SERVICES"
        eyebrowJp="事業のご紹介"
        titleJp={
          <>
            5つの事業で、
            <br />
            <span className="text-[var(--color-navy-700)]">Visionを実装する。</span>
          </>
        }
        lead={
          <>
            それぞれが独立した事業として動きつつ、「若者の挑戦の選択肢を増やす」というひとつの目的で繋がっています。
            プロダクトと事業支援を行き来しながら、現場で実装を続けています。
          </>
        }
        meta={INDEX.map((c) => ({ k: c.nameJp, v: c.no }))}
      />

      {/* Index strip */}
      <section className="relative border-y border-[var(--color-slate-200)] bg-[var(--color-slate-50)]">
        <div className="mx-auto max-w-[1320px] px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span
              className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Index
            </span>
            {INDEX.map((c, i) => {
              const Icons = [IconStockHR, IconRecruitment, IconSales, IconResiMatch, IconSaloriku];
              const Icon = Icons[i];
              return (
                <a
                  key={c.anchor}
                  href={`#${c.anchor}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] px-3 py-1.5 text-[var(--color-slate-900)] transition hover:border-[var(--color-navy-700)] hover:text-[var(--color-navy-700)]"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--color-navy-700)]" />
                  <span
                    className="text-[10px] tabular tracking-[0.2em] text-[var(--color-slate-400)] group-hover:text-[var(--color-navy-700)]"
                    style={{ fontFamily: "var(--font-display-en)" }}
                  >
                    {c.no}
                  </span>
                  <span className="text-[13px] font-bold">{c.nameJp}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== 01 — Stock-HR ====================== */}
      <BusinessSection
        Icon={IconStockHR}
        anchor="stockhr"
        no="01"
        category="HR Tech · AI Product"
        nameJp="Stock-HR"
        nameEn="Enterprise AI for HR"
        status="Active"
        accent="navy"
        lead="AIが当たり前に現場で使われる時代に、組織にはAIを「安全に・標準化して・効果を測れる形で」使える土台が必要になりました。Stock-HRは個人情報の漏洩リスクを設計で抑え、プロの推論フレームで人による精度の差を吸収する、組織のAI活用を最大化するAIです。最初の領域として、採用から実装しています。"
        body={
          <>
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/images/services/stockhr.jpg"
                alt="Stock-HR"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover opacity-85"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy-900)]/80 via-[var(--color-navy-800)]/40 to-transparent" />
              <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-30" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.32em] text-white/85"
                    style={{ fontFamily: "var(--font-display-en)" }}
                  >
                    stock-hr.com
                  </p>
                  <p
                    className="mt-2 text-balance text-[clamp(22px,2.4vw,32px)] font-bold leading-[1.2] text-white"
                    style={{ fontFamily: "var(--font-display-jp)" }}
                  >
                    AIを使いたくても、使えていない。
                  </p>
                </div>
                <a
                  href="https://stock-hr.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[12px] font-bold text-[var(--color-navy-800)] backdrop-blur transition hover:bg-white"
                >
                  公式LPへ
                  <span aria-hidden className="arrow-slide">↗</span>
                </a>
              </div>
            </div>

            <SubSection label="Function" title="4つの機能">
              <FeatureGrid
                items={[
                  {
                    n: "01",
                    t: "プロファイルエンジン",
                    d: "BizReachなどからのコピペ、PDFアップロード、構造化フォームの3モードに対応。個人情報は業界カテゴリへ自動抽象化。",
                  },
                  {
                    n: "02",
                    t: "訴求フレーム",
                    d: "年齢/業界/職種/時代背景など多軸の入力からLLMが課題仮説を立て、求人魅力と掛け合わせて訴求軸を選定。",
                  },
                  {
                    n: "03",
                    t: "文面AI",
                    d: "Claude APIによる2-3バリエーション生成。SNS媒体は350-400字、DR媒体は600-800字に最適化。",
                  },
                  {
                    n: "04",
                    t: "運用伴走",
                    d: "ハンズオン/ハイブリッドプランでは Stock-HR のプロが候補者選定・送付・運用設計まで代行。",
                  },
                ]}
              />
            </SubSection>

            <SubSection label="Why now" title="現場で起きている、3つの組織課題">
              <ul className="space-y-4">
                {[
                  {
                    n: "01",
                    t: "個人情報の漏洩リスクが、AI活用を止める",
                    d: "候補者情報を直接AIに貼ることはセキュリティリスクが大きく、多くの企業で規定上禁止されています。結果、AIを使いたくても使えない。生産性のボトルネックです。",
                  },
                  {
                    n: "02",
                    t: "使う人によって、精度が大きくバラつく",
                    d: "同じツールでも、プロンプトを書く人によってアウトプットの質が大きく変わる。属人化したまま運用しても、組織として安定した品質を担保できません。",
                  },
                  {
                    n: "03",
                    t: "組織として、AIの効果が測れない",
                    d: "「誰が何の訴求で送ったか」がデータに残らず、改善ループが組織で回らない。AI投資の効果を経営に説明することも難しくなります。",
                  },
                ].map((p) => (
                  <li
                    key={p.n}
                    className="flex gap-5 rounded-2xl border border-current/15 bg-current/[0.04] p-5 text-current"
                  >
                    <span
                      className="w-8 shrink-0 text-[14px] tabular tracking-[0.18em] text-[var(--color-accent)] opacity-90"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      {p.n}
                    </span>
                    <div>
                      <p
                        className="text-base font-bold leading-[1.5]"
                        style={{ fontFamily: "var(--font-display-jp)" }}
                      >
                        {p.t}
                      </p>
                      <p className="mt-1.5 text-[13.5px] leading-[1.9] opacity-80">
                        {p.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </SubSection>

            <SubSection label="Plan" title="3つのプラン">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-200)] sm:grid-cols-3">
                {[
                  { name: "セルフ運用", tier: "Basic", desc: "プロダクトだけ使う。社内チームで運用が組めるケース向け。" },
                  { name: "ハイブリッド", tier: "Standard", desc: "候補者ピックアップは顧客、送付・運用設計は Stock-HR チームが伴走。" },
                  { name: "ハンズオン", tier: "Pro", desc: "母集団形成から送付まで全工程を Stock-HR チームが代行。" },
                ].map((p) => (
                  <div key={p.name} className="bg-[var(--color-slate-0)] p-7">
                    <p
                      className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      {p.tier}
                    </p>
                    <p
                      className="mt-3 text-xl font-bold"
                      style={{ fontFamily: "var(--font-display-jp)" }}
                    >
                      {p.name}
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.95] text-[var(--color-slate-600)]">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[12px] text-[var(--color-slate-400)]">
                ※ 課金は求人枠ベース。生成回数や候補者数は無制限。詳細はお問い合わせください。
              </p>
            </SubSection>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="https://stock-hr.com"
                target="_blank"
                rel="noreferrer"
                className="group btn-press btn-press-light inline-flex items-center gap-3 rounded-full bg-[var(--color-slate-0)] px-7 py-4 text-sm font-bold text-[var(--color-navy-800)] transition hover:bg-[var(--color-navy-100)]"
              >
                公式サイトを見る
                <span aria-hidden className="arrow-slide">↗</span>
              </Link>
              <Link
                href="https://app.stock-hr.jp"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--color-slate-900)]"
              >
                <span className="link-underline">プロダクトを開く</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
              </Link>
            </div>
          </>
        }
      />

      {/* ====================== 02 — Recruitment ====================== */}
      <BusinessSection
        Icon={IconRecruitment}
        anchor="recruitment"
        no="02"
        category="Hands-on · Recruitment"
        nameJp="採用支援"
        nameEn="Recruitment"
        status="Active"
        accent="light"
        lead="採用は、いつも手が足りない領域です。スカウト送付・選考・日々のオペレーション、どれかひとつでも詰まると全体が止まる。私たちはStock-HRの運用知見を背景に、ペルソナ設計から日次の書類選考まで、現場に並走して詰まりを解いていきます。"
        body={
          <>
            <SubSection label="Scope" title="提供範囲">
              <FeatureGrid
                items={[
                  { n: "01", t: "ペルソナ・要件設計", d: "ジョブごとに想定候補者像を立て、スカウト・選考の判断軸を共通化します。" },
                  { n: "02", t: "スカウト運用", d: "媒体検索条件 → 送付文面 → 返信フォローまで Stock-HR を使って高速に回します。" },
                  { n: "03", t: "選考ロジック設計", d: "オペレーター単独運用に耐える評価軸を作り、面接体制の標準化まで支援します。" },
                  { n: "04", t: "デイリー書類選考", d: "貴社のパイプライン管理に並走し、書類選考と日次の運用を肩代わりします。" },
                ]}
              />
            </SubSection>

            <SubSection label="Field" title="得意な領域">
              <div className="flex flex-wrap gap-2">
                {[
                  "BtoB SaaS",
                  "プロダクトセールス",
                  "FS / カスタマーサクセス",
                  "PdM / PMM",
                  "営業部長クラスのexecutive",
                  "業界横断（要件次第）",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] px-3 py-1.5 text-[12.5px] text-[var(--color-slate-700)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[13px] text-[var(--color-slate-500)]">
                ※ 公開可能な支援先実績は、ご相談時に個別にお伝えします。リファラル経由でのご依頼を中心に、複数社の採用に並走しています。
              </p>
            </SubSection>
          </>
        }
      />

      {/* ====================== 03 — Sales ====================== */}
      <BusinessSection
        Icon={IconSales}
        anchor="sales"
        no="03"
        category="Hands-on · Sales"
        nameJp="営業支援"
        nameEn="Sales"
        status="Active"
        accent="light"
        lead="PMF前後のプロダクトは、内製セールスを十分に組みづらい時期です。アポ獲得から商談クロージングまで、繋ぎ目で止まることが多くなります。私たちはインサイドセールスから商談同席・営業資料整備まで、現場に踏み込んで一緒に走らせます。"
        body={
          <>
            <SubSection label="Scope" title="提供範囲">
              <FeatureGrid
                items={[
                  { n: "01", t: "インサイドセールス", d: "LP問合せ・メール返信・日程調整・初回商談までを内製代行。" },
                  { n: "02", t: "商談同席・クロージング", d: "PMF前後のプロダクトで、商談に同席し論点整理・FAQ整備まで踏み込みます。" },
                  { n: "03", t: "リード起こし・営業設計", d: "ターゲット選定〜訴求トーク設計〜KPI設計を一緒に組み立てます。" },
                  { n: "04", t: "資料・ピッチ整備", d: ".pptx・カンペ・FAQ・想定問答など、現場で使う資料の編集まで担います。" },
                ]}
              />
            </SubSection>

            <SubSection label="Field" title="得意な領域">
              <div className="flex flex-wrap gap-2">
                {[
                  "BtoB SaaS（PMF前後）",
                  "受託開発",
                  "ITプロダクト",
                  "eKYC / FinTech",
                  "DevOps / 開発生産性",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--color-slate-200)] bg-[var(--color-slate-0)] px-3 py-1.5 text-[12.5px] text-[var(--color-slate-700)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SubSection>
          </>
        }
      />

      {/* ====================== 04 — ResiMatch ====================== */}
      <BusinessSection
        Icon={IconResiMatch}
        anchor="resimatch"
        no="04"
        category="Healthcare × Career"
        nameJp="レジマッチ"
        nameEn="ResiMatch · Medical Career"
        status="Beta"
        accent="light"
        lead="医療業界の就活は、いまだに紙とOB訪問が中心。DX化が大きく遅れている領域です。レジマッチは、初期研修医と病院のマッチングを情報の整理とオンライン化で改めて設計し直したサービス。病院一括比較・AIレジュメ生成・ダイレクトスカウトの3機能をひとつにまとめ、現在テスト運用中です。"
        body={
          <>
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-[var(--color-slate-200)]">
              <Image
                src="/images/services/resimatch.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy-900)]/75 via-[var(--color-navy-900)]/30 to-transparent" />
              <span
                className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white dot-pulse" />
                β版 Testing
              </span>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
                <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_10px_30px_-14px_rgba(15,35,71,0.5)] backdrop-blur">
                  <div className="relative h-11 w-11 shrink-0">
                    <Image
                      src="/images/services/resimatch-logo.png"
                      alt="レジマッチ ロゴ"
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <p
                      className="text-[16px] font-bold text-[var(--color-slate-900)]"
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
                <p
                  className="hidden max-w-[40%] text-balance text-right text-[clamp(18px,2vw,24px)] font-bold leading-[1.35] text-white sm:block"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  医療の就活に、
                  <br />
                  選択の地図を。
                </p>
              </div>
            </div>

            <SubSection label="Concept" title="何を解こうとしているか">
              <p className="text-[15px] leading-[2] text-[var(--color-slate-600)]">
                初期研修先の選択は、医師としてのキャリアの最初の分岐点です。
                年収・働き方・教育体制・症例数といった検討材料はすべて散在しており、
                納得感のある進路選択ができる環境はまだ整っていません。レジマッチは、
                その散在を整理し、オンライン説明会・OB/OG訪問までを地続きにする
                プラットフォームを目指しています。
              </p>
            </SubSection>

            <SubSection label="Functions" title="3つの機能">
              <FeatureGrid
                items={[
                  {
                    n: "01",
                    t: "病院一括比較",
                    d: "年収・当直体制・教育体制・症例数など、研修先の判断に必要な情報を同じ見方で並べて比較できます。",
                  },
                  {
                    n: "02",
                    t: "AIレジュメ生成",
                    d: "研修医側の応募準備をAIが支援。志望動機や自己PRをスムーズに整え、応募までの導線を短縮します。",
                  },
                  {
                    n: "03",
                    t: "ダイレクトスカウト",
                    d: "希望条件・志向に合う病院から、直接スカウトが届きます。受け身でも進路の選択肢が広がる構造。",
                  },
                ]}
              />
            </SubSection>

            <SubSection label="Status" title="現在の運用ステータス">
              <div className="rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.06] p-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-white"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white dot-pulse" />
                  β版 Testing
                </div>
                <p className="mt-4 text-[15px] leading-[1.95] text-[var(--color-slate-900)]">
                  現在、レジマッチはテスト運用中です。一部の医学生・研修医・病院にご利用いただきながら、機能と運用を磨き込んでいます。
                  導入のご相談・連携希望の病院様・取材のご依頼は随時受け付けています。
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.resi-match.com/lp1"
                    target="_blank"
                    rel="noreferrer"
                    className="group btn-press inline-flex items-center gap-3 rounded-full bg-[var(--color-navy-700)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-navy-600)]"
                  >
                    レジマッチを見る
                    <span aria-hidden className="arrow-slide">↗</span>
                  </a>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--color-navy-700)]"
                  >
                    <span className="link-underline">ご相談はこちら</span>
                    <span aria-hidden className="arrow-slide">→</span>
                  </Link>
                </div>
              </div>
            </SubSection>
          </>
        }
      />

      {/* ====================== 05 — Saloriku ====================== */}
      <BusinessSection
        Icon={IconSaloriku}
        anchor="saloriku"
        no="05"
        category="Beauty × Recruitment SaaS"
        nameJp="サロリク"
        nameEn="Recruitment Pages for Salons"
        status="New"
        accent="navy"
        lead="美容室・理容室の採用は、媒体に高い初期費用と不透明な運用費を払い続ける構造になりがちです。採用ページを自前で作る時間もノウハウもなく、媒体に載せるしかない——。サロリクは、採用の現場を知り尽くしたプロが、お店ごとの魅力を引き出して高品質なデザインの採用ページに仕上げるサービス。初期費用0円・月額制で、小さなサロンでも自分たちの採用ページを持てる形にしました。"
        body={
          <>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/images/services/saloriku-hero.png"
                alt="サロリク — 美容師の採用ページ"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-top"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-900)]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <p
                  className="rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-slate-700)] backdrop-blur"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  saloriku.com
                </p>
                <a
                  href="https://saloriku.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[12px] font-bold text-[var(--color-navy-800)] backdrop-blur transition hover:bg-white"
                >
                  公式サイトへ
                  <span aria-hidden className="arrow-slide">↗</span>
                </a>
              </div>
            </div>

            <SubSection label="Why now" title="美容業界の採用に起きていること">
              <ul className="space-y-4">
                {[
                  {
                    n: "01",
                    t: "採用コストが、固定費として重い",
                    d: "媒体掲載は数十万円の初期費用や不透明な月額がかかりがち。採用できてもできなくても出ていく固定費が、小さなサロンの体力を削ります。",
                  },
                  {
                    n: "02",
                    t: "自分たちの採用ページを、持てない",
                    d: "ページ制作には時間も知識も必要で、結局は媒体任せ。お店の魅力や働き方が、応募者にきちんと伝わりません。",
                  },
                  {
                    n: "03",
                    t: "応募が「店の言葉」で語られない",
                    d: "媒体のテンプレートでは、給与や勤務地以外の魅力が埋もれます。共感で人が集まる採用が、しづらい構造です。",
                  },
                ].map((p) => (
                  <li
                    key={p.n}
                    className="flex gap-5 rounded-2xl border border-current/15 bg-current/[0.04] p-5 text-current"
                  >
                    <span
                      className="w-8 shrink-0 text-[14px] tabular tracking-[0.18em] text-[var(--color-accent)] opacity-90"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      {p.n}
                    </span>
                    <div>
                      <p
                        className="text-base font-bold leading-[1.5]"
                        style={{ fontFamily: "var(--font-display-jp)" }}
                      >
                        {p.t}
                      </p>
                      <p className="mt-1.5 text-[13.5px] leading-[1.9] opacity-80">
                        {p.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </SubSection>

            <SubSection label="How it works" title="申し込みから公開まで、4ステップ">
              <FeatureGrid
                items={[
                  { n: "01", t: "申し込み", d: "店名やホットペッパー等のURLなど、最小限の入力でスタートできます。" },
                  { n: "02", t: "ヒアリング", d: "お店の魅力や働き方を、簡単な質問でていねいに引き出します。" },
                  { n: "03", t: "プロがデザイン制作", d: "採用の現場を知り尽くしたチームが、お店専用の採用ページを高品質なデザインで仕上げます。" },
                  { n: "04", t: "確認して公開", d: "内容を確認・承認すると専用URLで公開。追加費用なしで更新まで続けられます。" },
                ]}
              />
            </SubSection>

            <SubSection label="Plan" title="初期費用0円・月額制">
              <div className="rounded-2xl border border-white/15 bg-current/[0.04] p-7 text-current">
                <p className="text-[15px] leading-[1.95]">
                  初期費用は0円。月額1万円（税抜）から、追加費用なしで採用ページを持てます。買い切りプランも用意しています。
                  いまは先着のローンチキャンペーンとして、初期費用・初月無料（買い切りは50%OFF）でご案内中です。
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://saloriku.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group btn-press btn-press-light inline-flex items-center gap-3 rounded-full bg-[var(--color-slate-0)] px-6 py-3 text-sm font-bold text-[var(--color-navy-800)] transition hover:bg-[var(--color-navy-100)]"
                  >
                    サロリクを見る
                    <span aria-hidden className="arrow-slide">↗</span>
                  </a>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-white"
                  >
                    <span className="link-underline">導入のご相談</span>
                    <span aria-hidden className="arrow-slide">→</span>
                  </Link>
                </div>
              </div>
            </SubSection>
          </>
        }
      />

      {/* ====================== Final CTA ====================== */}
      <section className="relative overflow-hidden bg-[var(--color-slate-0)] py-28 sm:py-32">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div
            className="relative overflow-hidden rounded-3xl bg-[var(--color-navy-700)] px-8 py-16 text-[var(--color-slate-0)] sm:px-14 sm:py-20 lg:px-20"
            data-reveal
          >
            <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-50" />
            <div className="relative flex flex-col lg:grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p
                  className="text-[11px] uppercase tracking-[0.32em] text-white/55"
                  style={{ fontFamily: "var(--font-display-en)" }}
                >
                  Get in touch
                </p>
                <h2
                  className="mt-5 text-[clamp(28px,4.5vw,56px)] font-bold leading-[1.15] tracking-[-0.015em]"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  どの事業も、まずは
                  <br />
                  30分の対話から。
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-[2] text-white/75">
                  カジュアル面談から承ります。事業内容に該当しなくても、ご相談ベースで歓迎します。
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================================
   Section component
======================================================== */
type BusinessSectionProps = {
  anchor: string;
  no: string;
  category: string;
  nameJp: string;
  nameEn: string;
  status: "Active" | "New" | "Beta" | "Coming Soon";
  accent: "navy" | "light";
  lead: string;
  body: React.ReactNode;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function BusinessSection({
  anchor,
  no,
  category,
  nameJp,
  nameEn,
  status,
  accent,
  lead,
  body,
  Icon,
}: BusinessSectionProps) {
  const isNavy = accent === "navy";
  return (
    <section
      id={anchor}
      className={
        "relative overflow-hidden " +
        (isNavy
          ? "bg-[var(--color-navy-800)] text-[var(--color-slate-0)]"
          : "bg-[var(--color-slate-0)] text-[var(--color-slate-900)]")
      }
    >
      {isNavy && (
        <>
          <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-40" />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-[420px] w-[420px] text-white/10"
          >
            <PulseNetwork className="h-full w-full" />
          </div>
        </>
      )}

      <div
        className={
          "relative mx-auto flex flex-col lg:grid max-w-[1320px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-10 lg:px-12 " +
          (isNavy ? "" : "border-t border-[var(--color-slate-200)]")
        }
      >
        {/* Left rail */}
        <div className="lg:col-span-4" data-reveal>
          <div className="flex items-center gap-4">
            <div
              className={
                "grid h-16 w-16 place-items-center rounded-2xl " +
                (isNavy
                  ? "bg-white/10 text-white"
                  : "bg-[var(--color-navy-50)] text-[var(--color-navy-700)]")
              }
            >
              <Icon className="h-8 w-8" />
            </div>
            <div className="flex flex-col gap-1">
              <span
                className={
                  "text-[60px] font-bold tabular leading-none " +
                  (isNavy ? "text-white/85" : "text-[var(--color-navy-700)]")
                }
                style={{
                  fontFamily: "var(--font-display-en)",
                  letterSpacing: "-0.02em",
                }}
              >
                {no}
              </span>
              <span
                className={
                  "text-[11px] uppercase tracking-[0.28em] " +
                  (isNavy ? "text-white/55" : "text-[var(--color-slate-500)]")
                }
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                {category}
              </span>
            </div>
          </div>

          <h2
            className={
              "mt-8 text-balance text-[clamp(30px,3.8vw,48px)] font-bold leading-[1.15] tracking-[-0.012em] " +
              (isNavy ? "" : "text-[var(--color-slate-900)]")
            }
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            {nameJp}
          </h2>
          <p
            className={
              "mt-2 text-[12px] uppercase tracking-[0.32em] " +
              (isNavy ? "text-white/55" : "text-[var(--color-slate-400)]")
            }
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            {nameEn}
          </p>

          <div className="mt-6">
            <span
              className={
                "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.24em] " +
                (status === "Active"
                  ? isNavy
                    ? "bg-white text-[var(--color-navy-800)]"
                    : "bg-[var(--color-navy-700)] text-[var(--color-slate-0)]"
                  : status === "Beta" || status === "New"
                  ? "bg-[var(--color-accent)] text-white"
                  : isNavy
                  ? "border border-white/30 text-white/80"
                  : "border border-[var(--color-slate-300)] text-[var(--color-slate-500)]")
              }
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              <span
                className={
                  "inline-block h-1.5 w-1.5 rounded-full " +
                  (status === "Active"
                    ? isNavy
                      ? "bg-[var(--color-navy-800)] dot-pulse"
                      : "bg-white dot-pulse"
                    : status === "Beta" || status === "New"
                    ? "bg-white dot-pulse"
                    : "bg-[var(--color-slate-400)]")
                }
              />
              {status === "Beta" ? "β版 Testing" : status}
            </span>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-8" data-reveal-stagger>
          <p
            className={
              "text-[16px] leading-[2.05] " +
              (isNavy ? "text-white/80" : "text-[var(--color-slate-600)]")
            }
          >
            {lead}
          </p>

          <div className="mt-14 space-y-14">{body}</div>
        </div>
      </div>
    </section>
  );
}

function SubSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 border-b border-current/15 pb-3">
        <span
          className="text-[10px] uppercase tracking-[0.32em] text-current opacity-60"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          {label}
        </span>
        <h3
          className="text-[22px] font-bold leading-tight"
          style={{ fontFamily: "var(--font-display-jp)" }}
        >
          {title}
        </h3>
      </div>
      <div className="mt-7">{children}</div>
    </div>
  );
}

function FeatureGrid({
  items,
}: {
  items: { n: string; t: string; d: string }[];
}) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-current/15 bg-current/15 sm:grid-cols-2">
      {items.map((it) => (
        <li
          key={it.t}
          className="bg-[var(--color-slate-0)] p-6 text-[var(--color-slate-900)]"
        >
          <span
            className="text-[12px] tabular tracking-[0.32em] text-[var(--color-navy-700)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            {it.n}
          </span>
          <p
            className="mt-3 text-lg font-bold"
            style={{ fontFamily: "var(--font-display-jp)" }}
          >
            {it.t}
          </p>
          <p className="mt-2 text-[13px] leading-[1.95] text-[var(--color-slate-600)]">
            {it.d}
          </p>
        </li>
      ))}
    </ul>
  );
}
