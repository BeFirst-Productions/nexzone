import React from 'react';
import Link from 'next/link';
import Container from '../Layout/Container';

// Added `bgImage` to the props so you can pass different images for different pages
const InnerHero = ({ title, breadcrumb = [], bgImage = "/images/bg/printer-banner.jpeg" }) => {
    return (
       <section
    className="relative w-full overflow-hidden py-12 md:py-24"
    style={{
        // We use a gradient + image. The gradient ensures the left side stays dark/blue 
        // while the image is anchored to the right.
        backgroundImage: `linear-gradient(to right, #003366 20%, transparent 80%), url('${bgImage}')`,
        backgroundPosition: "right center", // Changed from center center to right center
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#003366" // Fallback color that matches your image's dark blue
    }}
>
            {/* Optional: Add a dark overlay if your image is too bright for the white text */}
            {/* <div className="absolute inset-0 bg-black/40 z-0"></div> */}

            <Container className="relative z-10">
                <div className="flex flex-col gap-2 md:gap-4 relative h-full min-h-[140px] md:min-h-[180px] justify-center">
                    {/* Left Breadcrumb - Positioned inside container for all screens */}
                    <nav aria-label="Breadcrumb" className="md:absolute md:left-0 z-20">
                        <ol className="flex items-center space-x-2 text-base md:text-lg font-medium">
                            <li>
                                <Link href="/" className="text-white hover:text-blue-100 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white/60 select-none text-xs md:text-xl font-bold">&gt;</li>
                            {breadcrumb.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li>
                                        <Link
                                            href={item.href}
                                            className={`${index === breadcrumb.length - 1 ? 'text-[#048BFF] font-bold' : 'text-white transition-colors hover:text-blue-100'}`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                    {index < breadcrumb.length - 1 && (
                                        <li className="text-white/60 select-none text-xs md:text-xl font-bold">&gt;</li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ol>
                    </nav>

                    {/* Centered Title */}
                    <div className="w-full text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                            {title}
                        </h1>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default InnerHero;