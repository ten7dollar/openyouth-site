import Image from "next/image";

export default function CompanyPage() {
  return (
    <div className="bg-slate-50 pb-16">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Company
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">会社情報</p>
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 会社概要カード */}
        <section className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            会社概要
          </h2>

          <dl className="mt-6 divide-y divide-slate-100 text-sm text-slate-800">
            <div className="grid grid-cols-3 gap-4 py-3 sm:grid-cols-4">
              <dt className="col-span-1 text-slate-500">会社名</dt>
              <dd className="col-span-2 font-semibold sm:col-span-3">
                株式会社OpenYouth
              </dd>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 sm:grid-cols-4">
              <dt className="col-span-1 text-slate-500">設立</dt>
              <dd className="col-span-2 sm:col-span-3">2025年12月26日</dd>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 sm:grid-cols-4">
              <dt className="col-span-1 text-slate-500">代表者</dt>
              <dd className="col-span-2 sm:col-span-3">代表取締役 深谷 洸樹</dd>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 sm:grid-cols-4">
              <dt className="col-span-1 text-slate-500">所在地</dt>
              <dd className="col-span-2 sm:col-span-3">
                〒150-0043 東京都渋谷区道玄坂１丁目１０−８
              </dd>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 sm:grid-cols-4">
              <dt className="col-span-1 text-slate-500">資本金</dt>
              <dd className="col-span-2 sm:col-span-3">50万円</dd>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 sm:grid-cols-4">
              <dt className="col-span-1 text-slate-500">事業内容</dt>
              <dd className="col-span-2 space-y-1 sm:col-span-3">
                <p>・医療プラットフォーム事業（初期研修医マッチング「レジマッチ」）</p>
                <p>・AIソリューション事業（企業向けAI受託開発「Make AI」）</p>
                <p>・IT人材教育事業（ToC向けAI講座「AI Academy」）</p>
                <p>・クリエイティブ・マーケティング事業（Web制作「Make Face」）</p>
              </dd>
            </div>
          </dl>
        </section>

        {/* 代表経歴カード */}
        <section className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            代表経歴
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
            {/* 写真エリア */}
            <div className="flex justify-center md:justify-start">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                {/* 代表写真：public/images/company/ceo.jpg を想定 */}
                <Image
                  src="/images/company/ceo.jpg"
                  alt="代表取締役 深谷洸樹"
                  width={280}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* プロフィール・タイムライン */}
            <div className="space-y-4 text-sm text-slate-700">
              <p>
                京都大学農学部卒。教育系大手事業会社、総合コンサルティングファーム、Tech系スタートアップ、
                IT系企業グループ会社代表などを経て、2025年に株式会社OpenYouthを創業。
              </p>
              <p>
                経営企画・事業開発・採用人事を一貫して担い、次世代型AI / LLMを活用した初期研修医マッチングプラットフォーム
                「レジマッチ」を立ち上げ、医療・教育領域の構造変革に挑む。
              </p>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <h3 className="text-xs font-semibold text-slate-500">
                  Career Timeline
                </h3>
                <ul className="mt-3 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                    <div>
                      <p className="text-slate-800">京都大学 農学部 卒業</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                    <div>
                      <p className="text-slate-800">
                        教育系大手事業会社 / 総合コンサルティングファーム にて
                        新規事業・経営支援に従事
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                    <div>
                      <p className="text-slate-800">
                        Tech系スタートアップの事業統括、IT系事業会社のグループ会社代表として
                        プロダクト開発・組織マネジメントをリード
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                    <div>
                      <p className="text-xs font-semibold text-sky-600">
                        2025年
                      </p>
                      <p className="font-semibold text-slate-900">
                        株式会社OpenYouth 創業
                      </p>
                      <p className="text-xs text-slate-600">
                        代表取締役に就任。「レジマッチ」をローンチし、
                        医療・教育領域の新しいキャリア選択のインフラを目指す。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-2 text-sm">
                <p className="font-semibold text-slate-900">深谷 洸樹</p>
                <p className="text-xs text-slate-500">Koki Fukaya</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}