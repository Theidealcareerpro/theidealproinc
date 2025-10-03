// src/components/KPIBand.tsx
'use client';

import * as React from 'react';

type KPI = {
  /** Visible label under the number */
  label: string;
  /** Raw value to animate to (integer) */
  value: number;
  /** Optional suffix to append, e.g., '+' */
  suffix?: string;
};

type KPIBandProps = {
  /** Metrics to display */
  items?: KPI[];
  /** Animation duration per card (ms) */
  durationMs?: number;
  /** Trigger animation when 25% visible (default true). If false, plays immediately. */
  playOnView?: boolean;
  /** Use compact formatting (e.g., 120000 -> "120K") before suffix */
  compact?: boolean;
  /** Accessible section label */
  ariaLabel?: string;
  /** Optional heading for the section (visually hidden if you only want the band) */
  title?: string;
};

const DEFAULTS: KPI[] = [
  { label: 'People empowered', value: 120_000, suffix: '+' },
  { label: 'Countries touched', value: 32 },
  { label: 'SMEs supported', value: 2_400, suffix: '+' },
];

/** Hook: prefers-reduced-motion (safe for SSR) */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(!!mql.matches);
    onChange();
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

/** Format a number either with locale or compact notation */
function formatNumber(n: number, compact: boolean) {
  const fmt = compact
    ? new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 })
    : new Intl.NumberFormat(undefined);
  return fmt.format(n);
}

/** Counter card with R-A-F animation (reduced-motion aware) */
function CounterCard({
  label,
  value,
  suffix = '',
  play,
  durationMs,
  compact,
}: {
  label: string;
  value: number;
  suffix?: string;
  play: boolean;
  durationMs: number;
  compact: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  const [n, setN] = React.useState(() => (reduced || !play ? value : 0));
  const playedRef = React.useRef(false);

  React.useEffect(() => {
    if (playedRef.current) return; // play once
    if (reduced) {
      setN(value);
      playedRef.current = true;
      return;
    }
    if (!play) return;

    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) requestAnimationFrame(tick);
      else playedRef.current = true;
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [play, value, durationMs, reduced]);

  const number = formatNumber(n, compact);

  return (
    <div
      className="kpi-card relative flex flex-col items-center gap-1 rounded-2xl p-6 text-center"
      style={{
        // Glassy + 3D pop, professional shadows
        background: 'linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.66))',
        backdropFilter: 'blur(10px) saturate(140%)',
        WebkitBackdropFilter: 'blur(10px) saturate(140%)',
        border: '1px solid rgba(0,0,0,.08)',
        boxShadow:
          '0 22px 60px -36px rgba(16,24,40,.30), 0 16px 36px -24px rgba(16,24,40,.18), inset 0 1px 0 rgba(255,255,255,.38)',
      }}
    >
      {/* subtle top sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-1 h-10 rounded-2xl"
        style={{
          background: 'radial-gradient(160px 60px at 50% 0%, rgba(59,130,246,.12), transparent 60%)',
        }}
      />
      <div className="text-3xl font-extrabold tabular-nums tracking-tight">
        {number}
        {suffix ? <span className="ml-0.5 text-xl align-top">{suffix}</span> : null}
      </div>
      <div className="text-sm text-[hsl(var(--ink-dim))]">{label}</div>
    </div>
  );
}

/** KPI band with intersection-triggered animation (plays once) */
export default function KPIBand({
  items = DEFAULTS,
  durationMs = 1400,
  playOnView = true,
  compact = false,
  ariaLabel = 'Impact metrics',
  title,
}: KPIBandProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = React.useState(!playOnView); // if not playOnView, play immediately

  React.useEffect(() => {
    if (!playOnView) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setPlay(true);
            io.disconnect(); // play once
            break;
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playOnView]);

  return (
    <section aria-label={ariaLabel} className="bg-[hsl(var(--surface))]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {title ? (
          <h2
            className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-[hsl(var(--ink-dim))]"
            aria-hidden={!title}
          >
            {title}
          </h2>
        ) : null}

        <div
          ref={ref}
          className="grid gap-4 sm:grid-cols-3"
          style={{
            // slight section elevation
            filter: 'drop-shadow(0 14px 35px rgba(16,24,40,.08))',
          }}
        >
          {items.map((k) => (
            <CounterCard
              key={k.label}
              label={k.label}
              value={k.value}
              suffix={k.suffix}
              play={play}
              durationMs={durationMs}
              compact={compact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
