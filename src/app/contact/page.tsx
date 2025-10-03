// src/app/contact/page.tsx
export const metadata = {
  title: 'Contact',
  description: 'Reach out for quotes, partnerships, or general questions.',
};

export default function ContactPage() {
  return (
    <main className="container-app max-w-3xl py-12">
      <section className="card p-8">
        <header className="mb-5">
          <p className="section-title">Contact</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Let’s work together</h1>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Share a bit about your needs—cohort programs, SME digitization, or public-sector projects.
            We’ll respond with a tailored plan and next steps.
          </p>
        </header>

        {/* Simple mailto CTA for now */}
        <div className="mt-4 rounded-lg border p-4">
          <div className="text-sm font-semibold">Email</div>
          <a
            className="mt-1 inline-flex text-sm underline underline-offset-4"
            href="mailto:hello@theidealprofessional.com?subject=Request%20for%20Quote"
          >
            hello@theidealprofessional.com
          </a>
          <p className="mt-2 text-xs text-[hsl(var(--ink-dim))]">
            Include: organization, goals, timeline, region, and budget range (if available).
          </p>
        </div>

        {/* Optional fields (non-functional placeholder for now) */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="card p-4">
            <div className="text-sm font-semibold">SME Digitization</div>
            <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">POS, CRM, payroll, analytics & growth.</p>
          </div>
          <div className="card p-4">
            <div className="text-sm font-semibold">Public-Sector Programs</div>
            <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">Citizen portals, IDs, education, health.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
