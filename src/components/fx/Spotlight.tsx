'use client';

import * as React from 'react';

/**
 * Wrap content with a soft spotlight reveal on hover/focus.
 * Usage:
 * <div className="relative group"> <Spotlight /> ...content... </div>
 */
export default function Spotlight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
      style={{
        background:
          'radial-gradient(24rem 16rem at var(--mx,50%) var(--my,50%), hsl(0 0% 100% / .12), transparent 65%)',
      }}
    />
  );
}
