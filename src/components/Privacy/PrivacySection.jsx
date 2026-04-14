import React from 'react';
import Container from '../Common/Layout/Container';

const PrivacySection = () => {
    const lastUpdated = "April 14, 2026";

    const sections = [
        {
            id: "collection",
            title: "1. Information We Collect",
            content: [
                { label: "Personal Information", desc: "Name, phone number, email address, company name" },
                { label: "Business Information", desc: "Address, service requirements, inquiry details" },
                { label: "Technical Data", desc: "IP address, browser type, device information, website usage data" }
            ]
        },
        {
            id: "usage",
            title: "2. How We Use Your Information",
            content: [
                "Respond to inquiries and provide quotations",
                "Deliver printer rental, AMC, and sales services",
                "Improve our website and customer experience",
                "Send service updates, offers, or important notifications",
                "Comply with legal and regulatory requirements"
            ]
        },
        {
            id: "sharing",
            title: "3. Sharing of Information",
            introduction: "We do not sell or rent your personal information. We may share your data only in the following cases:",
            content: [
                "With trusted service providers (for delivery, installation, or support)",
                "When required by law or UAE authorities",
                "To protect our legal rights and business interests"
            ]
        },
        {
            id: "security",
            title: "4. Data Security",
            content: "We take appropriate security measures to protect your data from unauthorized access, misuse, or disclosure. However, no online transmission is 100% secure."
        },
        {
            id: "cookies",
            title: "5. Cookies",
            content: [
                "Our website may use cookies to enhance your browsing experience. Cookies help us understand user behavior and improve our services.",
                "You can choose to disable cookies through your browser settings."
            ]
        },
        {
            id: "links",
            title: "6. Third-Party Links",
            content: "Our website may contain links to third-party websites. NexZone Technologies is not responsible for the privacy practices or content of those websites."
        },
        {
            id: "retention",
            title: "7. Data Retention",
            content: "We retain your information only for as long as necessary to provide services, fulfill legal obligations, or resolve disputes."
        },
        {
            id: "rights",
            title: "8. Your Rights",
            introduction: "You have the right to:",
            content: [
                "Request access to your personal data",
                "Request correction or deletion of your data",
                "Opt out of marketing communications"
            ],
            footer: "To exercise these rights, please contact us."
        },
        {
            id: "updates",
            title: "9. Updates to This Policy",
            content: "We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white text-gray-800">
            <Container>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-[#04447A]">Privacy Policy</h2>
                        <p className="text-gray-500 font-medium">Effective Date: {lastUpdated}</p>
                        <div className="h-1 w-20 bg-[#048BFF] mt-4 rounded-full"></div>
                    </div>

                    <div className="mb-12 p-8 rounded-3xl bg-blue-50 border border-blue-100 shadow-sm leading-relaxed text-gray-700">
                        <p className="text-lg">
                            <span className="font-bold text-[#04447A]">NexZone Technologies UAE</span> (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (<a href="http://www.nexzoneuae.com" className="text-[#048BFF] hover:underline">www.nexzoneuae.com</a>) or use our services.
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
                                    {section.introduction && (
                                        <p className="mb-4 text-gray-700 leading-relaxed font-medium">
                                            {section.introduction}
                                        </p>
                                    )}

                                    {Array.isArray(section.content) ? (
                                        <ul className="space-y-3">
                                            {section.content.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-gray-600 leading-relaxed">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 mr-3 shrink-0"></span>
                                                    <span>
                                                        {typeof item === 'object' ? (
                                                            <>
                                                                <span className="font-bold text-gray-700 mr-1">{item.label}:</span> {item.desc}
                                                            </>
                                                        ) : (
                                                            item
                                                        )}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed">
                                            {section.content}
                                        </p>
                                    )}

                                    {section.footer && (
                                        <p className="mt-4 text-[#04447A] font-semibold italic">
                                            {section.footer}
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
                            <h3 className="text-2xl font-bold mb-6">10. Contact Us</h3>
                            <p className="mb-8 text-blue-100/80 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact:
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

export default PrivacySection;
