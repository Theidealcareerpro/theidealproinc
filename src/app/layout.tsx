// ---------- FILE: src/app/layout.tsx ----------
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import BrandBar from "@/components/BrandBar";
import SiteHeader from "@/components/SiteHeader"; // ✅ uses your client header component

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";
const ogImage = `${siteUrl}/og-image.jpg`;
const twitterImage = `${siteUrl}/twitter-image.jpg`;
const isProd = process.env.NODE_ENV === "production";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  title: {
    default: "The Ideal Professional Inc.",
    template: "%s — The Ideal Professional Inc.",
  },
  description:
    "Empowering People, Businesses, and Governments for a Digital Future.",
  applicationName: "The Ideal Professional Inc.",
  keywords: [
    "career tools",
    "ATS CV",
    "portfolio",
    "mentorship",
    "learning platform",
    "SME digitization",
    "automation",
    "e-governance",
    "public services",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "The Ideal Professional Inc.",
    description:
      "Empowering People, Businesses, and Governments for a Digital Future.",
    siteName: "The Ideal Professional Inc.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "The Ideal Professional",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ideal Professional Inc.",
    description:
      "Empowering People, Businesses, and Governments for a Digital Future.",
    images: [twitterImage],
    creator: "@theidealprofessional",
  },
  robots: isProd
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          "max-snippet": 0,
          "max-image-preview": "none",
          "max-video-preview": 0,
        },
      },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: `${siteUrl}/site.webmanifest`,
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove dark mode support completely
  const themePreInit = `
    (function () {
      try { document.documentElement.classList.remove('dark'); } catch (_) {}
    })();
  `.trim();

  const enhancements = `
    (function () {
      if (window.__tip_init) return; window.__tip_init = true;
      try {
        var doc = document, root = doc.documentElement;
        var reduce = (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || false;

        // Pointer spotlight
        if (!reduce) {
          var raf = null;
          window.addEventListener('pointermove', function(e) {
            var cx = e.clientX, cy = e.clientY;
            if (raf) return;
            raf = requestAnimationFrame(function() {
              root.style.setProperty('--mx', (cx / window.innerWidth * 100) + '%');
              root.style.setProperty('--my', (cy / window.innerHeight * 100) + '%');
              raf = null;
            });
          }, { passive: true });
        }

        // Header hide/reveal
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
          }
          window.addEventListener('scroll', onScroll, { passive: true });
          onScroll();
        })();

      } catch (_) {}
    })();
  `.trim();

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Ideal Professional Inc.",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description:
      "Empowering People, Businesses, and Governments for a Digital Future.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans min-h-dvh bg-[hsl(var(--surface))] text-[hsl(var(--ink))] antialiased`}
        style={{ colorScheme: "light" }}
      >
        {/* Scripts for pre-initialization */}
        <Script id="theme-preinit" strategy="beforeInteractive">
          {themePreInit}
        </Script>
        <Script id="enhancements" strategy="afterInteractive">
          {enhancements}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Accessibility skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/* Scroll progress bar */}
        <div
          aria-hidden
          className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
          style={{
            transform: "scaleX(var(--scroll-progress, 0))",
            background:
              "linear-gradient(90deg, rgba(59,130,246,.85), rgba(139,92,246,.85))",
            transition: "transform .12s linear",
          }}
        />

        {/* Site Header */}
        <SiteHeader />
        <BrandBar />

        {/* Ambient light mesh background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60rem 40rem at 12% -10%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(60rem 40rem at 88% 110%, rgba(139,92,246,0.08), transparent 60%)",
              maskImage: "linear-gradient(#000 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(#000 75%, transparent 100%)",
            }}
          />
        </div>

        {/* Main content */}
        <main id="main" className="min-h-[70dvh]">
          {children}
        </main>

        {/* Footer */}
        <SiteFooter />
      </body>
    </html>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-extrabold">
              <div className="relative h-8 w-8">
                <Image
                  src="/icon.png"
                  alt="The Ideal Professional"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span>The Ideal Professional Inc.</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Empowerment for everyone—tools for individuals, SMEs, and
              governments worldwide.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Brands</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <a
                  href="https://www.theidealprofessional.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  theidealprogen
                </a>
              </li>
              <li>
                <Link href="/coach">theidealprocareers</Link>
              </li>
              <li>
                <Link href="/learn">theidealprolearn</Link>
              </li>
              <li>
                <Link href="/kids">theidealprokids</Link>
              </li>
              <li>
                <Link href="/biz">theidealprobiz</Link>
              </li>
              <li>
                <Link href="/gov">theidealprogov</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Get involved</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <Link href="/donate">Donate</Link>
              </li>
              <li>
                <Link href="/ecosystem">Explore ecosystem</Link>
              </li>
              <li>
                <Link href="/contact">Request a quote</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          © {year} The Ideal Professional Inc. ·{" "}
          <Link href="/privacy" className="underline">
            Privacy
          </Link>{" "}
          · <Link href="/terms" className="underline">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
