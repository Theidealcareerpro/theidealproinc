// src/components/CTASection.tsx
import Reveal from '@/components/Reveal';

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80rem_40rem_at_50%_-10%,hsl(260_90%_60%/.10),transparent)]"
      />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal y={14}>
            <div className="card p-8">
              <h3 className="text-xl font-bold">Get started with the ecosystem</h3>
              <p className="mt-2 text-sm text-[hsl(var(--ink-dim))]">
                Explore our integrated tools for people, SMEs, and governments.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="/ecosystem" className="btn btn-primary">Explore ecosystem</a>
                <a href="/about" className="btn btn-ghost">About us</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} y={14}>
            <div className="card p-8">
              <h3 className="text-xl font-bold">Support the mission</h3>
              <p className="mt-2 text-sm text-[hsl(var(--ink-dim))]">
                Your donation keeps access free where it matters most.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="/donate" className="btn btn-secondary">Donate</a>
                <a href="/contact" className="btn btn-ghost">Request a quote</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
