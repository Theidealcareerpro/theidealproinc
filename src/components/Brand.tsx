// src/components/Brand.tsx
import React from 'react';

export function Section({
  title,
  description,
  children,
  className = '',
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-10 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          {description ? (
            <p className="mt-1 max-w-3xl text-sm text-[hsl(var(--ink-dim))]">{description}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5 text-xs text-[hsl(var(--ink-dim))]">
      {children}
    </span>
  );
}

export function CardLink({
  title,
  desc,
  href,
  external,
}: {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
}) {
  const base = (
    <div className="card p-5 hover:shadow-md">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{desc}</p>
    </div>
  );
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {base}
    </a>
  ) : (
    <a href={href} className="block">
      {base}
    </a>
  );
}

export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border pt-[56.25%]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
