'use client';

import * as React from 'react';

export default function MagneticButton({
  children,
  className = '',
  href,
  as = 'a',
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  as?: 'a' | 'button';
}) {
  const ref = React.useRef<HTMLAnchorElement & HTMLButtonElement & HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * 0.06}px, ${dy * 0.06}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0,0)';
  };

  const classes = `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                   transition-transform will-change-transform ${className}`;

  if (as === 'button') {
    return (
      <button ref={ref as any} onMouseMove={onMove} onMouseLeave={reset} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a
      ref={ref as any}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={classes}
    >
      {children}
    </a>
  );
}
