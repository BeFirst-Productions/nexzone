"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/Common/Layout/Container";

const slides = [
    {
        id: 1,
        titleLine1Part1: "Torem ",
        titleLine1Highlight1: "ipsum ",
        titleLine1Highlight2: "dolor",
        titleLine2: "consectetur adipiscing elit.",
        description: "Torem ipsum dolor sit amet, consectetur adipiscing elit.\nEtiam eu turpis molestie, dictum est a, mattis tellus.",
        image: "/images/banner/banner-01.webp"
    },
    {
        id: 2,
        titleLine1Part1: "Premium ",
        titleLine1Highlight1: "office ",
        titleLine1Highlight2: "copiers",
        titleLine2: "for your growing business.",
        description: "Equip your workspace with our advanced and reliable printers.\nHigh performance, low maintenance, and perfect quality.",
        image: "/images/banner/banner-02.webp"
    },
    {
        id: 3,
        titleLine1Part1: "Smart ",
        titleLine1Highlight1: "printing ",
        titleLine1Highlight2: "solutions",
        titleLine2: "designed for efficiency.",
        description: "Streamline your document workflow with smart digital solutions.\nConnect directly to cloud services and print from anywhere.",
        image: "/images/banner/banner-03.webp"
    }
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(-1);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const activeSlide = slides[currentIndex];

    return (
        <section
            className="w-full relative overflow-hidden"
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(4,68,122,1.00) 1%, rgba(16,101,175,1.00) 37%, rgba(213,224,234,1.00) 100%)',
                backgroundPosition: 'center center'
            }}
        >
            <Container>
                {/* 
                  We use min-h-[calc(100vh-110px)] because the navbar is 110px tall, 
                  ensuring the hero section exactly fills the rest of the screen height without scrolling.
                */}
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-110px)] py-12 lg:py-0 gap-8 lg:gap-12 w-full relative pb-16 lg:pb-0">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start z-10 text-white relative min-h-[350px] lg:min-h-[450px]">

                        {/* Animated Text Section */}
                        <div className="relative w-full min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[380px]">   {slides.map((slide, index) => {
                            let animClass = "hidden";

                            if (index === currentIndex) {
                                animClass = "slide-enter absolute top-0 left-0 w-full";
                            } else if (index === prevIndex) {
                                animClass = "slide-exit absolute top-0 left-0 w-full";
                            }

                            return (
                                <div
                                    key={`content-${slide.id}`}
                                    className={`flex flex-col items-start space-y-4 md:space-y-8 xl:space-y-6 ${animClass}`}
                                >
                                    <h1 className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.15] md:leading-[1.1] tracking-tight drop-shadow-sm">
                                        {slide.titleLine1Part1}
                                        <span className="text-[#32CD32]">{slide.titleLine1Highlight1}</span>
                                        <span className="text-[#00FFFF]">{slide.titleLine1Highlight2}</span><br />
                                        {slide.titleLine2}
                                    </h1>
                                    <p className="text-sm md:text-lg lg:text-xl max-w-xl  font-medium whitespace-pre-line drop-shadow-sm">
                                        {slide.description}
                                    </p>
                                </div>
                            );
                        })}
                        </div>

                        {/* Static Button */}
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-900 transition-colors shadow-lg w-max relative z-30 mt-6 md:mt-0"
                        >
                            Button
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2 mt-px">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Image Container */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center h-[280px] sm:h-[320px] lg:h-[500px] xl:h-[600px]">

                        {/* Decorative Background SVG Shape */}
                        <div className="absolute bottom-[8%] md:bottom-[5%] lg:bottom-[17%] 2xl:bottom-[10%]  left-2/5 -translate-x-[40%] lg:-translate-x-[35%] w-[120%] md:w-[90%] lg:w-[130%] 2xl:w-[125%] max-w-[900px] 2xl:max-w-[1100px] z-0 pointer-events-none flex justify-center">
                            <svg viewBox="0 0 749 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm scale-y-125">
                                <ellipse cx="267.783" cy="287.29" rx="267.783" ry="287.29" transform="matrix(0.945869 -0.324548 0.95803 0.286669 -154.476 124.283)" fill="#15548A" fillOpacity="0.4" />
                            </svg>
                        </div>

                        {/* Image Slide */}
                        <div
                            key={`image-${activeSlide.id}`}
                            className="relative w-full h-full max-w-[500px] lg:max-w-full aspect-square lg:aspect-auto lg:absolute lg:inset-y-0 lg:right-0 animate-zoom-in-inner z-10"
                        >
                            <Image
                                src={activeSlide.image}
                                alt={`Banner ${activeSlide.id}`}
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center right' }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Centered Slide indicators */}
                    <div className="flex justify-center gap-3 absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 w-full lg:w-auto">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => {
                                    setPrevIndex(currentIndex);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
