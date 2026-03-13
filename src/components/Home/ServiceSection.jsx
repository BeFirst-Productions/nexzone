"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionHeading from "../Common/SectionHeading";

const services = [
    "Printer Service",
    "Printer Sales",
    "Toner & Cartridge",
    "Scanner / Spare Parts",
    "Printer Consumables",
    "Printer Annual Maintenance",
    "Printer Monthly Rental",
    "Office Equipment Supply"
];

export default function ServiceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        /*
         * Section is full-bleed (no Container).
         * Inner div caps at 1440px (= 689 + 12 + 739 from Figma).
         * On mobile the two panels stack vertically.
         */
        <section className="w-full">
            <div className="
                flex flex-col lg:flex-row
                max-w-[1520px] mx-auto
                gap-3
            ">

                {/* ══════════════════════════════════════════
                    LEFT PANEL — dark-navy gradient
                    Figma: 689px wide, tr-18px, br-18px radius
                ══════════════════════════════════════════ */}
                <div className="
                    w-full lg:w-[689px] lg:shrink-0
                    bg-gradient-to-br from-[#071020] via-[#0b2d6e] to-[#1565C8]
                    pl-8 sm:pl-14 lg:pl-36
                    pr-6 sm:pr-8
                    pt-9 sm:pt-11 pb-9 sm:pb-11
                    flex flex-col
                    rounded-tr-[18px] rounded-br-[18px]
                    lg:rounded-tr-[18px] lg:rounded-br-[18px]
                    max-[1024px]:rounded-bl-[18px] max-[1024px]:rounded-tl-[18px]
                ">
                    {/* Title */}
                    <div className="mb-7 sm:mb-9 ">
                        <SectionHeading
                            normalText="Our Services"
                            className="text-white"
                        />
                    </div>

                    {/* Service Buttons — max-w 496px on large screens */}
                    <div className="flex flex-col gap-3 w-[496px] max-w-full">
                        {services.map((service, index) => {
                            const isActive = index === activeIndex;
                            const slug = service.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
                            
                            return (
                                <Link
                                    key={service}
                                    href={`/services#${slug}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`
                                        flex items-center w-full
                                        rounded-2xl px-5 py-3.5
                                        text-sm sm:text-base font-semibold
                                        transition-all duration-300 cursor-pointer
                                        ${isActive
                                            ? "bg-white text-[#0a1628] shadow-lg"
                                            : "bg-[#1565C8] hover:bg-[#1878e8] text-white shadow-md"
                                        }
                                    `}
                                >
                                    <span className="
                                        inline-block w-4 h-4 rounded-full
                                        bg-[#E22386] flex-shrink-0 mr-4
                                    " />
                                    <span className="text-left">{service}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    RIGHT PANEL — dark image panel
                    Figma: 739px wide, tl-18px, bl-18px radius
                ══════════════════════════════════════════ */}
                <div className="
                    w-full lg:flex-1
                    bg-[#0C1111]
                    flex items-center justify-center
                    rounded-tl-[18px] rounded-bl-[18px]
                    lg:rounded-tl-[18px] lg:rounded-bl-[18px]
                    max-[1024px]:rounded-tr-[18px] max-[1024px]:rounded-br-[18px]
                    overflow-hidden
                    min-h-[300px] sm:min-h-[380px] lg:min-h-0
                ">
                    <div className="relative w-full h-full min-h-[300px] sm:min-h-[420px] lg:min-h-[560px]">
                        <Image
                            src="/images/services/service-img.webp"
                            alt="Printer service technician working on a printer"
                            fill
                            sizes="(max-width: 1024px) 100vw, 739px"
                            className="object-contain object-center"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section >
    );
}
