# 🇲🇦 Guide WordPress pour Copo Solutions

Ce guide explique comment administrer le site et modifier les contenus (blog, produits) depuis WordPress sans toucher au code.

## 1. Accès au tableau de bord WordPress

* **URL d'administration :** [https://dev-copo-solutions.pantheonsite.io/wp-admin](https://dev-copo-solutions.pantheonsite.io/wp-admin)
* **Identifiant :** `Gestia.ma`

---

## 2. Gestion des Articles de Blog

Le blog Next.js est synchronisé en temps réel avec WordPress :
1. Connectez-vous sur **wp-admin** → **Articles** → **Ajouter un article**.
2. Rédigez votre titre et votre contenu.
3. Cliquez sur **Publier**.
4. L'article est immédiatement visible sur `/blog` et accessible via son URL `/blog/[slug]`.

---

## 3. Gestion des Logiciels & Produits

L'application intègre 4 logiciels phares :
* **Pack JBS** (Compta XML, Paie IR EDI, Gestion Commerciale)
* **Sage États Comptables et Fiscaux V19.10**
* **Pack Sage 100 Complet**
* **Sage X3 V12**

### Méthode simple (Articles de catégorie "produits") :
1. Dans wp-admin → **Articles** → **Catégories**, créez la catégorie `produits`.
2. Créez un article avec l'un des slugs correspondants :
   * `pack-jbs`
   * `sage-etats-comptables-fiscaux`
   * `pack-sage-100-complet`
   * `sage-x3-v12`
3. Le titre, le résumé et la description rédigés dans WordPress enrichiront automatiquement la fiche produit sur le site Next.js.
4. Les articles de cette catégorie sont automatiquement exclus du blog pour éviter les doublons.

---

## 4. Architecture Headless

* **Front-end :** Next.js 13.5 (App Router), Tailwind CSS, Lucide React
* **CMS :** WordPress REST API (Pantheon Cloud)
* **Commandes :** Intégration directe WhatsApp avec numéro officiel (`+212 618 819 000`) et message prérempli selon le logiciel sélectionné.
