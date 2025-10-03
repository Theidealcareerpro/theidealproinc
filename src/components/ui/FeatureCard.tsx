'use client';

import * as React from 'react';

export default function FeatureCard({
  title,
  desc,
  icon,
  href,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="card group relative isolate overflow-hidden p-5 transition-transform hover:-translate-y-0.5">
      <div className="absolute -inset-12 -z-10 rounded-full bg-[hsl(var(--primary)/8%)] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-3 inline-grid h-9 w-9 place-items-center rounded-md bg-[hsl(var(--primary)/12%)]">
        {icon}
      </div>
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{desc}</p>
      {href ? (
        <span className="mt-3 inline-block text-xs underline opacity-80 group-hover:opacity-100">
          Learn more →
        </span>
      ) : null}
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
