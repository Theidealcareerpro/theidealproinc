// src/app/biz/page.tsx
export const metadata = {
  title: 'theidealprobiz — SME Digitization & Consulting',
  description:
    'Lean, practical digitization for small and mid-sized businesses: POS, CRM, payroll, analytics, and AI-assisted growth.',
  openGraph: {
    title: 'theidealprobiz — SME Digitization & Consulting',
    description:
      'Lean, practical digitization for small and mid-sized businesses: POS, CRM, payroll, analytics, and AI-assisted growth.',
  },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[hsl(var(--ink-dim))/25%] bg-[hsl(var(--muted))] px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}

export default function BizPage() {
  return (
    <main className="relative">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110rem_60rem_at_50%_-20%,hsl(210_90%_60%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                theidealprobiz
              </span>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Digitize fast. <span className="text-[hsl(var(--primary))]">Grow smart.</span>
              </h1>

              <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">
                We help SMEs implement the right stack—POS, CRM, payroll, inventory, dashboards—
                and train teams to run lean, profitable operations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact?subject=ProBiz%20Discovery" className="btn btn-primary">Request a quote</a>
                <a href="/donate" className="btn btn-secondary">Support our mission</a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                <Pill>Quick discovery → plan</Pill>
                <Pill>Low-cost, high impact</Pill>
                <Pill>Training + handover</Pill>
              </div>
            </div>

            {/* Snapshot card */}
            <div className="card p-6">
              <div className="text-sm font-semibold">Typical outcomes</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {[
                  ['Time saved', 'Automated reporting & reconciliations'],
                  ['Revenue lift', 'Better funnel tracking + remarketing'],
                  ['Error reduction', 'Single source of truth across tools'],
                  ['Visibility', 'Live dashboards for owners & managers'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start justify-between gap-4 rounded-lg border p-3">
                    <div>
                      <div className="font-medium">{k}</div>
                      <div className="text-[hsl(var(--ink-dim))]">{v}</div>
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

      {/* --------------------------- What we do --------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Services</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Lean digitization, end-to-end</h2>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            ['Operations stack', ['POS & inventory', 'CRM & pipelines', 'Payroll & HRIS']],
            ['Finance & insights', ['Bookkeeping flow', 'Cashflow dashboards', 'Unit economics']],
            ['Growth systems', ['Email & SMS journeys', 'Website & SEO basics', 'Ads with guardrails']],
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

      {/* --------------------------- How it works --------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">How it works</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">From discovery to handover</h2>
        </header>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Discovery', 'Quick audit to map needs & constraints'],
            ['Blueprint', 'Right-size tools and a migration plan'],
            ['Implement', 'Configure, migrate data, QA & train team'],
            ['Handover', 'Runbook + support window'],
          ].map(([t, d], i) => (
            <li key={t} className="card relative p-5">
              <div className="absolute -top-2 -left-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                {i + 1}
              </div>
              <div className="mt-3 text-base font-semibold">{t}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------------------- Case cards ---------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-title">Recent wins</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Proof before promises</h2>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Retail', 'Unified POS + inventory → shrink down 22%'],
            ['Clinic', 'Billing reconciliation time cut by 60%'],
            ['Agency', 'Pipeline visibility → win rate +14%'],
          ].map(([title, line]) => (
            <article key={title} className="card p-5">
              <div className="font-semibold">{title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{line}</p>
              <a href="/contact?subject=ProBiz%20Case%20Study" className="mt-3 inline-block text-sm underline opacity-80 hover:opacity-100">
                Request details →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95rem_40rem_at_50%_-20%,hsl(210_90%_60%/.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="card flex flex-col items-center gap-4 p-8 text-center">
            <p className="section-title">Ready to modernize?</p>
            <h2 className="text-2xl font-extrabold tracking-tight">Start with a 30-minute discovery</h2>
            <p className="max-w-2xl text-[hsl(var(--ink-dim))]">
              We’ll map quick wins and a minimal stack—no vendor lock-in, just results.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href="/contact?subject=ProBiz%20Discovery" className="btn btn-primary">Request a quote</a>
              <a href="/donate" className="btn btn-secondary">Donate a coffee</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
