// src/app/robots.ts
export default function robots() {
  const host =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000';

  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
