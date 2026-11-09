# Copo Solutions — Plateforme Web & Logiciels de Gestion au Maroc 🇲🇦

Application web moderne, ultra-rapide (Mobile-First) et optimisée SEO pour **Copo Solutions**, spécialiste de la distribution et de l'intégration de logiciels comptables et de gestion d'entreprise au Maroc.

---

## 🚀 Fonctionnalités Clés

- **Catalogue Logiciels Spécialisés Maroc :**
  - **Pack JBS** (Comptabilité XML, Paie IR EDI, Gestion Commerciale, télédéclarations conformes DGI 2026).
  - **Sage États Comptables et Fiscaux V19.10** (Bilan, CPC, liasse fiscale dématérialisée).
  - **Pack Sage 100 Complet** (Compta, Facturation, Paie RH, Immobilisations, multiposte).
  - **Sage X3 V12** (ERP complet pour PME et grandes entreprises).
- **Parcours de Commande WhatsApp Direct :**
  - Boutons de commande dynamiques avec message prérempli encodé et numéro officiel (`+212 618 819 000`).
  - Bouton flottant présent sur l'ensemble des pages.
- **Architecture Headless WordPress :**
  - Connecté en temps réel à l'API REST WordPress pour la gestion du blog et des fiches logiciels sans toucher au code.
  - Système de cache serveur haute performance avec bascule autonome en local si le CMS est indisponible.
- **Design SaaS Américain Haut de Gamme :**
  - Palette : Bleu Profond (`#0B3C8C`), Orange vif (`#FF7A00`), cartes verre dépoli (glassmorphism), micro-interactions fluides et typographie soignée.
- **Pages Complètes :**
  - Accueil, Catalogue Produits, Pages Logiciels Dédiées, À Propos, Blog SEO, Contact interactif, Mentions Légales, CGV, Politique de Confidentialité.

---

## 🛠️ Stack Technique

- **Framework :** [Next.js](https://nextjs.org/) (App Router)
- **Styling :** [Tailwind CSS](https://tailwindcss.com/)
- **Icônes :** [Lucide React](https://lucide.dev/)
- **CMS Headless :** WordPress REST API (Cloud Pantheon)
- **Base de données / Backend :** Supabase & WordPress REST API

---

## 📦 Installation et Démarrage Local

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/obrienmak18-maker/Gestia.git
   cd Gestia
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement :**
   ```bash
   cp .env.example .env
   ```

4. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

5. **Build de production :**
   ```bash
   npm run build
   npm run start
   ```

---

## 📖 Administration WordPress

Consultez le fichier [`GUIDE-WORDPRESS.md`](./GUIDE-WORDPRESS.md) pour les instructions détaillées de gestion des contenus via le panneau `wp-admin`.
