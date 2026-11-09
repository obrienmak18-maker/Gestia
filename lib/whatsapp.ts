import { SITE } from '@/data/site';

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message).replace(/%2C/g, ',').replace(/%3A/g, ':')}` : base;
}

export function buildProductOrderUrl(productName: string) {
  return buildWhatsAppUrl(`Bonjour, je souhaite commander : ${productName}`);
}
