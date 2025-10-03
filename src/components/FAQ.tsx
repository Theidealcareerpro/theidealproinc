type QA = { q: string; a: string };

export default function FAQ({
  title = 'Frequently asked questions',
  items,
}: {
  title?: string;
  items: QA[];
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="mt-4 divide-y rounded-2xl border bg-white">
        {items.map((it) => (
          <li key={it.q} className="p-5">
            <div className="font-medium">{it.q}</div>
            <p className="mt-2 text-sm text-[hsl(var(--ink-dim))]">{it.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
