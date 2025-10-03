'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="container-app flex h-14 items-center justify-between">
        <Link href="/" className="font-bold">The Ideal Professional Inc.</Link>

        <nav className="hidden gap-4 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm ${pathname === item.href ? 'font-semibold' : 'text-zinc-600 dark:text-zinc-300'}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
              Brands ▾
            </button>
            <div className="invisible absolute right-0 mt-2 w-64 rounded-xl border border-zinc-200/60 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
              {[
                { href: 'https://grokpro.vercel.app', label: 'theidealprogen' },
                { href: '/theidealprocoach', label: 'theidealprocoach' },
                { href: '/theidealprolearn', label: 'theidealprolearn' },
                { href: '/theidealprokids', label: 'theidealprokids' },
                { href: '/theidealprobiz', label: 'theidealprobiz' },
                { href: '/theidealprogov', label: 'theidealprogov' },
              ].map((b) => (
                <a
                  key={b.href}
                  href={b.href}
                  target={b.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {b.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <button
          className="sm:hidden rounded-md border border-zinc-300 px-3 py-1 text-sm dark:border-zinc-700"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-zinc-200/60 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="container-app py-2">
            {[...nav, { href: '/ecosystem', label: 'Ecosystem' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 text-xs uppercase tracking-wide text-zinc-500">Brands</div>
            {[
              { href: 'https://grokpro.vercel.app', label: 'theidealprogen' },
              { href: '/theidealprocoach', label: 'theidealprocoach' },
              { href: '/theidealprolearn', label: 'theidealprolearn' },
              { href: '/theidealprokids', label: 'theidealprokids' },
              { href: '/theidealprobiz', label: 'theidealprobiz' },
              { href: '/theidealprogov', label: 'theidealprogov' },
            ].map((b) => (
              <a
                key={b.href}
                href={b.href}
                target={b.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="block rounded-lg px-2 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
