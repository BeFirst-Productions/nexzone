import InnerHero from "@/components/Common/Hero/InnerHero";
import ServicesSection from "@/components/Services/ServicesSection";
import { services } from "@/data/services";

export const metadata = {
    title: "Our Services | Nexzone",
    description: "Expert Printer Repair, Sales, Maintenance, and Office Equipment Supply in Sharjah, UAE.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen ">
            {/* Reusing existing InnerHero */}
            <InnerHero
                title="Our Services"
                breadcrumb={[
                    { label: "Services", href: "/services" }        
                ]}
                bgImage="/images/bg/servicebanner.jpeg"
            />

            {/* Services Section */}
            <ServicesSection services={services} />
        </main>
    );
}
