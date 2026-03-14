"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { productService } from "@/services";

export default function SearchBar({ isMobile = false, isFooter = false }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Debounced API search
    useEffect(() => {
        const timer = setTimeout(async () => {
            const trimmed = query.trim();
            if (trimmed.length >= 1) {
                setIsLoading(true);
                try {
                    const response = await productService.searchProducts(trimmed);
                    const data = response?.data?.data || [];
                    setResults(data.slice(0, 6)); // show max 6 in dropdown
                    setShowDropdown(true);
                } catch (err) {
                    console.error("Search error:", err);
                    setResults([]);
                    setShowDropdown(true); // show "no results" state
                } finally {
                    setIsLoading(false);
                }
            } else {
                setResults([]);
                setShowDropdown(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    const handleSelectProduct = (id) => {
        setQuery("");
        setShowDropdown(false);
        router.push(`/products/${id}`);
    };

    const handleViewAllResults = () => {
        if (!query.trim()) return;
        setShowDropdown(false);
        router.push(`/products?search=${encodeURIComponent(query.trim())}`);
        setQuery("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && query.trim().length >= 1) {
            handleViewAllResults();
        }
    };

    const getFirstImage = (product) => {
        if (product.images && product.images.length > 0) {
            return product.images[0].url || null;
        }
        return null;
    };

    let containerClasses = "";
    if (isMobile) {
        containerClasses = "relative flex items-center rounded-full w-full border border-gray-200 shadow-sm overflow-visible bg-white";
    } else if (isFooter) {
        containerClasses = "relative flex items-stretch rounded-full w-full md:w-[400px] lg:w-[450px] xl:w-[540px] shadow-2xl overflow-visible bg-white";
    } else {
        containerClasses = "relative flex items-stretch rounded-full w-44 lg:w-56 xl:w-72 2xl:w-80 border border-[#077ADE] shadow-sm overflow-visible bg-[#F8F9FA]";
    }

    return (
        <div className={containerClasses} ref={dropdownRef}>
            {/* Button on LEFT for Navbar/Mobile */}
            {!isFooter && (
                <button
                    onClick={handleViewAllResults}
                    className={`bg-[#077ADE] text-white px-3 md:px-5 flex items-center justify-center transition-colors rounded-l-full h-full`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            )}

            <input
                type="text"
                placeholder={isFooter ? "Search products..." : "Search in this store"}
                className={`w-full bg-transparent text-xs md:text-sm text-gray-700 ${(isMobile || isFooter) ? 'py-4 px-6' : 'py-2.5 md:py-3 px-2'} focus:outline-none placeholder-gray-500 font-medium ${!isFooter ? '' : 'rounded-l-full'}`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                    if (results.length > 0) setShowDropdown(true);
                }}
            />

            {/* Loading Spinner */}
            {isLoading && (
                <div className={`absolute ${isFooter ? 'right-32' : 'right-4'} top-1/2 -translate-y-1/2`}>
                    <div className="w-4 h-4 border-2 border-[#077ADE] border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Button on RIGHT for Footer */}
            {isFooter && (
                <button
                    onClick={handleViewAllResults}
                    className="bg-[#077ADE] hover:bg-blue-600 text-white px-10 font-bold transition-all active:scale-95 flex items-center justify-center whitespace-nowrap rounded-r-full"
                >
                    Search
                </button>
            )}

            {/* Search Results Dropdown */}
            {showDropdown && !isLoading && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2 max-h-[400px] overflow-y-auto">
                        {results.length > 0 ? (
                            <>
                                {results.map((product) => {
                                    const imgSrc = getFirstImage(product) || '/images/products/placeholder.png';
                                    return (
                                        <button
                                            key={product._id}
                                            onClick={() => handleSelectProduct(product._id)}
                                            className="w-full flex items-center gap-3 p-2 hover:bg-blue-50 rounded-xl transition-colors text-left group"
                                        >
                                            <div className="relative w-12 h-12 shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                                                <Image
                                                    src={imgSrc}
                                                    alt={product.name || "Product"}
                                                    fill
                                                    className="object-contain p-1 group-hover:scale-110 transition-transform"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-gray-900 truncate group-hover:text-[#077ADE] transition-colors">
                                                    {product.name}
                                                </h4>
                                                <p className="text-[10px] text-gray-500 truncate">
                                                    {product.category?.name || "In Products"}
                                                </p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-300 group-hover:text-[#077ADE] group-hover:translate-x-1 transition-all">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </button>
                                    );
                                })}

                                {/* View all results button */}
                                <button
                                    onClick={handleViewAllResults}
                                    className="w-full mt-1 py-2.5 px-4 bg-[#113578] hover:bg-[#077ADE] text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                    View all results for &quot;{query}&quot;
                                </button>
                            </>
                        ) : (
                            <div className="py-8 px-4 text-center">
                                <p className="text-sm text-gray-500">No products found for &quot;{query}&quot;</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
