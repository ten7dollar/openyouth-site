// components/motion/paint-title.tsx
// 題字を1字ずつ、ロゴのYの斜線と同じ角度でネイビーに塗っていく。
// CSSだけで動かす（JSで隠さない）。最初から薄いグレーで描画されるので、表示の速さを落とさない。
import type { CSSProperties, ElementType } from "react";

type Line = { text: string; className?: string; segments?: string[] }; // segments＝狭い画面で行を分ける位置

export function PaintTitle({
  lines,
  as: Tag = "h1",
  className = "",
  style,
  delay = 0,
  onView = false,
}: {
  lines: Line[];
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number; // 秒
  onView?: boolean; // true＝画面に入ってから塗る（ヒーロー以外の見出し）
}) {
  let i = 0;
  return (
    <Tag
      aria-label={lines.map((l) => l.text).join("")}
      className={"paint-title " + className}
      data-paint={onView ? "" : undefined}
      style={{ ...style, ["--paint-delay" as string]: `${delay}s` }}
    >
      {lines.map((l, li) => (
        <span key={li} aria-hidden className={"block whitespace-nowrap " + (l.className ?? "")}>
          {(l.segments ?? [l.text]).map((seg, si) => (
            <span key={si} className={l.segments ? "block lg:inline" : undefined}>
              {Array.from(seg).map((ch, ci) => {
                const idx = i++;
                return (
                  <span key={ci} className="paint-char" style={{ ["--i" as string]: idx }}>
                    {ch}
                  </span>
                );
              })}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
