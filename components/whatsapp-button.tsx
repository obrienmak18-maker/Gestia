import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type WhatsAppButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

export function WhatsAppButton({
  href,
  label = 'Commander sur WhatsApp',
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta px-6 text-sm font-semibold text-cta-ink shadow-lg shadow-cta/25 ring-1 ring-inset ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cta-hover hover:shadow-xl hover:shadow-cta/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]',
        className
      )}
    >
      <MessageCircle className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden />
      {label}
    </a>
  );
}
