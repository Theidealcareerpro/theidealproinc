// src/app/ecosystem/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/visual/Reveal';
import KPIBand from '@/components/KPIBand';
import TestimonialsCarousel from '@/components/TestimonialsCarousel'; // client component, imported directly

import {
  IconPortfolio as IconProgen,
  IconMentor as IconCoach,
  IconLearn as IconLearn,
  IconKids as IconKids,
  IconBiz as IconBiz,
  IconGov as IconGov,
} from '@/components/visual/icons';

/* ─────────────────────────────────────────────────────────────
   Metadata
   ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Ecosystem',
  description:
    'Explore the interconnected "theideal" brands. Start with one—or compose a stack for end-to-end outcomes.',
};

/* ─────────────────────────────────────────────────────────────
   Types & Data
   ───────────────────────────────────────────────────────────── */
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type Brand = {
  slug: string;
  title: string;
  blurb: string;
  href: string;
  external?: boolean;
  Icon: IconType;
  pill?: string;
  hue?: number;
};

const brands: Brand[] = [
  {
    slug: 'progen',
    title: 'theidealprogen',
    blurb: 'AI CVs, cover letters & portfolios with ATS optimization.',
    href: 'https://grokpro.vercel.app/',
    external: true,
    Icon: IconProgen,
    pill: 'Live',
    hue: 222,
  },
  {
    slug: 'coach',
    title: 'theidealprocareers',
    blurb: 'Hybrid mentorship (AI + human) for faster career lift.',
    href: '/coach',
    Icon: IconCoach,
    pill: 'Mentors',
    hue: 28,
  },
  {
    slug: 'learn',
    title: 'theidealprolearn',
    blurb: 'Free courses, skill paths & certificates.',
    href: '/learn',
    Icon: IconLearn,
    pill: 'Learning',
    hue: 172,
  },
  {
    slug: 'kids',
    title: 'theidealprokids',
    blurb: 'Digital fluency & creative STEM for youth (offline-ready).',
    href: '/kids',
    Icon: IconKids,
    pill: 'Youth',
    hue: 206,
  },
  {
    slug: 'biz',
    title: 'theidealprobiz',
    blurb: 'SME digitization: POS, CRM, HR, analytics & automation.',
    href: '/biz',
    Icon: IconBiz,
    pill: 'SMEs',
    hue: 256,
  },
  {
    slug: 'gov',
    title: 'theidealprogov',
    blurb: 'E-governance: citizen portals, digital ID, data for policy.',
    href: '/gov',
    Icon: IconGov,
    pill: 'Public sector',
    hue: 210,
  },
];

/* ─────────────────────────────────────────────────────────────
   Soft separators & glass primitives (server-safe)
   ───────────────────────────────────────────────────────────── */

/** Shadow-only divider (no lines) */
function DividerShadow() {
  return (
    <div aria-hidden className="relative h-5 w-full">
      <div className="absolute inset-x-0 top-0 h-[1px] opacity-0" />
      <div
        className="absolute inset-x-0 top-0 h-6"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,.10), transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  );
}

/** Glass card with shadow-first elevation and faint inner hairline */
function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-5 ${className}`}
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,.84), rgba(255,255,255,.68))',
        backdropFilter: 'blur(10px) saturate(140%)',
        WebkitBackdropFilter: 'blur(10px) saturate(140%)',
        boxShadow:
          '0 24px 70px -34px rgba(16,24,40,.30), 0 16px 40px -26px rgba(16,24,40,.18)',
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.06)',
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-1 h-10 rounded-2xl"
        style={{
          background:
            'radial-gradient(160px 60px at 50% 0%, rgba(59,130,246,.12), transparent 60%)',
        }}
      />
      {children}
    </div>
  );
}

/** 3D orb icon with subtle inner glow */
function OrbIcon({ Icon, hue = 222 }: { Icon: IconType; hue?: number }) {
  return (
    <span
      className="relative grid h-12 w-12 place-items-center rounded-xl text-white"
      style={{
        background: `conic-gradient(from 210deg at 50% 50%,
          hsl(${hue} 72% 58% / 1),
          hsl(${(hue + 24) % 360} 68% 56% / 1),
          hsl(${(hue + 48) % 360} 64% 54% / 1),
          hsl(${hue} 72% 58% / 1))`,
        boxShadow:
          '0 16px 28px -16px rgba(16,24,40,.35), inset 0 -8px 14px rgba(0,0,0,.18), inset 0 10px 16px rgba(255,255,255,.10)',
      }}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,0) 55%)',
          mixBlendMode: 'screen',
          opacity: 0.55,
        }}
      />
      <span
        className="pointer-events-none absolute inset-x-2 bottom-2 h-2 rounded-full"
        style={{
          background: 'radial-gradient(50% 100% at 50% 100%, rgba(255,255,255,.55), transparent 70%)',
          filter: 'blur(3px)',
          opacity: 0.7,
        }}
      />
      <span className="[filter:drop-shadow(0_6px_14px_rgba(0,0,0,.35))]">
        <Icon className="h-6 w-6" />
      </span>
    </span>
  );
}

/** Smart Link (keeps SSR clean) */
function SmartLink({
  href,
  external,
  className,
  children,
  id,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  if (external) {
    return (
      <a id={id} href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link id={id} href={href} className={className}>
      {children}
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function EcosystemPage() {
  return (
    <main className="relative">
      {/* Hero with ambient ribbons (kept left-aligned) */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-[bgmove_24s_linear_infinite]
                     bg-[radial-gradient(90rem_50rem_at_50%_-10%,hsl(220_90%_60%/.10),transparent)]
                     [mask-image:radial-gradient(85%_65%_at_50%_0%,black,transparent)] motion-reduce:animate-none"
          style={{ filter: 'blur(18px)' }}
        />
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:pt-20">
          <DividerShadow />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal y={16}>
              <div>
                <p className="section-title">The Ideal Professional.</p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  The <span className="text-[hsl(var(--primary))]">"theideal"</span> Ecosystem
                </h1>
                <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">
                  Six focused brands—one mission: empower people, strengthen SMEs, and help governments
                  deliver modern, inclusive services. Start with one, or compose a stack for end-to-end impact.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                  {['Privacy-first', 'Low-bandwidth friendly', 'Global + local', 'Ethical AI'].map((k) => (
                    <span
                      key={k}
                      className="rounded-full px-2 py-0.5 shadow-[0_8px_22px_-12px_rgba(16,24,40,.28)]"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,.86), rgba(255,255,255,.66))',
                        backdropFilter: 'blur(8px) saturate(140%)',
                        WebkitBackdropFilter: 'blur(8px) saturate(140%)',
                      }}
                    >
                      {k}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/donate" className="btn btn-secondary">Support the mission</Link>
                  <Link href="/contact" className="btn btn-ghost">Request a quote</Link>
                </div>
              </div>
            </Reveal>

            {/* Value snapshot */}
            <Reveal y={18} delay={90}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['People', 'Career branding, learning, mentorship'],
                  ['SMEs', 'Digitization, dashboards & reporting'],
                  ['Governments', 'Citizen portals & modular services'],
                  ['Quality', 'Outcome-first, vendor-neutral, transparent'],
                ].map(([title, sub]) => (
                  <GlassCard key={String(title)}>
                    <div className="mb-3 flex gap-1.5" aria-hidden>
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="text-base font-semibold">{title}</div>
                    <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{sub}</p>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full
                                 bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(59,130,246,.16),_transparent_60%)]"
                    />
                  </GlassCard>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brands (CENTERED headers) */}
      <section id="brands" className="mx-auto mt-6 max-w-7xl px-4">
        <Reveal y={12}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight">Our Integrated Brands</h2>
            <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">
              Purpose-built products that excel alone—unbeatable together.
            </p>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((b, i) => (
            <Reveal key={b.title} y={12} delay={60 + i * 45}>
              <SmartLink
                id={b.slug}
                href={b.href}
                external={b.external}
                className="group relative block focus:outline-none"
              >
                <GlassCard className="transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-32px_rgba(16,24,40,.32)]">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full
                               bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(99,102,241,.14),_transparent_60%)]
                               transition group-hover:scale-110"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <OrbIcon Icon={b.Icon} hue={b.hue} />
                      <div>
                        <div className="text-base font-semibold">{b.title}</div>
                        <div className="text-sm text-[hsl(var(--ink-dim))]">{b.blurb}</div>
                      </div>
                    </div>
                    <span
                      className="rounded-md px-2 py-0.5 text-xs text-[hsl(var(--ink-dim))] shadow-[0_10px_24px_-16px_rgba(16,24,40,.28)]"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.72))',
                        backdropFilter: 'blur(6px) saturate(140%)',
                        WebkitBackdropFilter: 'blur(6px) saturate(140%)',
                      }}
                    >
                      {b.pill || (b.external ? 'Live' : 'Preview')}
                    </span>
                  </div>
                  <div className="mt-4 text-sm font-medium text-[hsl(var(--primary))] opacity-80 group-hover:opacity-100">
                    {b.external ? 'Open in new tab →' : 'Open →'}
                  </div>
                </GlassCard>
              </SmartLink>
            </Reveal>
          ))}
        </div>
      </section>

      {/* KPI Band (CENTERED header) */}
      <section id="kpi" className="mx-auto mt-10 max-w-7xl px-4">
        <Reveal y={12}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight">Our measurable impact</h2>
          </div>
        </Reveal>
        <KPIBand
          items={[
            { label: 'Users targeted (Year 1)', value: 1_000_000, suffix: '+' },
            { label: 'SMEs to modernize', value: 100_000, suffix: '+' },
            { label: 'Gov modules shipped', value: 12, suffix: '+' },
          ]}
          durationMs={1600}
          compact
          ariaLabel="Impact metrics"
        />
      </section>

      {/* Pathways (CENTERED headers) */}
      <section id="pathways" className="mx-auto mt-6 max-w-7xl px-4">
        <Reveal y={12}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight">Go-To Pathways</h2>
            <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">
              Clear routes from idea to outcome—tailored for individuals, SMEs, and governments.
            </p>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Individuals',
              desc: 'Stand out and land offers faster.',
              points: ['ProGen: ATS CV + portfolio', 'ProLearn: skills & certificates', 'Procareers: sprints + interviews'],
              cta: ['/ecosystem#progen', 'Explore'],
            },
            {
              title: 'SMEs',
              desc: 'Digitize, automate, and grow sustainably.',
              points: ['ProBiz: POS/CRM/HR/analytics', 'ProLearn: upskill teams', 'ProGen: hire better'],
              cta: ['/biz', 'See SME tools'],
            },
            {
              title: 'Governments',
              desc: 'Citizen-first services at scale.',
              points: ['ProGov: portals & digital ID', 'ProLearn: citizen training', 'ProBiz: SME enablement'],
              cta: ['/gov', 'Explore modules'],
            },
          ].map((p, i) => (
            <Reveal key={p.title} y={10} delay={60 + i * 50}>
              <GlassCard>
                <div className="text-base font-semibold">{p.title}</div>
                <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{p.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-[hsl(var(--ink-dim))]">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link href={p.cta[0]} className="link text-sm">
                    {p.cta[1]} →
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bundles (CENTERED headers) */}
      <section id="bundles" className="mx-auto mt-12 max-w-7xl px-4">
        <Reveal y={12}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight">Solution Bundles</h2>
            <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">Curated combinations that maximize time-to-value.</p>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Career Accelerator',
              pitch: 'Brand, proof, interviews—done right.',
              items: ['ProGen + Procareers', 'ProLearn add-on', 'Portfolio templates'],
              href: '/ecosystem#progen',
              cta: 'Start career bundle',
            },
            {
              title: 'SME Launchpad',
              pitch: 'Digitize core ops and grow revenue.',
              items: ['ProBiz suite', 'ProLearn team tracks', 'Advisory add-on'],
              href: '/biz',
              cta: 'Start SME bundle',
            },
            {
              title: 'Gov Modernization',
              pitch: 'Citizen-first, measurable outcomes.',
              items: ['ProGov core modules', 'ProLearn for citizens', 'Analytics + compliance'],
              href: '/gov',
              cta: 'Explore gov bundle',
            },
          ].map((b, i) => (
            <Reveal key={b.title} y={10} delay={60 + i * 50}>
              <GlassCard>
                <div className="text-base font-semibold">{b.title}</div>
                <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{b.pitch}</p>
                <ul className="mt-3 space-y-1 text-sm text-[hsl(var(--ink-dim))]">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link href={b.href} className="btn btn-secondary">
                    {b.cta}
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Synergy Flow (CENTERED headers) */}
      <section id="flow" className="mx-auto mt-12 max-w-7xl px-4">
        <Reveal y={12}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight">How it all connects</h2>
            <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">
              A closed loop that compounds value across your journey.
            </p>
          </div>
        </Reveal>

        <Reveal y={10} delay={80}>
          <GlassCard className="mt-5">
            <ol className="grid gap-4 text-sm text-[hsl(var(--ink-dim))] md:grid-cols-5">
              <li><strong>ProKids</strong> → digital fluency & early STEM</li>
              <li><strong>ProLearn</strong> → upskill & certify</li>
              <li><strong>ProGen</strong> → brand & job outcomes</li>
              <li><strong>Procareers</strong> → mentorship & acceleration</li>
              <li><strong>ProBiz / ProGov</strong> → modern orgs & services</li>
            </ol>
            <div className="mt-4 text-xs">
              Skills flow forward (with consent), unlocking personalization, credibility, and speed at every step.
            </div>
          </GlassCard>
        </Reveal>
      </section>

      {/* Testimonials (CENTERED headers) */}
      <section id="testimonials" className="mx-auto mt-12 max-w-7xl px-4">
        <Reveal y={12}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight">What people are saying</h2>
            <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">
              Loved across the ecosystem—careers, SMEs, and public services.
            </p>
          </div>
        </Reveal>
        <div className="mt-6">
          <TestimonialsCarousel
            items={[
              {
                quote:
                  'Clean, fast, and private. I shipped my portfolio in an evening and landed two interviews the next week.',
                name: 'Ada O.',
                role: 'Frontend Engineer',
                initial: 'A',
              },
              {
                quote:
                  'The CV builder is ATS-friendly and the PDF export looks exactly like the preview. Huge time saver.',
                name: 'Marcus T.',
                role: 'Product Designer',
                initial: 'M',
              },
              {
                quote:
                  'Deploying portfolio with one click is brilliant. The upgrade path for longer hosting is fair.',
                name: 'Zara L.',
                role: 'Data Analyst',
                initial: 'Z',
              },
              {
                quote:
                  'I love that my content never leaves the browser. The dark mode and templates are top-notch.',
                name: 'Ken I.',
                role: 'Full-stack Developer',
                initial: 'K',
              },
              {
                quote:
                  'Our SME dashboards cut reporting from hours to minutes. Revenue visibility went way up.',
                name: 'Rita S.',
                role: 'Retail SME Owner',
                initial: 'R',
              },
              {
                quote:
                  'We rolled out a phased citizen portal—service time fell dramatically without big-bang risk.',
                name: 'Samuel A.',
                role: 'Gov Service Lead',
                initial: 'S',
              },
              {
                quote:
                  'Mentor sprints compressed months into weeks. The portfolio storytelling unlocked callbacks.',
                name: 'Nina D.',
                role: 'UX Designer',
                initial: 'N',
              },
              {
                quote:
                  'As a career switcher, I finally had a clear narrative and a plan I could execute.',
                name: 'Omar Y.',
                role: 'Data Engineer',
                initial: 'O',
              },
              {
                quote:
                  'Low-bandwidth mode mattered in our region. The tools stayed fast and accessible.',
                name: 'Chidinma E.',
                role: 'NGO Program Manager',
                initial: 'C',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA (CENTER content) */}
      <section id="cta" className="mx-auto mt-14 max-w-7xl px-4">
        <Reveal y={12}>
          <GlassCard className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="sm:text-left text-center">
              <div className="text-base font-semibold">Build with us</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">
                Whether you're an individual, an SME, or a government team—we'll help you move fast, ethically, and well.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
              <Link href="/contact" className="btn btn-primary">Request a quote</Link>
              <Link href="/donate" className="btn btn-secondary">Support our work</Link>
            </div>
          </GlassCard>
        </Reveal>
      </section>

      <div className="h-16" />
    </main>
  );
}