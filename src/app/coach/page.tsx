// src/app/coach/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'theidealprocoach — Mentorship & Career Acceleration',
  description:
    'Personalized mentorship + structured sprints to land roles faster and grow your career with theidealprocoach.',
  openGraph: {
    title: 'theidealprocoach — Mentorship & Career Acceleration',
    description:
      'Personalized mentorship + structured sprints to land roles faster and grow your career with theidealprocoach.',
  },
};

/* ─────────────────────────────────────────────────────────────
   Glass primitives (server-safe)
   ───────────────────────────────────────────────────────────── */
function DividerShadow({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`relative h-6 w-full ${className}`}>
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

function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 ${className}`}
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,.84), rgba(255,255,255,.70))',
        backdropFilter: 'blur(10px) saturate(140%)',
        WebkitBackdropFilter: 'blur(10px) saturate(140%)',
        boxShadow:
          '0 24px 70px -34px rgba(16,24,40,.30), 0 16px 40px -26px rgba(16,24,40,.18)',
      }}
    >
      {/* inner hairline */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.06)',
        }}
      />
      {/* top sheen */}
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

function GlassChip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.72))',
        backdropFilter: 'blur(8px) saturate(140%)',
        WebkitBackdropFilter: 'blur(8px) saturate(140%)',
        boxShadow: '0 12px 28px -16px rgba(16,24,40,.28)',
      }}
    >
      {children}
    </span>
  );
}

function BulletDot() {
  return (
    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function CoachPage() {
  const phone = '+44 7435 344535';
  const email = 'consultation@theidealprofessional.com';

  // prefilled mailto for quick start
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    'Mentorship Request — theidealprocoach'
  )}&body=${encodeURIComponent(
    `Hi The Ideal Professional,

I'd like mentorship support.

• Name:
• Current role / location:
• Target role:
• Timeline (e.g., 4–6 weeks):
• Links (CV / LinkedIn / portfolio):

Thanks!`
  )}`;

  return (
    <main className="relative">
      {/* Top contact strip (glassy, no hard lines) */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(80rem 40rem at 50% -20%, hsl(220 90% 60% / .10), transparent)',
          }}
        />
        <div className="mx-auto max-w-7xl px-4 pt-6">
          <GlassCard className="flex flex-wrap items-center justify-between gap-3 p-4">
            <div className="text-xs text-[hsl(var(--ink-dim))]">
              London &amp; Birmingham, UK •{' '}
              <a href={`tel:${phone}`} className="underline">
                {phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <Link href={mailto} className="btn btn-primary">
                Get Started
              </Link>
              <Link href="/ecosystem" className="btn btn-ghost">
                Learn More
              </Link>
            </div>
          </GlassCard>
        </div>
        <DividerShadow />
      </section>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(110rem 60rem at 50% -20%, hsl(220 90% 60% / .12), transparent)',
            filter: 'blur(2px)',
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <GlassChip>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                theidealprocoach
              </GlassChip>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Stand Out. Get Noticed. Land Your Dream Job.
              </h1>

              <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">
                We optimize your resume, LinkedIn, and career visibility to fast-track your success.
                Structured 2–6 week sprints with senior mentors convert skills into offers.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={mailto} className="btn btn-primary">
                  Get Started Today
                </Link>
                <Link href="/ecosystem" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                {['ATS-Optimized Resumes', 'Interview Mastery', 'Strategic Career Planning'].map((t) => (
                  <GlassChip key={t}>{t}</GlassChip>
                ))}
              </div>
            </div>

            {/* Value card */}
            <GlassCard className="p-6">
              <div className="text-sm font-semibold">What you’ll get</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {[
                  ['Personalized sprint plan', 'Weekly goals mapped to your target role'],
                  ['Portfolio revamp', 'Case studies and outcomes framed to convert'],
                  ['Mock interviews', 'Live drills, feedback, and rubric'],
                  ['Networking scripts', 'Warm outreach that gets replies'],
                  ['Offer strategy', 'Negotiation prep & decision support'],
                ].map(([title, sub]) => (
                  <li
                    key={title}
                    className="flex items-start justify-between gap-4 rounded-xl px-3 py-3"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.06)' }}
                  >
                    <div>
                      <div className="font-medium">{title}</div>
                      <div className="text-[hsl(var(--ink-dim))]">{sub}</div>
                    </div>
                    <span
                      aria-hidden
                      className="inline-grid h-7 w-7 place-items-center rounded-md bg-[hsl(var(--primary))]/10"
                    >
                      ✓
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Benefit trio (Boost / ATS / Guidance) */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ['Boost Your Career', 'Strategic career planning and optimization to help you reach your goals faster.'],
            ['ATS-Optimized Resumes', 'Beat automated filters and get into the hands of hiring managers.'],
            ['Expert Guidance', 'Work with practitioners who know what employers expect.'],
          ].map(([title, sub]) => (
            <GlassCard key={title as string}>
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{sub}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <GlassCard>
          <h2 className="text-2xl font-extrabold tracking-tight">Who We Are</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            At The Ideal Professional, we believe every individual is a brand with the potential to
            stand out. We equip, empower, and guide you step-by-step—so you can get noticed by
            recruiters and hiring managers, and thrive in your field.
          </p>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            We’re more than a career service—we’re a personal branding and acceleration platform
            that helps you gain visibility, position strategically, and navigate with confidence.
          </p>
        </GlassCard>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Our Services</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">End-to-end career support</h2>
        </header>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Resume Writing & Optimization', 'ATS-friendly resumes that highlight your strengths.'],
            ['LinkedIn & Social Enhancement', 'Position yourself as a top candidate online.'],
            ['Interview Coaching & Strategy', 'Ace interviews with confidence and structure.'],
            ['Job Search Consultation', 'Tailored strategies to find and secure the right roles.'],
          ].map(([title, sub]) => (
            <GlassCard key={title as string}>
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{sub}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* What We Offer (3 focus areas) */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Career Visibility & Personal Branding', 'We optimize resume, LinkedIn, and presence to position you at the top.'],
            ['Strategic Career Guidance', 'From pivots to executive tracks—roadmaps for growth and results.'],
            ['End-to-End Support', 'Resume, LinkedIn, interview coaching, and job-search mentorship.'],
          ].map(([title, sub]) => (
            <GlassCard key={title as string}>
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{sub}</p>
              <div className="mt-3">
                <Link href="/ecosystem" className="link text-sm">
                  Learn More →
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Who We Serve */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Who We Serve</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Support at every stage</h2>
        </header>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['New Career Seekers', 'Help for graduates and entry-level talent breaking in.'],
            ['Career Changers', 'Navigate transitions into new roles and industries.'],
            ['Mid-Level & Senior', 'Elevate toward leadership and scope growth.'],
            ['Freelancers & Consultants', 'Attract high-value clients with a refined brand.'],
            ['Executives & Leaders', 'Sharpen executive presence for C-suite opportunities.'],
            ['Purpose-Driven & Unclear Paths', 'Shape and amplify your unique professional story.'],
          ].map(([title, sub]) => (
            <GlassCard key={title as string}>
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{sub}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Why Choose The Ideal Professional?</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Market-tested, personalized, proven</h2>
        </header>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ['Market-Driven Strategies', 'We stay ahead of ATS and hiring trends.'],
            ['Personalized Roadmaps', 'No one-size-fits-all—your context drives the plan.'],
            ['Proven Success Stories', 'More callbacks, stronger networks, faster progression.'],
            ['Full-Service Acceleration', 'Branding through job-search execution.'],
          ].map(([title, sub]) => (
            <GlassCard key={title as string}>
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{sub}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Success Stories</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Real outcomes, real speed</h2>
        </header>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {[
            [
              '“Thanks to The Ideal Professional, I landed my dream job within weeks! Their resume optimization transformed my application.”',
              'John Doe — Marketing Director',
            ],
            [
              '“Three interview calls in the first week. The resume optimization was top-notch. Highly recommended!”',
              'Jane Smith — Software Engineer',
            ],
            [
              '“The LinkedIn makeover was a game-changer. Recruiters now reach out weekly.”',
              'Michael Johnson — Financial Analyst',
            ],
          ].map(([quote, who]) => (
            <GlassCard key={who as string}>
              <blockquote className="text-[15px] leading-relaxed">{quote as string}</blockquote>
              <figcaption className="mt-3 text-xs text-[hsl(var(--ink-dim))]">{who as string}</figcaption>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Contact / Get in touch */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <GlassCard className="p-6">
          <header className="text-center">
            <p className="section-title">Get in Touch</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
              Let’s Start Your Career Transformation
            </h2>
            <p className="mt-2 text-[hsl(var(--ink-dim))]">
              We’ll get back to you within 24 hours.
            </p>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 text-sm">
              <div className="font-semibold">Contact</div>
              <div className="text-[hsl(var(--ink-dim))]">London &amp; Birmingham, United Kingdom</div>
              <a href={`tel:${phone}`} className="link block">
                {phone}
              </a>
              <a href={`mailto:${email}`} className="link block">
                {email}
              </a>
              <div className="text-[hsl(var(--ink-dim))]">Mon–Fri: 9:00 AM – 6:00 PM</div>
            </div>

            {/* Mailto “quick send” & copyable template (no JS) */}
            <div className="space-y-2 text-sm">
              <div className="font-semibold">Send your details</div>
              <p className="text-[hsl(var(--ink-dim))]">
                Click “Open email” to pre-fill your mail app. Or copy the template below.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href={mailto} className="btn btn-primary">
                  Open email
                </Link>
                <a href="/contact" className="btn btn-ghost">
                  Contact form
                </a>
              </div>
              <label className="mt-3 block text-xs text-[hsl(var(--ink-dim))]">Template (select & copy):</label>
              <textarea
                readOnly
                className="mt-1 w-full resize-none rounded-lg bg-white/70 p-3 text-xs outline-none"
                rows={7}
                value={`Name:
Email:
Phone (optional):

Service (e.g., Resume / LinkedIn / Interview Coaching):
Message:

`}
              />
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(100rem 45rem at 50% -20%, hsl(220 90% 60% / .10), transparent)',
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <GlassCard className="flex flex-col items-center gap-4 p-8 text-center">
            <p className="section-title">Ready?</p>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Let’s compress your time-to-offer
            </h2>
            <p className="max-w-2xl text-[hsl(var(--ink-dim))]">
              Share your goals and we’ll suggest the right sprint. No long forms—just clarity.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link href={mailto} className="btn btn-primary">
                Request mentorship
              </Link>
              <a
                href="https://www.buymeacoffee.com/theidealcag"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Donate a coffee
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <DividerShadow />
      <div className="pb-6" />
    </main>
  );
}
