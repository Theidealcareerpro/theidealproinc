// Server Component (no "use client")
type Props = {
  eyebrow?: string;
  title: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function CaseTile({ eyebrow, title, body, ctaHref, ctaLabel }: Props) {
  return (
    <article className="card p-6">
      {eyebrow ? <div className="text-xs text-[hsl(var(--ink-dim))]">{eyebrow}</div> : null}
      <h3 className="mt-1 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[hsl(var(--ink-dim))]">{body}</p>
      {ctaHref && ctaLabel ? (
        <a href={ctaHref} className="mt-4 inline-block text-sm underline opacity-80 hover:opacity-100">
          {ctaLabel} →
        </a>
      ) : null}
    </article>
  );
}
