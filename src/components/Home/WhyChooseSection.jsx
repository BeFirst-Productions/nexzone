"use client";

import Container from "@/components/Common/Layout/Container";
import SectionDoublelineHeader from "@/components/Common/SectionDoublelineHeader";
import { features } from "@/data/WhychooseData";
import FeatureCard from "../whyChooseCards";





export default function WhyChooseSection() {
    return (
        <section className="w-full py-10 md:py-16 lg:py-20 ">
            <Container>
                {/* Heading */}
                <div className="w-full flex justify-center">
                    <SectionDoublelineHeader
                        normalText="Why"
                        highlightText="Choose Us"
                        highlightColor="#1565C8"
                    />
                </div>

                {/* 3×2 grid — responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            alt={feature.alt}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
