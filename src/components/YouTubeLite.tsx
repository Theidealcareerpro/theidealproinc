// src/components/YouTubeLite.tsx
'use client';

type Props = {
  id: string;           // YouTube video ID
  title: string;
  start?: number;       // optional seconds
};

export default function YouTubeLite({ id, title, start }: Props) {
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const url = `https://www.youtube.com/embed/${id}?autoplay=1${start ? `&start=${start}` : ''}`;
  return (
    <button
      className="group relative block overflow-hidden rounded-xl border bg-black"
      aria-label={`Play ${title}`}
      onClick={(e) => {
        const wrap = (e.currentTarget as HTMLButtonElement);
        wrap.outerHTML = `
<iframe class="aspect-video w-full rounded-xl border"
  src="${url}"
  title="${title}"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen></iframe>`;
      }}
    >
      <img
        src={thumb}
        alt=""
        className="aspect-video w-full object-cover opacity-80 transition group-hover:opacity-100"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow">
          ▶ Play
        </div>
      </div>
    </button>
  );
}
