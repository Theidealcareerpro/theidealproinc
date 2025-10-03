'use client';

import * as React from 'react';

type StatCounterProps = {
  to: number;
  label: string;
};

export default function StatCounter({ to, label }: StatCounterProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        const target = to;
        const t0 = performance.now();
        const dur = 1200;

        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const v = Math.floor(p * target);

          const valueEl = el.querySelector<HTMLSpanElement>('[data-value]');
          if (valueEl) valueEl.textContent = String(v);

          if (p < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="rounded-xl border bg-white p-6 text-center shadow-card">
      <div className="text-3xl font-extrabold">
        <span data-value>0</span>
      </div>
      <div className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{label}</div>
    </div>
  );
}
