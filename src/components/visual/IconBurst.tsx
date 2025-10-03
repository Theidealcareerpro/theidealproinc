// src/components/visual/IconBurst.tsx
'use client';

import * as React from 'react';

export default function IconBurst({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative grid h-12 w-12 place-items-center rounded-xl bg-[hsl(var(--muted))] ring-1 ring-black/5 ${className}`}
    >
      {/* animated ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl [mask:radial-gradient(60%_60%_at_50%_50%,transparent_55%,black_56%)]"
      >
        <span className="absolute inset-0 animate-spin-slow rounded-xl bg-[conic-gradient(from_0deg,rgba(59,130,246,.35),rgba(99,102,241,.35),rgba(168,85,247,.35),rgba(59,130,246,.35))]" />
      </span>
      {/* coin sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(180deg,rgba(255,255,255,.45),transparent_40%)]"
      />
      {children}
    </div>
  );
}
