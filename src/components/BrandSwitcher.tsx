// src/components/BrandSwitcher.tsx
'use client';

const BRANDS = [
  { label: 'theidealprogen', href: 'https://grokpro.vercel.app/' },
  { label: 'theidealprocoach', href: '/coach' },
  { label: 'theidealprolearn', href: '/learn' },
  { label: 'theidealprokids', href: '/kids' },
  { label: 'theidealprobiz', href: '/biz' },
  { label: 'theidealprogov', href: '/gov' },
];

export default function BrandSwitcher() {
  return (
    <div className="border-b bg-[hsl(var(--muted))]">
      <div className="mx-auto max-w-7xl overflow-x-auto px-2">
        <ul className="flex w-full items-center gap-2 py-2">
          {BRANDS.map((b) => (
            <li key={b.label} className="shrink-0">
              <a
                href={b.href}
                target={b.href.startsWith('http') ? '_blank' : undefined}
                rel={b.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-block rounded-full border border-border bg-white/70 px-3 py-1 text-xs hover:bg-white"
              >
                {b.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
