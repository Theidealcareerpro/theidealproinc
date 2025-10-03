// src/components/PressRow.tsx
const partners = [
  { name: 'CivicLab', href: '#', logo: 'CL' },
  { name: 'EduBridge', href: '#', logo: 'EB' },
  { name: 'DevWorld', href: '#', logo: 'DW' },
  { name: 'OpenGov', href: '#', logo: 'OG' },
  { name: 'SMEForum', href: '#', logo: 'SF' },
];

export default function PressRow() {
  return (
    <section aria-label="Partners" className="border-y bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-8">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="group inline-flex items-center gap-2 opacity-80 transition hover:opacity-100"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md border bg-[hsl(var(--muted))] text-xs font-bold text-[hsl(var(--ink-dim))]">
              {p.logo}
            </span>
            <span className="text-sm text-[hsl(var(--ink-dim))] group-hover:text-[hsl(var(--ink))]">
              {p.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
