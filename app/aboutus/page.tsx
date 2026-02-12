import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 pb-16">
      {/* ヘッダー */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            About Us
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            OpenYouthについて
          </p>
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        {/* Vision */}
        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500">
            Vision
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900 sm:text-2xl">
            すべての若者が最大限に挑戦できる社会をつくる
          </p>
        </section>

        {/* Mission */}
        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500">
            Mission
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900 sm:text-2xl">
            テクノロジーと教育で、キャリア選択の不確実性をなくす
          </p>
        </section>

        {/* 代表挨拶 */}
        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            代表挨拶
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
            {/* 写真 */}
            <div className="flex justify-center md:justify-start">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <Image
                  src="/images/company/ceo.jpg"
                  alt="代表取締役 深谷洸樹"
                  width={280}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* テキスト */}
            <div className="space-y-4 text-sm leading-relaxed text-slate-700">
              <p>
                こんにちは。株式会社OpenYouth 代表の深谷洸樹です。
              </p>
              <p>
                当社は創業以来、「若者の可能性を最大化する」というテーマに取り組んできました。
                私自身、キャリアの選択において多くの迷いと失敗を経験してきました。
                情報が溢れる現代においても、「正しい選択をすること」は決して簡単ではありません。
              </p>
              <p>
                しかし、テクノロジーの進化は、この「不確実性」を減らす力を持っています。
                AIによるデータ分析、プラットフォームによる透明性の確保、そして教育による個人のエンパワーメント。
                これらを組み合わせることで、誰もが自信を持って未来を選べる社会を実現したいと考えています。
              </p>
              <p>
                OpenYouthはまだ始まったばかりの会社ですが、
                医療・教育・AI・クリエイティブの領域で、新しい当たり前をつくっていきます。
                今後とも変わらぬご支援を賜りますようお願い申し上げます。
              </p>

              <div className="pt-2 text-right text-sm">
                <p className="font-semibold text-slate-900">
                  代表取締役 CEO 深谷 洸樹
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 会社概要（ダイジェスト） */}
        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            会社概要
          </h2>

          <dl className="mt-6 grid gap-x-8 gap-y-4 text-sm text-slate-800 sm:grid-cols-2">
            <div className="space-y-1">
              <dt className="text-xs font-semibold text-slate-500">会社名</dt>
              <dd>株式会社OpenYouth</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold text-slate-500">設立</dt>
              <dd>2025年12月26日</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold text-slate-500">代表者</dt>
              <dd>代表取締役社長 深谷 洸樹</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold text-slate-500">資本金</dt>
              <dd>50万円</dd>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <dt className="text-xs font-semibold text-slate-500">所在地</dt>
              <dd>〒150-0043 東京都渋谷区道玄坂１丁目１０−８</dd>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <dt className="text-xs font-semibold text-slate-500">事業内容</dt>
              <dd className="space-y-1">
                <p>・医療系マッチングプラットフォーム「レジマッチ」の運営</p>
                <p>・AI受託開発事業「Make AI」</p>
                <p>・AI教育事業「AI Academy」</p>
                <p>・Web制作事業「Make Face」</p>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}