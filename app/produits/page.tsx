import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/services/products';

export const metadata: Metadata = {
  title: 'Nos logiciels de comptabilité et de gestion',
  description:
    'Catalogue Copo Solutions : Pack JBS, Sage États Comptables et Fiscaux V19.10, Pack Sage 100 complet et Sage X3 V12 pour les entreprises et cabinets au Maroc.',
  alternates: { canonical: '/produits' },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <PageHeader
        eyebrow="Produits"
        title="Nos logiciels de comptabilité et de gestion"
        description="Quatre solutions éprouvées pour gérer votre comptabilité, votre paie, votre fiscalité et l'ensemble de votre entreprise."
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
