// src/components/BrandGrid.tsx
import Reveal from '@/components/Reveal';

const ITEMS = [
  { title: 'theidealprogen', desc: 'CVs, cover letters, and portfolios', href: 'https://app.theidealprofessional.online/', external: true },
  { title: 'theidealprocareers', desc: 'Mentorship & career acceleration', href: '/coach' },
  { title: 'theidealprolearn', desc: 'Skills, free courses & certificates', href: '/learn' },
  { title: 'theidealprokids', desc: 'Youth learning & digital fluency', href: '/kids' },
  { title: 'theidealprobiz', desc: 'SME digitization & consulting', href: '/biz' },
  { title: 'theidealprogov', desc: 'E-governance & public transformation', href: '/gov' },
];

export function BrandGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ITEMS.map((it, i) => {
        const A = it.external ? 'a' : 'a';
        return (
          <Reveal key={it.title} delay={80 + i * 60}>
            <A
              href={it.href}
              {...(it.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="block rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-base font-semibold">{it.title}</div>
              <p className="mt-1 text-[hsl(var(--ink-dim))]">{it.desc}</p>
            </A>
          </Reveal>
        );
      })}
    </div>
  );
}
