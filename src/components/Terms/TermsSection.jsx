import React from 'react';
import Container from '../Common/Layout/Container';

const TermsSection = () => {
    const lastUpdated = "April 14, 2026";

    const sections = [
        {
            id: "services",
            title: "1. Services",
            content: "NexZone Technologies provides printer sales, rental services, Annual Maintenance Contracts (AMC), and related IT support services across the UAE."
        },
        {
            id: "quotations",
            title: "2. Quotations & Pricing",
            content: [
                "All quotations are valid for a limited period (typically 3 days unless otherwise stated).",
                "Prices are subject to change without prior notice.",
                "Final pricing may vary based on site requirements and client specifications."
            ]
        },
        {
            id: "payment",
            title: "3. Payment Terms",
            content: [
                "Payments must be made as per the agreed terms in the quotation or contract.",
                "Delayed payments may result in service interruption or additional charges.",
                "NexZone reserves the right to suspend services in case of non-payment."
            ]
        },
        {
            id: "rental",
            title: "4. Rental Services",
            content: [
                "Rental equipment remains the property of NexZone Technologies.",
                "Clients are responsible for proper usage and safety of the equipment.",
                "Any damage due to misuse or negligence will be chargeable.",
                "Rental charges start from AED 199/month (subject to model and usage)."
            ]
        },
        {
            id: "amc",
            title: "5. AMC (Annual Maintenance Contract)",
            content: [
                "AMC includes servicing and selected spare parts as per agreement.",
                "Consumables (toner, paper, etc.) may or may not be included depending on the contract.",
                "Replacement of parts is subject to technical evaluation."
            ]
        },
        {
            id: "delivery",
            title: "6. Delivery & Installation",
            content: [
                "Delivery timelines are subject to stock availability and location.",
                "Installation will be carried out by NexZone technicians or authorized personnel."
            ]
        },
        {
            id: "warranty",
            title: "7. Warranty",
            content: [
                "New products are covered under manufacturer warranty.",
                "Used or rental machines may have limited or service-based warranty as agreed."
            ]
        },
        {
            id: "liability",
            title: "8. Limitation of Liability",
            content: [
                "NexZone Technologies shall not be liable for:",
                "Any indirect or consequential damages",
                "Business loss due to equipment downtime",
                "Delays caused by external or unforeseen circumstances"
            ]
        },
        {
            id: "termination",
            title: "9. Cancellation & Termination",
            content: [
                "Orders once confirmed may not be cancelled without prior notice.",
                "Rental or AMC agreements can be terminated based on agreed notice period."
            ]
        },
        {
            id: "website",
            title: "10. Website Usage",
            content: [
                "All content on this website is the property of NexZone Technologies.",
                "Unauthorized use, reproduction, or distribution is strictly prohibited."
            ]
        },
        {
            id: "privacy",
            title: "11. Privacy",
            content: "We respect your privacy. Any personal information shared will be handled securely and will not be disclosed to third parties without consent, except where required by law."
        },
        {
            id: "law",
            title: "12. Governing Law",
            content: "These Terms and Conditions are governed by the laws of the United Arab Emirates."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white text-gray-800">
            <Container>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-[#04447A]">Terms and Conditions</h2>
                        <p className="text-gray-500 font-medium">Effective Date: {lastUpdated}</p>
                        <div className="h-1 w-20 bg-[#048BFF] mt-4 rounded-full"></div>
                    </div>

                    <div className="mb-12 p-8 rounded-3xl bg-blue-50 border border-blue-100 shadow-sm">
                        <p className="text-lg leading-relaxed text-gray-700">
                            Welcome to <span className="font-bold text-[#04447A]">NexZone Technologies UAE</span>. By accessing or using our website (<a href="http://www.nexzoneuae.com" className="text-[#048BFF] hover:underline">www.nexzoneuae.com</a>) and services, you agree to comply with the following Terms and Conditions.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {sections.map((section) => (
                            <div key={section.id} id={section.id} className="scroll-mt-24 transition-all duration-300 hover:translate-x-1">
                                <h3 className="text-xl font-bold mb-4 text-[#04447A] flex items-center">
                                    <span className="w-1.5 h-6 bg-[#048BFF] mr-3 rounded-full"></span>
                                    {section.title}
                                </h3>
                                <div className="pl-4.5 border-l border-gray-100">
                                    {Array.isArray(section.content) ? (
                                        <ul className="space-y-3">
                                            {section.content.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-gray-600 leading-relaxed">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 mr-3 shrink-0"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed pl-4.5">
                                            {section.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 rounded-[40px] bg-[#04447A] text-white shadow-2xl relative overflow-hidden group">
                        {/* Decorative background circle */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-blue-500/20"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">13. Contact Information</h3>
                            <p className="mb-8 text-blue-100/80 leading-relaxed">
                                For any queries regarding our terms or services, please contact us:
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex flex-col">
                                    <span className="text-sm uppercase tracking-widest text-blue-300 font-bold mb-1">Company</span>
                                    <span className="text-xl font-semibold">NexZone Technologies UAE</span>
                                </div>
                                
                                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                    <div className="flex flex-col">
                                        <span className="text-sm uppercase tracking-widest text-blue-300 font-bold mb-1">Call Us</span>
                                        <div className="flex flex-col text-lg font-medium">
                                            <a href="tel:0508997350" className="hover:text-blue-300 transition-colors">050 899 7350</a>
                                            <a href="tel:0508998716" className="hover:text-blue-300 transition-colors">050 899 8716</a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <span className="text-sm uppercase tracking-widest text-blue-300 font-bold mb-1">Website</span>
                                        <a href="https://www.nexzoneuae.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-300 transition-colors underline decoration-blue-400 underline-offset-4">
                                            www.nexzoneuae.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TermsSection;
