import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Copo Solutions, accueil">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white transition-transform duration-300 group-hover:-rotate-6">
        <Calculator className="h-5 w-5" aria-hidden />
      </span>
      <span
        className={cn(
          'text-lg font-bold tracking-tight',
          variant === 'dark' ? 'text-slate-900' : 'text-white'
        )}
      >
        Copo Solutions
      </span>
    </Link>
  );
}
