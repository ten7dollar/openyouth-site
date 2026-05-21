// components/decorations.tsx
// Decorative SVG graphics for OpenYouth pages. Pure visual, no interactive logic.

import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

/**
 * Concentric circles + dot lattice + tick marks.
 * Drops in as the hero "blueprint" piece.
 */
export function BlueprintRings(props: Props) {
  return (
    <svg viewBox="0 0 480 480" fill="none" aria-hidden {...props}>
      <defs>
        <radialGradient id="bp-fade" cx="50%" cy="50%" r="50%">
          <stop offset="55%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,1)" />
        </radialGradient>
        <pattern id="bp-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.18" />
        </pattern>
      </defs>

      <rect width="480" height="480" fill="url(#bp-dots)" />

      <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.65">
        <circle cx="240" cy="240" r="60" />
        <circle cx="240" cy="240" r="120" />
        <circle cx="240" cy="240" r="180" />
        <circle cx="240" cy="240" r="232" strokeDasharray="2 6" />
      </g>

      {/* Center marker */}
      <g>
        <circle cx="240" cy="240" r="4" fill="currentColor" />
        <circle cx="240" cy="240" r="10" stroke="currentColor" fill="none" />
      </g>

      {/* Orbital dots */}
      <g fill="currentColor">
        <circle cx="240" cy="60" r="3" />
        <circle cx="420" cy="240" r="3" />
        <circle cx="240" cy="420" r="3" />
        <circle cx="60" cy="240" r="3" />
        <circle cx="370" cy="110" r="2" />
        <circle cx="370" cy="370" r="2" />
        <circle cx="110" cy="370" r="2" />
        <circle cx="110" cy="110" r="2" />
      </g>

      {/* Tick marks */}
      <g stroke="currentColor" strokeWidth="1">
        <line x1="240" y1="0" x2="240" y2="14" />
        <line x1="240" y1="466" x2="240" y2="480" />
        <line x1="0" y1="240" x2="14" y2="240" />
        <line x1="466" y1="240" x2="480" y2="240" />
      </g>

      {/* Crosshair lines */}
      <g stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 5" opacity="0.55">
        <line x1="60" y1="240" x2="420" y2="240" />
        <line x1="240" y1="60" x2="240" y2="420" />
      </g>

      {/* Fade overlay */}
      <rect width="480" height="480" fill="url(#bp-fade)" />
    </svg>
  );
}

/**
 * Animated dotted timeline arc — visually connects sections.
 */
export function TimelineArc(props: Props) {
  return (
    <svg viewBox="0 0 800 80" fill="none" aria-hidden {...props}>
      <path
        d="M0 60 C 200 0, 600 0, 800 60"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 6"
        fill="none"
        opacity="0.45"
      />
      <circle cx="0" cy="60" r="3" fill="currentColor" />
      <circle cx="400" cy="9" r="4" fill="currentColor" />
      <circle cx="800" cy="60" r="3" fill="currentColor" />
    </svg>
  );
}

/**
 * "Open Youth" — abstract bloom: 3 stems radiating outward (growth / opening).
 * Used in About / Vision area.
 */
export function GrowthSpray(props: Props) {
  return (
    <svg viewBox="0 0 240 240" fill="none" aria-hidden {...props}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none">
        <path d="M120 220 Q 120 140 60 60" />
        <path d="M120 220 Q 120 140 120 30" />
        <path d="M120 220 Q 120 140 180 60" />
      </g>
      <g fill="currentColor">
        <circle cx="60" cy="60" r="6" />
        <circle cx="120" cy="30" r="8" />
        <circle cx="180" cy="60" r="6" />
        <circle cx="120" cy="140" r="3" />
        <circle cx="120" cy="220" r="4" />
      </g>
      <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35">
        <circle cx="60" cy="60" r="12" />
        <circle cx="120" cy="30" r="14" />
        <circle cx="180" cy="60" r="12" />
      </g>
    </svg>
  );
}

/**
 * Mini bar/inforaphic — used near Numbers.
 */
export function MiniBars(props: Props) {
  return (
    <svg viewBox="0 0 80 32" fill="none" aria-hidden {...props}>
      <g fill="currentColor">
        <rect x="0" y="20" width="6" height="12" />
        <rect x="10" y="14" width="6" height="18" />
        <rect x="20" y="8" width="6" height="24" />
        <rect x="30" y="16" width="6" height="16" />
        <rect x="40" y="4" width="6" height="28" />
        <rect x="50" y="11" width="6" height="21" />
        <rect x="60" y="18" width="6" height="14" />
        <rect x="70" y="6" width="6" height="26" />
      </g>
    </svg>
  );
}

/**
 * Pulse network — abstract nodes connected by lines.
 */
export function PulseNetwork(props: Props) {
  return (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden {...props}>
      <g stroke="currentColor" strokeWidth="1" opacity="0.45">
        <line x1="40" y1="40" x2="160" y2="100" />
        <line x1="40" y1="160" x2="160" y2="100" />
        <line x1="280" y1="40" x2="160" y2="100" />
        <line x1="280" y1="160" x2="160" y2="100" />
        <line x1="160" y1="20" x2="160" y2="100" />
        <line x1="160" y1="100" x2="160" y2="180" />
      </g>
      <g fill="currentColor">
        <circle cx="160" cy="100" r="6" />
        <circle cx="40" cy="40" r="3.5" />
        <circle cx="40" cy="160" r="3.5" />
        <circle cx="280" cy="40" r="3.5" />
        <circle cx="280" cy="160" r="3.5" />
        <circle cx="160" cy="20" r="2.5" />
        <circle cx="160" cy="180" r="2.5" />
      </g>
    </svg>
  );
}

/**
 * Quote bracket — used in founder message.
 */
export function QuoteBracket(props: Props) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden {...props}>
      <path
        d="M28 14C16 18 8 30 8 46c0 11 7 18 16 18 8 0 14-6 14-14s-6-14-14-14c-2 0-3 .3-4.5.8 1-8 7-14 14-18l-5.5-4.8z"
        fill="currentColor"
      />
      <path
        d="M68 14C56 18 48 30 48 46c0 11 7 18 16 18 8 0 14-6 14-14s-6-14-14-14c-2 0-3 .3-4.5.8 1-8 7-14 14-18l-5.5-4.8z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}
