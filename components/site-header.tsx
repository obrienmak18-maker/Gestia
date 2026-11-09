'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { NAV_LINKS } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b bg-white/70 backdrop-blur-xl transition-[border-color,box-shadow] duration-300',
        scrolled ? 'border-white/60 shadow-xl shadow-brand/10' : 'border-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 md:h-20">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200',
                isActive(link.href)
                  ? 'bg-brand-50 text-brand'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-brand'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <WhatsAppButton
          href={buildWhatsAppUrl()}
          className="hidden h-11 px-5 md:inline-flex"
        />

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'grid transition-[grid-template-rows,opacity,visibility] duration-300 md:hidden',
          menuOpen ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <nav aria-label="Navigation mobile" className="flex flex-col gap-1 border-t border-slate-200/70 bg-white/95 px-5 py-4 backdrop-blur-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-semibold transition-colors',
                  isActive(link.href)
                    ? 'bg-brand-50 text-brand'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-brand'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="bg-white/95 px-5 pb-5 backdrop-blur-xl">
            <WhatsAppButton href={buildWhatsAppUrl()} className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
