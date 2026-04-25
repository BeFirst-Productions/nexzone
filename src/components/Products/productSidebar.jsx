"use client";

import { useState, useEffect } from "react";
import { productService } from "@/services";

export const ProductSidebar = ({ onSelect, selectedItem }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    // CHANGE: Use an array to track multiple open categories
    const [expandedCategories, setExpandedCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoadingCategories(true);
            try {
                const response = await productService.getAllCategories();
                const data = response?.data?.data || response?.data || [];
                setCategories(data);
                
                // FIX: Defaultly open all subcategories by storing all IDs
                const allIds = data.map(cat => cat._id);
                setExpandedCategories(allIds);
                
            } catch (err) {
                console.error("Failed to fetch categories:", err);
            } finally {
                setLoadingCategories(false);
            }
        };
        fetchCategories();
    }, []);

    // FIX: Toggle specific ID within the array
    const toggleExpand = (e, id) => {
        e.stopPropagation();
        setExpandedCategories(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleMainCategoryClick = (e, cat, hasSubcategories) => {
        onSelect(cat.name, cat._id); 
        if (!hasSubcategories) {
            setIsMobileMenuOpen(false);
        }
        // If you want clicking the name to also toggle the accordion:
        // if (hasSubcategories) toggleExpand(e, cat._id);
    };

    const handleLeafClick = (name, id) => {
        onSelect(name, id);
        setIsMobileMenuOpen(false);
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
                    <div className="lg:hidden text-white">
                        <svg
                            className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className={`flex-1 flex flex-col py-2 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'}`}>
                <div className="overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-none scrollbar-hide">
                    
                    <div className="flex flex-col border-b border-white/5">
                        <div
                            onClick={() => handleLeafClick("All Products", undefined)}
                            className={`px-5 py-4 cursor-pointer text-sm font-medium ${selectedItem === "All Products" ? 'bg-[#048BFF] text-white' : 'text-gray-300 hover:bg-[#112233]'}`}
                        >
                            All Products
                        </div>
                    </div>

                    {!loadingCategories && categories.map((cat) => {
                        const isSelected = selectedItem === cat.name;
                        const subcategories = cat.subcategories || cat.subCategories || [];
                        const hasSubcategories = subcategories.length > 0;
                        // CHECK: Is this specific category ID in our expanded list?
                        const isExpanded = expandedCategories.includes(cat._id);

                        return (
                            <div key={cat._id} className="flex flex-col border-b border-white/5">
                                <div
                                    className={`flex items-center justify-between px-5 py-4 cursor-pointer ${isSelected ? 'bg-[#048BFF] text-white' : 'text-gray-300 hover:bg-[#112233]'}`}
                                    onClick={(e) => handleMainCategoryClick(e, cat, hasSubcategories)}
                                >
                                    <span className="text-sm font-medium truncate">{cat.name}</span>
                                    {hasSubcategories && (
                                        <div onClick={(e) => toggleExpand(e, cat._id)} className="p-1">
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {hasSubcategories && (
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-white/5 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {subcategories.map((sub) => (
                                            <div
                                                key={sub._id}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleLeafClick(sub.name, sub._id);
                                                }}
                                                className={`px-10 py-3 text-sm cursor-pointer border-l-4 transition-all ${selectedItem === sub.name ? 'bg-[#048BFF]/20 text-[#048BFF] border-[#048BFF] font-bold' : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'}`}
                                            >
                                                {sub.name}
                                            </div>
                                        ))}
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