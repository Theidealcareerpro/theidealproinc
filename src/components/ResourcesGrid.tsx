type Video = { id: string; title?: string };
type Download = { title: string; href: string; desc?: string };

export default function ResourcesGrid({
  videos = [],
  downloads = [],
  title = 'Resources',
  subtitle,
}: {
  videos?: Video[];
  downloads?: Download[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mt-12">
      <header className="max-w-3xl">
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{subtitle}</p>
        ) : null}
      </header>

      {videos.length > 0 && (
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {videos.map((v) => (
            <article key={v.id} className="rounded-2xl border bg-white p-3 shadow-sm">
              <div className="aspect-video overflow-hidden rounded-xl bg-black/5">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title || 'Video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {v.title ? <div className="mt-2 text-sm font-medium">{v.title}</div> : null}
            </article>
          ))}
        </div>
      )}

      {downloads.length > 0 && (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {downloads.map((d) => (
            <a
              key={d.title}
              href={d.href}
              className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow transition-shadow"
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-semibold">{d.title}</div>
              {d.desc ? (
                <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{d.desc}</p>
              ) : null}
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-[hsl(var(--brand-ink))]">
                Download
                <span aria-hidden>↗</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
