"use client";

import Image from "next/image";
import Container from "@/components/Common/Layout/Container";
import SectionHeading from "@/components/Common/SectionHeading";

const additionalServices = [
    {
        id: 1,
        label: "CCTV Service",
        image: "/images/services/cctv-service.webp",
        alt: "Technician installing CCTV camera on a wall using a ladder",
    },
    {
        id: 2,
        label: "Networking Service",
        image: "/images/services/networking-service.webp",
        alt: "Engineers working in a server room with network racks",
    },
    {
        id: 3,
        label: "Biometric Service",
        image: "/images/services/biometric-service.webp",
        alt: "Biometric fingerprint scanner device mounted on office wall",
    },
    {
        id: 4,
        label: "IT Service",
        image: "/images/services/it-service.webp",
        alt: "IT professional working at a computer in a modern office",
    },
];

export default function AdditionalServices() {
    return (
        <section className="w-full py-10 md:py-16 lg:py-20 ">
            <Container>
                {/* Section Heading */}
                <div className="mb-12 md:mb-14 lg:mb-16 w-full">
                    <SectionHeading
                        normalText="Additional"
                        highlightText="Services"
                        highlightColor="text-[#1565C8]"
                    />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {additionalServices.map((service) => (
                        <div
                            key={service.id}
                            className="relative rounded-2xl overflow-hidden group cursor-pointer"
                            style={{ aspectRatio: "3/4" }}
                        >
                            {/* Image */}
                            <Image
                                src={service.image}
                                alt={service.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                unoptimized={service.image.startsWith("https")}
                            />

                            {/* Dark overlay gradient at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                            {/* Blue pill label at bottom */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%]">
                                <div className="bg-[#1565C8]/90 backdrop-blur-sm text-white text-sm sm:text-base font-medium text-center rounded-full py-2.5 px-4 shadow-lg">
                                    {service.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
