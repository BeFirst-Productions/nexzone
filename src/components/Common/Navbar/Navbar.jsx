"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navbarItems";
import Container from "@/components/Common/Layout/Container";
import SearchBar from "./SearchBar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();

    return (
        <nav className="w-full relative z-50">
            <Container>
                <div className="flex justify-between items-center w-full h-[110px] gap-2 lg:gap-3 xl:gap-6">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <div className="relative w-32 h-14 md:w-40 md:h-20 xl:w-48 xl:h-24">
                                <Image
                                    src="/images/branding/NEXZONE LOGO.svg"
                                    alt="Nexzone Logo"
                                    fill
                                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex justify-center bg-white/50 rounded-3xl shrink">
                        <div className="flex space-x-1 lg:space-x-2 xl:space-x-4 px-1 lg:px-2 xl:px-4 py-1.5 lg:py-2.5 rounded-full items-center">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                if (link.items) {
                                    return (
                                        <div key={link.label} className="relative group">
                                            <button
                                                className={`flex items-center gap-1 px-2 lg:px-3 xl:px-4 py-1.5 md:py-2 rounded-md text-sm lg:text-base xl:text-lg font-light transition-colors whitespace-nowrap ${isActive ? "text-[#084274]" : "text-black hover:text-[#084274]"
                                                    }`}
                                            >
                                                {link.label}
                                                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div className="absolute left-0 mt-0 w-64 bg-white rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                                                <div className="py-2">
                                                    {link.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.label}
                                                            href={subItem.href}
                                                            download={subItem.download}
                                                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#084274] transition-colors"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`px-2 lg:px-3 xl:px-4 py-1.5 md:py-2 rounded-md text-sm lg:text-base xl:text-lg font-light transition-colors whitespace-nowrap ${isActive ? "text-[#084274]" : "text-black hover:text-[#084274]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex items-stretch shrink-0">
                        <SearchBar />
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex flex-1 justify-end items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0073e6]"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                if (link.items) {
                                    return (
                                        <div key={link.label} className="space-y-1">
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                                className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${activeDropdown === link.label ? "text-[#084274] bg-blue-50/50" : "text-black hover:text-[#084274] hover:bg-gray-50"
                                                    }`}
                                            >
                                                {link.label}
                                                <svg className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {activeDropdown === link.label && (
                                                <div className="pl-4 space-y-1">
                                                    {link.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.label}
                                                            href={subItem.href}
                                                            download={subItem.download}
                                                            onClick={() => setIsOpen(false)}
                                                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-[#084274] hover:bg-gray-50 transition-colors"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? "text-[#084274] bg-blue-50/50" : "text-black hover:text-[#084274] hover:bg-gray-50"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="pt-4 pb-4 px-4 border-t border-gray-100 bg-gray-50">
                            <SearchBar isMobile />
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
}
