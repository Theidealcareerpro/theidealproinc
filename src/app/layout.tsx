// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';
import BrandBar from '@/components/BrandBar';
import CommandPalette from '@/components/system/CommandPalette';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000';

const ogImage = `${siteUrl}/og-image.jpg`;
const twitterImage = `${siteUrl}/twitter-image.jpg`;
const isProd = process.env.NODE_ENV === 'production';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  title: {
    default: 'The Ideal Professional Inc.',
    template: '%s — The Ideal Professional Inc.',
  },
  description: 'Empowering People, Businesses, and Governments for a Digital Future.',
  applicationName: 'The Ideal Professional Inc.',
  keywords: [
    'career tools',
    'ATS CV',
    'portfolio',
    'mentorship',
    'learning platform',
    'SME digitization',
    'automation',
    'e-governance',
    'public services',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'The Ideal Professional Inc.',
    description: 'Empowering People, Businesses, and Governments for a Digital Future.',
    siteName: 'The Ideal Professional Inc.',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'The Ideal Professional' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ideal Professional Inc.',
    description: 'Empowering People, Businesses, and Governments for a Digital Future.',
    images: [twitterImage],
    creator: '@theidealprofessional',
  },
  robots: isProd
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-snippet': -1,
          'max-image-preview': 'large',
          'max-video-preview': -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          'max-snippet': 0,
          'max-image-preview': 'none',
          'max-video-preview': 0,
        },
      },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: `${siteUrl}/site.webmanifest`,
  category: 'technology',
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && {
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_OWNER_EMAIL && {
      me: process.env.NEXT_PUBLIC_OWNER_EMAIL,
    }),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
      other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION as string },
    }),
  },
  other: { 'x-site': 'the-ideal-professional' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Pre-hydration theme boot (no flash)
  const themePreInit = `
    (function () {
      try {
        var ls = localStorage.getItem('theme');
        var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = ls || (sysDark ? 'dark' : 'light');
        if (theme === 'dark') document.documentElement.classList.add('dark');
      } catch (_) {}
    })();
  `;

  // Enhancements (spotlight, hide/reveal header, progress, view transitions, bindings)
  const enhancements = `
    (function () {
      try {
        var doc = document;
        var root = doc.documentElement;
        var reduce = (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || false;

        // Pointer spotlight
        if (!reduce) {
          var active = true;
          function spot(e) {
            if (!active) return;
            var x = (e.clientX / window.innerWidth) * 100;
            var y = (e.clientY / window.innerHeight) * 100;
            root.style.setProperty('--mx', x + '%');
            root.style.setProperty('--my', y + '%');
          }
          function vis() { active = doc.visibilityState === 'visible'; }
          window.addEventListener('pointermove', spot, { passive: true });
          doc.addEventListener('visibilitychange', vis, { passive: true });
        }

        // Header hide/reveal + elevation + progress
        (function headerScroll() {
          var lastY = window.scrollY || 0;
          var header = doc.querySelector('[data-site-header]');
          if (!header) return;
          function onScroll() {
            var y = window.scrollY || 0;
            var down = y > lastY && y > 12;
            header.classList.toggle('is-hidden', down);
            header.classList.toggle('is-elevated', y > 2);
            lastY = y;

            var h = doc.documentElement;
            var max = (h.scrollHeight - h.clientHeight) || 1;
            var p = Math.min(1, Math.max(0, y / max));
            root.style.setProperty('--scroll-progress', String(p));
          }
          window.addEventListener('scroll', onScroll, { passive: true });
          onScroll();
        })();

        // View Transitions (same-origin)
        (function vt() {
          if (reduce || !('startViewTransition' in doc)) return;
          doc.addEventListener('click', function (e) {
            var a = e.target && (e.target.closest ? e.target.closest('a') : null);
            if (!a) return;
            var url = a.getAttribute('href');
            var target = a.getAttribute('target');
            var rel = (a.getAttribute('rel') || '').toLowerCase();
            var sameOrigin = url && !/^https?:\\/\\//i.test(url);
            if (!url || target === '_blank' || rel.includes('noopener') || !sameOrigin) return;
            e.preventDefault();
            // @ts-ignore
            document.startViewTransition(() => { window.location.href = url; });
          }, { capture: true });
        })();

        // Theme toggle
        (function themeToggle() {
          var btn = doc.querySelector('[data-theme-toggle]');
          if (!btn) return;
          btn.addEventListener('click', function () {
            var dark = root.classList.toggle('dark');
            try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch(_) {}
          });
        })();

        // Command palette
        (function cmdkButton() {
          var btn = doc.querySelector('[data-cmdk-toggle]');
          if (!btn) return;
          btn.addEventListener('click', function () {
            window.dispatchEvent(new CustomEvent('tip:open-command-palette'));
          });
        })();

        // ⌘K / Ctrl+K
        doc.addEventListener('keydown', function (e) {
          if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('tip:open-command-palette'));
          }
        });
      } catch (_) {}
    })();
  `;

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Ideal Professional Inc.',
    url: siteUrl,
    // point to the app icon (make sure public/icon.png exists)
    logo: `${siteUrl}/icon.png`,
    sameAs: [],
    description: 'Empowering People, Businesses, and Governments for a Digital Future.',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans min-h-dvh bg-[hsl(var(--surface))] text-[hsl(var(--ink))] antialiased`}
        style={{ colorScheme: 'light dark' }}
      >
        <script dangerouslySetInnerHTML={{ __html: themePreInit }} />
        <script dangerouslySetInnerHTML={{ __html: enhancements }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/* Top scroll progress */}
        <div
          aria-hidden
          className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
          style={{
            transform: 'scaleX(var(--scroll-progress, 0))',
            background: 'linear-gradient(90deg, rgba(59,130,246,.85), rgba(139,92,246,.85))',
            transition: 'transform .12s linear',
          }}
        />

        <SiteHeader />
        <BrandBar />

        {/* Ambient mesh + spotlight layer */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(60rem 40rem at 12% -10%, rgba(59,130,246,.08), transparent 60%), radial-gradient(60rem 40rem at 88% 110%, rgba(139,92,246,.08), transparent 60%)',
              maskImage: 'linear-gradient(#000 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(#000 75%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 lg:opacity-100"
            style={{
              background:
                'radial-gradient(28rem 20rem at var(--mx,50%) var(--my,50%), rgba(255,255,255,.10), transparent 60%)',
              maskImage: 'linear-gradient(#000, transparent 85%)',
              WebkitMaskImage: 'linear-gradient(#000, transparent 85%)',
            }}
          />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-20"
            style={{
              background: 'linear-gradient(120deg, transparent 20%, rgba(255,255,255,.06) 50%, transparent 80%)',
            }}
          />
        </div>

        <CommandPalette />

        <main id="main" className="min-h-[70dvh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

/* ───────────────────────── Header ───────────────────────── */
function SiteHeader() {
  const mainNav: Array<{ label: string; href: string }> = [
    { label: 'Ecosystem', href: '/ecosystem' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <header
      data-site-header
      className="sticky top-0 z-50 w-full transition-transform duration-200 will-change-transform [view-transition-name:site-header]"
      style={{ transform: 'translateY(0)' }}
    >
      {/* BAR: replaced border with layered chroma hairline + glow */}
      <div className="bg-white/70 backdrop-blur-md dark:bg-black/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Brand - using real icon.png */}
          <Link href="/" className="group flex items-center gap-3 font-extrabold tracking-tight" aria-label="Home">
            <div className="relative h-8 w-8">
              <Image
                src="/icon.png"
                alt="The Ideal Professional"
                fill
                sizes="32px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span className="hidden sm:inline">The Ideal Professional</span>
            <span className="sm:hidden">TIP</span>
          </Link>

          {/* Nav */}
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {mainNav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className="text-sm text-[hsl(var(--ink-dim))] transition-colors hover:text-black hover:underline hover:underline-offset-4 dark:hover:text-white"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/ecosystem"
              className="rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,.35)] transition-transform hover:-translate-y-0.5 hover:bg-[hsl(var(--ink))]"
            >
              Explore
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-theme-toggle
              aria-label="Toggle theme"
              className="rounded-md border px-2.5 py-1.5 text-sm text-[hsl(var(--ink-dim))] hover:bg-[hsl(var(--muted))]"
              title="Toggle light/dark"
            >
              <span className="inline-block dark:hidden">🌙</span>
              <span className="hidden dark:inline-block">☀️</span>
            </button>

            <button
              type="button"
              data-cmdk-toggle
              className="hidden rounded-md border px-2.5 py-1.5 text-sm text-[hsl(var(--ink-dim))] hover:bg-[hsl(var(--muted))] sm:inline-flex"
              aria-label="Open command palette"
              title="Open command palette (⌘K)"
            >
              ⌘K
            </button>

            <Link href="/ecosystem" className="rounded-md border px-3 py-1.5 text-sm md:hidden" aria-label="Open menu">
              Menu
            </Link>
          </div>
        </div>

        {/* NEW: chromatic hairline + glow under header */}
        <div aria-hidden className="relative">
          <div
            className="h-[1px] w-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(59,130,246,.45), rgba(99,102,241,.45), rgba(139,92,246,.45))',
            }}
          />
          <div
            className="h-4 w-full"
            style={{
              background:
                'radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,.12), transparent 70%)',
              filter: 'blur(8px)',
              transform: 'translateY(-6px)',
            }}
          />
        </div>
      </div>

      {/* header state styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-site-header].is-hidden { transform: translateY(-100%); }
            [data-site-header].is-elevated .shadow-line { opacity: 1; }
          `,
        }}
      />
    </header>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-white/80 backdrop-blur-md dark:bg-black/60">
      {/* NEW: soft ridge/glow above footer (replaces border) */}
      <div aria-hidden className="relative">
        <div
          className="h-[1px] w-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(139,92,246,.45), rgba(99,102,241,.45), rgba(59,130,246,.45))',
          }}
        />
        <div
          className="h-5 w-full"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,.12), transparent 70%)',
            filter: 'blur(10px)',
            transform: 'translateY(-7px)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-extrabold">
              <div className="relative h-8 w-8">
                <Image src="/icon.png" alt="The Ideal Professional" fill sizes="32px" style={{ objectFit: 'contain' }} />
              </div>
              <span>The Ideal Professional Inc.</span>
            </div>
            <p className="mt-3 text-sm text-[hsl(var(--ink-dim))]">
              Empowerment for everyone—tools for individuals, SMEs, and governments worldwide.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-2 space-y-1 text-sm text-[hsl(var(--ink-dim))]">
              <li><Link href="/about" className="hover:text-black dark:hover:text-white">About us</Link></li>
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-black dark:hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-black dark:hover:text-white">Terms</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Brands</div>
            <ul className="mt-2 space-y-1 text-sm text-[hsl(var(--ink-dim))]">
              <li>
                <a
                  href="https://grokpro.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white"
                >
                  theidealprogen
                </a>
              </li>
              <li><Link href="/coach" className="hover:text-black dark:hover:text-white">theidealprocareers</Link></li>
              <li><Link href="/learn" className="hover:text-black dark:hover:text-white">theidealprolearn</Link></li>
              <li><Link href="/kids" className="hover:text-black dark:hover:text-white">theidealprokids</Link></li>
              <li><Link href="/biz" className="hover:text-black dark:hover:text-white">theidealprobiz</Link></li>
              <li><Link href="/gov" className="hover:text-black dark:hover:text-white">theidealprogov</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Get involved</div>
            <ul className="mt-2 space-y-1 text-sm text-[hsl(var(--ink-dim))]">
              <li><Link href="/donate" className="hover:text-black dark:hover:text-white">Donate</Link></li>
              <li><Link href="/ecosystem" className="hover:text-black dark:hover:text-white">Explore ecosystem</Link></li>
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white">Request a quote</Link></li>
              <li><Link href="/about" className="hover:text-black dark:hover:text-white">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 text-sm text-[hsl(var(--ink-dim))]">
          © {year} The Ideal Professional Inc. · <Link href="/privacy" className="underline">Privacy</Link> ·{' '}
          <Link href="/terms" className="underline">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
