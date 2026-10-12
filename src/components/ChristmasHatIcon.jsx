import React from 'react';

/**
 * ChristmasHatIcon - Santa Claus Festive Hat SVG Icon
 * Features rich festive red tones, plush white fur trim, soft drop shadow,
 * and a fluffy pom-pom resting at the drooping tip.
 */
export default function ChristmasHatIcon({
  size = 28,
  className = '',
  style = {},
  variant = 'colored',
  color = 'currentColor',
  ...props
}) {
  if (variant === 'monochrome') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          flexShrink: 0,
          ...style
        }}
        aria-hidden="true"
        {...props}
      >
        {/* Hat curved cone */}
        <path d="M5 17C5.5 11.5 9 6 14 5c3.2 0 5.8 2.2 6.5 5.5.5 2.5-.5 4.5-2.5 5.5" />
        {/* Pom-pom */}
        <circle cx="18" cy="15.5" r="2.2" />
        {/* Fur brim */}
        <rect x="3" y="17" width="16" height="4.2" rx="2.1" />
      </svg>
    );
  }

  // High-fidelity festive colored SVG
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style
      }}
      aria-label="Gorro de Natal"
      {...props}
    >
      <defs>
        {/* Rich Festive Christmas Crimson Red Gradient */}
        <linearGradient id="santaRedGrad" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="25%" stopColor="#DC2626" />
          <stop offset="70%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>

        {/* Fluffy White Snow / Fur Gradient */}
        <linearGradient id="santaFurGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Soft Depth Shadow */}
        <filter id="santaShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Red Cap Main Body */}
      <path
        d="M 15 45 C 16 31, 21 16, 28 9 C 34 6, 43 10, 48 18 C 51 23, 52 29, 49 35 C 47.5 38, 44 38, 43 34 C 41.5 28, 40 22, 38 19 C 36 24, 36.5 35, 38 45 Z"
        fill="url(#santaRedGrad)"
        filter="url(#santaShadow)"
      />

      {/* Fold crease shadow line */}
      <path
        d="M 38 19 C 42 22, 45 27, 44 34"
        stroke="#991B1B"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Fluffy White Fur Brim Band */}
      <g filter="url(#santaShadow)">
        <rect
          x="9"
          y="43"
          width="37"
          height="12"
          rx="6"
          fill="url(#santaFurGrad)"
          stroke="#CBD5E1"
          strokeWidth="0.8"
        />
        {/* Soft rounded cloud puffs for realistic plush texture */}
        <circle cx="15" cy="49" r="4.8" fill="#FFFFFF" />
        <circle cx="21.5" cy="48.5" r="5" fill="#FFFFFF" />
        <circle cx="28" cy="49" r="5" fill="#FFFFFF" />
        <circle cx="34.5" cy="48.5" r="5" fill="#FFFFFF" />
        <circle cx="40" cy="49" r="4.8" fill="#FFFFFF" />
      </g>

      {/* Fluffy White Pom-Pom Ball */}
      <g filter="url(#santaShadow)">
        <circle
          cx="48"
          cy="38"
          r="7.5"
          fill="url(#santaFurGrad)"
          stroke="#CBD5E1"
          strokeWidth="0.8"
        />
        <circle cx="46.5" cy="36.5" r="5.5" fill="#FFFFFF" />
        <circle cx="45" cy="35" r="2" fill="#FFFFFF" opacity="0.9" />
      </g>
    </svg>
  );
}
