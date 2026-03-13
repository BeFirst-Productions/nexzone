"use client";

import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Container';

const ServiceCard = ({ service, index }) => {
    const isEven = index % 2 === 0;
    const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    return (
        <div
            id={slug}
            className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-0 rounded-[20px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl mb-8 last:mb-0 group min-h-0 scroll-mt-24`}
            style={{
                backgroundImage: "linear-gradient(90deg, rgba(21,84,138,1.00) 0%, rgba(11,17,17,1.00) 100%)",
                backgroundPosition: "center center"
            }}
        >
            {/* Image Section */}
            <div className="w-full lg:w-1/3 xl:w-[40%] h-[320px] md:h-[400px] lg:h-auto relative overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent lg:hidden" />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3 xl:w-[60%] p-8 md:p-12 flex items-start gap-4 md:gap-8 relative">
                {/* Index Number - Professional placement side-by-side with text */}
                <div className="shrink-0 mt-1">
                    <span className="text-4xl md:text-5xl font-bold text-[#0D8FFF]/50 select-none tracking-tight">
                        {service.id}
                    </span>
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                        {service.title}
                    </h2>

                    <div className="mb-6">
                        <h3 className="text-[#048BFF] font-semibold text-sm md:text-base uppercase tracking-wider border-b-2 border-[#048BFF] pb-2 inline-block">
                            {service.subtitle}
                        </h3>
                    </div>

                    <p className="text-white text-sm md:text-base leading-relaxed mb-6">
                        {service.description}
                    </p>

                    <p className="text-white text-xs md:text-sm italic border-l-2 border-[#048BFF] pl-4">
                        {service.extraInfo}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ServicesSection = ({ services }) => {
    return (
        <section className="py-20 ">
            <Container>
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesSection;
