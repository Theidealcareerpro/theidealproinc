'use client';

import * as React from 'react';

/**
 * Full-bleed animated gradient mesh layer.
 * Use as <AnimatedGradient className="rounded-3xl" /> under content (position: absolute/inset-0).
 */
export default function AnimatedGradient({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none isolate overflow-hidden ${className}`}
      style={{
        background:
          'radial-gradient(40rem 24rem at 20% 20%, hsl(220 90% 60% / .20), transparent), radial-gradient(40rem 24rem at 80% 10%, hsl(280 90% 60% / .18), transparent), radial-gradient(40rem 24rem at 50% 90%, hsl(190 90% 60% / .18), transparent)',
        maskImage: 'linear-gradient(#000, transparent 85%)',
        animation: 'tipFloat 12s ease-in-out infinite alternate',
      }}
    />
  );
}
