import React from 'react';

/**
 * SharkIcon - Unmistakable Great White Shark SVG Icon matching Lucide style
 * Features the iconic tall notched dorsal fin, underslung jaw with sharp teeth,
 * swept-back pectoral fin, gill slits, and heterocercal shark tail.
 */
export default function SharkIcon({
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
  style = {},
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style
      }}
      aria-label="Tubarão"
      {...props}
    >
      {/* Upper snout to back */}
      <path d="M2 11c1.5-2 5-3.5 7.5-3.5" />
      
      {/* Iconic Triangular Dorsal Fin with rear notch */}
      <path d="M9.5 7.5L12.2 2c.8 2 1.5 4.5.3 5.5l1.5-.2" />
      
      {/* Back to caudal tail fin */}
      <path d="M14 7.3c2 .3 3.5 1.5 5 2.5" />
      
      {/* Classic Heterocercal Shark Tail (long upper lobe, crescent notch, short lower lobe) */}
      <path d="M19 9.8l3.5-4.8c-.8 2.2-.4 4.5.5 6.2l-2.2-1" />
      <path d="M20.8 11.2l1.7 4.5c-1.5-.8-2.5-1.8-3.7-2" />
      
      {/* Belly to anal fin */}
      <path d="M18.8 13.7c-2.5.5-4.5 1-7.8 1" />
      
      {/* Swept-back sickle Pectoral Fin */}
      <path d="M11 14.7L8 20.5c1.8.2 3.8-.5 4.8-2" />
      
      {/* Underslung shark jaw with sharp triangular teeth */}
      <path d="M2 11c.8 1.5 2.2 2.5 3.5 2.8" />
      <path d="M5.5 13.8l.6-1.4 1 1.4.8-1.4 1 1.4" />
      <path d="M5.5 13.8c1.5.8 3.5.9 5.5.9" />
      
      {/* Gill slits */}
      <line x1="7.2" y1="10.2" x2="7.2" y2="12" />
      <line x1="8.6" y1="9.8" x2="8.6" y2="12" />
      <line x1="10" y1="9.5" x2="10" y2="11.8" />
      
      {/* Fierce Shark Eye */}
      <circle cx="4.5" cy="10" r="0.75" fill={color} />
    </svg>
  );
}
