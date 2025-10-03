'use client';

import * as React from 'react';

/** Wrap children to present as a “device” with soft chrome */
export default function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[hsl(var(--ink)/12%)] bg-white shadow-[0_1px_0_rgba(0,0,0,0.08),0_40px_80px_-24px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-1.5 border-b px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div className="overflow-hidden rounded-b-2xl">{children}</div>
    </div>
  );
}
