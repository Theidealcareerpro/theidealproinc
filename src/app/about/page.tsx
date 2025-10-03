// src/app/about/page.tsx
export const metadata = {
  title: 'About — The Ideal Professional Inc.',
  description:
    'Our mission is to democratize digital empowerment for individuals, SMEs, and governments worldwide.',
  openGraph: {
    title: 'About — The Ideal Professional Inc.',
    description:
      'Our mission is to democratize digital empowerment for individuals, SMEs, and governments worldwide.',
  },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="relative">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110rem_60rem_at_50%_-20%,hsl(220_90%_60%/.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="section-title">About The Ideal Professional Inc.</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Empowerment is a <span className="text-[hsl(var(--primary))]">right</span>, not a luxury
              </h1>
              <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">
                We build an integrated ecosystem so people can learn, work, and thrive;
                SMEs can modernize; and governments can serve citizens better — across any context.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Inclusive by design</Pill>
                <Pill>Low-bandwidth friendly</Pill>
                <Pill>Open-standards mindset</Pill>
              </div>
            </div>

            {/* Impact tiles */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['People', 'Career tools, courses, and mentorship'],
                ['SMEs', 'Lean digitization for real outcomes'],
                ['Governments', 'Citizen-first modular services'],
                ['Sustainability', 'Long-term, affordable access'],
              ].map(([k, v]) => (
                <div key={k} className="card p-5">
                  <div className="text-base font-semibold">{k}</div>
                  <div className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- Story ------------------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Our story</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
            From a simple idea to a full empowerment ecosystem
          </h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            We started with a belief: talent is evenly distributed, opportunity isn’t. We’re fixing that.
          </p>
        </header>

        {/* timeline, CSS-only */}
        <ol className="mx-auto mt-8 max-w-3xl space-y-5 border-l pl-6">
          {[
            ['Phase 1 — ProGen', 'Launch career tools (CV, cover letter, portfolios).'],
            ['Phase 2 — ProLearn', 'Introduce free/low-cost courses with certificates.'],
            ['Phase 3 — ProKids', 'Deliver youth learning for early digital fluency.'],
            ['Phase 4 — ProCoach & ProBiz', 'Mentorship + SME digitization for outcomes.'],
            ['Phase 5 — ProGov', 'Citizen portals and sector platforms at scale.'],
          ].map(([title, desc], i) => (
            <li key={title} className="relative">
              <span className="absolute -left-[11px] top-1 inline-block h-2.5 w-2.5 rounded-full bg-[hsl(var(--primary))]" />
              <div className="card p-5">
                <div className="text-sm font-semibold">{title}</div>
                <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{desc}</p>
                <div className="mt-2 text-xs text-[hsl(var(--ink-dim))]">Step {i + 1} of 5</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* --------------------------- Leadership --------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Leadership</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Practitioners who ship</h2>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Operator mindset, public-interest heart. We mix product sense, delivery rigor, and community focus.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Founder & CEO', 'Strategy, partnerships, product direction'],
            ['Head of Delivery', 'Scaled rollouts, QA, and change management'],
            ['Head of Learning', 'Curricula, certifications, and youth programs'],
          ].map(([role, line]) => (
            <article key={role} className="card group overflow-hidden p-5">
              <div className="flex items-center gap-3">
                <div className="inline-grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--primary))]/10 text-sm font-bold">
                  {String(role).split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold">{role}</div>
                  <div className="text-xs text-[hsl(var(--ink-dim))]">{line}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-[hsl(var(--ink-dim))]">
                We keep overhead low and results high — partnering with seasoned experts as needed.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* --------------------------- Principles --------------------------- */}
      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-3">
          {[
            ['Access', 'Low-cost, multilingual, offline-friendly options'],
            ['Integrity', 'Impact first, transparent, vendor-neutral'],
            ['Pragmatism', 'MVPs, measurable outcomes, iterate fast'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border bg-white p-6 text-center shadow-card">
              <div className="text-3xl font-extrabold">{k}</div>
              <div className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ CTA ------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95rem_40rem_at_50%_-20%,hsl(220_90%_60%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="card flex flex-col items-center gap-4 p-8 text-center">
            <p className="section-title">Work with us</p>
            <h2 className="text-2xl font-extrabold tracking-tight">Let’s build access at scale</h2>
            <p className="max-w-2xl text-[hsl(var(--ink-dim))]">
              Whether you’re an individual, SME, NGO, or government team — we’ll tailor a plan that works.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href="/contact" className="btn btn-primary">Contact us</a>
              <a href="/ecosystem" className="btn btn-secondary">Explore ecosystem</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
