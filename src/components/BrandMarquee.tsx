// src/components/BrandMarquee.tsx
export default function BrandMarquee() {
  const brands: Array<{ name: string; href: string; ext?: boolean; tag: string }> = [
    { name: 'theidealprogen', href: 'https://grokpro.vercel.app/', ext: true, tag: 'CVs · CLs · Portfolios' },
    { name: 'theidealprocoach', href: '/coach', tag: 'Mentorship' },
    { name: 'theidealprolearn', href: '/learn', tag: 'Courses' },
    { name: 'theidealprokids', href: '/kids', tag: 'Digital Fluency' },
    { name: 'theidealprobiz', href: '/biz', tag: 'SME Digitization' },
    { name: 'theidealprogov', href: '/gov', tag: 'E-Governance' },
  ];

  // duplicate once for seamless loop
  const items = [...brands, ...brands];

  return (
    <section aria-label="Our brands" className="relative border-y bg-white">
      {/* edge fade masks for “pro” look */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"
      />

      <div className="overflow-hidden">
        <div className="flex animate-marquee items-stretch gap-4 py-6 [--marquee-speed:40s]">
          {items.map((b, i) => (
            <BrandTile key={`${b.name}-${i}`} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandTile({
  name,
  href,
  ext,
  tag,
}: {
  name: string;
  href: string;
  ext?: boolean;
  tag: string;
}) {
  const Inner = (
    <div className="group card flex min-w-[260px] items-center gap-3 px-4 py-3 transition-colors hover:bg-[hsl(var(--muted))]">
      <div className="grid h-8 w-8 place-items-center rounded-md bg-black text-xs font-bold text-white">
        Ti
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold">{name}</div>
        <div className="truncate text-xs text-[hsl(var(--ink-dim))]">{tag}</div>
      </div>
      <div className="ml-auto text-xs text-[hsl(var(--ink-dim))] opacity-70 group-hover:opacity-100">
        {ext ? '↗' : '→'}
      </div>
    </div>
  );

  return ext ? (
    <a href={href} target="_blank" rel="noreferrer">
      {Inner}
    </a>
  ) : (
    <a href={href}>{Inner}</a>
  );
}
