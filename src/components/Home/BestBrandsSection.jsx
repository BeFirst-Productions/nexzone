"use client";

import SectionDoublelineHeader from "@/components/Common/SectionDoublelineHeader";
import BrandCard from "../BrandCard";
import { brands } from "@/data/brandData";

export default function BestBrandsSection() {

    const loopBrands = [...brands, ...brands, ...brands];

    return (
        <section
            style={{
                width: "100%",
                background: "linear-gradient(90deg, #15548A 0%, #0B1111 100%)",
                paddingTop: "clamp(30px, 4.5vw, 2px)",
                paddingBottom: "clamp(34px, 5vw, 58px)",
                overflow: "hidden",
            }}
        >

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "clamp(22px, 3.5vw, 10px)",
                }}
            >
                <SectionDoublelineHeader
                    normalText="Best Printer Brands"
                    highlightText=""
                    highlightColor="#ffffff"
                    normalColor="#ffffff"
                    MobfontSize="1.2rem"
                    TabfontSize="3.5vw"
                    DeskfontSize="2rem"
                />
            </div>

            <div
                style={{
                    overflow: "hidden",
                    width: "100%",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
                    maskImage:
                        "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "max-content",
                        animation: "brandMarquee 24s linear infinite",
                    }}
                >
                    {loopBrands.map((brand, idx) => (
                        <BrandCard
                            key={`${brand.name}-${idx}`}
                            name={brand.name}
                            logo={brand.logo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
