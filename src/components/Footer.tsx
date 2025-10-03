import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/60 py-8 dark:border-zinc-800">
      <div className="container-app flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} The Ideal Professional Inc.
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          <Link href="/privacy" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Privacy</Link>
          <Link href="/terms" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Terms</Link>
          <Link href="/donate" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Donate</Link>
          <Link href="/contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
