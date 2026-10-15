// components/motion/phrased-safe.tsx
// Phrased（文節の切れ目でだけ折り返す）に、下層ページで見つかった折り返しの崩れへの手当てを足したもの。
// 1. 英数字に挟まれたハイフン（Stock-HR・app.stock-hr.jp）では折り返さない（語の結合子 U+2060 を挟む）
// 2. BudouX が語の途中で分ける箇所をつなぎ直す（「一員と｜して」「と｜いう」「から｜でも」「当ては｜まらない」）
// 3. tail を付けると、最後の文節が5文字以下のとき前の文節とつないで1行に保つ（「ある場合」だけの行を作らない）
// サーバー側で使う（BudouX をクライアントに持ち込まない）。
import { Fragment } from "react";
import { phrases } from "@/lib/phrases";

const JOIN: [RegExp, RegExp][] = [
  [/./, /^して/],
  [/と$/, /^いう/],
  [/から$/, /^でも/],
  [/当ては$/, /^まら/],
];

export function keepHyphen(text: string): string {
  return text.replace(/([A-Za-z0-9])-(?=[A-Za-z0-9])/g, "$1-⁠");
}

export function safePhrases(text: string, tail = false): string[] {
  const out: string[] = [];
  for (const p of phrases(keepHyphen(text))) {
    const prev = out[out.length - 1];
    if (prev !== undefined && JOIN.some(([a, b]) => a.test(prev) && b.test(p))) out[out.length - 1] = prev + p;
    else out.push(p);
  }
  while (tail && out.length > 1 && Array.from(out[out.length - 1]).length <= 5) {
    const last = out.pop() as string;
    out[out.length - 1] += last;
  }
  return out;
}

export function PhrasedSafe({ text, tail = false }: { text: string; tail?: boolean }) {
  const ps = safePhrases(text, tail);
  return (
    <span className="phrased">
      {ps.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {tail && i > 0 && i === ps.length - 1 ? <span className="whitespace-nowrap">{p}</span> : p}
        </Fragment>
      ))}
    </span>
  );
}
