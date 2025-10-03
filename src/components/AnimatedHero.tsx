// src/components/AnimatedHero.tsx
export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-[bgmove_18s_linear_infinite] bg-[radial-gradient(60%_60%_at_30%_20%,hsl(var(--primary)/0.25),transparent_60%),radial-gradient(50%_50%_at_80%_0%,hsl(var(--accent)/0.20),transparent_55%),radial-gradient(50%_60%_at_60%_80%,hsl(var(--muted-ink)/0.20),transparent_60%)]"
        style={{ filter: 'blur(40px)' }}
      />

      <div className="container-app relative z-10 px-4 py-20 text-center sm:py-28">
        <p className="section-title">Empowerment for everyone</p>
        <h1 className="mx-auto max-w-4xl bg-gradient-to-br from-black to-[hsl(var(--ink))] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          The Ideal Professional Inc.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--ink-dim))] sm:text-lg">
          We build an integrated ecosystem to empower individuals, businesses, and governments with
          modern, accessible digital tools—globally.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a className="btn btn-primary" href="/ecosystem">Explore Ecosystem</a>
          <a className="btn btn-secondary" href="https://grokpro.vercel.app/" target="_blank" rel="noreferrer">
            Try theidealprogen
          </a>
        </div>
      </div>
    </section>
  );
}
