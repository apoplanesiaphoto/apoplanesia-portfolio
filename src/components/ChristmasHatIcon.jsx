import React from 'react';

/**
 * ChristmasHatIcon - Santa Claus Festive Hat SVG Icon
 * Designed for Apoplanésia Photo Christmas seasonal announcements.
 * Supports both full-color festive mode and currentColor monochrome mode.
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
        <path d="M4 17C4.5 12.5 8.5 6.5 14 5c3.5-1 6.5 1 6 4-.3 1.8-1.8 3-3.2 3.5" />
        {/* Fluffy Pom-pom */}
        <circle cx="17.5" cy="13.5" r="2.2" />
        {/* Fur brim */}
        <rect x="2.5" y="17" width="17" height="4.5" rx="2.2" />
      </svg>
    );
  }

  // High-fidelity festive colored SVG
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
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
        {/* Rich Crimson Red Gradient with festive depth */}
        <linearGradient id="hatRedGrad" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="25%" stopColor="#DC2626" />
          <stop offset="75%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>

        {/* Fluffy White Snow / Fur Gradient */}
        <linearGradient id="hatFurGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Soft Drop Shadow for Fur and Pom-Pom */}
        <filter id="hatDepthShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#450A0A" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Main Red Cap Body curving up and drooping softly to the right */}
      <path
        d="M 6.5 24.5 C 7.5 16, 12 7.5, 18 5 C 22.5 3.5, 27.5 6.5, 29 11 C 30 14.5, 28.5 18, 25.5 19 C 23 19.5, 22 17, 22.5 14 C 23 11.5, 21.5 8, 17.5 6.5 C 13 8.5, 9 15.5, 7.5 24.5 Z"
        fill="url(#hatRedGrad)"
        filter="url(#hatDepthShadow)"
      />

      {/* Subtle darker inner crease fold shadow */}
      <path
        d="M 21.5 10.5 C 24 12.5, 26.5 14.5, 25.5 18.5"
        stroke="#991B1B"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Fluffy White Pom-Pom Ball */}
      <circle
        cx="26"
        cy="19"
        r="4.2"
        fill="url(#hatFurGrad)"
        stroke="#CBD5E1"
        strokeWidth="0.8"
        filter="url(#hatDepthShadow)"
      />
      {/* Pom-pom highlight shimmer */}
      <circle
        cx="24.8"
        cy="17.6"
        r="1.2"
        fill="#FFFFFF"
        opacity="0.9"
      />

      {/* Fluffy White Fur Brim Band at bottom */}
      <rect
        x="3"
        y="23.5"
        width="24"
        height="7.5"
        rx="3.75"
        fill="url(#hatFurGrad)"
        stroke="#CBD5E1"
        strokeWidth="0.8"
        filter="url(#hatDepthShadow)"
      />

      {/* Soft Brim Cloud details for tactile fluffy texture */}
      <circle cx="7" cy="27.2" r="2.8" fill="#FFFFFF" opacity="0.6" />
      <circle cx="12" cy="26.8" r="3" fill="#FFFFFF" opacity="0.5" />
      <circle cx="17" cy="27" r="3" fill="#FFFFFF" opacity="0.6" />
      <circle cx="22" cy="27.2" r="2.8" fill="#FFFFFF" opacity="0.5" />
    </svg>
  );
}
