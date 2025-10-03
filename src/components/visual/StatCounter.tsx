// Counts up when visible (IntersectionObserver), no React state re-render storms
'use client';

import * as React from 'react';

export default function StatCounter({ to, label }: { to: number; label: string }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        let start = 0;
        const target = to;
        const t0 = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const v = Math.floor(p * target);
          el.querySelector('[data-value]')!.textContent = String(v);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="rounded-xl border bg-white p-6 text-center shadow-card">
      <div className="text-3xl font-extrabold"><span data-value>0</span></div>
      <div className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{label}</div>
    </div>
  );
}
