'use client';

import * as React from 'react';

export default function StatPill({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-[hsl(var(--ink)/10%)] bg-white px-4 py-3 text-center shadow-card">
      <div className="text-2xl font-extrabold">{v}</div>
      <div className="mt-0.5 text-xs text-[hsl(var(--ink-dim))]">{k}</div>
    </div>
  );
}
