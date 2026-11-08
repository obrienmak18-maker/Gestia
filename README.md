# 🇲🇦 Copo Solutions — Plateforme Web SaaS (Next.js & Tailwind CSS)

Application web complète, moderne, ultra-rapide (Mobile-First) pour **Copo Solutions**, entreprise marocaine basée à Casablanca spécialisée dans la vente de logiciels de comptabilité, de paie et d'ERP pour entreprises et cabinets d'expertise comptable au Maroc.

---

## 🚀 Fonctionnalités Clés & Expérience Utilisateur

- **Design SaaS Américain Haut de Gamme** :
  - Style épuré, typographie contrastée, conteneurs avec glassmorphism subtil.
  - Palette officielle : Bleu profond (`#0B3C8C`), Blanc pur, Gris ardoise clair (`#F8FAFC`), accents Orange vif (`#FF7A00`) pour les boutons d'appel à l'action stratégiques.
  - Micro-interactions fluides au survol des cartes (effet de lévitation, lueurs douces, transitions de bordures).
- **Conformité Fiscale Marocaine & DGI** :
  - Déclarations certifiées conformes à la **Loi de Finances 2025**.
  - Génération des flux **XML normalisés pour SIMPL-IS**, **SIMPL-TVA** et **État de paie 9421 EDI**.
  - Plan comptable marocain normalisé (**CGNC**).
- **Parcours de Commande WhatsApp Direct** :
  - **Bouton WhatsApp Flottant** en bas à droite sur TOUTES les pages avec bulle incitative et statut « En ligne ».
  - Boutons **« Commander sur WhatsApp »** sur chaque produit générant automatiquement l'URL encodée avec le nom exact :  
    `https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20commander%20:%20[NOM_DU_PRODUIT]`.
- **Catalogue des 4 Logiciels Phares** :
  1. **Pack JBS** : Comptabilité XML, paie IR EDI, gestion commerciale, télédéclarations.
  2. **Sage États Comptables et Fiscaux V19.10** : Bilan, CPC, liasse fiscale 18 tableaux, export XML DGI.
  3. **Pack Sage 100 complet** : Comptabilité, paie RH, gestion commerciale, immobilisations, multiposte, vidéo de formation.
  4. **Sage X3 V12** : ERP complet d'entreprise (finance, achats, ventes, stocks, production GPAO).
- **Filtres & Recherche en Direct** :
  - Recherche instantanée par mot-clé et filtrage par catégorie sur le catalogue de logiciels et le blog.
- **Référencement & SEO Supérieur** :
  - Balises Schema.org JSON-LD injectées (`Organization`, `SoftwareApplication`, `Article`, `FAQPage`).
  - Fichiers `sitemap.xml` et `robots.txt` dynamiques.
  - Un seul `<h1>` sémantique par page.

---

## 🔌 Architecture API REST WordPress (Découplée & Extensible)

L'architecture des données est isolée dans un service dédié :
- `src/services/wordpress.ts`
- `src/services/productsService.ts`
- `src/data/products.ts` (Données locales de secours)
- `src/data/blogPosts.ts` (Articles SEO de secours)

### Comment connecter votre WordPress Headless ?
Par défaut, si aucune variable n'est définie, l'application fonctionne **instantanément à 100% avec les données locales certifiées** (zéro latence, zéro temps de chargement).

Pour basculer vers votre back-end WordPress réel :
1. Créez ou éditez le fichier `.env.local` :
   ```env
   NEXT_PUBLIC_WORDPRESS_API_URL="https://admin.coposolutions.ma"
   ```
2. Le service appellera automatiquement :
   - `GET /wp-json/wp/v2/products?_embed` (Custom Post Type des logiciels)
   - `GET /wp-json/wp/v2/posts?_embed` (Articles du blog)
3. En cas d'indisponibilité ou d'erreur réseau sur WordPress, un **fallback automatique sans interruption** restitue immédiatement les données locales sans faire planter l'interface utilisateur.

---

## 📁 Structure du Projet

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Layout racine (Navbar, Footer, WhatsApp Flottant, SEO)
│   │   ├── page.tsx                  # Page d'accueil complète (Hero, Trust, 4 Avantages, Produits, 4 Étapes, Avis, FAQ)
│   │   ├── globals.css               # Directives Tailwind, Glassmorphism, animations
│   │   ├── not-found.tsx             # Page 404 sur mesure
│   │   ├── produits/
│   │   │   ├── page.tsx              # Catalogue avec recherche & filtres en direct
│   │   │   └── [slug]/page.tsx       # Fiches produits détaillées (H1, Specs, Bonus, WhatsApp, Similaires)
│   │   ├── a-propos/page.tsx         # Page À propos (Histoire, valeurs, métriques Maroc)
│   │   ├── contact/page.tsx          # Formulaire interactif + coordonnées Casablanca + WhatsApp
│   │   ├── blog/
│   │   │   ├── page.tsx              # Index du blog avec 3 articles SEO Maroc
│   │   │   └── [slug]/page.tsx       # Page article détaillée
│   │   ├── mentions-legales/         # Mentions légales marocaines (RC, IF, ICE, CNSS)
│   │   ├── conditions-generales-de-vente/ # CGV logiciels numériques & multipostes
│   │   ├── politique-de-confidentialite/  # Conformité CNDP Loi 09-08
│   │   ├── sitemap.ts                # Générateur de sitemap pour Google
│   │   └── robots.ts                 # Directives robots d'indexation
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Barre fixe, tiroir mobile, CTA WhatsApp
│   │   │   └── Footer.tsx            # Footer corporate complet
│   │   ├── home/
│   │   │   ├── HeroSection.tsx       # Hero avec double CTA et mockup de bord
│   │   │   ├── TrustBar.tsx          # Barres de conformité DGI, CGI, CNSS
│   │   │   ├── FeaturesGrid.tsx      # Les 4 piliers différenciants
│   │   │   ├── ProductCatalog.tsx    # Grille des 4 logiciels phares
│   │   │   ├── HowToOrder.tsx        # Parcours de commande en 4 étapes
│   │   │   ├── Testimonials.tsx      # Avis clients vérifiés au Maroc
│   │   │   ├── FaqSection.tsx        # Accordéon interactif de 5 questions clés
│   │   │   └── CtaBanner.tsx         # Bannière de conversion haute
│   │   ├── products/
│   │   │   ├── ProductCard.tsx       # Carte produit moderne avec micro-interactions
│   │   │   ├── ProductVisualBadge.tsx# Boîte visuelle 3D / Badge logiciel personnalisé
│   │   │   └── ProductsFilterList.tsx# Moteur de recherche et filtre client réactif
│   │   ├── blog/
│   │   │   └── BlogFilterList.tsx    # Filtrage client des articles
│   │   └── common/
│   │       ├── FloatingWhatsApp.tsx  # Widget WhatsApp flottant avec bulle d'accueil
│   │       ├── ProductOrderButton.tsx# Bouton dynamique avec message prérempli encodé
│   │       └── JsonLd.tsx            # Balises structurées SEO Google
│   ├── data/
│   │   ├── products.ts               # Catalogue complet des 4 logiciels
│   │   ├── blogPosts.ts              # 3 articles de fond orientés SEO DGI Maroc
│   │   ├── faq.ts                    # Questions-réponses fiscales et techniques
│   │   ├── testimonials.ts           # Témoignages fiduciaires et DAF au Maroc
│   │   └── siteConfig.ts             # Configuration générale & générateur d'URLs WhatsApp
│   ├── services/
│   │   ├── wordpress.ts              # Client REST WordPress avec fallback automatique
│   │   └── productsService.ts        # Façade de données découplée
│   ├── lib/
│   │   └── utils.ts                  # Formateurs de prix et helpers Tailwind
│   └── types/
│       └── index.ts                  # Définitions TypeScript strictes
```

---

## 🛠️ Commandes Disponibles

```bash
# Lancer le serveur de développement local
npm run dev

# Compiler et vérifier l'application pour la production
npm run build

# Démarrer le serveur de production
npm run start

# Exécuter les vérifications de linting
npm run lint
```

---

## 📱 Numéro WhatsApp & Coordonnées

- **Numéro WhatsApp d'assistance** : `+212 600 000 000` (`212600000000`)
- **Siège Social** : Boulevard d'Anfa, Quartier des Hôpitaux, 20100 Casablanca, Maroc
- **Email** : `contact@coposolutions.ma`
