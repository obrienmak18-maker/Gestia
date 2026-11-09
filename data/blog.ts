export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'transition-liasse-fiscale-xml-maroc',
    title: 'Comment réussir sa transition vers la liasse fiscale XML au Maroc',
    excerpt:
      'Format, calendrier, contrôles à effectuer : les étapes clés pour passer à la liasse fiscale XML sans stress.',
    category: 'Fiscalité',
    publishedAt: '2026-10-14',
    readTime: '6 min',
    image:
      'https://images.pexels.com/photos/6928878/pexels-photo-6928878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Formulaires fiscaux et stylo posés sur un bureau',
    sections: [
      {
        heading: 'Pourquoi la liasse fiscale passe au format XML',
        paragraphs: [
          'La télétransmission des états financiers au format XML permet à l\'administration de traiter les déclarations plus vite et de réduire les erreurs de saisie. Pour les entreprises, c\'est aussi l\'occasion de fiabiliser leur processus de clôture.',
        ],
      },
      {
        heading: 'Préparer sa transition en quatre étapes',
        paragraphs: [
          'Commencez par vérifier que votre plan comptable est à jour et que toutes les écritures de l\'exercice sont validées. Ensuite, testez l\'export XML sur un exercice précédent pour identifier les écarts.',
          'Formez vos équipes aux nouveaux contrôles de cohérence et prévoyez un temps de validation avant la date limite de dépôt.',
        ],
      },
      {
        heading: 'Les erreurs les plus fréquentes',
        paragraphs: [
          'Les rejets sont souvent liés à des montants qui ne concordent pas entre le bilan et le compte de produits et charges, ou à des informations d\'identification incomplètes. Un logiciel dédié, qui effectue ces contrôles automatiquement, limite fortement ce risque.',
        ],
      },
    ],
  },
  {
    slug: 'paie-maroc-ir-declarations-edi',
    title: 'Paie au Maroc : bien calculer l\'IR et préparer ses déclarations EDI',
    excerpt:
      'Barème, retenues à la source et transmission EDI : comment sécuriser la paie de vos salariés chaque mois.',
    category: 'Paie',
    publishedAt: '2026-10-28',
    readTime: '5 min',
    image:
      'https://images.pexels.com/photos/7821686/pexels-photo-7821686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Personne remplissant un questionnaire avec un stylo',
    sections: [
      {
        heading: 'Comprendre le calcul de l\'impôt sur le revenu',
        paragraphs: [
          'L\'IR retenu sur salaire dépend du barème en vigueur, des frais professionnels et des charges de famille déclarées par le salarié. Une erreur sur l\'une de ces données se répercute sur chaque bulletin.',
        ],
      },
      {
        heading: 'Automatiser les déclarations EDI',
        paragraphs: [
          'La transmission électronique des déclarations évite les déplacements et les retards. Un logiciel de paie compatible EDI génère les fichiers attendus à partir des bulletins validés, ce qui simplifie le travail de fin de mois.',
        ],
      },
      {
        heading: 'Checklist mensuelle',
        paragraphs: [
          'Mettez à jour les salariés, contrôlez les absences et les primes, vérifiez le total de l\'IR, puis générez et archivez vos déclarations. Une routine fixe évite les oublis.',
        ],
      },
    ],
  },
  {
    slug: 'choisir-logiciel-comptabilite-cabinet',
    title: 'Logiciel de comptabilité : 7 critères pour bien choisir pour votre cabinet',
    excerpt:
      'Conformité, multi-dossiers, export, formation : les critères à examiner avant de vous équiper.',
    category: 'Conseils',
    publishedAt: '2026-11-03',
    readTime: '7 min',
    image:
      'https://images.pexels.com/photos/7545333/pexels-photo-7545333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Professionnel organisant des reçus papier',
    sections: [
      {
        heading: 'Conformité et mises à jour',
        paragraphs: [
          'Le premier critère reste la conformité avec la loi de finances marocaine. Vérifiez que l\'éditeur publie des mises à jour régulières et qu\'elles sont incluses dans votre licence.',
        ],
      },
      {
        heading: 'Gestion multi-dossiers et multi-postes',
        paragraphs: [
          'Un cabinet doit pouvoir gérer plusieurs clients et plusieurs collaborateurs. Regardez la manière dont la licence s\'applique aux postes et aux dossiers avant de signer.',
        ],
      },
      {
        heading: 'Export, accompagnement et formation',
        paragraphs: [
          'Assurez-vous que le logiciel exporte vers les formats demandés par vos clients et l\'administration. Une installation accompagnée et des vidéos de formation réduisent nettement le temps de prise en main.',
        ],
      },
    ],
  },
];
