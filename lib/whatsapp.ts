import { SITE } from '@/data/site';

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message).replace(/%2C/g, ',').replace(/%3A/g, ':')}` : base;
}

export function buildProductOrderUrl(productName: string, intent: 'order' | 'quote' = 'order') {
  const message =
    intent === 'quote'
      ? `Bonjour, je souhaite recevoir un devis pour : ${productName}`
      : `Bonjour, je souhaite commander : ${productName}`;

  return buildWhatsAppUrl(message);
}
