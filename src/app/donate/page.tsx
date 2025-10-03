// src/app/donate/page.tsx
export const metadata = {
  title: 'Donate',
  description: 'Support our mission to deliver accessible digital empowerment worldwide.',
};

const BMC_URL = 'https://www.buymeacoffee.com/theidealcag';

export default function DonatePage() {
  return (
    <main className="container-app max-w-3xl py-12">
      <section className="card p-8">
        <header className="mb-5">
          <p className="section-title">Donate</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground">
            Your support accelerates impact
          </h1>
          <p className="mt-2 text-[hsl(var(--ink-dim))]">
            Every contribution keeps our free tools online and expands access for students,
            job seekers, SMEs and public-sector users in low-resource settings.
          </p>
        </header>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={BMC_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy me a coffee on Buy Me a Coffee"
            className="inline-block"
          >
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=☕&slug=theidealprogen&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FF0000"
              alt="Buy Me a Coffee"
              className="h-12 w-auto"
              loading="lazy"
              decoding="async"
            />
          </a>

          {['$5', '$10', '$25'].map((amt) => (
            <a
              key={amt}
              href={BMC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label={`Donate ${amt} on Buy Me a Coffee`}
            >
              Give {amt}
            </a>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { title: 'Transparent', desc: 'Donations fund hosting and free access.' },
            { title: 'Secure', desc: 'Payments happen on Buy Me a Coffee.' },
            { title: 'Impactful', desc: 'You help more people publish & learn.' },
          ].map((f) => (
            <div key={f.title} className="card p-4">
              <div className="text-sm font-semibold text-foreground">{f.title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-[hsl(var(--ink-dim))/20%] bg-[hsl(var(--muted))] p-4">
          <div className="text-base font-semibold">Request a quote instead</div>
          <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">
            For cohorts, SME sprints, or public-sector engagements, we’ll tailor a plan to your goals.
          </p>
          <a href="/contact" className="mt-3 inline-flex rounded-md border px-3 py-1.5 text-sm hover:bg-white">
            Request a quote
          </a>
        </div>

        <p className="mt-8 text-xs text-[hsl(var(--ink-dim))]">
          We don’t store your payment details. External links open in a new tab.
        </p>
      </section>
    </main>
  );
}
