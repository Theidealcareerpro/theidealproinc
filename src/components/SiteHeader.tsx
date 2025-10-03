// src/components/SiteHeader.tsx
"use client";

import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const brands = [
    { slug: "theidealprogen", label: "theidealprogen", href: "https://grokpro.vercel.app/" },
    { slug: "theidealprocoach", label: "theidealprocoach", href: "/coach" },
    { slug: "theidealprolearn", label: "theidealprolearn", href: "/learn" },
    { slug: "theidealprokids", label: "theidealprokids", href: "/kids" },
    { slug: "theidealprobiz", label: "theidealprobiz", href: "/biz" },
    { slug: "theidealprogov", label: "theidealprogov", href: "/gov" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="container-app h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-zinc-900 dark:bg-white" />
          <span className="text-sm font-semibold tracking-wide">The Ideal Professional Inc.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <Link href="/" className="btn-ghost">Home</Link>
          <Link href="/ecosystem" className="btn-ghost">Ecosystem</Link>
          <Link href="/donate" className="btn-ghost">Donate</Link>
          <Link href="/contact" className="btn-ghost">Contact</Link>

          <div className="relative">
            <button
              className="btn-ghost flex items-center gap-1"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              Brands <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
            {open && (
              <div
                className="absolute right-0 mt-2 w-64 rounded-xl border border-zinc-200/60 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                onMouseLeave={() => setOpen(false)}
              >
                <ul className="p-2">
                  {brands.map((b) => (
                    <li key={b.slug}>
                      <a
                        href={b.href}
                        className="block rounded-lg px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        target={b.href.startsWith("http") ? "_blank" : undefined}
                        rel={b.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {b.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <div className="md:hidden">
          <button className="btn-ghost" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
