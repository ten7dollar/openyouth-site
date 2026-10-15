// app/privacy-policy/page.tsx
import { Children, Fragment, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { PageMasthead } from "@/components/page-masthead";
import { phrases } from "@/lib/phrases";
import { keepHyphen } from "@/components/motion/phrased-safe";

export const metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "プライバシーポリシー — OpenYouth",
  description: "株式会社OpenYouthの個人情報保護方針。",
};

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. 個人情報の収集について",
    body: (
      <p>
        当社は、サービスの提供・運営、各種お問い合わせへの対応、採用活動等に必要な範囲で、
        お客様の氏名、メールアドレス、所属、履歴書情報その他必要な情報を適正かつ公正な手段により取得します。
        取得の際には、利用目的をできる限り特定したうえで、あらかじめ明示または通知します。
      </p>
    ),
  },
  {
    title: "2. 個人情報の利用目的",
    body: (
      <>
        <p>当社は、取得した個人情報を以下の目的で利用します。</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>サービスの提供、運営、改善のため</li>
          <li>ユーザーからのお問い合わせへの回答のため</li>
          <li>新機能・キャンペーン・イベント等のご案内のため</li>
          <li>アンケートの実施・分析によるサービス品質向上のため</li>
          <li>採用選考および選考結果に関するご連絡のため</li>
          <li>法令に基づく通知・対応その他上記に付随する目的のため</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. 個人情報の第三者提供",
    body: (
      <>
        <p>
          当社は、次の場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供しません。
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>法令に基づく場合</li>
          <li>
            人の生命、身体または財産の保護のために必要がある場合で、ご本人の同意を得ることが困難なとき
          </li>
          <li>
            公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合で、ご本人の同意を得ることが困難なとき
          </li>
          <li>
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
          </li>
          <li>
            利用目的の達成に必要な範囲内で業務委託先に提供する場合（委託先に対しては適切な管理・監督を行います。）
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. 個人情報の管理",
    body: (
      <p>
        当社は、個人情報への不正アクセス、紛失、破壊、改ざん及び漏えい等を防止するため、
        合理的な安全対策を講じ、個人情報を適切に管理します。また、従業員に対して個人情報の適切な取り扱いに関する教育・監督を行います。
      </p>
    ),
  },
  {
    title: "5. 開示・訂正・利用停止等",
    body: (
      <p>
        ご本人から、当社が保有するご自身の個人情報の開示、訂正、追加、削除、利用停止等のお申し出があった場合には、
        ご本人確認のうえ、法令に基づき適切かつ速やかに対応いたします。
      </p>
    ),
  },
  {
    title: "6. お問い合わせ窓口",
    body: (
      <>
        <p>
          本ポリシーおよび個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
        </p>
        <div className="mt-5 rounded-2xl bg-[var(--color-slate-50)] px-5 py-6 text-[var(--color-slate-900)] sm:px-7">
          <p className="text-base font-bold" style={{ fontFamily: "var(--font-display-jp)" }}>
            株式会社OpenYouth 個人情報お問い合わせ窓口
          </p>
          <p className="mt-2 text-[13.5px] text-[var(--color-slate-600)]">
            〒150-0043 東京都渋谷区道玄坂１丁目１０−８
          </p>
          <p
            className="mt-2 text-[13.5px] tabular text-[var(--color-slate-900)]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            admin@openyouth.co.jp
          </p>
        </div>
      </>
    ),
  },
  {
    title: "7. 本ポリシーの変更",
    body: (
      <p>
        当社は、必要に応じて本ポリシーの内容を変更することがあります。
        重要な変更がある場合には、本サイト上での公表その他適切な方法によりお知らせします。
      </p>
    ),
  },
];

// 文節の切れ目でだけ折り返す。閉じ括弧・句読点で始まる文節は前の文節につなげ、行頭に来ないようにする。
// 最後の文節が5文字以下（「ある場合」「困難なとき」）なら前の文節とつなぎ、1行に取り残さない（文言は変えない）
function Ph({ text }: { text: string }) {
  const ps = phrases(keepHyphen(text)).reduce<string[]>((acc, p) => {
    if (acc.length > 0 && /^[）」』】〕〉》、。・：；！？)\]]/.test(p)) acc[acc.length - 1] += p;
    else acc.push(p);
    return acc;
  }, []);
  while (ps.length > 1 && Array.from(ps[ps.length - 1]).length <= 5) {
    const last = ps.pop() as string;
    ps[ps.length - 1] += last;
  }
  return (
    <span className="phrased">
      {ps.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {i > 0 && i === ps.length - 1 ? <span className="whitespace-nowrap">{p}</span> : p}
        </Fragment>
      ))}
    </span>
  );
}

// 本文の文言はそのままに、文中の文字列だけを文節の切れ目で折り返すようにする。
// JSX の改行が日本語の間に残す半角スペースは、表示のときだけ取り除く。
function phrasify(node: ReactNode): ReactNode {
  if (typeof node === "string") {
    const text = node.replace(/(?<=[^\x00-\x7F]) +(?=[^\x00-\x7F])/g, "");
    return text.trim() === "" ? node : <Ph text={text} />;
  }
  if (Array.isArray(node)) return Children.map(node, phrasify);
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (el.props.children === undefined) return el;
    return cloneElement(el, undefined, Children.map(el.props.children, phrasify));
  }
  return node;
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        titleLines={["プライバシーポリシー"]}
        lead={phrasify(
          <p className="text-pretty">
            株式会社OpenYouth（以下「当社」といいます。）は、当社が提供する各種サービス
            （スカウト運用AI「Stock-HR」、採用支援、営業支援、その他研究開発中の事業を含む）の運営にあたり、
            お客様の個人情報を適切に取り扱うことを重要な責務と考え、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </p>
        )}
      />

      <section className="relative bg-[var(--color-slate-0)] pb-28 pt-4 sm:pb-40 sm:pt-8">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-16 px-5 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-12">
          <nav aria-label="目次" className="min-w-0 lg:col-span-3" data-reveal>
            <div className="lg:sticky lg:top-28">
              <p
                className="text-[15px] font-bold text-[var(--color-navy-600)]"
                style={{ fontFamily: "var(--font-display-jp)" }}
              >
                目次
              </p>
              <ol className="mt-4 flex flex-col gap-1">
                {SECTIONS.map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#policy-${i + 1}`}
                      className="group flex items-baseline gap-3 py-1.5 text-[14px] text-[var(--color-slate-600)] transition-colors hover:text-[var(--color-navy-600)]"
                    >
                      <span
                        className="w-6 shrink-0 tabular text-[var(--color-slate-400)]"
                        style={{ fontFamily: "var(--font-display-en)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="underline-grow">{s.title.replace(/^\d+\.\s/, "")}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="flex min-w-0 flex-col gap-16 sm:gap-20 lg:col-span-9">
            {SECTIONS.map((s, i) => (
              <section key={s.title} id={`policy-${i + 1}`} className="scroll-mt-28" data-reveal>
                <h2
                  className="text-[22px] font-bold leading-[1.4] text-[var(--color-slate-900)] sm:text-[28px]"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  {s.title}
                </h2>
                <div className="mt-5 max-w-3xl text-pretty text-[15px] leading-[2] text-[var(--color-slate-600)]">
                  {phrasify(s.body)}
                </div>
              </section>
            ))}

            <p className="text-[14px] text-[var(--color-slate-500)]">
              制定日{" "}
              <span className="tabular" style={{ fontFamily: "var(--font-display-en)" }}>
                2025.12.10
              </span>
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
