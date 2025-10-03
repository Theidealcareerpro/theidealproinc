'use client';

import * as React from 'react';

export default function Marquee({ items }: { items: string[] }) {
  // Items repeated for seamless loop
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="animate-tip-marquee flex gap-8 whitespace-nowrap py-4 text-xs text-[hsl(var(--ink-dim))] will-change-transform">
        {loop.map((it, i) => (
          <span key={`${it}-${i}`} className="rounded border px-2 py-1">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
