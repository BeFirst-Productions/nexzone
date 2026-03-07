"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Common/Layout/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { accessories } from "@/data/accessories";
import SectionDoublelineHeader from "../Common/SectionDoublelineHeader";

export default function AccessoriesSection() {
    return (
        <section className="w-full py-10 md:py-20 bg-[#EFEEEE]">
            <Container>
                <div className="mb-12 flex justify-center">

                    <SectionDoublelineHeader
                        normalText="Our"
                        highlightText="Accessories"
                        highlightColor="#1565C8"
                    />
                </div>

                {/* Accessories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
                    {accessories.map((accessory) => (
                        <Link
                            key={accessory.id}
                            href={`/accessories/${accessory.slug}`}
                            className="group bg-white rounded-2xl border-2 border-[#15548A] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Accessory Image */}
                            <div className="relative w-full h-60 lg:h-80 bg-white flex items-center justify-center p-6">
                                <Image
                                    src={accessory.image}
                                    alt={accessory.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="group-hover:scale-105 transition-transform duration-300 py-6 px-3"
                                />
                            </div>

                            {/* Accessory Name */}
                            <div className="p-4 bg-[#15548A] text-white text-center">
                                <h3 className="text-base font-semibold leading-snug">
                                    {accessory.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
