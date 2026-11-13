import {
  BarChart3,
  Building2,
  Calculator,
  FileCheck,
  FileText,
  Landmark,
  Repeat,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
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
  price?: number;
  originalPrice?: number;
  image: string;
  imageAlt: string;
  features: ProductFeature[];
};

/**
 * Catalogue local des six logiciels demandés.
 * Les tarifs sont affichés uniquement lorsqu'un montant a été fourni
 * dans les données existantes du site ; les autres logiciels sont sur devis.
 */
export const PRODUCTS: Product[] = [
  {
    slug: 'sage-100-gestion-commerciale-cloud-v12',
    name: 'Sage 100 Gestion Commerciale Cloud V12',
    category: 'Gestion commerciale',
    summary:
      'Gérez les clients, les fournisseurs, les articles, les achats, les ventes, les stocks et tout le cycle commercial dans une solution unifiée.',
    description: [
      'Sage 100 Gestion Commerciale Cloud V12 accompagne les entreprises dans le suivi de leur activité commerciale, depuis la création des devis jusqu’à la facturation et au suivi des achats. Il centralise les informations des clients, des fournisseurs, des articles et des familles d’articles.',
      'La solution couvre les documents de vente et d’achat, les tarifs, les remises, les promotions, les conditions commerciales ainsi que le suivi des représentants. Elle conserve également l’historique des ventes et des achats pour faciliter le suivi de l’activité.',
      'Le parcours commercial peut être organisé selon le flux : devis, commande, livraison, facture.',
    ],
    image:
      'https://wilroad.com/53-large_default/sage-100-gestion-commerciale-100c100cloud.jpg',
    imageAlt: 'Interface Sage 100 Gestion Commerciale affichée sur un ordinateur portable',
    features: [
      {
        icon: Users,
        title: 'Clients et fournisseurs',
        description:
          'Gestion des fiches clients et fournisseurs, des coordonnées et du suivi des comptes.',
      },
      {
        icon: ShoppingCart,
        title: 'Ventes et documents commerciaux',
        description:
          'Devis, commandes clients, bons de livraison, factures, avoirs et factures d’acompte.',
      },
      {
        icon: Truck,
        title: 'Achats et réceptions',
        description:
          'Commandes fournisseurs, réceptions et factures fournisseurs.',
      },
      {
        icon: Building2,
        title: 'Articles et familles',
        description:
          'Gestion des articles, des familles d’articles, des tarifs et des conditions commerciales.',
      },
      {
        icon: FileCheck,
        title: 'Tarifs et promotions',
        description:
          'Gestion des remises, promotions et conditions commerciales appliquées aux opérations.',
      },
      {
        icon: BarChart3,
        title: 'Historique commercial',
        description:
          'Historique des ventes et des achats ainsi que suivi de l’activité des représentants.',
      },
    ],
  },
  {
    slug: 'sage-100-comptabilite-cloud-v12',
    name: 'Sage 100 Comptabilité Cloud V12',
    category: 'Comptabilité',
    summary:
      'Organisez la comptabilité générale, auxiliaire, analytique et budgétaire, de la saisie des écritures jusqu’aux états comptables.',
    description: [
      'Sage 100 Comptabilité Cloud V12 est destiné à la gestion et au suivi des opérations comptables de l’entreprise. Il permet de travailler sur la comptabilité générale, auxiliaire, analytique et budgétaire, avec un plan comptable et des journaux adaptés à l’organisation de l’activité.',
      'La solution prend en charge la saisie des écritures, le lettrage automatique ou manuel, le rapprochement bancaire, la gestion des clients et fournisseurs, les échéances, les relances et la clôture des exercices.',
      'Les utilisateurs disposent des principaux états comptables, notamment le grand livre, la balance et les journaux, ainsi que des fonctions d’import et d’export Excel et de gestion du FEC. Le descriptif fourni prévoit la gestion jusqu’à 10 exercices.',
    ],
    image:
      'https://wilroad.com/51-large_default/sage-100-comptabilite-100c100cloud.jpg',
    imageAlt: 'Capture de l’interface Sage 100 Comptabilité Cloud',
    features: [
      {
        icon: Calculator,
        title: 'Comptabilité générale et auxiliaire',
        description:
          'Plan comptable, journaux comptables, saisie des écritures et gestion des comptes clients et fournisseurs.',
      },
      {
        icon: BarChart3,
        title: 'Comptabilité analytique et budgétaire',
        description:
          'Suivi analytique et budgétaire des opérations de l’entreprise.',
      },
      {
        icon: Repeat,
        title: 'Lettrage et rapprochement bancaire',
        description:
          'Lettrage automatique ou manuel et rapprochement des opérations bancaires.',
      },
      {
        icon: Users,
        title: 'Échéances et relances',
        description:
          'Gestion des échéances, suivi des clients et fournisseurs et relances clients.',
      },
      {
        icon: FileText,
        title: 'États comptables',
        description:
          'Consultation et édition du grand livre, de la balance, des journaux et des états comptables.',
      },
      {
        icon: ShieldCheck,
        title: 'Clôture et échanges de données',
        description:
          'Clôture des exercices, gestion jusqu’à 10 exercices et import/export Excel avec prise en charge du FEC.',
      },
    ],
  },
  {
    slug: 'sage-paie-rh-100-cloud-v8',
    name: 'Sage Paie & RH 100 Cloud V8',
    category: 'Paie et ressources humaines',
    summary:
      'Centralisez les dossiers des salariés, les contrats, les bulletins de paie, les cotisations sociales, les congés et les états RH.',
    description: [
      'Sage Paie 100 Cloud V8 couvre la gestion administrative des salariés et le traitement de la paie. Les dossiers salariés regroupent notamment les matricules, l’état civil, les coordonnées, la situation familiale, les coordonnées bancaires, les services, les fonctions, les postes et l’historique professionnel.',
      'Le logiciel permet le suivi des contrats de travail, des dates d’embauche et de sortie, des périodes d’essai, des renouvellements et des modifications de situation. Il prend en charge la préparation de la paie, le calcul des bulletins, les variables, les primes, les indemnités, les retenues, les absences, les congés, les avances, les acomptes et les prêts salariés.',
      'Il comprend également le suivi des cotisations sociales, les états et éditions, la préparation des déclarations sociales selon le paramétrage, le transfert des écritures vers Sage 100 Comptabilité et les opérations de fin de période.',
    ],
    image:
      'https://www.onysos.fr/media/filer_public/fe/1d/fe1d1d01-d408-4c04-8f1e-6a5ed9cd397f/sage-100c-paie-rh.jpg',
    imageAlt: 'Interface Sage 100 Paie et Ressources Humaines avec la liste des salariés',
    features: [
      {
        icon: Users,
        title: 'Dossiers salariés et contrats',
        description:
          'Fiches salariés, affectations, fonctions, postes, types de contrats, périodes d’essai et historique des modifications.',
      },
      {
        icon: Calculator,
        title: 'Préparation et calcul de la paie',
        description:
          'Calcul des bulletins, salaire de base, heures, primes, indemnités, avantages, retenues et régularisations.',
      },
      {
        icon: Wallet,
        title: 'Cotisations sociales',
        description:
          'Calcul des parts salariales et patronales, bases, plafonds, taux et états de cotisations.',
      },
      {
        icon: FileText,
        title: 'Congés et absences',
        description:
          'Acquisition et soldes de congés, demandes, retards, maladies et suivi des incidences sur la paie.',
      },
      {
        icon: FileCheck,
        title: 'Déclarations et éditions',
        description:
          'Bulletins, journaux et livres de paie, états des salariés, des mouvements, des congés et des absences.',
      },
      {
        icon: Repeat,
        title: 'Comptabilisation et fin de période',
        description:
          'Génération et transfert des écritures vers Sage 100 Comptabilité, clôture, contrôles et préparation de la période suivante.',
      },
    ],
  },
  {
    slug: 'sage-100-immobilisations-cloud-v12',
    name: 'Sage 100 Immobilisations Cloud V12',
    category: 'Gestion des immobilisations',
    summary:
      'Suivez les immobilisations de leur acquisition à leur sortie, gérez les amortissements et préparez les écritures comptables.',
    description: [
      'Sage 100 Immobilisations Cloud V12 permet de gérer les biens immobilisés de l’entreprise à partir de fiches dédiées et de familles d’immobilisations. Le suivi couvre les acquisitions, la mise en service, les mouvements, l’inventaire et l’historique.',
      'Le logiciel prend en charge les amortissements linéaires et dégressifs, ainsi que les amortissements fiscaux et économiques. Il permet également le suivi des dépréciations, des cessions et des sorties d’immobilisations.',
      'Les écritures liées aux immobilisations peuvent être générées pour leur intégration dans le suivi comptable.',
    ],
    image:
      'https://www.sage.com/fr-fr/-/media/images/sagedotcom/france/fr-fr/produits/sage%20100c%20immobilisations/sage_100c_immobilisations-code_analytique.jpg?h=740&hash=08779B73DEDEF7FD686343C96C252F3D&iar=0&w=1228',
    imageAlt: 'Interface Sage 100 Immobilisations et suivi des amortissements',
    features: [
      {
        icon: Building2,
        title: 'Fiches et familles',
        description:
          'Création des fiches immobilisations et classement par familles.',
      },
      {
        icon: FileText,
        title: 'Acquisitions et mise en service',
        description:
          'Suivi des acquisitions, mises en service et informations propres à chaque immobilisation.',
      },
      {
        icon: Calculator,
        title: 'Calcul des amortissements',
        description:
          'Amortissements linéaires, dégressifs, fiscaux et économiques.',
      },
      {
        icon: BarChart3,
        title: 'Dépréciations et inventaire',
        description:
          'Suivi des dépréciations, inventaire et consultation de l’historique.',
      },
      {
        icon: Repeat,
        title: 'Cessions et sorties',
        description:
          'Gestion des cessions et des sorties d’immobilisations.',
      },
      {
        icon: Landmark,
        title: 'Génération comptable',
        description:
          'Génération des écritures comptables associées aux immobilisations.',
      },
    ],
  },
  {
    slug: 'sage-100-tresorerie-v11',
    name: 'Sage 100 Trésorerie V11',
    category: 'Gestion de trésorerie',
    summary:
      'Suivez les comptes bancaires, les encaissements, les décaissements, les échéances et les prévisions de trésorerie.',
    description: [
      'Sage 100 Trésorerie V11 aide l’entreprise à suivre sa situation bancaire et ses principaux flux financiers. Il centralise le suivi des encaissements et des décaissements ainsi que les échéances clients et fournisseurs.',
      'La solution permet de préparer des prévisions de trésorerie, de consulter les flux financiers et d’analyser la situation bancaire. Les fonctions de reporting facilitent le suivi de la trésorerie et l’analyse des mouvements par période.',
    ],
    image:
      'https://www.sage.com/fr-fr/-/media/images/sagedotcom/france/fr-fr/produits/sage%20100c%20tresorerie/fonctionnalites/treso_situation%20de%20trsorerie.jpg',
    imageAlt: 'Interface Sage 100 Trésorerie présentant une situation de trésorerie',
    features: [
      {
        icon: Landmark,
        title: 'Suivi bancaire',
        description:
          'Consultation de la situation bancaire et suivi des comptes.',
      },
      {
        icon: Wallet,
        title: 'Encaissements et décaissements',
        description:
          'Suivi des encaissements et des décaissements de l’entreprise.',
      },
      {
        icon: FileText,
        title: 'Échéances clients et fournisseurs',
        description:
          'Suivi des échéances et des flux financiers associés.',
      },
      {
        icon: BarChart3,
        title: 'Prévisions et analyse',
        description:
          'Prévisions de trésorerie, analyse de trésorerie et situation bancaire.',
      },
      {
        icon: FileCheck,
        title: 'Reporting financier',
        description:
          'Reporting et analyse des mouvements financiers par période.',
      },
    ],
  },
  {
    slug: 'sage-etats-comptables-fiscaux-v19-10',
    name: 'Sage États Comptables et Fiscaux V19.10',
    category: 'États comptables et fiscalité',
    summary:
      'Préparez, contrôlez et éditez les états comptables, les états fiscaux et les liasses à partir des données comptables.',
    description: [
      'Sage États Comptables et Fiscaux V19.10 est une solution destinée aux entreprises, cabinets comptables, experts-comptables et services financiers. Elle permet de récupérer les données comptables, d’automatiser l’alimentation des états, d’effectuer les contrôles nécessaires et de produire les documents comptables et fiscaux.',
      'La solution prend en charge l’importation de la balance, la gestion des comptes et des regroupements, le paramétrage des rubriques et des formules de calcul ainsi que la gestion des exercices comptables. Elle permet de produire le bilan, le compte de résultat, les annexes, les états complémentaires, les plaquettes et les liasses fiscales.',
      'Le logiciel facilite la préparation des données pour les déclarations électroniques, la génération des fichiers XML et la gestion des flux EDI selon les modules et paramétrages disponibles. Il permet également les échanges avec Excel et les exports PDF.',
      'Le descriptif fourni indique une compatibilité avec les bases Sage 100 V12.10 selon la configuration et les conditions de compatibilité prévues par Sage, ainsi que Sage Serveur V31 livré avec la version concernée.',
    ],
    price: 1990,
    originalPrice: 2490,
    image:
      'https://www.sage.com/fr-fr/-/media/images/sagedotcom/france/fr-fr/produits/sage%20100%20etats%20comptables%20et%20fiscaux%20i7/fonctionnalites/liasse%20fiscale.jpg',
    imageAlt: 'Interface Sage États Comptables et Fiscaux et préparation de la liasse fiscale',
    features: [
      {
        icon: Calculator,
        title: 'Données comptables et paramétrage',
        description:
          'Importation de la balance, récupération des données, gestion des comptes, des rubriques et des formules de calcul.',
      },
      {
        icon: FileText,
        title: 'États comptables et fiscaux',
        description:
          'Production du bilan, du compte de résultat, des annexes, des états complémentaires et des plaquettes comptables.',
      },
      {
        icon: FileCheck,
        title: 'Liasse fiscale',
        description:
          'Préparation de la liasse, calcul des rubriques, édition des feuillets et préparation des fichiers de télétransmission.',
      },
      {
        icon: ShieldCheck,
        title: 'Contrôles de cohérence',
        description:
          'Vérification des rubriques, des informations issues de la balance et des données avant édition ou déclaration.',
      },
      {
        icon: Repeat,
        title: 'Télédéclaration et EDI',
        description:
          'Préparation des déclarations électroniques, génération des fichiers XML et gestion des flux EDI selon le paramétrage.',
      },
      {
        icon: BarChart3,
        title: 'Import, export et productivité',
        description:
          'Échanges avec Excel, import de fichiers Excel et CSV selon les formats disponibles, export PDF et génération rapide des documents.',
      },
    ],
  },
];
