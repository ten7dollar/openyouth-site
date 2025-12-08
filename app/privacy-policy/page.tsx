// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 pb-16">
      {/* ヘッダー */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            プライバシーポリシー
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Privacy Policy
          </p>
        </div>
      </section>

      {/* 本文カード */}
      <section className="mt-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-800 shadow-sm sm:p-8">
            <p className="mb-6 text-sm text-slate-700">
              株式会社OpenYouth（以下「当社」といいます。）は、当社が提供する各種サービス
              （初期研修医マッチングプラットフォーム「レジマッチ」、AI開発支援「Make AI」、
              AI講座「AI Academy」、Web制作事業「Make Face」等）の運営にあたり、お客様の個人情報を適切に取り扱うことを重要な責務と考え、
              以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
            </p>

            {/* 1. 個人情報の収集について */}
            <SectionTitle>1. 個人情報の収集について</SectionTitle>
            <p className="mt-2">
              当社は、サービスの提供・運営、各種お問い合わせへの対応、採用活動等に必要な範囲で、
              お客様の氏名、メールアドレス、所属、履歴書情報その他必要な情報を適正かつ公正な手段により取得します。
              取得の際には、利用目的をできる限り特定したうえで、あらかじめ明示または通知します。
            </p>

            {/* 2. 利用目的 */}
            <SectionTitle>2. 個人情報の利用目的</SectionTitle>
            <p className="mt-2">当社は、取得した個人情報を以下の目的で利用します。</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>サービスの提供、運営、改善のため</li>
              <li>ユーザーからのお問い合わせへの回答のため</li>
              <li>新機能・キャンペーン・イベント等のご案内のため</li>
              <li>アンケートの実施・分析によるサービス品質向上のため</li>
              <li>採用選考および選考結果に関するご連絡のため</li>
              <li>法令に基づく通知・対応その他上記に付随する目的のため</li>
            </ul>

            {/* 3. 第三者提供 */}
            <SectionTitle>3. 個人情報の第三者提供</SectionTitle>
            <p className="mt-2">
              当社は、次の場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供しません。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
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

            {/* 4. 管理 */}
            <SectionTitle>4. 個人情報の管理</SectionTitle>
            <p className="mt-2">
              当社は、個人情報への不正アクセス、紛失、破壊、改ざん及び漏えい等を防止するため、
              合理的な安全対策を講じ、個人情報を適切に管理します。また、従業員に対して個人情報の適切な取り扱いに関する教育・監督を行います。
            </p>

            {/* 5. 開示・訂正・利用停止等 */}
            <SectionTitle>5. 開示・訂正・利用停止等</SectionTitle>
            <p className="mt-2">
              ご本人から、当社が保有するご自身の個人情報の開示、訂正、追加、削除、利用停止等のお申し出があった場合には、
              ご本人確認のうえ、法令に基づき適切かつ速やかに対応いたします。
            </p>

            {/* 6. お問い合わせ窓口 */}
            <SectionTitle>6. お問い合わせ窓口</SectionTitle>
            <p className="mt-2">
              本ポリシーおよび個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
            </p>

            <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-800 sm:px-5 sm:py-5">
              <p className="font-semibold text-slate-900">
                株式会社OpenYouth 個人情報お問い合わせ窓口
              </p>
              <p className="mt-1">〒150-0043 東京都渋谷区道玄坂１丁目１０−８</p>
              <p className="mt-1">
                Email:{"info@resimach.com"}
                <a
                  href="mailto:info@openyouth.co.jp"
                  className="text-sky-600 underline-offset-2 hover:underline"
                >
                  info@openyouth.co.jp
                </a>
              </p>
            </div>

            {/* 7. 改定 */}
            <SectionTitle>7. 本ポリシーの変更</SectionTitle>
            <p className="mt-2">
              当社は、必要に応じて本ポリシーの内容を変更することがあります。
              重要な変更がある場合には、本サイト上での公表その他適切な方法によりお知らせします。
            </p>

            <p className="mt-6 text-right text-xs text-slate-500">
              制定日：2025年12月10日
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

type SectionTitleProps = {
  children: React.ReactNode;
};

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mt-5 border-l-4 border-sky-500 pl-3 text-sm font-semibold text-slate-900 sm:text-base">
      {children}
    </h2>
  );
}