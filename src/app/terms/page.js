import InnerHero from "@/components/Common/Hero/InnerHero";
import TermsSection from "@/components/Terms/TermsSection";

export const metadata = {
    title: "Terms and Conditions | Nexzone Technologies UAE",
    description: "Read the Terms and Conditions for Nexzone Technologies UAE. Understand our service agreements, pricing, payment terms, and policies for printer rentals and AMC.",
    keywords: "Terms and Conditions, Nexzone UAE, Printer Rental Terms, AMC Agreement, IT Services Sharjah",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <InnerHero
                title="Terms & Conditions"
                breadcrumb={[
                    { label: "Terms", href: "/terms" }
                ]}
            />

            <TermsSection />
        </main>
    );
}
