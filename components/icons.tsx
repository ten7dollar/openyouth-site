// components/icons.tsx
// Hand-drawn SVG icons specific to OpenYouth.
// 32x32 viewBox, strokes use currentColor for theming.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/* ============== Service icons ============== */

// Stock-HR: 多軸入力 → 集約点 → 出力
export function IconStockHR(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="5" cy="8" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="5" cy="16" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="5" cy="24" r="1.6" fill="currentColor" stroke="none" />
      <path d="M7 8c4 0 5 8 9 8M7 16h9M7 24c4 0 5-8 9-8" />
      <circle cx="18" cy="16" r="4" />
      <path d="M22 16h5" />
      <path d="M25 13l2 3-2 3" />
    </Base>
  );
}

// Recruitment: 人型を矢印で繋ぐ
export function IconRecruitment(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="10" r="2.4" />
      <path d="M5 22c0-2.5 1.8-4.4 4-4.4s4 1.9 4 4.4" />
      <circle cx="22" cy="10" r="2.4" />
      <path d="M18 22c0-2.5 1.8-4.4 4-4.4s4 1.9 4 4.4" />
      <path d="M14 16h3M16 14l2 2-2 2" />
    </Base>
  );
}

// Sales: 折れ線グラフ + 右上アクセント
export function IconSales(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 26V6" />
      <path d="M4 26h24" />
      <path d="M7 22l5-6 4 3 6-8" />
      <circle cx="22" cy="11" r="1.8" fill="currentColor" stroke="none" />
      <path d="M25 8l3-3M28 5h-3M28 5v3" />
    </Base>
  );
}

// ResiMatch: 十字（医療）+ フォーク状の道（キャリア）
export function IconResiMatch(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M10 4v10M5 9h10" />
      <circle cx="10" cy="9" r="6" />
      <path d="M16 18l5 6M16 18l-3 7" />
      <circle cx="21" cy="24" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="13" cy="25" r="1.6" fill="currentColor" stroke="none" />
    </Base>
  );
}

/* ============== Value icons ============== */

// Long Bet: 時計＋長い矢印（時を超えて効くもの）
export function IconLongBet(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="14" cy="16" r="8" />
      <path d="M14 11v5l3 2" />
      <path d="M22 8l6-6M28 2h-4M28 2v4" />
    </Base>
  );
}

// Field First: 手のひら（現場の手触り）
export function IconFieldFirst(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M11 22V10a1.5 1.5 0 113 0v6" />
      <path d="M14 16v-4a1.5 1.5 0 113 0v4" />
      <path d="M17 14v-2a1.5 1.5 0 113 0v6" />
      <path d="M20 14a1.5 1.5 0 113 0v6c0 4-3 6-7 6h-2c-3 0-5-1.5-6-4l-2-5c-.5-1.4.7-2.8 2.2-2.2L11 16" />
    </Base>
  );
}

// Open by Default: 開いた鍵（経験で閉じない）
export function IconOpenByDefault(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="6" y="14" width="14" height="12" rx="2" />
      <path d="M10 14v-3a5 5 0 0110-1" />
      <circle cx="13" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <path d="M13 21v3" />
    </Base>
  );
}

/* ============== Misc decorative ============== */

// Arrow with shaft
export function IconArrowOut(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 23L23 9" />
      <path d="M13 9h10v10" />
    </Base>
  );
}

// Plus
export function IconPlus(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M16 6v20M6 16h20" />
    </Base>
  );
}

// Sparkle
export function IconSparkle(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M16 4l2.5 6.5L25 13l-6.5 2.5L16 22l-2.5-6.5L7 13l6.5-2.5L16 4z" />
      <path d="M25 22l1 2.5 2.5 1-2.5 1L25 29l-1-2.5-2.5-1 2.5-1L25 22z" />
    </Base>
  );
}

// Compass / cardinal — for vision section
export function IconCompass(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 7v18M7 16h18" />
      <path d="M20 12l-2 6-6 2 2-6 6-2z" fill="currentColor" stroke="none" />
    </Base>
  );
}

// Stack / layers — for "long bet" feel
export function IconStack(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 10l12-6 12 6-12 6L4 10z" />
      <path d="M4 16l12 6 12-6" />
      <path d="M4 22l12 6 12-6" />
    </Base>
  );
}
