'use client';

import * as React from 'react';

export default function IconBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--ink)/12%)] bg-white/60 px-3 py-1 text-xs">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--primary)/12%)]">
        {icon}
      </span>
      {label}
    </span>
  );
}
