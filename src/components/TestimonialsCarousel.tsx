'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Testimonial = { quote: string; name: string; role: string; initial: string };

function usePageVisible(): boolean {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === 'visible');
    onVis();
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
  return visible;
}

export default function TestimonialsCarousel({
  items,
  className = '',
  accentVar = '--accent',
  accentFgVar = '--accent-foreground',
  autoRotateMs = 4800,
}: {
  items: Testimonial[];
  className?: string;
  /** uses CSS vars from your theme; override if needed */
  accentVar?: string;
  accentFgVar?: string;
  autoRotateMs?: number;
}) {
  const prefersReduced = useReducedMotion();
  const visible = usePageVisible();
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (prefersReduced || paused || !visible || items.length <= 1) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), autoRotateMs);
    return () => window.clearInterval(id);
  }, [prefersReduced, paused, visible, autoRotateMs, items.length]);

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + items.length) % items.length);
  const t = items[index];

  return (
    <div className={`mx-auto max-w-3xl ${className}`}>
      <motion.div
        className="card p-6 sm:p-8"
        role="region"
        aria-label="Testimonials carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start gap-4">
          <div
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
            style={{
              background: `hsl(var(${accentVar}))`,
              color: `hsl(var(${accentFgVar}))`,
            }}
            aria-hidden
          >
            <span className="text-lg font-bold">{t.initial}</span>
          </div>
        </div>

        <motion.blockquote
          key={t.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-2 text-balance text-lg text-foreground"
        >
          “{t.quote}”
        </motion.blockquote>

        <div className="mt-3 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{t.name}</span> • {t.role}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-1.5" role="tablist" aria-label="Testimonial slide indicators">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-6 rounded-full transition ${
                  i === index ? 'bg-[hsl(var(--secondary))]' : 'bg-[hsl(var(--border))]'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button className="btn btn-ghost btn-sm" onClick={() => go(1)} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
