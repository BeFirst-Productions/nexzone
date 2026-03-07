"use client";

import { useState } from "react";
import Container from "@/components/Common/Layout/Container";
import FaqItem from "@/components/FaqItem";
import FaqLeftPanel from "@/components/FaqLeftPanel";
import { faqData } from "@/data/faqData";


export default function FaqSection() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="w-full py-10 md:py-16 lg:py-20">
            <Container>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.6fr",
                        gap: "clamp(32px, 5vw, 72px)",
                        alignItems: "start",
                    }}
                    className="faq-grid"
                >
                    {/* Left: heading + description + printer image */}
                    <FaqLeftPanel />

                    {/* Right: accordion list */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        {faqData.map((item) => (
                            <FaqItem
                                key={item.id}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openId === item.id}
                                onToggle={() => toggle(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </Container>

            {/* Responsive: stack on small screens */}
            <style>{`
                @media (max-width: 768px) {
                    .faq-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
