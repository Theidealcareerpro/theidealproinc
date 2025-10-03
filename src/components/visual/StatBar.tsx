type Stat = { value: string; label: string };

export default function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border bg-white p-6 text-center shadow-card">
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
