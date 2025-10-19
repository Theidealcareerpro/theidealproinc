// src/app/learn/page.tsx
export const metadata = {
  title: 'theidealprolearn — Free Courses & Certificates',
  description:
    'Structured, free learning paths with embedded YouTube playlists and project-based milestones. Downloadable resources and certificates.',
  openGraph: {
    title: 'theidealprolearn — Free Courses & Certificates',
    description:
      'Structured, free learning paths with embedded YouTube playlists and project-based milestones.',
  },
};

type Track = {
  id: string;
  title: string;
  tagline: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string; // e.g., "3–5 weeks"
  outcomes: string[];
  playlistUrl?: string; // optional YouTube playlist
  resources?: Array<{ label: string; href: string }>;
};

const TRACKS: Track[] = [
  {
    id: 'job-ready-portfolio',
    title: 'Job-Ready Portfolio',
    tagline: 'Tell a sharp story with proof, not fluff.',
    level: 'Beginner',
    duration: '2–3 weeks',
    outcomes: [
      'One cohesive narrative (About + skills map)',
      '2–3 outcome-focused case studies',
      'A simple homepage that converts',
    ],
    playlistUrl: 'https://www.youtube.com/embed/videoseries?list=PLxxxxxxx1',
    resources: [
      { label: 'Portfolio outline (PDF)', href: '/learn/resources/portfolio-outline.pdf' },
      { label: 'Case study template (DOCX)', href: '/learn/resources/case-template.docx' },
    ],
  },
  {
    id: 'interview-foundations',
    title: 'Interview Foundations',
    tagline: 'Behavioral frameworks + live practice patterns.',
    level: 'Intermediate',
    duration: '3–4 weeks',
    outcomes: [
      'STAR → CLEAR storytelling muscle',
      'Rubric-based self-review',
      'System design / case prompts library',
    ],
    playlistUrl: 'https://www.youtube.com/embed/videoseries?list=PLxxxxxxx2',
    resources: [
      { label: 'Behaviorals guide (PDF)', href: '/learn/resources/behaviorals-guide.pdf' },
      { label: 'Mock rubric (CSV)', href: '/learn/resources/mock-rubric.csv' },
    ],
  },
  {
    id: 'role-aligned-projects',
    title: 'Role-Aligned Projects',
    tagline: 'Projects that actually signal the job you want.',
    level: 'Beginner',
    duration: '2–4 weeks',
    outcomes: [
      'Compact project briefs for target roles',
      'Evidence snapshots for each skill',
      'Public write-ups that recruiters understand',
    ],
    playlistUrl: 'https://www.youtube.com/embed/videoseries?list=PLxxxxxxx3',
    resources: [
      { label: 'Project briefs (ZIP)', href: '/learn/resources/project-briefs.zip' },
      { label: 'Write-up prompts (TXT)', href: '/learn/resources/writeup-prompts.txt' },
    ],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}

export default function LearnPage() {
  return (
    <main className="relative">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110rem_60rem_at_50%_-20%,hsl(210_90%_60%/.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                theidealprolearn
              </span>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Free, structured learning that <span className="text-[hsl(var(--primary))]">compounds</span>.
              </h1>
              <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">
                Modular paths with embedded YouTube lessons, downloadable templates, and project-based milestones.
                Earn printable certificates on completion.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#tracks" className="btn btn-primary">Browse tracks</a>
                <a href="/donate" className="btn btn-secondary">Support free learning</a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                <Pill>100% free</Pill>
                <Pill>Low-bandwidth friendly</Pill>
                <Pill>Printable resources</Pill>
              </div>
            </div>

            <div className="card p-6">
              <div className="text-sm font-semibold">What you’ll build</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {[
                  ['Clarity', 'A clear target role and skill map.'],
                  ['Proof', 'Projects and write-ups recruiters recognize.'],
                  ['Confidence', 'Interview frameworks and practice loops.'],
                ].map(([title, sub]) => (
                  <li key={title as string} className="flex items-start justify-between gap-4 rounded-lg border p-3">
                    <div>
                      <div className="font-medium">{title}</div>
                      <div className="text-[hsl(var(--ink-dim))]">{sub}</div>
                    </div>
                    <span aria-hidden className="inline-grid h-7 w-7 place-items-center rounded-md bg-[hsl(var(--primary))]/10">
                      ✓
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- Tracks ----------------------------- */}
      <section id="tracks" className="mx-auto max-w-7xl px-4 py-14">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Learning Tracks</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Choose a path, ship outcomes</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Each track mixes videos, templates, and hands-on briefs. Printables included.
          </p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {TRACKS.map((t) => (
            <article key={t.id} className="card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-base font-semibold">{t.title}</div>
                <div className="flex gap-2">
                  <Pill>{t.level}</Pill>
                  <Pill>{t.duration}</Pill>
                </div>
              </div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{t.tagline}</p>

              <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--ink-dim))]">
                {t.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    {o}
                  </li>
                ))}
              </ul>

              {t.playlistUrl ? (
                <div className="mt-4 overflow-hidden rounded-lg border">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={t.playlistUrl}
                      title={`${t.title} playlist`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : null}

              {t.resources && t.resources.length > 0 ? (
                <div className="mt-4">
                  <div className="text-xs font-semibold">Resources</div>
                  <ul className="mt-2 space-y-1 text-sm">
                    {t.resources.map((r) => (
                      <li key={r.href}>
                        <a className="underline opacity-80 hover:opacity-100" href={r.href} download>
                          {r.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                <a href={`/contact?subject=${encodeURIComponent(`Certificate request — ${t.title}`)}`} className="btn btn-primary">
                  Request certificate
                </a>
                <a href="/donate" className="btn btn-ghost">Support this track</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --------------------------- Pathways ---------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="card p-6">
          <div className="section-title">Suggested Pathways</div>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="text-sm font-semibold">New to the field</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">
                Start with <strong>Job-Ready Portfolio</strong>, layer in <strong>Role-Aligned Projects</strong>, then tackle
                <strong> Interview Foundations</strong>.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm font-semibold">Switching careers</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">
                Begin with <strong>Role-Aligned Projects</strong> to build credible proof, then <strong>Portfolio</strong> and
                <strong> Interview Foundations</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- CTA ------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100rem_45rem_at_50%_-20%,hsl(210_90%_60%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="card flex flex-col items-center gap-4 p-8 text-center">
            <p className="section-title">Keep it moving</p>
            <h2 className="text-2xl font-extrabold tracking-tight">Stuck or want faster progress?</h2>
            <p className="max-w-2xl text-[hsl(var(--ink-dim))]">
              theidealprocareers can pair you with a mentor for a 2–6 week sprint. We start where the leverage is highest.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href="/coach" className="btn btn-secondary">Mentorship</a>
              <a href="/contact?subject=Learning%20Support" className="btn btn-primary">Ask a question</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
