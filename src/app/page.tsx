// src/app/page.tsx
'use client';

import {
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  type ReactNode,
  type SVGProps,
  type CSSProperties,
} from 'react';
import Link from 'next/link';
import {
  AnimatePresence,
  MotionConfig,
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
        style={{ textWrap: 'balance' as any }}
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

      <motion.div
        className="mt-3 h-[4px] w-44 origin-left rounded-full"
        style={{
          scaleX: underlineScale,
          background: `linear-gradient(90deg, hsl(${hues.primary} 80% 55% /.9), hsl(${hues.violet} 70% 60% /.9))`,
          boxShadow: '0 6px 16px -8px rgba(16,24,40,.35)',
        }}
      />

      {blurb ? (
        <Reveal delay={0.08}>
          <p className="mt-3 text-[hsl(var(--ink-dim))]" style={{ textWrap: 'pretty' as any }}>
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

/* Sticky CTA (always clickable) */
function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 560);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 z-[100] flex justify-center px-4"
          style={{ bottom: 'calc(16px + env(safe-area-inset-bottom))', pointerEvents: 'none' }}
        >
          <div className="rounded-2xl px-4 py-2" style={{ ...GLASS_CARD, pointerEvents: 'auto' }}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-[hsl(var(--ink-dim))]">Ready to move fast?</span>
              <MagneticButton href="/contact" variant="primary">Get started</MagneticButton>
              <MagneticButton href="/ecosystem" variant="ghost">Explore</MagneticButton>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO — aurora + parallax accents + magnetic CTAs
   ───────────────────────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const bullets = [
    'Inclusive by design',
    'Low-bandwidth friendly',
    'Global + local',
    'GDPR-first & ethical AI',
  ];

  return (
    <SectionShell id="hero" label="Hero">
      <AuroraGlow hue={210} />
      <div ref={ref} className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:pt-28">
        {/* parallax accents */}
        <motion.div
          aria-hidden
          className="absolute -top-32 right-10 h-64 w-[46rem] rounded-[40%] opacity-50"
          style={{
            y: yA,
            background: `radial-gradient(50% 50% at 50% 50%, hsl(${hues.primary} 60% 60% / .12), transparent 60%)`,
          }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 left-8 h-64 w-[46rem] rounded-[40%] opacity-50"
          style={{
            y: yB,
            background: `radial-gradient(50% 50% at 50% 50%, hsl(${hues.violet} 60% 60% / .10), transparent 60%)`,
          }}
        />

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              kicker="Empowering People, Businesses & Governments"
              title="Stand out. Scale up. Serve better."
              blurb="A connected ecosystem for careers, SMEs, and public services—engineered to deliver measurable outcomes, fast."
              size="2xl"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/contact" variant="primary" aria-label="Get started with a free consultation">
                Get started
              </MagneticButton>
              <MagneticButton href="/ecosystem" variant="secondary" aria-label="Explore our integrated ecosystem">
                Explore ecosystem
              </MagneticButton>
            </div>
            <ul className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              {bullets.map((t) => (
                <Reveal key={t} y={8}>
                  <li
                    className="rounded-full px-2 py-0.5"
                    style={{
                      background: 'rgba(255,255,255,.6)',
                      boxShadow: '0 8px 22px -16px rgba(16,24,40,.28)',
                    }}
                  >
                    {t}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* 3D icon grid with micro-float */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-5">
              <IconTile Icon={IconCV} label="ProGen" sub="AI CVs & personal brand" href="/ecosystem#progen" hue={hues.primary} />
              <IconTile Icon={IconMentor} label="ProCoach" sub="Mentorship & acceleration" href="/coach" hue={hues.amber} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <IconTile Icon={IconLearn} label="ProLearn" sub="Courses & certifications" href="/learn" hue={hues.teal} />
              <IconTile Icon={IconBiz} label="ProBiz" sub="SME digitization" href="/biz" hue={hues.violet} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <IconTile Icon={IconKids} label="ProKids" sub="Youth learning" href="/kids" hue={hues.steel} />
              <IconTile Icon={IconGov} label="ProGov" sub="E-governance" href="/gov" hue={hues.teal} />
            </div>
          </div>
        </div>
      </div>
      <StickyCTA />
    </SectionShell>
  );
}

/* Icon tile — deeper 3D + micro float loop */
function IconTile({
  Icon,
  label,
  sub,
  href,
  hue = hues.primary,
}: {
  Icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
  label: string;
  sub: string;
  href: string;
  hue?: number;
}) {
  return (
    <Tilt3D>
      <Link href={href} aria-label={`${label} — ${sub}`} className="block">
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-2xl p-1"
          style={{
            background: `linear-gradient(135deg,
              hsl(${hue} 60% 60% / .18),
              hsl(${(hue + 30) % 360} 55% 58% / .18))`,
            transform: 'translateZ(14px)',
            boxShadow: '0 28px 80px -36px rgba(16,24,40,.35)',
          }}
        >
          <div className="rounded-2xl p-5 ring-1 ring-black/5" style={GLASS_CARD}>
            <div className="flex items-center gap-4">
              {/* 3D icon core */}
              <div
                className="relative grid h-16 w-16 place-items-center rounded-xl ring-1 ring-black/10"
                style={{
                  background: `conic-gradient(from 210deg at 50% 50%,
                    hsl(${hue} 72% 58% / 1),
                    hsl(${(hue + 24) % 360} 68% 56% / 1),
                    hsl(${(hue + 48) % 360} 64% 54% / 1),
                    hsl(${hue} 72% 58% / 1))`,
                  boxShadow:
                    '0 18px 32px -16px rgba(16,24,40,.45), inset 0 -10px 18px rgba(0,0,0,.20), inset 0 12px 18px rgba(255,255,255,.12)',
                  transform: 'translateZ(28px)',
                }}
              >
                {/* rim light + glints */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,0) 55%)',
                    mixBlendMode: 'screen',
                    opacity: 0.55,
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-x-2 bottom-2 h-2 rounded-full"
                  style={{
                    background: 'radial-gradient(50% 100% at 50% 100%, rgba(255,255,255,.55), transparent 70%)',
                    filter: 'blur(3px)',
                    opacity: 0.7,
                  }}
                />
                <span className="[filter:drop-shadow(0_6px_14px_rgba(0,0,0,.35))] text-white">
                  <Icon className="h-7 w-7" />
                </span>
              </div>
              <div>
                <div className="font-semibold">{label}</div>
                <div className="text-sm text-[hsl(var(--ink-dim))]">{sub}</div>
              </div>
            </div>
            <div className="mt-4">
              <span className="link text-sm">Open →</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </Tilt3D>
  );
}

/* Solutions (Our Integrated Ecosystem) */
function Solutions() {
  const items = [
    {
      label: 'The Ideal ProGen',
      sub: 'AI CVs, cover letters, personal brand, job matching',
      Icon: IconPortfolio,
      href: '/ecosystem#progen',
      hue: hues.primary,
      bullets: ['ATS-optimized CVs', 'Portfolio templates', 'LinkedIn enhancer'],
    },
    {
      label: 'The Ideal ProCoach',
      sub: 'Hybrid mentorship: AI + human experts',
      Icon: IconMentor,
      href: '/coach',
      hue: hues.amber,
      bullets: ['Goal roadmap', 'Mock interviews', 'Negotiation prep'],
    },
    {
      label: 'The Ideal ProLearn',
      sub: 'Free courses & affordable certifications',
      Icon: IconLearn,
      href: '/learn',
      hue: hues.teal,
      bullets: ['AI paths', 'Hands-on projects', 'Shareable certs'],
    },
    {
      label: 'The Ideal ProKids',
      sub: 'Gamified learning for youth (offline-ready)',
      Icon: IconKids,
      href: '/kids',
      hue: hues.steel,
      bullets: ['STEM + literacy', 'Parental dashboards', 'Multilingual'],
    },
    {
      label: 'The Ideal ProBiz',
      sub: 'SME digitization & growth',
      Icon: IconBiz,
      href: '/biz',
      hue: hues.violet,
      bullets: ['POS + CRM', 'Inventory + HR', 'AI marketing'],
    },
    {
      label: 'The Ideal ProGov',
      sub: 'E-governance modules',
      Icon: IconGov,
      href: '/gov',
      hue: hues.teal,
      bullets: ['Citizen portals', 'Digital ID', 'Data for policy'],
    },
  ];

  return (
    <SectionShell id="solutions" label="Our Integrated Ecosystem">
      <AuroraGlow hue={204} className="opacity-70" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          kicker="Our Integrated Ecosystem"
          title="Tools that excel alone — unbeatable together"
          blurb="Run one product — or compose a stack. Shared data (with consent) makes each step smarter and faster."
          center
          size="2xl"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <Reveal key={it.label} delay={idx * 0.05}>
              <article className="rounded-2xl p-5 ring-1 ring-black/5" style={GLASS_CARD}>
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-lg p-3 text-white"
                    style={{
                      backgroundColor: `hsl(${it.hue} 70% 50%)`,
                      boxShadow: '0 14px 30px -16px rgba(16,24,40,.32), inset 0 1px 0 rgba(255,255,255,.25)',
                    }}
                  >
                    <it.Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{it.label}</h3>
                    <p className="text-sm text-[hsl(var(--ink-dim))]">{it.sub}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-[hsl(var(--ink-dim))]">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: `hsl(${it.hue} 70% 50%)` }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link href={it.href} className="link text-sm">
                    Learn more →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* Who We Serve */
function Audiences() {
  const groups = [
    {
      title: 'Individuals',
      desc: 'From youth to executives—learn, brand, and level up.',
      pts: ['Career starters & changers', 'Mid-level to executive', 'Freelancers & creators'],
      hue: hues.primary,
    },
    {
      title: 'Businesses',
      desc: 'SMEs & startups digitizing for efficiency and growth.',
      pts: ['Retail & services', 'Ops automation', 'Sales & marketing'],
      hue: hues.violet,
    },
    {
      title: 'Governments',
      desc: 'Citizen-first services that scale securely.',
      pts: ['Local to national', 'Healthcare & education', 'Digital ID & portals'],
      hue: hues.teal,
    },
  ];

  return (
    <SectionShell id="audiences" label="Who We Serve">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          kicker="Who We Serve"
          title="Built for real-world complexity"
          blurb="Every solution respects budget, bandwidth, policy, and local context—while remaining globally scalable."
          center
          size="2xl"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="rounded-2xl p-6 ring-1 ring-black/5" style={GLASS_CARD}>
                <h3 className="text-base font-semibold">{g.title}</h3>
                <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{g.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-[hsl(var(--ink-dim))]">
                  {g.pts.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: `hsl(${g.hue} 70% 50%)` }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* How It Works */
function HowItWorks() {
  const steps = [
    { title: 'Define goals', desc: 'Career, business, or public-service outcomes.' },
    { title: 'Pick your track', desc: 'Choose ProGen, ProBiz, ProGov… or a bundle.' },
    { title: 'Execute fast', desc: 'Templates, sprints, and guided modules.' },
    { title: 'Measure & scale', desc: 'Dashboards, reporting, and continuous improvement.' },
  ];

  return (
    <SectionShell id="how" label="How it works">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          kicker="How It Works"
          title="From idea to impact — on one runway"
          blurb="Shorten time-to-value with clear paths, credible proof, and measurable outcomes."
          center
          size="2xl"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="rounded-2xl p-5 ring-1 ring-black/5" style={GLASS_CARD}>
                <div
                  className="mb-3 inline-grid h-8 w-8 place-items-center rounded-full text-white"
                  style={{
                    backgroundColor: `hsl(${hues.primary} 70% 48%)`,
                    boxShadow: '0 10px 18px -8px rgba(16,24,40,.28)',
                  }}
                >
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* Outcomes */
function Outcomes() {
  const cases = [
    { t: 'Job-seeker → Fintech PM', p: 'Messy narrative', a: 'Portfolio sprint + mocks', o: '+14% offer uplift' },
    { t: 'Retail SME ops', p: 'Manual inventory', a: 'Dashboards + automations', o: '−6h/week ops, +18% repeat sales' },
    { t: 'Gov clinic', p: 'Paper queues', a: 'Phased e-portal launch', o: '42% faster service' },
  ];

  return (
    <SectionShell id="outcomes" label="Outcomes">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-6">
        <SectionHeader
          kicker="Proof, not promises"
          title="Outcomes that compound"
          blurb="Representative examples—context varies, but the pattern holds: clarity → execution → lift."
          center
          size="xl"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cases.map((c, idx) => (
            <Reveal key={c.t} delay={idx * 0.06}>
              <article className="rounded-2xl p-5 ring-1 ring-black/5" style={GLASS_CARD}>
                <h3 className="text-base font-semibold">{c.t}</h3>
                <div className="mt-2 grid gap-1 text-sm text-[hsl(var(--ink-dim))]">
                  <p><strong>Problem:</strong> {c.p}</p>
                  <p><strong>Action:</strong> {c.a}</p>
                  <p><strong>Outcome:</strong> {c.o}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* Trust */
function Trust() {
  const items = [
    'GDPR-first data practices',
    'Ethical AI commitments',
    'Accessibility by default',
    'Offline/low-bandwidth modes',
  ];
  return (
    <SectionShell id="trust" label="Trust & compliance">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="rounded-2xl p-8 text-center ring-1 ring-black/5" style={GLASS_CARD}>
          <SectionHeader
            kicker="Trust & Compliance"
            title="Built responsibly, from day zero"
            blurb="Security, privacy, inclusivity, and reach are non-negotiable."
            center
          />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-[hsl(var(--ink-dim))]">
            {items.map((i) => (
              <Reveal key={i} y={6}>
                <span
                  className="rounded-full px-3 py-1"
                  style={{
                    background: 'rgba(255,255,255,.68)',
                    boxShadow: '0 8px 22px -16px rgba(16,24,40,.28)',
                  }}
                >
                  {i}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function usePageVisible(): boolean {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === 'visible');
    onVis();
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
  return visible;
}


/* ------------------- testimonials (auto-rotate) ------------------- */

type Testimonial = { quote: string; name: string; role: string; initial: string };

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Clean, fast, and private. I shipped my portfolio in an evening and landed two interviews the next week.",
    name: "Ada O.",
    role: "Frontend Engineer",
    initial: "A",
  },
  {
    quote:
      "The CV builder is ATS-friendly and the PDF export looks exactly like the preview. Huge time saver.",
    name: "Marcus T.",
    role: "Product Designer",
    initial: "M",
  },
  {
    quote:
      "Deploying a portfolio with one click is brilliant. The upgrade path for longer hosting is fair.",
    name: "Zara L.",
    role: "Data Analyst",
    initial: "Z",
  },
  {
    quote:
      "I love that my content never leaves the browser. Dark mode and templates are top-notch.",
    name: "Ken I.",
    role: "Full-stack Developer",
    initial: "K",
  },
  {
    quote:
      "Two mock interview sessions and my storytelling finally clicked. I went from callbacks to offers.",
    name: "Rhea P.",
    role: "Product Manager",
    initial: "R",
  },
  {
    quote:
      "The mentorship sprint compressed months of guesswork. Clear milestones, fast feedback, real outcomes.",
    name: "Jamal A.",
    role: "Cloud Engineer",
    initial: "J",
  },
  {
    quote:
      "Our SME moved off spreadsheets in a week. POS + inventory dashboards gave us instant visibility.",
    name: "Sofia G.",
    role: "Retail Ops Lead",
    initial: "S",
  },
  {
    quote:
      "I finally have a narrative that connects my career switch. Recruiters actually understand my value now.",
    name: "Daniel C.",
    role: "UX Researcher (ex-Marketing)",
    initial: "D",
  },
  {
    quote:
      "The LinkedIn overhaul lifted profile views immediately. Outreach scripts got real responses.",
    name: "Priya N.",
    role: "Data Scientist",
    initial: "P",
  },
  {
    quote:
      "ProKids lessons worked offline in our center. Parents love the progress dashboard.",
    name: "Grace W.",
    role: "Community Educator",
    initial: "G",
  },
  {
    quote:
      "Our gov pilot reduced clinic queue times dramatically. Phased rollout kept risk low.",
    name: "Ahmed S.",
    role: "Public Health PM",
    initial: "A",
  },
  {
    quote:
      "Negotiation prep paid for itself day one. I closed 15% above my initial target.",
    name: "Nora F.",
    role: "Backend Engineer",
    initial: "N",
  },
  {
    quote:
      "Templates are tasteful and professional. I shipped three strong case studies in a weekend.",
    name: "Leo R.",
    role: "Product Designer",
    initial: "L",
  },
  {
    quote:
      "Team upskilling via ProLearn was smooth. Quizzes + projects → practical skills we use next day.",
    name: "Ivy K.",
    role: "SME Founder",
    initial: "I",
  },
  {
    quote:
      "Clear roadmap, weekly reviews, and focused practice. I stopped spinning and started shipping.",
    name: "Tomas E.",
    role: "Junior iOS Developer",
    initial: "T",
  },
  {
    quote:
      "Privacy-first approach sealed the deal for our org. The platform respects our policies and users.",
    name: "Helena M.",
    role: "IT Governance Lead",
    initial: "H",
  },
];




function Testimonials() {
  const prefersReduced = useReducedMotion();
  const visible = usePageVisible();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReduced || paused || !visible) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      4800
    );
    return () => window.clearInterval(id);
  }, [prefersReduced, paused, visible]);

  const go = (dir: -1 | 1) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <SectionShell id="testimonials" label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          kicker="What users say"
          title="Real people, measurable lift"
          blurb="Momentum comes from credible proof. Here’s a snapshot."
          center
          size="xl"
        />

        <div className="mt-10 mx-auto max-w-3xl">
          <motion.div
            className="rounded-2xl p-6 sm:p-8 ring-1 ring-black/5"
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
            style={GLASS_CARD}
          >
            <div className="flex items-start gap-4">
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-[hsl(var(--accent-foreground))]"
                style={{ background: 'hsl(var(--accent))' }}
                aria-hidden
              >
                <span className="text-lg font-bold">{current.initial}</span>
              </div>
            </div>

            <motion.blockquote
              key={current.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-balance text-lg"
            >
              {current.quote}
            </motion.blockquote>

            <div className="mt-3 text-sm text-[hsl(var(--ink-dim))]">
              <span className="font-semibold text-foreground">{current.name}</span> • {current.role}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-1.5" role="tablist" aria-label="Testimonial slide indicators">
                {TESTIMONIALS.map((_, i) => (
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
                <button className="btn btn-ghost btn-sm" onClick={() => go(-1)} aria-label="Previous testimonial">
                  ←
                </button>
                <button className="btn btn-ghost btn-sm" onClick={() => go(1)} aria-label="Next testimonial">
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}


/* CTA */
function CTA() {
  return (
    <SectionShell id="cta" label="Get started" mesh={false}>
      <AuroraGlow hue={200} />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6">
        <div className="rounded-2xl p-10 text-center ring-1 ring-black/5" style={GLASS_CARD}>
          <SectionHeader
            kicker="Ready?"
            title="Schedule your free consultation"
            blurb="Tell us your goal and timeline—we’ll chart the clearest path to outcomes."
            center
            size="xl"
          />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <MagneticButton href="/contact" variant="primary">Get started</MagneticButton>
            <MagneticButton href="/ecosystem" variant="secondary">Explore ecosystem</MagneticButton>
            <MagneticButton href="/donate" variant="ghost">Support access</MagneticButton>
          </div>
          <div className="mt-4 text-xs text-[hsl(var(--ink-dim))]">
            Or reach us directly: +44 7435 344535 · consultation@theidealprofessional.com
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* Page */
export default function HomePage() {
  return (
    <MotionConfig transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.85 }} reducedMotion="user">
      <ScrollProgressBar />
      <main className="relative scroll-smooth antialiased">
        <Hero />

        {/* Glassy KPI band (compact, once-only, reduced-motion aware) */}
        <KPIBand
          title="Our measurable impact"
          items={[
            { label: 'Users targeted (Year 1)', value: 1_000_000, suffix: '+' },
            { label: 'SMEs to modernize', value: 100_000, suffix: '+' },
            { label: 'Gov modules shipped', value: 12, suffix: '+' },
          ]}
          durationMs={1600}
          compact
        />

        <Solutions />
        <Audiences />
        <HowItWorks />
        <Outcomes />
        <Trust />
        <Testimonials />
        <CTA />
      </main>
    </MotionConfig>
  );
}
