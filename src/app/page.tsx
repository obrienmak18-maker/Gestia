import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ProductCatalog from "@/components/home/ProductCatalog";
import HowToOrder from "@/components/home/HowToOrder";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";
import { getProducts } from "@/services/productsService";
import { FaqJsonLd } from "@/components/common/JsonLd";

export const revalidate = 300; // ISR 5 minutes

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <FaqJsonLd />
      <HeroSection />
      <TrustBar />
      <FeaturesGrid />
      <ProductCatalog products={products} />
      <HowToOrder />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
