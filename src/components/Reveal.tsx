// src/components/Reveal.tsx
'use client';

import * as React from 'react';

type Props = React.PropsWithChildren<{
  as?: React.ElementType;
  delay?: number;   // ms
  y?: number;       // px translate on enter
  once?: boolean;   // reveal only once
  className?: string;
}>;

export default function Reveal({
  as: Tag = 'div',
  delay = 80,
  y = 16,
  once = true,
  className,
  children,
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [seen, setSeen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) setSeen(true);
        } else if (!once) {
          setVisible(false);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const shouldShow = visible || (once && seen);

  return (
    <Tag
      ref={ref as any}
      style={{
        transition: 'opacity 500ms cubic-bezier(.22,1,.36,1), transform 500ms cubic-bezier(.22,1,.36,1)',
        transitionDelay: shouldShow ? `${delay}ms` : '0ms',
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? 'translateY(0)' : `translateY(${y}px)`,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
