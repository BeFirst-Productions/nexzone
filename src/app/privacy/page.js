import InnerHero from "@/components/Common/Hero/InnerHero";
import PrivacySection from "@/components/Privacy/PrivacySection";

export const metadata = {
    title: "Privacy Policy | Nexzone Technologies UAE",
    description: "Learn about how Nexzone Technologies UAE collects, uses, and protects your personal information. Our privacy policy outlines our commitment to your data security.",
    keywords: "Privacy Policy, Nexzone UAE, Data Protection, User Privacy Sharjah, Printer Services Privacy",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <InnerHero
                title="Privacy Policy"
                breadcrumb={[
                    { label: "Privacy", href: "/privacy" }
                ]}
            />

            <PrivacySection />
        </main>
    );
}
