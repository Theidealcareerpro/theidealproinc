// src/app/kids/page.tsx
export const metadata = {
  title: 'theidealprokids — Youth Digital Learning',
  description:
    'Playful, safe, and free digital learning for kids: literacy, STEM, creativity. Parent & teacher guides included.',
  openGraph: {
    title: 'theidealprokids — Youth Digital Learning',
    description:
      'Playful, safe, and free digital learning for kids: literacy, STEM, creativity. Parent & teacher guides included.',
  },
};

function YT({ title, src }: { title: string; src: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-white shadow-card">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function KidsPage() {
  return (
    <main className="relative">
      {/* ------------------------------ Hero ------------------------------ */}
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
                Learn, make, <span className="text-[hsl(var(--primary))]">have fun</span>.
              </h1>

              <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">
                Free lessons and activities that help kids read, count, code, and create—built to work on low
                bandwidth and shared devices.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#paths" className="btn btn-primary">Explore learning paths</a>
                <a href="#playlists" className="btn btn-secondary">Watch videos</a>
                <a href="#printables" className="btn btn-ghost">Print activities</a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">
                  Offline-friendly
                </span>
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">
                  Adult guides included
                </span>
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">
                  Safe & ad-light embeds
                </span>
              </div>
            </div>

            {/* Quick overview card */}
            <div className="card p-6">
              <div className="text-sm font-semibold">What’s inside</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {[
                  ['Learning paths', 'Short, age-aware progressions'],
                  ['Video mini-lessons', 'Tiny concepts with practice prompts'],
                  ['Printable missions', 'Daily challenges you can do offline'],
                  ['Adult support', 'Parent & teacher facilitation tips'],
                ].map(([title, sub]) => (
                  <li key={title} className="flex items-start justify-between gap-4 rounded-lg border p-3">
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

      {/* -------------------------- Learning Paths ------------------------- */}
      <section id="paths" className="mx-auto max-w-7xl px-4 py-14">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Learning paths</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Small wins, big confidence</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Each path includes a few steps and a simple project badge kids can complete and show.
          </p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            [
              'Early Readers (5–7)',
              ['Letter sounds & sight words', 'Read-aloud practice', 'Story retell'],
              '/kids#early-readers',
            ],
            [
              'STEM & Numbers (7–10)',
              ['Math puzzles', 'Hands-on experiments', 'Everyday graphs'],
              '/kids#stem',
            ],
            [
              'Create & Code (10–13)',
              ['Creative prompts', 'Block coding basics', 'Mini-game project'],
              '/kids#code',
            ],
          ].map(([title, items, href]) => (
            <article key={title as string} className="card p-6">
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
                <a href={href as string} className="btn btn-ghost">Open path</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------ Featured Playlists ----------------------- */}
      <section id="playlists" className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Watch & try</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Short videos with prompts</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Keep it fun and tactile: watch a clip, then do a tiny challenge away from the screen.
          </p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            [
              'Read & Tell',
              'https://www.youtube.com/embed/videoseries?list=PLkids01&modestbranding=1&rel=0',
              'Phonics, sight words, and story retell games.',
            ],
            [
              'Everyday Math',
              'https://www.youtube.com/embed/videoseries?list=PLkids02&modestbranding=1&rel=0',
              'Puzzles, patterns, and kitchen-table experiments.',
            ],
            [
              'Create & Code',
              'https://www.youtube.com/embed/videoseries?list=PLkids03&modestbranding=1&rel=0',
              'Creative prompts and block coding mini-projects.',
            ],
          ].map(([title, src, blurb]) => (
            <article key={title as string} className="flex flex-col gap-3">
              <YT title={title as string} src={src as string} />
              <div>
                <div className="text-base font-semibold">{title}</div>
                <p className="text-sm text-[hsl(var(--ink-dim))]">{blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------- Printables --------------------------- */}
      <section id="printables" className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Print & play</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Daily missions (offline)</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Simple A4/Letter PDFs you can print, photocopy, and reuse in class or at home.
          </p>
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
              <a className="btn btn-ghost" href={href as string}>
                Download
              </a>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-3 max-w-3xl text-xs text-[hsl(var(--ink-dim))]">
          Need a local language? <a className="underline" href="/contact">Request a translation</a>.
        </p>
      </section>

      {/* --------------------- Parents & Teachers Guides ------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Adult guides</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Support that works in real life</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Quick facilitation tips for parents, caregivers, and teachers—especially in low-resource settings.
          </p>
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
              <a className="btn btn-ghost" href="/downloads/kids-parent-guide.pdf">
                Download PDF
              </a>
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
              <a className="btn btn-ghost" href="/downloads/kids-teacher-guide.pdf">
                Download PDF
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* -------------------------- Safety & Privacy ----------------------- */}
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
          <p className="mt-3 text-xs text-[hsl(var(--ink-dim))]">
            Questions? Read our <a className="underline" href="/privacy">Privacy</a> and <a className="underline" href="/terms">Terms</a>.
          </p>
        </div>
      </section>

      {/* ---------------------------- Final CTA ---------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100rem_45rem_at_50%_-20%,hsl(280_90%_60%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="card flex flex-col items-center gap-4 p-8 text-center">
            <p className="section-title">Start a tiny mission</p>
            <h2 className="text-2xl font-extrabold tracking-tight">One video + one printable today</h2>
            <p className="max-w-2xl text-[hsl(var(--ink-dim))]">
              Keep sessions short and joyful. Celebrate the attempt, not just the result.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href="#playlists" className="btn btn-primary">Watch a mini-lesson</a>
              <a href="#printables" className="btn btn-secondary">Pick a printable</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
