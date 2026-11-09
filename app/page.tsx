import type { Metadata } from 'next';
import { Advantages } from '@/components/home/advantages';
import { FaqSection } from '@/components/home/faq-section';
import { Hero } from '@/components/home/hero';
import { OrderSteps } from '@/components/home/order-steps';
import { ProductCatalog } from '@/components/home/product-catalog';

export const metadata: Metadata = {
  title: 'Logiciels de comptabilité et de gestion au Maroc',
  description:
    'Achetez vos logiciels Sage et JBS au Maroc : comptabilité XML, paie IR EDI, liasse fiscale et ERP Sage X3. Conformes, installés avec accompagnement et livrés rapidement.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <ProductCatalog />
      <OrderSteps />
      <FaqSection />
    </>
  );
}
