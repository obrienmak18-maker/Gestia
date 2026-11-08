import { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "reussir-transition-liasse-fiscale-xml-maroc",
    slug: "reussir-transition-liasse-fiscale-xml-maroc",
    title: "Comment réussir sa transition vers la liasse fiscale XML au Maroc",
    excerpt: "Découvrez les étapes clés, les obligations réglementaires de la DGI et les meilleurs outils pour générer et télédéclarer votre liasse fiscale XML sans rejets.",
    category: "Fiscalité & DGI",
    author: {
      name: "Taha Benjelloun",
      role: "Consultant Fiscalité & Systèmes d'Information",
    },
    publishedAt: "2025-01-15",
    readTime: "7 min de lecture",
    tags: ["Liasse Fiscale", "SIMPL-IS", "DGI Maroc", "Sage ECF", "Pack JBS"],
    coverImage: "/images/blog/liasse-fiscale-xml.jpg",
    seoDescription: "Guide complet 2025 pour générer et télédéclarer votre liasse fiscale au format XML sur le portail SIMPL de la DGI marocaine sans rejet.",
    content: `
La dématérialisation fiscale au Maroc n'est plus une option, mais une réalité quotidienne pour l'ensemble des entreprises soumises à l'Impôt sur les Sociétés (IS) et pour les cabinets d'expertise comptable.

Depuis la généralisation de la plateforme **SIMPL-IS** de la Direction Générale des Impôts (DGI), le dépôt de la liasse fiscale annuelle doit impérativement s'effectuer sous forme de fichier structuré au format **XML**, validé selon les schémas XSD officiels.

### 1. Pourquoi la liasse fiscale XML pose-t-elle souvent problème ?

Chaque année, à l'approche de la date fatidique du 31 mars, des dizaines de comptables se retrouvent confrontés à des erreurs de rejet lors du téléversement sur le portail SIMPL :
- **Discordance entre l'actif et le passif du bilan** : Une simple différence d'un centime due à un arrondi peut invalider le fichier.
- **Incohérence des tableaux annexes** : Les dotations du tableau des amortissements doivent correspondre exactement aux charges comptabilisées au CPC.
- **Balises XML manquantes ou mal formatées** : L'oubli de champs obligatoires tels que l'ICE, l'Identifiant Fiscal ou la mention du régime fiscal.

### 2. Les tableaux obligatoires de la liasse fiscale marocaine

Selon le Code Général des Impôts (CGI) marocain, la liasse fiscale complète (Système normal) comprend 18 états indispensables :
1. **Bilan (Actif & Passif)**
2. **Compte de Produits et Charges (CPC)**
3. **État des Soldes de Gestion (ESG)**
4. **Tableau de Financement de l'exercice**
5. **État des Informations Complémentaires (ETIC)**
6. **Tableau d'amortissement et provisions**
7. **Tableau des plus ou moins-values de cession**
8. **Détail de la TVA et état des déductions**

### 3. Quel logiciel choisir pour automatiser la génération XML ?

Pour éviter les ressaisies manuelles interminables et les risques d'amendes pour retard de déclaration, deux logiciels font l'unanimité auprès des professionnels au Maroc :

- **Sage États Comptables et Fiscaux (ECF) V19.10** : Le standard de l'industrie. Il importe directement les balances de n'importe quel logiciel (Sage 100, Excel, ERP tiers), applique des filtres de contrôle stricts et génère le fichier XML certifié en quelques secondes.
- **Pack JBS** : Une solution intégrée 100% marocaine qui gère la comptabilité quotidienne et produit nativement l'ensemble des fichiers XML (Liasse fiscale IS, état de paie 9421 et télédéclarations TVA).

### Conclusion & Recommandations

Pour aborder la clôture fiscale en toute sérénité :
1. Assurez-vous d'avoir lettré l'intégralité de vos comptes au 31 décembre.
2. Effectuez un audit de cohérence préventif sur votre logiciel.
3. Testez la génération XML au moins deux semaines avant la date limite.
    `,
  },
  {
    id: "sage-100-vs-sage-x3-quel-erp-choisir-pme-maroc",
    slug: "sage-100-vs-sage-x3-quel-erp-choisir-pme-maroc",
    title: "Sage 100 vs Sage X3 : Quel ERP choisir pour votre PME marocaine ?",
    excerpt: "Comparatif complet entre Sage 100 et Sage X3 : fonctionnalités, coûts, complexité de déploiement et critères pour faire le bon investissement au Maroc.",
    category: "ERP & Technologies",
    author: {
      name: "Karim Idrissi",
      role: "Architecte ERP & Systèmes de Gestion",
    },
    publishedAt: "2025-01-28",
    readTime: "9 min de lecture",
    tags: ["Sage 100", "Sage X3", "ERP Maroc", "Comparatif", "PME"],
    coverImage: "/images/blog/sage-100-vs-x3.jpg",
    seoDescription: "Guide comparatif Sage 100 vs Sage X3 : trouvez la solution la plus adaptée à la taille, aux processus et au budget de votre entreprise au Maroc.",
    content: `
Au Maroc, le groupe **Sage** est le leader incontesté des progiciels de gestion d'entreprise. Néanmoins, au moment de moderniser leur infrastructure informatique, les directeurs généraux et financiers hésitent souvent entre deux piliers : **Sage 100** et **Sage X3**.

Ce comparatif détaillé a pour vocation de vous apporter une réponse claire en fonction des réalités du tissu économique marocain.

### 1. Présentation générale des deux solutions

- **Sage 100** : Conçu spécifiquement pour les PME comptant de 5 à 100 salariés. Il est centré sur la gestion comptable, la paie, la facturation commerciale et le suivi des stocks.
- **Sage X3** : Solution de classe Enterprise (ERP global) destinée aux ETI, grandes entreprises et groupes industriels gérant plusieurs filiales, devises et entrepôts internationaux.

### 2. Tableau comparatif synthétique

| Critère | Sage 100 complet | Sage X3 V12 |
| :--- | :--- | :--- |
| **Cible idéale** | PME & Cabinets comptables (5-80 salariés) | ETI, Groupes & Industries (+80 salariés) |
| **Architecture** | Client/Serveur (Windows) | 100% Web HTML5 (Navigateur & Cloud) |
| **Production (GPAO)** | Basique (Nomenclatures simples) | Avancée (Ordonnancement, CBN, Gammes) |
| **Multi-sociétés & Multi-sites** | Géré par dossiers distincts | Natif et consolidé en temps réel |
| **Temps de déploiement** | 1 à 3 jours | 2 à 6 semaines selon périmètre |
| **Budget d'acquisition** | Très accessible et rentabilisé immédiatement | Investissement stratégique à moyen terme |

### 3. Quand opter pour le Pack Sage 100 complet ?

Le Pack Sage 100 est le choix gagnant si :
- Vos besoins se concentrent sur la conformité comptable, la facturation conforme à la loi marocaine (ICE, IF), la gestion des stocks de négoce et la paie sociale.
- Vous recherchez un outil immédiatement opérationnel, maîtrisé par la majorité des comptables et gestionnaires formés au Maroc.
- Vous souhaitez un investissement maîtrisé en paiement unique sans engagement pesant.

### 4. Quand privilégier Sage X3 V12 ?

Sage X3 s'impose naturellement dès lors que :
- Vous gérez une unité de production industrielle (textile, agroalimentaire, métallurgie, plasturgie) nécessitant le calcul précis des coûts de revient par ordre de fabrication.
- Vous disposez de plusieurs sociétés ou filiales au Maroc et à l'étranger avec des transactions intragroupe régulières.
- Vos collaborateurs ont besoin d'accéder au système à distance via tablette ou smartphone depuis vos dépôts et agences régionales.

### L'avis de Copo Solutions

Pour 85% des PME marocaines, le **Pack Sage 100 complet** offre un équilibre parfait entre puissance, simplicité et retour sur investissement. Les industries et grands distributeurs s'orienteront avec profit vers la robustesse de **Sage X3 V12**.
    `,
  },
  {
    id: "teledeclarations-simpl-is-tva-guide-pratique-cabinets",
    slug: "teledeclarations-simpl-is-tva-guide-pratique-cabinets",
    title: "Télédéclarations SIMPL-IS et SIMPL-TVA : Le guide pratique pour les cabinets comptables",
    excerpt: "Comment optimiser le flux de travail de votre fiduciaire pour téléverser les déclarations TVA et liasses fiscales sans stress grâce aux bons logiciels.",
    category: "Cabinets & Pratique",
    author: {
      name: "Salma Mansouri",
      role: "Formatrice Solutions Fiscales",
    },
    publishedAt: "2025-02-02",
    readTime: "6 min de lecture",
    tags: ["SIMPL DGI", "SIMPL-TVA", "Cabinet Comptable", "Fiduciaire", "Maroc"],
    coverImage: "/images/blog/teledeclaration-simpl.jpg",
    seoDescription: "Guide pratique pour cabinets comptables au Maroc : automatisez vos déclarations SIMPL-IS et SIMPL-TVA et gagnez jusqu'à 70% de temps lors des clôtures.",
    content: `
Pour les fiduciaires et cabinets d'expertise comptable au Maroc, la gestion des échéances fiscales mensuelles, trimestrielles et annuelles représente une charge de travail colossale.

Entre la déclaration de TVA le 20 ou le dernier jour du mois, les acomptes d'IS et la liasse annuelle au 31 mars, l'optimisation des flux d'information est la clé de la rentabilité d'un cabinet.

### 1. La télédéclaration de TVA : Du relevé de déductions au fichier XML

L'étape la plus chronophage de la déclaration de TVA marocaine réside dans la préparation du **relevé des déductions** :
- Mention obligatoire de l'Identifiant Commun de l'Entreprise (ICE) de chaque fournisseur.
- Taux de TVA appliqué (7%, 10%, 14%, 20%).
- Mode de paiement (chèque, virement, effet, espèces) et date exacte de décaissement.

Avec des solutions comme le **Pack JBS** ou **Sage 100**, ces informations sont capturées dès la saisie de la facture d'achat ou du règlement. L'export XML s'effectue en un clic, prêt à être déposé sur la plateforme SIMPL-TVA.

### 2. Comment réduire les erreurs lors des dépôts SIMPL ?

Voici les trois règles d'or appliquées par les meilleurs cabinets à Casablanca et Tanger :
1. **Normaliser les fiches tiers** : Refuser d'enregistrer une facture fournisseur si l'ICE ou l'Identifiant Fiscal n'est pas renseigné dans le logiciel.
2. **Utiliser un logiciel avec validateur syntaxique intégré** : Des outils comme Sage ECF testent la cohérence de l'arbre XML avant même que vous n'ouvriez le navigateur web.
3. **Mettre en place des sauvegardes automatisées** : Avant chaque téléversement d'exercice, effectuez un snapshot de votre base de données.

### 3. Conclusion

La digitalisation de l'administration fiscale marocaine est une formidable opportunité pour les cabinets qui s'équipent d'outils modernes. En réduisant les tâches de saisie manuelle, vous libérez du temps pour le conseil à haute valeur ajoutée auprès de vos clients dirigeants.
    `,
  },
];
