import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import ProductsSection from "@/components/Home/ProductsSection";
import AccessoriesSection from "@/components/Home/AccessoriesSection";
import Container from "@/components/Common/Layout/Container";
import ServiceSection from "@/components/Home/ServiceSection";
import AdditionalServices from "@/components/Home/AdditionalServices";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import TrustSection from "@/components/Home/TrustSection";
import BestBrandsSection from "@/components/Home/BestBrandsSection";
import FaqSection from "@/components/Home/FaqSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full flex-col flex min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AccessoriesSection />
      <ServiceSection />
      <AdditionalServices />
      <WhyChooseSection />
      <TrustSection />
      <BestBrandsSection />
      <TestimonialsSection />
      <FaqSection />



    </main>
  );
}
