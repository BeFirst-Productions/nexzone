"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/Common/Layout/Container";
import { slides } from "@/data/heroData";


const ANIM_DURATION = 1000; // ms — must match CSS animation duration

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(-1);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setPrevIndex((prev) => {
                // We capture old current here via closure trick below
                return prev; // will be updated in setCurrentIndex callback
            });
            setCurrentIndex((prev) => {
                setPrevIndex(prev); // capture old current as prevIndex
                return (prev + 1) % slides.length;
            });
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    // Reset prevIndex after animation completes so stale exit state is cleaned up
    useEffect(() => {
        if (prevIndex === -1) return;
        const t = setTimeout(() => setPrevIndex(-1), ANIM_DURATION + 50);
        return () => clearTimeout(t);
    }, [prevIndex]);

    const activeSlide = slides[currentIndex];

    return (
        <section
            className="w-full relative overflow-hidden"
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(4, 68, 122, 1.00) 1%, rgba(16, 101, 175, 1.00) 37%, rgb(142 184 222) 100%)',
                backgroundPosition: 'center center'
            }}
        >
            <Container>

                <div className="
                    flex flex-col lg:flex-row
                    items-center justify-between
                    lg:min-h-[calc(100vh-110px)]
                    pt-10 pb-20 lg:py-0
                    gap-6 lg:gap-12
                    w-full relative
                ">


                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start z-10 text-white">


                        {/* Grid Stack solves the absolute positioning height collapse. 
                            The container naturally grows to the tallest slide. */}
                        <div className="
                            grid w-full overflow-hidden
                            mb-6 sm:mb-8 md:mb-12
                        ">
                            {slides.map((slide, index) => {
                                let animClass = "hidden";
                                if (index === currentIndex) {
                                    animClass = "slide-enter z-10";
                                } else if (index === prevIndex) {
                                    animClass = "slide-exit z-0";
                                }

                                return (
                                    <div
                                        key={`content-${slide.id}`}
                                        className={`flex flex-col items-start space-y-4 md:space-y-6 pb-4 col-start-1 row-start-1 ${animClass}`}
                                    >
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.2] md:leading-[1.1] tracking-tight drop-shadow-sm">
                                            {slide.titleLine1Part1}
                                            <span className="text-[#32CD32]">{slide.titleLine1Highlight1}</span>
                                            <span className="text-[#00FFFF]">{slide.titleLine1Highlight2}</span>
                                            <br />
                                            {slide.titleLine2}
                                        </h1>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl font-medium whitespace-pre-line drop-shadow-sm leading-relaxed">
                                            {slide.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-900 transition-colors shadow-lg w-max z-30"
                        >
                            Talk to Our Experts
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2 mt-px">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>

                    {/* ── Right Image ── */}
                    <div className="
                        w-full lg:w-1/2 relative
                        flex justify-center lg:justify-end items-center
                        h-[260px] sm:h-[320px] md:h-[380px] lg:h-[500px] xl:h-[600px]
                    ">

                        <div className="absolute bottom-[5%] left-1/2 -translate-x-[45%] w-[110%] lg:w-[130%] max-w-[900px] z-0 pointer-events-none flex justify-center">
                            <svg viewBox="0 0 749 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm scale-y-125">
                                <ellipse cx="267.783" cy="287.29" rx="267.783" ry="287.29" transform="matrix(0.945869 -0.324548 0.95803 0.286669 -154.476 124.283)" fill="#15548A" fillOpacity="0.4" />
                            </svg>
                        </div>

                        {/* Image slide */}
                        <div
                            key={`image-${activeSlide.id}`}
                            className="relative w-full h-full max-w-[460px] lg:max-w-full lg:absolute lg:inset-y-0 lg:right-0 animate-zoom-in-inner z-10"
                        >
                            <Image
                                src={activeSlide.image}
                                alt={`Banner ${activeSlide.id}`}
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'center right' }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Slide indicators */}
                    <div className="flex justify-center gap-3 absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => {
                                    setPrevIndex(currentIndex);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/60"}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
