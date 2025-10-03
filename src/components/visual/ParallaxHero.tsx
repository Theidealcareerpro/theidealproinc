// Minimal parallax hero with layered mockups + gradient glow
import Image from 'next/image';

type Layer = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  depth?: number; // 0..1 parallax strength
};

export default function ParallaxHero({
  title,
  kicker,
  blurb,
  ctas,
  layers = [],
}: {
  title: string;
  kicker?: string;
  blurb?: string;
  ctas?: Array<{ label: string; href: string; variant?: 'primary' | 'secondary' }>;
  layers?: Layer[];
}) {
  // CSS parallax via mousemove (no JS state) — reads CSS vars
  return (
    <section
      className="relative isolate overflow-hidden"
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width - 0.5;  // -0.5..0.5
        const cy = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--px', String(cx));
        el.style.setProperty('--py', String(cy));
      }}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120rem_60rem_at_50%_-20%,hsl(220_90%_60%/.12),transparent)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          {kicker ? <p className="section-title">{kicker}</p> : null}
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          {blurb ? (
            <p className="mt-3 text-lg text-[hsl(var(--ink-dim))]">{blurb}</p>
          ) : null}
          {ctas && (
            <div className="mt-6 flex flex-wrap gap-3">
              {ctas.map((c) =>
                c.variant === 'secondary' ? (
                  <a key={c.href} href={c.href} className="btn btn-secondary">
                    {c.label}
                  </a>
                ) : (
                  <a key={c.href} href={c.href} className="btn btn-primary">
                    {c.label}
                  </a>
                ),
              )}
            </div>
          )}
        </div>

        <div className="relative h-[380px] w-full">
          {/* device-esque frame */}
          <div className="absolute inset-0 rounded-3xl border bg-white/70 shadow-card backdrop-blur" />
          {layers.map((l, i) => {
            const d = l.depth ?? 0.4;
            return (
              <div
                key={i}
                className={`absolute ${l.className ?? ''}`}
                style={{
                  transform:
                    `translate3d(calc(var(--px,0)*${8 * d}px), calc(var(--py,0)*${8 * d}px), 0)`,
                  transition: 'transform .08s linear',
                }}
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={l.width}
                  height={l.height}
                  priority
                  className="rounded-xl border object-cover shadow-md"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
