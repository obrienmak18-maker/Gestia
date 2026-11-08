export const siteConfig = {
  name: "Copo Solutions",
  legalName: "Copo Solutions SARL",
  description: "Leader des logiciels de comptabilité, paie et ERP pour entreprises et cabinets d'expertise comptable au Maroc. Conforme Loi de Finances, SIMPL DGI et télédéclarations XML.",
  tagline: "Logiciels de comptabilité et de gestion certifiés pour les professionnels au Maroc",
  url: "https://coposolutions.ma",
  whatsappNumber: "212600000000",
  whatsappDisplay: "+212 600 000 000",
  phone: "+212 522 000 000",
  email: "contact@coposolutions.ma",
  supportEmail: "support@coposolutions.ma",
  address: "Boulevard d'Anfa, Quartier des Hôpitaux, 20100 Casablanca, Maroc",
  businessHours: "Lundi au Samedi : 08h30 - 19h00 (Support d'urgence 7j/7)",
  socials: {
    linkedin: "https://linkedin.com/company/copo-solutions-maroc",
    facebook: "https://facebook.com/coposolutionsmaroc",
    twitter: "https://twitter.com/coposolutions",
  },
  legal: {
    rc: "RC Casablanca 489210",
    patente: "Patente N° 35894120",
    if: "IF 40198231",
    ice: "ICE 002341982000084",
    cnss: "CNSS 8794123",
  },
  navLinks: [
    { label: "Accueil", href: "/" },
    { label: "Produits", href: "/produits" },
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

/**
 * Builds the dynamic WhatsApp order URL according to requirements:
 * https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20commander%20:%20[NOM_DU_PRODUIT]
 */
export function getWhatsAppOrderUrl(productName: string): string {
  const cleanName = productName.trim();
  const text = `Bonjour, je souhaite commander : ${cleanName}`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a general contact/inquiry WhatsApp URL with customized text
 */
export function getWhatsAppContactUrl(customMessage?: string): string {
  const text = customMessage || "Bonjour Copo Solutions, je souhaite obtenir des renseignements sur vos logiciels de gestion et comptabilité.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
