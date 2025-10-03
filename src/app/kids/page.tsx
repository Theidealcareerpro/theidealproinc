// src/app/kids/page.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'theidealprokids — Empowering Youth with Practical Skills',
  description:
    'Empower kids with practical, lifelong skills — financial literacy, social-emotional learning, digital literacy, critical thinking and more. Free, offline-friendly lessons with parent & teacher guides.',
  openGraph: {
    title: 'theidealprokids — Empowering Youth with Practical Skills',
    description:
      'Empower kids with practical, lifelong skills — financial literacy, social-emotional learning, digital literacy, critical thinking and more. Free, offline-friendly lessons with parent & teacher guides.',
  },
};

/* --------------------- simple icon --------------------- */
function IconCheck() {
  return (
    <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* --------------------- course catalogue (resources) --------------------- */
/* Provide direct PDF / YouTube playlist links here. Replace placeholders with real files. */
const COURSES = [
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    blurb: 'Money basics, budgeting, saving, and simple financial decision-making that young people can use today.',
    outcomes: ['Budget a pocket money plan', 'Understand needs vs wants', 'Save toward a goal'],
    pdf: '/downloads/kids-financial-literacy.pdf', // replace with actual PDF path
    playlist: 'https://www.youtube.com/playlist?list=PLkids_financial', // replace with actual playlist
  },
  {
    id: 'practical-life-skills',
    title: 'Practical Life Skills',
    blurb: 'Everyday independence: cooking basics, time management, health & hygiene, and resourcefulness.',
    outcomes: ['Follow a simple recipe', 'Manage a morning routine', 'Use household tools safely'],
    pdf: '/downloads/kids-practical-life-skills.pdf',
    playlist: 'https://www.youtube.com/playlist?list=PLkids_practical',
  },
  {
    id: 'emotional-social-intelligence',
    title: 'Emotional & Social Intelligence',
    blurb: 'Recognise feelings, practise empathy, solve conflicts, and build healthy friendships.',
    outcomes: ['Name emotions & regulate them', 'Practice active listening', 'Resolve small conflicts peacefully'],
    pdf: '/downloads/kids-emotional-intelligence.pdf',
    playlist: 'https://www.youtube.com/playlist?list=PLkids_esi',
  },
  {
    id: 'digital-media-literacy',
    title: 'Digital & Media Literacy',
    blurb: 'Safe, critical, and creative use of digital tools — from evaluating sources to making simple media.',
    outcomes: ['Spot clickbait', 'Create a short audio or image story', 'Practice safe sharing online'],
    pdf: '/downloads/kids-digital-media-literacy.pdf',
    playlist: 'https://www.youtube.com/playlist?list=PLkids_digital',
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking & Decision Making',
    blurb: 'Ask better questions, weigh options, and make choices using simple frameworks.',
    outcomes: ['Use pros & cons for decisions', 'Spot faulty reasoning', 'Try a tiny experiment to test ideas'],
    pdf: '/downloads/kids-critical-thinking.pdf',
    playlist: 'https://www.youtube.com/playlist?list=PLkids_critical',
  },
  {
    id: 'career-professional',
    title: 'Career & Professional Skills',
    blurb: 'Experience work-related skills: teamwork, goal-setting, basic interviews and presenting yourself confidently.',
    outcomes: ['Set a short-term learning goal', 'Practice a 60s introduction', 'Work in a small team task'],
    pdf: '/downloads/kids-career-professional.pdf',
    playlist: 'https://www.youtube.com/playlist?list=PLkids_career',
  },
  {
    id: 'legal-civic',
    title: 'Legal & Civic Knowledge',
    blurb: 'Understand rights & responsibilities in age-appropriate ways and how to take part in the community.',
    outcomes: ['Know basic rights at school', 'Understand civic helpers', 'Participate in a community mini-project'],
    pdf: '/downloads/kids-legal-civic.pdf',
    playlist: 'https://www.youtube.com/playlist?list=PLkids_civic',
  },
];

/* --------------------- course card (simple links only) --------------------- */
function CourseCard({ course }: { course: (typeof COURSES)[0] }) {
  return (
    <article className="card p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold">{course.title}</h3>
          <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{course.blurb}</p>
        </div>
        <div className="text-xs text-[hsl(var(--ink-dim))]">Badge • Short</div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--ink-dim))]">
        {course.outcomes.map((o) => (
          <li key={o} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
            {o}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {course.pdf ? (
          <a href={course.pdf} className="btn btn-ghost" download>
            Download PDF
          </a>
        ) : null}

        {course.playlist ? (
          <a href={course.playlist} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Watch playlist
          </a>
        ) : null}

        <Link href={`/kids#${course.id}`} className="link text-sm">
          View details →
        </Link>
      </div>
    </article>
  );
}

/* --------------------- page --------------------- */
export default function KidsPage() {
  return (
    <main className="relative">
      {/* Structured data for SEO & discoverability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'theidealprokids — Empowering Youth with Practical Skills',
            description: 'Free, empowering learning paths that teach practical skills for life and work.',
            educationalProvider: {
              '@type': 'Organization',
              name: 'theidealprokids',
            },
            hasPart: COURSES.map((c) => ({
              '@type': 'Course',
              name: c.title,
              description: c.blurb,
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110rem_60rem_at_50%_-20%,hsl(280_90%_60%/.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                theidealprokids
              </span>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Skills for today, confidence for tomorrow —{' '}
                <span className="text-[hsl(var(--primary))]">practical & empowering</span>
              </h1>

              <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">
                Free, short, and hands-on lessons that help young people master real-life skills — from money sense to teamwork and digital safety.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#courses" className="btn btn-primary">Explore courses</a>
                <a href="#paths" className="btn btn-secondary">See learning paths</a>
                <a href="#playlists" className="btn btn-ghost">Watch a mini-lesson</a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">Offline-friendly</span>
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">Adult guides included</span>
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">Designed for low-bandwidth</span>
              </div>
            </div>

            <div className="card p-6">
              <div className="text-sm font-semibold">What’s inside</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {[
                  ['Empowering courses', 'Short, practical modules & badges'],
                  ['Hands-on mini-missions', 'Try-it-away-from-screen challenges'],
                  ['Adult facilitation', 'Simple guides for family & teachers'],
                  ['Offline printables', 'A4/Letter PDFs you can reuse'],
                ].map(([title, sub]) => (
                  <li key={title} className="flex items-start justify-between gap-4 rounded-lg border p-3">
                    <div>
                      <div className="font-medium">{title}</div>
                      <div className="text-[hsl(var(--ink-dim))]">{sub}</div>
                    </div>
                    <span aria-hidden className="inline-grid h-7 w-7 place-items-center rounded-md bg-[hsl(var(--primary))]/10">✓</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-7xl px-4 py-14">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Courses</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Seven practical courses that empower</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">Each course is split into tiny, measurable missions so learners feel progress quickly.</p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {COURSES.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-sm text-[hsl(var(--ink-dim))]">
          <div className="rounded-lg border bg-white p-4">
            <div className="flex items-start gap-4">
              <div className="mt-1"><IconCheck /></div>
              <div>
                <div className="font-medium">Why these courses?</div>
                <p className="mt-1">They were chosen to build independence, resilience, and agency — skills kids use at home, school, and later at work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section id="paths" className="mx-auto max-w-7xl px-4 py-14">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Learning paths</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Small wins, big confidence</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">Each path includes a few steps and a simple project badge kids can complete and show.</p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            ['Early Readers (5–7)', ['Letter sounds & sight words', 'Read-aloud practice', 'Story retell'], '/downloads/kids-early-readers.pdf'],
            ['STEM & Numbers (7–10)', ['Math puzzles', 'Hands-on experiments', 'Everyday graphs'], '/downloads/kids-stem-and-numbers.pdf'],
            ['Create & Code (10–13)', ['Creative prompts', 'Block coding basics', 'Mini-game project'], '/downloads/kids-create-and-code.pdf'],
          ].map(([title, items, resource]) => (
            <article key={String(title)} className="card p-6">
              <div className="text-base font-semibold">{title}</div>
              <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--ink-dim))]">
                {(items as string[]).map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a href={resource as string} className="btn btn-ghost">Download path</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Playlists */}
      <section id="playlists" className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Watch & try</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Short videos with prompts</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">Keep it fun and tactile: watch a clip, then do a tiny challenge away from the screen.</p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            ['Read & Tell', 'https://www.youtube.com/playlist?list=PLkids01', 'Phonics, sight words, and story retell games.'],
            ['Everyday Math', 'https://www.youtube.com/playlist?list=PLkids02', 'Puzzles, patterns, and kitchen-table experiments.'],
            ['Create & Code', 'https://www.youtube.com/playlist?list=PLkids03', 'Creative prompts and block coding mini-projects.'],
          ].map(([title, href, blurb]) => (
            <article key={title as string} className="flex flex-col gap-3">
              <div className="relative overflow-hidden rounded-xl border bg-white shadow-card aspect-video">
                <iframe
                  className="h-full w-full"
                  loading="lazy"
                  src={href as string}
                  title={String(title)}
                  referrerPolicy="no-referrer"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>
              <div>
                <div className="text-base font-semibold">{title}</div>
                <p className="text-sm text-[hsl(var(--ink-dim))]">{blurb}</p>
                <div className="mt-2">
                  <a href={href as string} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Open playlist</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Printables */}
      <section id="printables" className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Print & play</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Daily missions (offline)</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">Simple A4/Letter PDFs you can print, photocopy, and reuse in class or at home.</p>
        </header>

        <ul className="mx-auto mt-8 grid max-w-3xl gap-3">
          {[
            ['Sight Words Bingo (PDF)', '/downloads/kids-sight-words-bingo.pdf'],
            ['Kitchen Math Scavenger (PDF)', '/downloads/kids-kitchen-math.pdf'],
            ['Graph a Day (PDF)', '/downloads/kids-graph-a-day.pdf'],
            ['Creative Prompt Cards (PDF)', '/downloads/kids-creative-prompts.pdf'],
          ].map(([label, href]) => (
            <li key={label} className="flex items-center justify-between rounded-lg border bg-white p-4">
              <div className="text-sm font-medium">{label}</div>
              <a className="btn btn-ghost" href={href as string} download>
                Download
              </a>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-3 max-w-3xl text-xs text-[hsl(var(--ink-dim))]">Need a local language? <a className="underline" href="/contact">Request a translation</a>.</p>
      </section>

      {/* Adult guides */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Adult guides</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Support that works in real life</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">Quick facilitation tips for parents, caregivers, and teachers—especially in low-resource settings.</p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="card p-6">
            <div className="text-base font-semibold">Parent & Caregiver Guide</div>
            <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--ink-dim))]">
              {[
                '15–20 minute sessions → 1 tiny win',
                'More talk & drawing than screen time',
                'Use household items as manipulatives',
                'Praise effort, not just correctness',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a className="btn btn-ghost" href="/downloads/kids-parent-guide.pdf" download>Download PDF</a>
            </div>
          </article>

          <article className="card p-6">
            <div className="text-base font-semibold">Teacher & Facilitator Guide</div>
            <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--ink-dim))]">
              {[
                'Plan with 3 stations: read • make • reflect',
                'Rotate roles: doer, helper, explainer',
                'Exit ticket: one drawing or sentence',
                'Low-bandwidth alternatives listed',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a className="btn btn-ghost" href="/downloads/kids-teacher-guide.pdf" download>Download PDF</a>
            </div>
          </article>
        </div>
      </section>

      {/* Safety & privacy */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="card p-6">
          <div className="section-title">Safety & privacy</div>
          <h2 className="mt-2 text-xl font-extrabold tracking-tight">Designed for safe exploration</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[hsl(var(--ink-dim))] sm:grid-cols-2">
            {[
              'No account is required for videos or printables',
              'Minimal external embeds with modest branding',
              'COPPA-aware copy; adults manage any sharing',
              'Clear reporting: contact us for takedown requests',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-[hsl(var(--ink-dim))]">Questions? Read our <a className="underline" href="/privacy">Privacy</a> and <a className="underline" href="/terms">Terms</a>.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100rem_45rem_at_50%_-20%,hsl(280_90%_60%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="card flex flex-col items-center gap-4 p-8 text-center">
            <p className="section-title">Start a tiny mission</p>
            <h2 className="text-2xl font-extrabold tracking-tight">One video + one printable today</h2>
            <p className="max-w-2xl text-[hsl(var(--ink-dim))]">Keep sessions short and joyful. Celebrate the attempt, not just the result.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href="#playlists" className="btn btn-primary">Watch a mini-lesson</a>
              <a href="#printables" className="btn btn-secondary">Pick a printable</a>
              <a href="/enrol" className="btn btn-ghost">Browse all courses</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
