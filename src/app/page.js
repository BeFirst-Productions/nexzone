import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import ProductsSection from "@/components/Home/ProductsSection";
import AccessoriesSection from "@/components/Home/AccessoriesSection";
import Container from "@/components/Common/Layout/Container";
import ServiceSection from "@/components/Home/ServiceSection";
import AdditionalServices from "@/components/Home/AdditionalServices";
import WhyChooseSection from "@/components/Home/WhyChooseSection";

export default function Home() {
  return (
    <main className="w-full flex-col flex min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <AdditionalServices />
      <WhyChooseSection />
      <ProductsSection />
      <AccessoriesSection />

      {/* Other sections that need a contained width will go inside Container below */}

    </main>
  );
}
