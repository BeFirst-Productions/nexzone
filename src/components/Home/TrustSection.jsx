"use client";
import Container from "@/components/Common/Layout/Container";
import TrustCards from "../TrustCards";
import { TrustData } from "@/data/TrustData";
import SectionDoublelineHeader from "../Common/SectionDoublelineHeader";

export default function TrustSection() {
    return (
        <section className="w-full py-10 md:py-16 lg:py-20">
            <Container>
                <div
                    style={{
                        position: "relative",
                        borderRadius: "24px",
                        overflow: "hidden",
                        backgroundImage: "linear-gradient(90deg, rgba(21,84,138,1.00) 0%, rgba(11,17,17,1.00) 100%)",
                        backgroundPosition: "center center",
                        padding: "40px 32px 48px",
                    }}
                >

                    <div style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "220px",
                        height: "220px",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}>
                        <img
                            src="/images/icons/gradient-decorator.svg"
                            alt=""
                            aria-hidden="true"
                            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "top right" }}
                        />
                    </div>

                    <div className="flex w-full justify-center">
                        <SectionDoublelineHeader
                            normalText="Where Trust Matters"
                            highlightText=""
                            normalColor="#ffffff"
                            MobfontSize="1.3rem"
                        />
                    </div>

                    <div
                        style={{ position: "relative", zIndex: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-6"
                    >
                        {TrustData.map((f) => (
                            <TrustCards
                                key={f.id}
                                title={f.title}
                                description={f.description}
                                icon={f.icon}
                                alt={f.alt}
                            />
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}
