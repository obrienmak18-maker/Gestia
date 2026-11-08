import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getProducts,
} from "@/services/productsService";
import { formatPrice } from "@/lib/utils";
import ProductOrderButton from "@/components/common/ProductOrderButton";
import ProductCard from "@/components/products/ProductCard";
import ProductVisualBadge from "@/components/products/ProductVisualBadge";
import { ProductJsonLd } from "@/components/common/JsonLd";
import {
  ShieldCheck,
  Check,
  Zap,
  Video,
  FileCode2,
  DownloadCloud,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Laptop,
  CheckCircle2,
  FileSpreadsheet,
  Users,
  ShoppingCart,
  CreditCard,
  Network,
  Calculator,
  Boxes,
  UserCheck,
  Landmark,
  GraduationCap,
  Server,
  LineChart,
  Cpu,
  Truck,
  Globe,
  Smartphone,
  Gauge,
  ArrowDownToLine,
  AlertCircle,
  BarChart3,
  FolderKanban,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map string icon names to Lucide icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSpreadsheet,
  ShieldCheck,
  Users,
  ShoppingCart,
  CreditCard,
  Network,
  FileCheck2: ShieldCheck,
  FileCode2,
  ArrowDownToLine,
  AlertCircle,
  BarChart3,
  FolderKanban,
  Calculator,
  Boxes,
  UserCheck,
  Landmark,
  GraduationCap,
  Server,
  LineChart,
  Cpu,
  Truck,
  Globe,
  Smartphone,
  Gauge,
  CheckCircle: CheckCircle2,
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Logiciel non trouvé | Copo Solutions",
    };
  }

  return {
    title: `${product.name} - Conforme DGI Maroc & Télédéclaration XML`,
    description: `${product.tagline}. Achetez ${product.name} au Maroc avec licence permanente, tutoriel vidéo et installation accompagnée.`,
    openGraph: {
      title: `${product.name} | Copo Solutions Maroc`,
      description: product.shortDescription,
    },
  };
}

export const revalidate = 300;

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const similarProducts = allProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <ProductJsonLd product={product} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-copo-800 transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/produits"
                className="hover:text-copo-800 transition-colors"
              >
                Produits
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-slate-900 truncate max-w-xs">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Top Product Hero Block */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-card border border-slate-200/90 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Product Information */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-copo-700 bg-copo-50 px-3 py-1 rounded-full border border-copo-200">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                    {product.badge}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  100% Conforme DGI Maroc
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-medium text-copo-800 leading-snug">
                {product.tagline}
              </p>

              {/* Full Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Moroccan Compliance Points */}
              <div className="rounded-2xl bg-copo-50/70 p-5 border border-copo-100 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-copo-900 flex items-center gap-2">
                  <FileCode2 className="h-4 w-4 text-copo-700" />
                  <span>Conformité Fiscale & Télédéclaration Maroc</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {product.moroccanCompliance.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Points forts de notre offre :
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  {product.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Purchase Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl bg-slate-900 text-white p-7 sm:p-8 shadow-elevated border border-slate-800 space-y-6">
                <ProductVisualBadge slug={product.slug} />

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Tarif Licence Permanente</span>
                    <span className="font-semibold text-emerald-400">
                      En stock • Activation 15 min
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {formatPrice(
                        product.price.amount,
                        product.price.currency
                      )}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      / {product.price.period || "paiement unique"}
                    </span>
                  </div>
                  {product.price.note && (
                    <p className="mt-1 text-xs text-slate-400">
                      {product.price.note}
                    </p>
                  )}
                </div>

                {/* WhatsApp Direct Action Button */}
                <div className="space-y-3 pt-2">
                  <ProductOrderButton
                    productName={product.name}
                    variant="primary"
                    className="w-full py-4 text-base shadow-orange"
                    label="Commander sur WhatsApp"
                  />
                  <p className="text-center text-[11px] text-slate-400">
                    Lien direct prérempli avec le nom exact : &ldquo;{product.name}&rdquo;
                  </p>
                </div>

                {/* Assurance Highlights */}
                <div className="border-t border-slate-800 pt-6 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>Livraison immédiate via lien Google Drive privé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="h-4 w-4 text-copo-400 shrink-0" />
                    <span>Vidéo tutoriel pas-à-pas + assistance AnyDesk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Garantie zéro rejet lors du dépôt SIMPL DGI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DownloadCloud className="h-4 w-4 text-copo-400 shrink-0" />
                    <span>Règlement par virement marocain ou Wafacash</span>
                  </div>
                </div>

                {/* Audience Target */}
                <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/80 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300 block mb-0.5">
                    Idéal pour :
                  </span>
                  {product.targetAudience}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Features Grid */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-card border border-slate-200/90 mb-12">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-copo-800 bg-copo-100/60 px-3 py-1 rounded-full border border-copo-200">
              Fonctionnalités Détaillées
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Tout ce que comprend votre licence {product.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Chaque module a été rigoureusement testé pour garantir une conformité totale et une utilisation quotidienne sans heurts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feat, idx) => {
              const IconComponent = ICON_MAP[feat.iconName] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-soft ${
                    feat.isHighlight
                      ? "bg-copo-50/40 border-copo-200"
                      : "bg-slate-50/60 border-slate-200"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-copo-800 shadow-sm border border-slate-200/80 mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specs & Included Bonuses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Specs */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card border border-slate-200/90">
            <div className="flex items-center gap-2 mb-6">
              <Laptop className="h-5 w-5 text-copo-800" />
              <h3 className="text-xl font-bold text-slate-900">
                Spécifications techniques requises
              </h3>
            </div>
            <dl className="divide-y divide-slate-100 text-xs sm:text-sm">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="py-3 flex justify-between gap-4">
                  <dt className="text-slate-500 font-medium">{spec.label}</dt>
                  <dd className="text-slate-900 font-bold text-right">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Included Bonuses */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card border border-slate-200/90">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-900">
                Bonus offerts avec votre commande
              </h3>
            </div>
            <ul className="space-y-4">
              {product.includedBonuses.map((bonus, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-orange-50/50 p-3.5 rounded-xl border border-orange-100 text-xs sm:text-sm text-slate-800 font-medium"
                >
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dedicated Product FAQ */}
        {product.faq && product.faq.length > 0 && (
          <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-card border border-slate-200/90 mb-12">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="h-5 w-5 text-copo-800" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Questions fréquentes sur {product.name}
              </h3>
            </div>
            <div className="space-y-4">
              {product.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 p-5 border border-slate-200"
                >
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-2">
                    {item.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Similar Products Recommendation */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Solutions complémentaires recommandées
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Découvrez d&apos;autres progiciels fréquemment associés à {product.name}.
              </p>
            </div>
            <Link
              href="/produits"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-copo-800 hover:text-orange-600 transition-colors"
            >
              <span>Tous les logiciels</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {similarProducts.map((simProduct) => (
              <ProductCard key={simProduct.id} product={simProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
