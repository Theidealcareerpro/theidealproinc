// src/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-zinc-200/60 dark:border-zinc-800">
      <div className="container-app py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="h-8 w-8 rounded-xl bg-zinc-900 dark:bg-white" />
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            TheIdeal — an integrated ecosystem that empowers people, businesses, and governments with modern, accessible digital tools.
          </p>
        </div>

        <div>
          <div className="section-title">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="link-underline">About us</Link></li>
            <li><Link href="/ecosystem" className="link-underline">Ecosystem</Link></li>
            <li><Link href="/impact" className="link-underline">Impact</Link></li>
          </ul>
        </div>

        <div>
          <div className="section-title">Resources</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://grokpro.vercel.app/" className="link-underline" target="_blank" rel="noreferrer">theidealprogen</a></li>
            <li><Link href="/donate" className="link-underline">Donate</Link></li>
            <li><Link href="/privacy" className="link-underline">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <div className="section-title">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/contact" className="link-underline">Get in touch</Link></li>
            <li><a href="mailto:hello@theidealprofessional.com" className="link-underline">hello@theidealprofessional.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200/60 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} The Ideal Professional Inc. · <Link href="/privacy" className="underline">Privacy</Link> · <Link href="/terms" className="underline">Terms</Link>
      </div>
    </footer>
  );
}
