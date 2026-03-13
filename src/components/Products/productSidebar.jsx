"use client";

import { useState, useEffect } from "react";
import { productService } from "@/services";


export const ProductSidebar = ({ onSelect, selectedItem }) => {
    const [openCategory, setOpenCategory] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [expandedCategory, setExpandedCategory] = useState(null);


    useEffect(() => {
        const fetchCategories = async () => {
            setLoadingCategories(true);
            try {
                const response = await productService.getAllCategories();
                const data = response?.data?.data || response?.data || [];
                setCategories(data);
            } catch (err) {
                console.error("Failed to fetch categories:", err);
            } finally {
                setLoadingCategories(false);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryClick = (name, id) => {
        onSelect(name, id);
        setIsMobileMenuOpen(false);
        setExpandedCategory(null);
    };

    const toggleExpand = (e, id) => {
        e.stopPropagation();
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    return (
        <div className="w-full lg:w-72 flex flex-col rounded-2xl shadow-lg border border-gray-200 bg-black relative">


            <div
                className="bg-[#113578] p-5 flex flex-col cursor-pointer lg:cursor-default"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-white font-bold text-base md:text-lg truncate">
                        Product Categories
                    </h2>
                    <div className="lg:hidden text-white transition-transform duration-300">
                        <svg
                            className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                {selectedItem && (
                    <div className="mt-2 text-[#048BFF] text-xs font-semibold bg-white/10 px-3 py-1 rounded-full w-fit max-w-full truncate">
                        Selected: {selectedItem}
                    </div>
                )}
            </div>


            <div className={`flex-1 flex flex-col py-2 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'
                }`}>
                <div className="overflow-y-visible max-h-[calc(100vh-200px)] lg:max-h-none scrollbar-hide">


                    <div className="flex flex-col border-b border-white/5">
                        <div
                            onClick={() => handleCategoryClick("All Products", undefined)}
                            className={`flex items-center px-5 py-4 cursor-pointer transition-colors text-sm font-medium ${selectedItem === "All Products"
                                ? 'bg-[#048BFF] text-white font-semibold'
                                : 'text-gray-300 hover:bg-[#112233]'
                                }`}
                        >
                            All Products
                        </div>
                    </div>


                    {loadingCategories && (
                        <div className="px-5 py-4 text-gray-400 text-sm animate-pulse">
                            Loading categories...
                        </div>
                    )}


                    {!loadingCategories && categories.map((cat) => {
                        const isSelected = selectedItem === cat.name;
                        const subcategories = cat.subcategories || cat.subCategories || [];
                        const hasSubcategories = subcategories.length > 0;
                        const isSubSelected = subcategories.some(sub => sub.name === selectedItem);
                        const isExpanded = expandedCategory === cat._id;

                        return (
                            <div
                                key={cat._id}
                                className="relative flex flex-col border-b border-white/5 last:border-0 group/parent"
                                onMouseEnter={() => setHoveredCategory(cat._id)}
                                onMouseLeave={() => setHoveredCategory(null)}
                            >
                                <div
                                    className={`flex items-center justify-between px-5 py-4 cursor-pointer transition-all duration-200 ${isSelected
                                        ? 'bg-[#048BFF] text-white font-semibold'
                                        : isSubSelected
                                            ? 'bg-[#113578]/60 text-white font-medium'
                                            : 'text-gray-300 hover:bg-[#112233] hover:text-white'
                                        }`}
                                    onClick={(e) => {
                                        if (hasSubcategories) {
                                            toggleExpand(e, cat._id);
                                        } else {
                                            handleCategoryClick(cat.name, cat._id);
                                        }
                                    }}
                                >
                                    <span className="text-sm font-medium truncate pr-2">{cat.name}</span>

                                    {hasSubcategories && (
                                        <div
                                            className="flex items-center"
                                            onClick={(e) => toggleExpand(e, cat._id)}
                                        >
                                            {/* Desktop Arrow */}
                                            <svg
                                                className={`w-4 h-4 hidden lg:block transition-transform duration-200 ${hoveredCategory === cat._id || isSubSelected ? 'translate-x-1 opacity-100' : 'opacity-40'}`}
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>

                                            {/* Mobile Arrow */}
                                            <svg
                                                className={`w-5 h-5 lg:hidden transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white' : 'text-gray-500'}`}
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Subcategories (Accordion) */}
                                {hasSubcategories && (
                                    <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/40 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {subcategories.map((sub) => (
                                            <div
                                                key={sub._id}
                                                onClick={() => handleCategoryClick(sub.name, sub._id)}
                                                className={`px-10 py-3 text-sm cursor-pointer border-l-4 transition-all ${selectedItem === sub.name
                                                    ? 'bg-[#048BFF] text-white border-white font-bold'
                                                    : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {sub.name}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Desktop Subcategories (Flyout) */}
                                {hasSubcategories && hoveredCategory === cat._id && (
                                    <div
                                        className="absolute left-[100%] top-0 w-64 hidden lg:block z-50 animate-in fade-in slide-in-from-left-2 duration-200"
                                        style={{ paddingLeft: '4px' }} // Using padding instead of margin to prevent mouse-out gap
                                    >
                                        <div className="bg-[#112233] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md py-2 ring-1 ring-black/50">
                                            <div className="px-4 py-2 border-b border-white/5 mb-1 bg-white/5">
                                                <p className="text-[10px] uppercase tracking-wider text-[#048BFF] font-bold">Subcategories</p>
                                            </div>
                                            {subcategories.map((sub) => (
                                                <div
                                                    key={sub._id}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleCategoryClick(sub.name, sub._id);
                                                        setHoveredCategory(null);
                                                    }}
                                                    className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${selectedItem === sub.name
                                                        ? 'bg-[#048BFF] text-white font-semibold'
                                                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                                        }`}
                                                >
                                                    {sub.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};