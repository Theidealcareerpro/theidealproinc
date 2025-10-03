// src/components/system/CommandPalette.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type PaletteItem = {
  label: string;
  href: string;
  meta?: string; // small right-hand hint
  external?: boolean;
};

const DEFAULT_ITEMS: PaletteItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Explore ecosystem', href: '/ecosystem' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
  { label: 'theidealprogen (external)', href: 'https://grokpro.vercel.app/', meta: 'external', external: true },
  // Brands
  { label: 'theidealprocoach', href: '/coach' },
  { label: 'theidealprolearn', href: '/learn' },
  { label: 'theidealprokids', href: '/kids' },
  { label: 'theidealprobiz', href: '/biz' },
  { label: 'theidealprogov', href: '/gov' },
];

function score(q: string, text: string) {
  // tiny fuzzy-ish score: startsWith > includes
  if (!q) return 0;
  const t = text.toLowerCase();
  const s = q.toLowerCase();
  if (t.startsWith(s)) return 2;
  if (t.includes(s)) return 1;
  return 0;
}

export default function CommandPalette({
  items = DEFAULT_ITEMS,
}: { items?: PaletteItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Keybinds: ⌘K / Ctrl+K open, Escape close; "/" focuses when not typing
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC');
      const mod = isMac ? e.metaKey : e.ctrlKey;
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === '/' && !open) {
        // quick open
        if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'TEXTAREA') return;
        e.preventDefault();
        setOpen(true);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 15);
    return () => clearTimeout(t);
  }, [open]);

  const results = useMemo(() => {
    if (!query) return items.slice(0, 8);
    // rank
    const ranked = items
      .map((it) => ({ it, s: score(query, `${it.label} ${it.meta ?? ''}`) }))
      .filter(({ s }) => s > 0)
      .sort((a, b) => b.s - a.s)
      .map(({ it }) => it);
    return ranked.slice(0, 12);
  }, [items, query]);

  const select = (item: PaletteItem) => {
    setOpen(false);
    setQuery('');
    if (item.external) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(item.href);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[70] grid place-items-start bg-black/40 p-4 pt-24 sm:place-items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        className="w-full max-w-xl rounded-2xl border p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,.6)]"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.65))',
          backdropFilter: 'blur(12px) saturate(140%)',
          WebkitBackdropFilter: 'blur(12px) saturate(140%)',
          borderColor: 'hsl(var(--ink-dim) / 22%)',
        }}
        onKeyDown={(e) => {
          // Arrow navigation
          if (!['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) return;
          const options = listRef.current?.querySelectorAll<HTMLButtonElement>('[data-cmd-option]');
          if (!options?.length) return;
          const active = docActiveIndex(options);
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = options[Math.min(options.length - 1, active + 1)];
            next?.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = options[Math.max(0, active - 1)];
            prev?.focus();
          } else if (e.key === 'Enter') {
            (document.activeElement as HTMLButtonElement)?.click();
          }
        }}
      >
        {/* Input */}
        <div className="flex items-center gap-2 rounded-xl border px-3 py-2"
          style={{ borderColor: 'hsl(var(--ink-dim) / 18%)', background: 'rgba(255,255,255,.65)' }}
        >
          <span aria-hidden className="text-[hsl(var(--ink-dim))]">⌘K</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, brands, actions…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[hsl(var(--ink-dim))]"
          />
          <button
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-1 text-xs text-[hsl(var(--ink-dim))] hover:bg-[hsl(var(--muted))]"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div ref={listRef} role="listbox" aria-label="Results" className="mt-2 max-h-80 overflow-auto rounded-xl">
          {results.length === 0 ? (
            <div className="px-3 py-6 text-center text-sm text-[hsl(var(--ink-dim))]">
              No results. Try “ecosystem”, “donate”, or “coach”.
            </div>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={`${r.label}-${r.href}`}>
                  {/* Button for keyboard behavior; nested Link for semantics and open-in-new if external */}
                  <button
                    data-cmd-option
                    onClick={() => select(r)}
                    className="group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left hover:bg-[hsl(var(--muted))]"
                  >
                    <span className="truncate">
                      {r.external ? (
                        <span className="inline-flex items-center gap-2">
                          <span>{r.label}</span>
                          <span className="text-[10px] text-[hsl(var(--ink-dim))]">↗</span>
                        </span>
                      ) : (
                        <Link href={r.href} className="link">{r.label}</Link>
                      )}
                    </span>
                    {r.meta ? (
                      <span className="rounded-md border px-2 py-0.5 text-[10px] text-[hsl(var(--ink-dim))]">
                        {r.meta}
                      </span>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hints */}
        <div className="mt-2 flex items-center justify-between px-1 text-[10px] text-[hsl(var(--ink-dim))]">
          <span>Navigate with ↑ ↓, Enter to open</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}

// helper: find index of currently focused option
function docActiveIndex(nodes: NodeListOf<HTMLButtonElement>) {
  const a = document.activeElement;
  for (let i = 0; i < nodes.length; i++) if (nodes[i] === a) return i;
  return -1;
}

