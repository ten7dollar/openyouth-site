// lib/phrases.ts
// 日本語の文を文節に分ける（サーバー側だけで使う）。
// 文節ごとに span にすると、折り返しが文節の切れ目だけで起きる＋スクロールで文節ごとに塗れる。
// BudouX の HTML 処理は overflow-wrap:anywhere を付けるので使わず、parse() の配列だけ受け取る。
import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();

export function phrases(text: string): string[] {
  return parser.parse(text);
}
