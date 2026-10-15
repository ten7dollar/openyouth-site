// app/services/media/page.tsx
import Link from "next/link";
import { PageMasthead } from "@/components/page-masthead";
import { PhrasedSafe as Phrased } from "@/components/motion/phrased-safe";
import { MediaSwitch } from "@/components/motion/media-switch";
import { phrases } from "@/lib/phrases";
import { MEDIA_SITES, MEDIA_COUNT } from "@/lib/businesses";

export const metadata = {
  alternates: { canonical: "/services/media" },
  title: "Webメディア事業 — OpenYouth",
  description: `OpenYouthが運営する${MEDIA_COUNT}つの専門メディア。${MEDIA_SITES.map((m) => `${m.name}（${m.domain}）`).join("、")}。`,
};

export default function MediaPage() {
  return (
    <div className="bg-[var(--color-slate-0)] text-[var(--color-slate-900)]">
      <PageMasthead
        eyebrowJp="Webメディア事業"
        titleLines={[`${MEDIA_COUNT}つの領域で、`, "専門メディアを。"]}
        lead={<Phrased text="検索結果には、広告と古いまとめ記事が並びがちです。領域ごとに、読者が知りたいことに最短でたどり着ける形を目指しています。" />}
        meta={MEDIA_SITES.map((m) => ({ k: m.name, v: m.domain }))}
      />

      {/* 媒体 — PCは左を止めて、右の画面に合わせて切り替える。スマホは媒体ごとに縦に積む */}
      <section className="relative bg-[var(--color-slate-50)] py-28 sm:py-40 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <MediaSwitch
            items={MEDIA_SITES.map((m) => ({
              slug: m.slug,
              name: m.name,
              domain: m.domain,
              lead: phrases(m.lead),
              url: m.url,
              host: m.host,
              lang: m.lang,
              image: m.image,
            }))}
          />
        </div>
      </section>

      <PartnershipCTA />
    </div>
  );
}

/* ============================================================
   掲載・協業 — トップのお問い合わせの章と同じ型
============================================================ */
function PartnershipCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-600)] py-24 text-[var(--color-slate-0)] sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <h2 className="text-[15px] font-bold text-[var(--color-navy-100)]" style={{ fontFamily: "var(--font-display-jp)" }}>
          掲載・協業のご相談
        </h2>
        <Link
          href="/contact"
          className="group mt-6 inline-flex items-baseline gap-4 text-[clamp(64px,15vw,200px)] font-bold leading-[1] tracking-[-0.04em] sm:gap-8"
          style={{ fontFamily: "var(--font-display-jp)" }}
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
          <p className="max-w-[34em] text-[15px] leading-[2] text-white/80 sm:text-[16px]">
            <Phrased text="各メディアへの掲載や、記事・データを使った協業のご相談を承っています。" />
          </p>
          <Link href="/services" className="group inline-flex shrink-0 items-center text-[15px] font-bold text-white">
            <span className="underline-grow">すべての事業を見る</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
