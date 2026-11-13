import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/services/products';

export const metadata: Metadata = {
  title: 'Nos logiciels Sage de comptabilité et de gestion',
  description:
    'Découvrez les logiciels Sage 100 : Gestion Commerciale, Comptabilité, Paie et RH, Immobilisations, Trésorerie et États Comptables et Fiscaux.',
  alternates: { canonical: '/produits' },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <PageHeader
        eyebrow="Produits"
        title="Nos logiciels Sage"
        description="Des solutions dédiées pour gérer votre activité commerciale, votre comptabilité, vos ressources humaines, vos immobilisations, votre trésorerie et vos états comptables et fiscaux."
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
