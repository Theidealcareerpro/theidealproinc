'use client';

import * as React from 'react';

export default function IconReveal({
  children,
  className = '',
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  // Wrap your SVG in this to get stroke-dash reveal
  return (
    <div
      className={`[&>svg_*]:transition-all [&>svg_*]:duration-700 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
      <style>{`
        .reveal-line {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: dash 900ms ease forwards;
        }
        @keyframes dash { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}
