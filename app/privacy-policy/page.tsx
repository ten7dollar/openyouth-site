// app/privacy-policy/page.tsx
import { PageMasthead } from "@/components/page-masthead";

export const metadata = {
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
        <div className="mt-4 rounded-2xl border border-[var(--color-slate-200)] bg-[var(--color-slate-50)] p-5 text-[var(--color-slate-900)]">
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

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        index="99"
        eyebrowEn="PRIVACY"
        eyebrowJp="プライバシーポリシー"
        titleJp={<>プライバシーポリシー</>}
        lead={
          <>
            株式会社OpenYouth（以下「当社」といいます。）は、当社が提供する各種サービス
            （スカウト運用AI「Stock-HR」、採用支援、営業支援、その他研究開発中の事業を含む）の運営にあたり、
            お客様の個人情報を適切に取り扱うことを重要な責務と考え、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </>
        }
      />

      <section className="relative bg-[var(--color-slate-0)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <aside className="lg:col-span-3" data-reveal>
            <div className="lg:sticky lg:top-28">
              <p
                className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-slate-400)]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                目次
              </p>
              <ol className="mt-4 space-y-2.5 text-[12px]">
                {SECTIONS.map((s, i) => (
                  <li
                    key={s.title}
                    className="flex items-baseline gap-2 text-[var(--color-slate-600)]"
                  >
                    <span
                      className="w-6 tabular text-[var(--color-slate-400)]"
                      style={{ fontFamily: "var(--font-display-en)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.title.replace(/^\d+\.\s/, "")}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="lg:col-span-9" data-reveal-stagger>
            {SECTIONS.map((s) => (
              <section
                key={s.title}
                className="border-t border-[var(--color-slate-200)] pt-8 pb-12 first:border-t-0 first:pt-0"
              >
                <h2
                  className="text-[24px] font-bold leading-tight text-[var(--color-slate-900)] sm:text-[28px]"
                  style={{ fontFamily: "var(--font-display-jp)" }}
                >
                  {s.title}
                </h2>
                <div className="mt-5 max-w-3xl text-[15px] leading-[2] text-[var(--color-slate-600)]">
                  {s.body}
                </div>
              </section>
            ))}

            <p
              className="mt-12 border-t border-[var(--color-slate-200)] pt-6 text-right text-[11px] tracking-[0.18em] text-[var(--color-slate-400)] tabular"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              制定日 — 2025.12.10
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
