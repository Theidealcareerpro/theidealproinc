'use client';

import * as React from 'react';

export default function HoloCard({
  children,
  className = '',
  intensity = 10, // degrees
}: { children: React.ReactNode; className?: string; intensity?: number }) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * intensity;
    const ry = (px - 0.5) * -intensity;
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };

  const reset = () => { const el = ref.current; if (el) el.style.transform = 'perspective(1200px)'; };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`relative rounded-2xl border bg-white/70 p-[1px] shadow-[0_24px_60px_-24px_rgba(0,0,0,.35)]
                  ring-1 ring-black/5 transition-transform duration-300 will-change-transform ${className}`}
      style={{
        background:
          'conic-gradient(from 210deg at 50% 50%, rgba(59,130,246,.18), rgba(16,185,129,.16), rgba(99,102,241,.18), transparent 60%)',
      }}
    >
      {/* inner glass */}
      <div className="relative rounded-[1rem] bg-white/80 p-5 backdrop-blur-sm">
        {children}
        {/* sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[1rem] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          style={{
            background:
              'radial-gradient(600px 260px at var(--mx,50%) var(--my,50%), rgba(255,255,255,.6), transparent 60%)',
          }}
        />
      </div>
    </div>
  );
}
