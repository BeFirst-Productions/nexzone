
import React from 'react';
import Link from 'next/link';
import Container from '../Layout/Container';

const InnerHero = ({ title, breadcrumb = [] }) => {
    return (
        <section
            className="relative w-full overflow-hidden py-12 md:py-24"
            style={{
                backgroundImage: "linear-gradient(90deg, rgba(4,68,122,1.00) 0%, rgba(16,101,175,1.00) 50%, rgba(30,120,200,1.00) 100%)",
                backgroundPosition: "center center"
            }}
        >
            {/* Background Decoration: Centered Cross and Dotted Line */}


            <Container className="relative">
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
