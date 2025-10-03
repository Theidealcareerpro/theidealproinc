'use client';

import * as React from 'react';

export default function Spotlight({
  className = '',
  strength = 600, // px radius of the glow
  color = 'rgba(59,130,246,.35)', // blue glow
}: { className?: string; strength?: number; color?: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--sx', `${x}px`);
      el.style.setProperty('--sy', `${y}px`);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background:
          `radial-gradient(${strength}px ${strength}px at var(--sx, 50%) var(--sy, 20%), ${color}, transparent 65%)`,
        maskImage: 'radial-gradient(80% 60% at 50% 0%, #000, transparent 80%)',
      }}
    />
  );
}
