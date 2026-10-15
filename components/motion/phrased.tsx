// components/motion/phrased.tsx
// 文を文節の切れ目（BudouX）でだけ折り返す。<wbr> を文節の間に入れ、文節の中は keep-all で守る。
// スマホで「選/択肢」のように語の途中で割れるのを防ぐ。
import { Fragment } from "react";
import { phrases } from "@/lib/phrases";

export function Phrased({ text }: { text: string }) {
  const ps = phrases(text);
  return (
    <span className="phrased">
      {ps.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {p}
        </Fragment>
      ))}
    </span>
  );
}
