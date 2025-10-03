// src/app/gov/page.tsx
export const metadata = {
  title: 'theidealprogov — E-Governance & Public Sector Transformation',
  description:
    'Modular, citizen-centric digital services: digital ID, permits, case management, healthcare & education portals.',
  openGraph: {
    title: 'theidealprogov — E-Governance & Public Sector Transformation',
    description:
      'Modular, citizen-centric digital services: digital ID, permits, case management, healthcare & education portals.',
  },
};

function Dot({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
      {children}
    </span>
  );
}

export default function GovPage() {
  return (
    <main className="relative">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110rem_60rem_at_50%_-20%,hsl(150_70%_45%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Dot>theidealprogov</Dot>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Citizen-first digital <span className="text-[hsl(var(--primary))]">public services</span>
              </h1>
              <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">
                Modular SaaS and advisory to modernize IDs, permits, case management,
                and sector platforms—with accessibility, transparency, and security by design.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact?subject=ProGov%20Engagement" className="btn btn-primary">Request a proposal</a>
                <a href="/donate" className="btn btn-secondary">Support public access</a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">
                  Interoperability
                </span>
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">
                  Inclusive UX
                </span>
                <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5">
                  Open standards
                </span>
              </div>
            </div>

            {/* Snapshot card */}
            <div className="card p-6">
              <div className="text-sm font-semibold">Focus areas</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {[
                  ['Digital identity', 'Verification flows & eligibility frameworks'],
                  ['Citizen portals', 'Permits, benefits, status tracking'],
                  ['Case systems', 'Intake, triage, service coordination'],
                  ['Health & education', 'EMR/LMIS bridges & student portals'],
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

      {/* --------------------------- Delivery model -------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Delivery model</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Modular platforms, practical change</h2>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            ['Blueprint & governance', ['Stakeholders & policy fit', 'Data model & interoperability', 'Risk, privacy, security']],
            ['Build & integrate', ['MVP service modules', 'Legacy connectors', 'Observability']],
            ['Adopt & improve', ['Accessibility & languages', 'Officer training', 'Roadmap & outcomes']],
          ].map(([title, items]) => (
            <article key={title as string} className="card p-6">
              <div className="text-base font-semibold">{title}</div>
              <ul className="mt-2 space-y-2 text-sm text-[hsl(var(--ink-dim))]">
                {(items as string[]).map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------ Impact ------------------------------ */}
      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-3">
          {[
            ['Service time ↓', '40–70%'],
            ['Access ↑', '+ languages, offline paths'],
            ['Trust ↑', 'transparency & audit trails'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border bg-white p-6 text-center shadow-card">
              <div className="text-3xl font-extrabold">{v}</div>
              <div className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ Cases ------------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Case snapshots</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">From pilots to scale</h2>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['City permits', 'Online permits with SMS updates; wait times cut by half'],
            ['Benefits portal', 'Eligibility wizard with multilingual support'],
            ['School records', 'Digitized transcripts with secure public lookup'],
          ].map(([title, line]) => (
            <article key={title} className="card p-5">
              <div className="font-semibold">{title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{line}</p>
              <a href="/contact?subject=ProGov%20Case%20Study" className="mt-3 inline-block text-sm underline opacity-80 hover:opacity-100">
                Request brief →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95rem_40rem_at_50%_-20%,hsl(150_70%_45%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="card flex flex-col items-center gap-4 p-8 text-center">
            <p className="section-title">Let’s serve better</p>
            <h2 className="text-2xl font-extrabold tracking-tight">Start with a discovery session</h2>
            <p className="max-w-2xl text-[hsl(var(--ink-dim))]">
              We’ll align on goals, constraints, and a staged plan to deliver outcomes quickly and safely.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href="/contact?subject=ProGov%20Engagement" className="btn btn-primary">Request a proposal</a>
              <a href="/donate" className="btn btn-secondary">Donate a coffee</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
