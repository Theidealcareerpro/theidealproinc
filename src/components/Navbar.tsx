"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // close on escape or click outside
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (!menuRef.current) return;
      const el = e.target as Node;
      if (!menuRef.current.contains(el)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDocClick);
    };
  }, [open]);

  // focus first link when opened
  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [open]);

  const nav = [
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <>
      {/* Mobile menu panel (rendered at top-level) */}
      <div
        ref={menuRef}
        aria-hidden={!open}
        className={`fixed inset-x-4 top-[68px] z-50 origin-top rounded-lg bg-white/95 backdrop-blur-md shadow-lg transition-transform duration-200 transform ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        } md:hidden`}
        style={{ transformOrigin: "top center" }}
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <div className="relative h-8 w-8">
                <Image
                  src="/icon.png"
                  alt="The Ideal Professional"
                  fill
                  sizes="32px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="font-extrabold">The Ideal Professional</span>
            </Link>

            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 hover:bg-[hsl(var(--muted))]"
            >
              {/* simple X icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {nav.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                ref={idx === 0 ? firstLinkRef : undefined}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-[hsl(var(--ink))] hover:bg-[hsl(var(--muted))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/ecosystem"
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-md bg-[hsl(var(--primary))] px-4 py-2 text-sm text-white text-center font-medium"
            >
              Explore
            </Link>
          </nav>
        </div>
      </div>

      <MobileMenuToggler open={open} setOpen={setOpen} />
    </>
  );
}

function MobileMenuToggler({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    function onToggle() {
      // ✅ fixed typing
      setOpen((s: boolean) => !s);
    }
    document.addEventListener("tip:toggle-mobile-menu", onToggle as EventListener);
    return () =>
      document.removeEventListener("tip:toggle-mobile-menu", onToggle as EventListener);
  }, [setOpen]);

  useEffect(() => {
    (window as any).__tip_toggle_mobile_menu = () =>
      setOpen((s: boolean) => !s);
    return () => {
      delete (window as any).__tip_toggle_mobile_menu;
    };
  }, [setOpen]);

  return null;
}
