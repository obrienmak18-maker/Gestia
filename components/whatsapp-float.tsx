import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec Copo Solutions sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center md:bottom-8 md:right-8"
    >
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:right-16 group-hover:opacity-100 group-focus-visible:opacity-100 max-md:hidden">
        Une question ? Écrivez-nous
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-xl shadow-[#128C7E]/30 transition-transform duration-300 group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-[#128C7E] group-focus-visible:ring-offset-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#128C7E]/40" aria-hidden />
        <MessageCircle className="relative h-7 w-7" aria-hidden />
      </span>
    </a>
  );
}
