// components/motion/field-ticker.tsx
// 関わっている領域の名前が、太字で等速に横へ流れる帯。CSSだけで動かす。
// 2周ぶん並べて -50% まで流すと継ぎ目なく回る。動きを減らす設定の端末では止める。
export function FieldTicker({
  words,
  className = "bg-[var(--color-navy-700)] text-white",
}: {
  words: string[];
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className="whitespace-nowrap px-5 sm:px-8">{w}</span>
          <span aria-hidden className="ticker-slash" />
        </span>
      ))}
    </div>
  );
  return (
    <div className={"ticker relative overflow-hidden py-5 sm:py-7 " + className}>
      <p className="sr-only">{words.join("、")}</p>
      <div
        aria-hidden
        className="ticker-track flex w-max text-[clamp(26px,4.2vw,56px)] font-bold leading-none tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display-jp)" }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
