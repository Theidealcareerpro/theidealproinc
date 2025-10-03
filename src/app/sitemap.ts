// src/app/sitemap.ts
export default function sitemap() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000';

  const now = new Date().toISOString();
  const pages = [
    '',
    '/ecosystem',
    '/donate',
    '/contact',
    '/about',
    '/privacy',
    '/terms',
    '/coach',
    '/learn',
    '/kids',
    '/biz',
    '/gov',
  ];

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1.0 : 0.7,
  }));
}
