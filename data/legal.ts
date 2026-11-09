export type LegalDocument = {
  title: string;
  description: string;
  updatedAt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const LEGAL_DOCUMENTS: Record<'mentions' | 'cgv' | 'confidentialite', LegalDocument> = {
  mentions: {
    title: 'Mentions légales',
    description: 'Informations légales sur l\'éditeur du site Copo Solutions.',
    updatedAt: '2026-01-05',
    sections: [
      {
        heading: 'Éditeur du site',
        paragraphs: [
          'Le site copo-solutions.ma est édité par Copo Solutions, société spécialisée dans la vente de logiciels de comptabilité et de gestion, dont le siège est situé à Casablanca, Maroc.',
          'Identifiant fiscal, registre de commerce et ICE : à compléter avant la mise en ligne.',
        ],
      },
      {
        heading: 'Hébergement',
        paragraphs: [
          'Le site est hébergé par un prestataire d\'hébergement web professionnel. Les coordonnées complètes de l\'hébergeur peuvent être demandées à l\'adresse e-mail de contact.',
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        paragraphs: [
          'L\'ensemble des contenus du site (textes, visuels, logo, structure) est protégé. Toute reproduction sans autorisation écrite préalable est interdite. Les logiciels Sage, JBS et leurs marques appartiennent à leurs éditeurs respectifs.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Pour toute question relative au site, vous pouvez nous écrire via la page Contact ou nous joindre sur WhatsApp.',
        ],
      },
    ],
  },
  cgv: {
    title: 'Conditions de vente',
    description: 'Conditions applicables aux commandes de logiciels passées sur Copo Solutions.',
    updatedAt: '2026-01-05',
    sections: [
      {
        heading: 'Objet',
        paragraphs: [
          'Les présentes conditions régissent la vente de licences de logiciels et de prestations d\'installation proposées par Copo Solutions à ses clients professionnels.',
        ],
      },
      {
        heading: 'Commande',
        paragraphs: [
          'La commande s\'effectue par WhatsApp : le client indique le produit souhaité, Copo Solutions confirme le prix et les modalités, puis transmet les informations de paiement. La commande est définitive après confirmation.',
        ],
      },
      {
        heading: 'Prix et paiement',
        paragraphs: [
          'Les prix sont exprimés en dirhams marocains (MAD). Le paiement s\'effectue par virement bancaire ou transfert. La livraison intervient après réception du paiement.',
        ],
      },
      {
        heading: 'Livraison et licence',
        paragraphs: [
          'Le logiciel et sa licence sont livrés par e-mail ou par lien de téléchargement. La licence est strictement personnelle à l\'entreprise ou au cabinet acheteur et ne peut être revendue.',
        ],
      },
      {
        heading: 'Garantie et assistance',
        paragraphs: [
          'Une assistance est assurée lors de l\'installation et pendant la prise en main. Tout litige est soumis au droit marocain et, à défaut d\'accord amiable, aux tribunaux compétents de Casablanca.',
        ],
      },
    ],
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    description: 'Comment Copo Solutions collecte et protège les données personnelles de ses visiteurs et clients.',
    updatedAt: '2026-01-05',
    sections: [
      {
        heading: 'Données collectées',
        paragraphs: [
          'Lorsque vous utilisez le formulaire de contact, nous collectons votre nom, votre adresse e-mail, et si vous les renseignez, votre téléphone, votre entreprise et votre message.',
        ],
      },
      {
        heading: 'Finalité',
        paragraphs: [
          'Ces informations servent uniquement à répondre à votre demande et à assurer le suivi de votre commande. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.',
        ],
      },
      {
        heading: 'Durée de conservation',
        paragraphs: [
          'Les messages sont conservés le temps nécessaire au traitement de votre demande, puis supprimés ou archivés conformément aux obligations légales.',
        ],
      },
      {
        heading: 'Vos droits',
        paragraphs: [
          'Conformément à la loi marocaine relative à la protection des personnes physiques à l\'égard du traitement des données à caractère personnel, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données. Adressez votre demande à l\'adresse e-mail de contact.',
        ],
      },
    ],
  },
};
