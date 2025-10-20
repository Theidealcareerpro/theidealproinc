// ---------- FILE: src/components/SiteHeader.tsx ----------
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const mainNav = [
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header
      data-site-header
      className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-extrabold tracking-tight"
          aria-label="Home"
        >
          <div className="relative h-8 w-8">
            <Image
              src="/icon.png"
              alt="The Ideal Professional"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:inline">The Ideal Professional</span>
          <span className="sm:hidden">TIP</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-sm text-gray-700 hover:text-black hover:underline underline-offset-4 transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/ecosystem"
            className="rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-md transition-transform hover:-translate-y-0.5"
          >
            Explore
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-md border px-2 py-1.5 hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-sm"
          >
            <div className="flex flex-col space-y-3 px-4 py-4">
              {mainNav.map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className="text-sm text-gray-800 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                href="/ecosystem"
                className="rounded-md bg-black px-3 py-2 text-sm text-white text-center shadow hover:bg-gray-900 transition"
                onClick={() => setIsOpen(false)}
              >
                Explore
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
