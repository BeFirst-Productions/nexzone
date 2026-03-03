import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import ProductsSection from "@/components/Home/ProductsSection";
import AccessoriesSection from "@/components/Home/AccessoriesSection";
import Container from "@/components/Common/Layout/Container";

export default function Home() {
  return (
    <main className="w-full flex-col flex min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AccessoriesSection />

      {/* Other sections that need a contained width will go inside Container below */}

    </main>
  );
}
