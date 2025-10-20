// src/components/BrandBar.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, useCallback, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  Briefcase,
  Lightbulb,
  BookOpen,
  Award,
  TrendingUp,
  Laptop,
  Wand2,
  Mail,
  ExternalLink,
  ChevronDown,
  Menu,
} from 'lucide-react';

type LucideIcon = (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;

type Item = {
  label: string;
  href: string;
  external?: boolean;
  icon: LucideIcon;
};

const BLUE = 'hsl(222 86% 52%)';
const GRADIENT_BLUE = 'hsl(222 86% 52% / 0.12)';

const ITEMS: Item[] = [
  { label: 'theidealprogen', href: 'https://app.theidealprofessional.online/', external: true, icon: Briefcase },
  { label: 'theidealprocareers', href: '/coach', icon: Lightbulb },
  { label: 'theidealprolearn', href: '/learn', icon: BookOpen },
  { label: 'theidealprokids', href: '/kids', icon: Award },
  { label: 'theidealprobiz', href: '/biz', icon: TrendingUp },
  { label: 'theidealprogov', href: '/gov', icon: Laptop },
];

/* ───────────────────────────── MOBILE MENU ───────────────────────────── */
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
          />
          
          {/* Mobile Slide Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-16 right-0 w-full max-w-sm h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-xl border-l border-gray-200 shadow-2xl z-50 lg:hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,.95), rgba(255,255,255,.88))',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              backdropFilter: 'blur(20px) saturate(140%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Menu className="h-5 w-5" />
                Products
              </h3>
            </div>
            
            <div className="p-4 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {ITEMS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <MobilePill item={item} onClick={onClose} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MobilePill({ item, onClick }: { item: Item; onClick: () => void }) {
  const Icon = item.icon;
  
  return (
    <Link
      href={item.href}
      target={item.external ? '_blank' : '_self'}
      rel={item.external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className="group flex items-center gap-3 p-3 rounded-2xl bg-white/50 hover:bg-white transition-all duration-200 hover:shadow-md border border-gray-100 hover:border-gray-200"
      style={{
        WebkitBackdropFilter: 'blur(10px)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-2 border border-gray-200 group-hover:border-blue-200">
        <Icon className="h-5 w-5 text-blue-600" />
        {item.external && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full p-0.5 shadow flex items-center justify-center">
            <ExternalLink className="h-2 w-2 text-blue-600" />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-900 text-sm truncate">{item.label}</p>
        {item.external && <p className="text-xs text-gray-500">Opens in new tab</p>}
      </div>
      <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
    </Link>
  );
}

/* ───────────────────────────── DESKTOP PILL ───────────────────────────── */
function DesktopPill({ item, active = false }: { item: Item; active?: boolean }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: ReactMouseEvent) => {
    if (reduced || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    const rotateX = y * -8;
    const rotateY = x * 8;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, [reduced]);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  }, []);

  const Icon = item.icon;

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.external ? '_blank' : '_self'}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className={`
        relative inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20
        transition-all duration-200 will-change-transform
        ${active 
          ? 'ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10 bg-blue-50/50' 
          : 'hover:shadow-md hover:shadow-blue-500/5'
        }
      `}
      style={{
        background: active 
          ? 'linear-gradient(145deg, rgba(59,130,246,0.08), rgba(99,102,241,0.06))'
          : 'linear-gradient(145deg, rgba(255,255,255,0.92), rgba(255,255,255,0.85))',
        border: active ? '1px solid rgba(59,130,246,0.2)' : '1px solid rgba(0,0,0,0.08)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        backdropFilter: 'blur(12px) saturate(140%)',
        boxShadow: active 
          ? '0 20px 40px -20px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.4)'
          : '0 10px 30px -15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: reduced ? 1 : 1.05 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`${item.label}${item.external ? ' (opens in new tab)' : ''}`}
    >
      {/* Icon Chip */}
      <span className="relative inline-grid h-5 w-6 place-items-center rounded-lg ring-1 shrink-0" 
            style={{ 
              borderColor: 'rgba(0,0,0,0.1)', 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
              boxShadow: '0 4px 12px -6px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.6)',
              transform: 'translateZ(8px)',
            }}>
        <Icon className="h-3 w-3" style={{ color: BLUE }} strokeWidth={2.5} />
        {item.external && (
          <motion.span 
            className="absolute -top-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm"
            whileHover={{ scale: 1.2 }}
            style={{ transform: 'translateZ(4px)' }}
          >
            <ExternalLink className="h-2.5 w-2.5 text-blue-600" strokeWidth={2} />
          </motion.span>
        )}
      </span>
      
      {/* Label */}
      <span className="whitespace-nowrap text-gray-800 font-medium">{item.label}</span>
      
      {/* Hover Glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(60px 40px at 30% 20%, ${GRADIENT_BLUE}, transparent 70%)`,
          opacity: 0,
          transform: 'translateZ(12px)',
        }}
        data-hover-glow
      />
    </motion.a>
  );
}

/* ───────────────────────────── MAIN COMPONENT ───────────────────────────── */
export default function BrandBar() {
  const [path, setPath] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    setPath(window.location.pathname || '');
    const handleRouteChange = () => setPath(window.location.pathname || '');
    window.addEventListener('popstate', handleRouteChange);
    const handlePushState = () => setPath(window.location.pathname || '');
    window.addEventListener('pushState', handlePushState);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handlePushState);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      {/* Sticky Brand Bar */}
      <div className="sticky top-16 z-40 w-full lg:top-20" style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.88))',
        WebkitBackdropFilter: 'blur(20px) saturate(140%)',
        backdropFilter: 'blur(20px) saturate(140%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Brand quick navigation" className="relative">
            {/* Mobile: Hamburger Menu */}
            <div className="flex items-center justify-between h-12 lg:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="p-2 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-200"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle product menu"
                style={{ boxShadow: '0 4px 12px -4px rgba(0,0,0,0.1)' }}
              >
                <Menu className={`h-5 w-5 transition-colors ${mobileOpen ? 'text-blue-600' : 'text-gray-700'}`} />
              </motion.button>
              
              {/* Mobile Title */}
              <div className="text-sm font-semibold text-gray-900 truncate">Products</div>
            </div>

            {/* Desktop: Horizontal Pills */}
            <div className="hidden lg:block -mx-2 px-2">
              <div className="flex items-center gap-2 h-12 overflow-x-auto scrollbar-hide">
                {ITEMS.map((item, idx) => {
                  const isActive = !!path && !item.external && item.href !== '/' && path.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      className="flex-shrink-0"
                    >
                      <DesktopPill item={item} active={isActive} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        {/* Animated Bottom Border */}
        <div className="h-px w-full mt-px overflow-hidden">
          <div
            className="h-px w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(99,102,241,0.4), transparent)',
            }}
          />
          <motion.div
            className="absolute inset-0 h-px"
            animate={{ 
              background: [
                'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 25%, rgba(99,102,241,0.4) 50%, transparent 75%)',
                'linear-gradient(90deg, transparent 25%, rgba(59,130,246,0.4) 50%, rgba(99,102,241,0.4) 75%, transparent 100%)',
                'linear-gradient(90deg, transparent 50%, rgba(59,130,246,0.4) 75%, transparent 100%)',
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: 'easeInOut' 
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileOpen} onClose={closeMobileMenu} />
    </>
  );
}