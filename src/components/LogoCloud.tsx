export default function LogoCloud({
  items = ['Apex', 'Nimbus', 'Vertex', 'Halcyon', 'Orion', 'Solstice'],
}: { items?: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
        {items.map((name) => (
          <div
            key={name}
            className="flex h-14 items-center justify-center rounded-md bg-[hsl(var(--muted))]"
            aria-label={`${name} logo`}
            title={name}
          >
            <span className="text-sm font-semibold tracking-wide text-[hsl(var(--ink-dim))]">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
