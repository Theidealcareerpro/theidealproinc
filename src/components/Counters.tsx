'use client';

import * as React from 'react';

type Stat = { label: string; value: number; suffix?: string };

export default function Counters({
  stats = [
    { label: 'People empowered', value: 120_000, suffix: '+' },
    { label: 'SMEs supported', value: 3_200, suffix: '+' },
    { label: 'Gov modules shipped', value: 24 },
  ],
  durationMs = 1600,
}: {
  stats?: Stat[];
  durationMs?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setPlay(true)),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <Card key={s.label} label={s.label} value={s.value} suffix={s.suffix} play={play} durationMs={durationMs} />
      ))}
    </div>
  );
}

function Card({
  label, value, suffix, play, durationMs,
}: { label: string; value: number; suffix?: string; play: boolean; durationMs: number; }) {
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    if (!play) return;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [play, value, durationMs]);

  return (
    <div className="card p-6">
      <div className="text-3xl font-extrabold tabular-nums tracking-tight">
        {n.toLocaleString()}
        {suffix ? <span className="ml-0.5 text-xl">{suffix}</span> : null}
      </div>
      <div className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{label}</div>
    </div>
  );
}
