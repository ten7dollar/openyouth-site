/**
 * シンプルな IP ベースのレート制限（メモリベース）
 *
 * Vercel のサーバーレス環境ではインスタンスがコールドスタンバイされうるが、
 * 連続した不正リクエストには十分効果がある。
 * 完全な永続化が必要なら Vercel KV / Upstash Redis 等を使う。
 *
 * 設定:
 *   5分で 3回まで
 *   1時間で 10回まで
 */

const RULES = [
  { windowMs: 5 * 60 * 1000, limit: 3, label: "5分" },
  { windowMs: 60 * 60 * 1000, limit: 10, label: "1時間" },
];

// IP → タイムスタンプの配列（古いものは自動的に掃除）
const requests = new Map<string, number[]>();

export function checkContactRateLimit(ip: string):
  | { ok: true }
  | { ok: false; retryAfterSec: number; reason: string } {
  const now = Date.now();
  const oldestRelevant = now - Math.max(...RULES.map((r) => r.windowMs));

  // この IP の過去リクエストを取り出し、関心のあるウィンドウより古いものは捨てる
  const history = (requests.get(ip) ?? []).filter((t) => t > oldestRelevant);

  for (const rule of RULES) {
    const since = now - rule.windowMs;
    const recentCount = history.filter((t) => t > since).length;
    if (recentCount >= rule.limit) {
      const oldestInWindow = Math.min(...history.filter((t) => t > since));
      const retryAfterSec = Math.ceil((oldestInWindow + rule.windowMs - now) / 1000);
      return {
        ok: false,
        retryAfterSec: Math.max(30, retryAfterSec),
        reason: `${rule.label}に${rule.limit}回までです`,
      };
    }
  }

  // 記録
  history.push(now);
  requests.set(ip, history);

  // メモリリーク対策：1000IPを超えたら掃除
  if (requests.size > 1000) {
    for (const [k, v] of requests.entries()) {
      const stillFresh = v.filter((t) => t > oldestRelevant);
      if (stillFresh.length === 0) requests.delete(k);
      else requests.set(k, stillFresh);
    }
  }

  return { ok: true };
}

/**
 * リクエストから IP を抽出（Vercel/CDN 経由の各種ヘッダを考慮）
 */
export function getClientIp(req: Request): string {
  const headers = req.headers;
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const real = headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}
