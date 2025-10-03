// src/app/page.tsx
'use client';

import {
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  type ReactNode,
  type CSSProperties,
} from 'react';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import {
  IconCV,
  IconPortfolio,
  IconMentor,
  IconLearn,
  IconKids,
  IconBiz,
  IconGov,
} from '@/components/visual/icons';

import KPIBand from '@/components/KPIBand';

/* ─────────────────────────────────────────────────────────────
   Palette — professional, not loud
   ───────────────────────────────────────────────────────────── */
const hues = {
  primary: 222, // calm blue
  violet: 256,
  teal: 172,
  steel: 206,
  amber: 28,
};

/* ─────────────────────────────────────────────────────────────
   Elevation / Glass — consistent premium pop (shadows > lines)
   ───────────────────────────────────────────────────────────── */
const GLASS_CARD: CSSProperties = {
  background: 'linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.62))',
  WebkitBackdropFilter: 'blur(10px) saturate(140%)',
  backdropFilter: 'blur(10px) saturate(140%)',
  boxShadow:
    '0 30px 80px -40px rgba(16,24,40,.28), 0 18px 40px -24px rgba(16,24,40,.18), inset 0 1px 0 rgba(255,255,255,.35)',
};

/* ─────────────────────────────────────────────────────────────
   Aurora glow (server-safe decorative depth)
   ───────────────────────────────────────────────────────────── */
function AuroraGlow({ hue = 208, className = '' }: { hue?: number; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 blur-3xl ${className}`}
      style={{
        background: `radial-gradient(800px 360px at 50% 0%, hsl(${hue} 90% 55% / .22), transparent 60%),
                     conic-gradient(from 180deg at 50% -20%, hsl(${hue + 30} 92% 62% / .14), transparent 25% 75%, hsl(${hue - 20} 82% 60% / .14))`,
        maskImage: 'linear-gradient(to bottom, black, rgba(0,0,0,.25) 70%, transparent)',
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Motion helpers (hydration-safe)
   ───────────────────────────────────────────────────────────── */
const usePrefersReduced = () => useReducedMotion();

/* Reveal primitive (fade+lift+blur) */
function Reveal({
  children,
  delay = 0,
  y = 14,
  once = true,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-10% 0px -10% 0px', once });
  const reduced = usePrefersReduced();

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity, filter' }}>
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(6px)' }}
        animate={
          inView
            ? reduced
              ? { opacity: 1, transition: { duration: 0.35, delay } }
              : {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
                }
            : undefined
        }
      >
        {children}
      </motion.div>
    </div>
  );
}

/* Magnetic button (mouse gravitation + ripple) */
function MagneticButton({
  children,
  href,
  variant = 'primary',
  className = '',
  'aria-label': ariaLabel,
}: {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  'aria-label'?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReduced();

  function onMove(e: ReactMouseEvent) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    const dx = x - r.width / 2;
    const dy = y - r.height / 2;
    el.style.transform = `translate(${dx * 0.08}px, ${dy * 0.08}px)`;
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translate(0,0)`;
  }

  const base =
    variant === 'primary'
      ? 'btn btn-primary'
      : variant === 'secondary'
      ? 'btn btn-secondary'
      : 'btn btn-ghost';

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} relative overflow-hidden ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(180px 180px at var(--mx,50%) var(--my,50%), rgba(255,255,255,.22), rgba(255,255,255,0) 60%)',
        transition: 'transform .15s ease',
      }}
    >
      {children}
    </Link>
  );
}

/* Tilt3D (pointer tilt with glare) */
function Tilt3D({
  children,
  maxTilt = 10,
  glare = true,
  className = '',
}: {
  children: ReactNode;
  maxTilt?: number;
  glare?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReduced();

  const onMove = (e: ReactMouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -2 * maxTilt;
    const ry = (px - 0.5) * 2 * maxTilt;
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
    el.style.setProperty('--gx', `${px * 100}%`);
    el.style.setProperty('--gy', `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative group [transform-style:preserve-3d] [perspective:1000px] ${className}`}
      style={{ transform: `rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))` }}
    >
      {glare ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(520px 360px at var(--gx,50%) var(--gy,50%), rgba(255,255,255,.28), transparent 60%)',
            transform: 'translateZ(36px)',
          }}
        />
      ) : null}
      {children}
    </div>
  );
}

/* Section shell: parallax mesh + safe reveal container */
function SectionShell({
  id,
  label,
  children,
  mesh = true,
}: {
  id: string;
  label: string;
  children: ReactNode;
  mesh?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={ref} id={id} aria-label={label} className="relative isolate overflow-hidden">
      {mesh ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            y,
            background: `radial-gradient(60rem 40rem at 12% -10%, hsl(${hues.steel} 70% 60% / .08), transparent 60%),
                         radial-gradient(60rem 40rem at 88% 110%, hsl(${hues.violet} 70% 62% / .08), transparent 60%)`,
          }}
        />
      ) : null}
      {children}
    </section>
  );
}

/* Section header: kinetic (char cascade + underline spring) */
function SectionHeader({
  kicker,
  title,
  blurb,
  center,
  size = '2xl',
}: {
  kicker?: string;
  title: string;
  blurb?: string;
  center?: boolean;
  size?: 'lg' | 'xl' | '2xl';
}) {
  const reduced = usePrefersReduced();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const underlineScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.2, 1]), {
    stiffness: 240,
    damping: 28,
    mass: 0.7,
  });

  const titleClass =
    size === '2xl'
      ? 'text-4xl sm:text-5xl'
      : size === 'xl'
      ? 'text-3xl sm:text-4xl'
      : 'text-2xl sm:text-3xl';

  const chars = title.split('');

  return (
    <div ref={ref} className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {kicker ? (
        <Reveal>
          <p
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-[hsl(var(--ink-dim))]"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,.7), rgba(255,255,255,.45))',
              WebkitBackdropFilter: 'blur(6px)',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 6px 18px -10px rgba(16,24,40,.22)',
            }}
          >
            {kicker}
          </p>
        </Reveal>
      ) : null}

      <motion.h2
        className={`mt-4 font-extrabold tracking-tight ${titleClass}`}
        style={{ textWrap: 'balance' } as unknown as CSSProperties}
        initial={reduced ? { opacity: 0 } : { opacity: 1 }}
      >
        {chars.map((c, i) => (
          <motion.span
            key={`${c}-${i}`}
            initial={reduced ? { opacity: 0 } : { y: '0.6em', opacity: 0, filter: 'blur(6px)' }}
            whileInView={reduced ? { opacity: 1 } : { y: '0em', opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.012 * i,
            }}
          >
            {c}
          </motion.span>
        ))}
      </motion.h2>

      {blurb ? (
        <Reveal delay={0.08}>
          <p className="mt-3 text-[hsl(var(--ink-dim))]" style={{ textWrap: 'pretty' } as unknown as CSSProperties}>
            {blurb}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* Scroll progress bar (top) */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.6 });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[110] h-[3px]"
      style={{
        scaleX: width,
        transformOrigin: '0% 50%',
        background: `linear-gradient(90deg, hsl(${hues.primary} 80% 55%), hsl(${hues.violet} 70% 60%))`,
        boxShadow: '0 6px 14px -8px rgba(16,24,40,.4)',
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <main className="relative">
      <ScrollProgressBar />
      <AuroraGlow hue={hues.primary} />

      <SectionShell id="hero" label="Hero section">
        <SectionHeader
          kicker="Welcome"
          title="Next.js Framer Motion Page"
          blurb="Interactive, animated, and type-safe with TSX."
          center
        />
        <div className="mt-10 flex gap-4 justify-center">
          <MagneticButton href="/portfolio">Portfolio</MagneticButton>
          <MagneticButton href="/cv" variant="secondary">
            CV
          </MagneticButton>
        </div>
      </SectionShell>

      <SectionShell id="kpi" label="KPI Section">
        <KPIBand />
      </SectionShell>
    </main>
  );
}
