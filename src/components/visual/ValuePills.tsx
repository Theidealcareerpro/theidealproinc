export default function ValuePills({ items }: { items: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
