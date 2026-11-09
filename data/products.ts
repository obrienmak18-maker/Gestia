import {
  BarChart3,
  Boxes,
  Building2,
  Calculator,
  Factory,
  FileCheck,
  FileText,
  Download,
  Handshake,
  Landmark,
  Monitor,
  Repeat,
  Send,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  Video,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

export type ProductFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string[];
  price: number;
  originalPrice: number;
  image: string;
  imageAlt: string;
  features: ProductFeature[];
};

export const PRODUCTS: Product[] = [
  {
    slug: 'pack-jbs',
    name: 'Pack JBS',
    category: 'Comptabilité & paie',
    summary:
      'Comptabilité XML, paie IR EDI, gestion commerciale et télédéclarations réunies dans un seul pack. Licence à vie version 2026.',
    description: [
      'Le Pack JBS couvre l\'essentiel de la gestion d\'une entreprise marocaine : tenue de la comptabilité générale et analytique au format XML, calcul de la paie et de l\'IR aux normes EDI, facturation commerciale et déclarations fiscales conformes.',
      'Conçu pour les PME et les cabinets comptables, il s\'adapte à la taille de votre activité et intègre une licence à vie ouverte multi-postes sans redevance mensuelle.',
    ],
    price: 2900,
    originalPrice: 3500,
    image: '/images/products/pack-jbs.jpg',
    imageAlt: 'Pack Entreprise JBS Compta XML, Paie et RH EDI, Gestion Commerciale, Licence à vie 2026',
    features: [
      {
        icon: FileText,
        title: 'Comptabilité XML',
        description:
          'Saisie et production des états comptables au format XML exigé par la DGI marocaine.',
      },
      {
        icon: Calculator,
        title: 'Paie IR EDI',
        description:
          'Calcul des bulletins de paie et de l\'IR, avec transmission des déclarations 9421 par EDI.',
      },
      {
        icon: ShoppingCart,
        title: 'Gestion commerciale',
        description:
          'Devis, factures avec mention ICE, bons de livraison et suivi de vos clients et fournisseurs.',
      },
      {
        icon: Send,
        title: 'Télédéclarations',
        description:
          'Déclarations fiscales et sociales transmises en ligne sur SIMPL en quelques clics.',
      },
      {
        icon: BarChart3,
        title: 'Tableaux de bord',
        description:
          'Indicateurs clés pour piloter votre trésorerie et votre activité au quotidien.',
      },
      {
        icon: Repeat,
        title: 'Licence à vie 2026',
        description:
          'Mises à jour réglementaires pour rester conforme à la loi de finances marocaine.',
      },
    ],
  },
  {
    slug: 'sage-etats-comptables-fiscaux',
    name: 'Sage États Comptables et Fiscaux V19.10',
    category: 'Fiscalité & Bilan',
    summary:
      'Bilan, CPC, liasse fiscale et exports XML/PDF pour produire vos états financiers sans erreur. 100% compatible Sage 100cloud.',
    description: [
      'Sage États Comptables et Fiscaux V19.10 automatise la production de votre bilan, de votre compte de produits et charges et de votre liasse fiscale à partir de vos données comptables.',
      'Les contrôles de cohérence intégrés repèrent les écarts avant la télétransmission sur le portail SIMPL de la DGI, ce qui élimine tout risque de rejet lors de vos clôtures.',
    ],
    price: 1990,
    originalPrice: 2490,
    image: '/images/products/sage-ecf-v19.jpg',
    imageAlt: 'Sage ECF V19.10 - Solution fiable pour déclarations fiscales conformes à la législation marocaine',
    features: [
      {
        icon: Landmark,
        title: 'Bilan & CPC',
        description:
          'Édition du bilan conforme au plan comptable marocain, généré automatiquement.',
      },
      {
        icon: FileCheck,
        title: 'Liasse fiscale XML',
        description:
          'Export certifié pour le portail SIMPL-IS de la DGI sans aucun rejet.',
      },
      {
        icon: FileText,
        title: 'Tableaux annexes & ETIC',
        description:
          'Génération des 18 tableaux fiscaux officiels selon le système normal ou simplifié.',
      },
      {
        icon: Download,
        title: 'Export PDF & Plaquette',
        description:
          'Impression haute fidélité pour vos banques, commissaires aux comptes et actionnaires.',
      },
      {
        icon: ShieldCheck,
        title: 'Contrôles de cohérence',
        description:
          'Vérifications automatiques des égalités comptables avant l\'exportation finale.',
      },
      {
        icon: Repeat,
        title: 'Multi-sociétés illimité',
        description:
          'Idéal pour les fiduciaires et cabinets gérant plusieurs dizaines de dossiers clients.',
      },
    ],
  },
  {
    slug: 'pack-sage-100-complet',
    name: 'Pack Sage 100 complet',
    category: 'Gestion intégrale',
    summary:
      'Comptabilité, paie et RH, gestion commerciale, immobilisations, trésorerie et multiposte avec vidéos de formation.',
    description: [
      'Le Pack Sage 100 complet réunit tous les modules essentiels de la gestion d\'entreprise dans une suite unique et éprouvée : Compta 100c, Gescom 100c, Paie & RH 100c, Immobilisations 100c, Trésorerie et Moyens de Paiement.',
      'Fourni avec clé d\'authentification validée à vie et déploiement multi-postes pour votre équipe ou cabinet, sans aucun abonnement contraignant.',
    ],
    price: 6900,
    originalPrice: 8500,
    image: '/images/products/pack-sage-100.jpg',
    imageAlt: 'Pack Logiciel Sage 100 Multi-post clé d\'authentification validée à vie',
    features: [
      {
        icon: Calculator,
        title: 'Sage 100c Comptabilité',
        description:
          'Journaux, grand livre, lettrage, états financiers et communication bancaire automatisée.',
      },
      {
        icon: ShoppingCart,
        title: 'Sage 100c Gestion Commerciale',
        description:
          'Cycle complet devis, commandes, bons de livraison, factures avec ICE et multi-dépôts.',
      },
      {
        icon: Users,
        title: 'Sage 100c Paie & RH',
        description:
          'Gestion des salariés, bulletins aux normes marocaines (IR, CNSS, AMO) et état 9421.',
      },
      {
        icon: Building2,
        title: 'Sage 100c Immobilisations',
        description:
          'Suivi des actifs, calcul des amortissements linéaires ou dégressifs et inventaires.',
      },
      {
        icon: Monitor,
        title: 'Multi-postes réseau',
        description:
          'Installation en réseau local partagé pour l\'ensemble des postes de votre entreprise.',
      },
      {
        icon: Video,
        title: 'Vidéos de formation incluses',
        description:
          'Tutoriels complets pas-à-pas pour maîtriser rapidement chaque module.',
      },
    ],
  },
  {
    slug: 'sage-x3-v12',
    name: 'Sage X3 V12',
    category: 'ERP d\'Entreprise',
    summary:
      'L\'ERP le plus puissant pour piloter la finance avancée, les achats, les ventes, les stocks et la production industrielle.',
    description: [
      'Sage X3 Version 12 est le progiciel de gestion intégré de référence pour les entreprises en pleine expansion et groupes industriels au Maroc.',
      'Doté d\'une interface 100% web moderne, il unifie la comptabilité, la supply chain, la production (GPAO) et le pilotage décisionnel en temps réel.',
    ],
    price: 24900,
    originalPrice: 29900,
    image: '/images/products/sage-x3-v12.jpg',
    imageAlt: 'Sage X3 Version 12 ERP - Comptabilité avancée, achats, ventes, stocks, production et tableaux de bord',
    features: [
      {
        icon: Landmark,
        title: 'Comptabilité & Finance avancées',
        description:
          'Multi-sociétés, multi-devises, consolidation de groupe et reporting financier.',
      },
      {
        icon: Truck,
        title: 'Achats, Ventes & Logistique',
        description:
          'Traçabilité par lots, réapprovisionnement automatique et négoce international.',
      },
      {
        icon: Factory,
        title: 'Production & Industrie (GPAO)',
        description:
          'Nomenclatures multi-niveaux, ordres de fabrication et calcul des coûts de revient.',
      },
      {
        icon: BarChart3,
        title: 'Tableaux de bord en temps réel',
        description:
          'Indicateurs KPI personnalisables pour des prises de décision immédiates.',
      },
      {
        icon: Boxes,
        title: 'Multi-sociétés & Multi-devises',
        description:
          'Gestion intégrée des filiales et succursales au Maroc et à l\'international.',
      },
      {
        icon: Send,
        title: 'Accès Web & Mobilité Cloud',
        description:
          'Accessible directement depuis n\'importe quel navigateur web sécurisé.',
      },
    ],
  },
];
