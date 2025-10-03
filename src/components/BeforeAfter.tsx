// Server Component (no "use client")
type Props = {
  beforeSrc: string;
  afterSrc: string;
  caption?: string;
  altBefore?: string;
  altAfter?: string;
};

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  caption,
  altBefore = 'Before',
  altAfter = 'After',
}: Props) {
  return (
    <figure className="grid gap-4 lg:grid-cols-2">
      <div className="card overflow-hidden p-0">
        <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
          <span className="rounded border px-2 py-0.5">Before</span>
        </div>
        <img
          src={beforeSrc}
          alt={altBefore}
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="card overflow-hidden p-0">
        <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
          <span className="rounded border px-2 py-0.5">After</span>
        </div>
        <img
          src={afterSrc}
          alt={altAfter}
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </div>

      {caption ? (
        <figcaption className="lg:col-span-2 text-xs text-[hsl(var(--ink-dim))]">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
