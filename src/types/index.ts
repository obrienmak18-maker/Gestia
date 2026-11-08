export interface ProductFeature {
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
  isHighlight?: boolean;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'Comptabilité & Fiscalité' | 'ERP & Gestion Intégrée' | 'Gestion Commerciale & Paie';
  badge?: string;
  price: {
    amount: number;
    currency: 'MAD' | 'DH';
    period?: 'paiement unique' | 'par an';
    note?: string;
  };
  shortDescription: string;
  fullDescription: string;
  moroccanCompliance: {
    dgiCompliant: boolean;
    simplCompatible: boolean;
    xmlExport: boolean;
    details: string[];
  };
  keyBenefits: string[];
  features: ProductFeature[];
  specifications: ProductSpec[];
  includedBonuses: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  heroImage: string;
  galleryImages?: string[];
  whatsappMessage?: string;
  isPopular?: boolean;
  targetAudience: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  seoDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: 'Casablanca' | 'Rabat' | 'Tanger' | 'Marrakech' | 'Agadir' | 'Fès';
  content: string;
  softwareUsed: string;
  rating: number;
  avatarUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'Commande' | 'Installation' | 'Fiscalité Marocaine' | 'Licence';
}

// WordPress REST API Types for dynamic mapping
export interface WPPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  acf?: Record<string, any>;
  meta?: Record<string, any>;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    author?: Array<{
      name: string;
      description?: string;
    }>;
  };
}
