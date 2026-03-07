"use client";

import Container from "@/components/Common/Layout/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/data/testimonialsData";

export default function TestimonialsSection() {
    const row1 = testimonialsData.slice(0, 3);
    const row2 = testimonialsData.slice(3, 6);

    return (
        <section
            className="
                relative w-full overflow-hidden
                pt-[clamp(40px,5vw,80px)]
                pb-[clamp(180px,22vw,180px)]
                max-[900px]:pb-[clamp(100px,15vw,180px)]
                max-[560px]:pb-[clamp(60px,10vw,120px)]
            "
        >

            <img
                aria-hidden="true"
                src="/images/shapes/vector-bg.svg"
                alt=""
                className="
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    w-[clamp(600px,100vw,960px)]
                    opacity-50 pointer-events-none z-0 select-none
                    max-[560px]:w-[130vw] max-[560px]:opacity-35
                "
            />

            <Container style={{ position: "relative", zIndex: 1 }}>
                <div className="mb-10 md:mb-14">
                    <SectionHeading
                        normalText="Testimonials"
                        highlightText=""
                        highlightColor=""
                    />
                </div>


                <div
                    className="
                        grid grid-cols-3
                        max-[900px]:grid-cols-2
                        max-[560px]:grid-cols-1
                        gap-[clamp(14px,2.2vw,28px)]
                        mb-[clamp(14px,2.2vw,28px)]
                    "
                >
                    {row1.map((t) => (
                        <TestimonialCard key={t.id} {...t} />
                    ))}
                </div>


                <div
                    className="
                        grid grid-cols-3
                        max-[900px]:grid-cols-2
                        max-[560px]:grid-cols-1
                        gap-[clamp(14px,2.2vw,28px)]
                        pl-[clamp(30px,8.33%,140px)]
                        max-[900px]:pl-0
                    "
                >
                    {row2.map((t) => (
                        <TestimonialCard key={t.id} {...t} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
