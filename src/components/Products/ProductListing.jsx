"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { productService } from '@/services';
import { ProductSidebar } from './productSidebar';
import { ProductCard } from './productCard';
import { AlertCircle, PackageSearch, Search } from 'lucide-react';

const ProductListing = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    // ── Get initial values from URL ──────────────────────────────────────────
    const urlSearchQuery = searchParams.get('search') || '';
    const urlCategoryId = searchParams.get('category') || '';
    const urlCategoryName = searchParams.get('name') || '';

    // ── Local State ──────────────────────────────────────────────────────────
    const [currentPage, setCurrentPage] = useState(1);
    
    // Initialize state directly from URL to avoid double-fetching on mount
    const [selectedCategoryId, setSelectedCategoryId] = useState(urlCategoryId || undefined);
    const [selectedCategory, setSelectedCategory] = useState(
        urlCategoryName || (urlSearchQuery ? `Search: "${urlSearchQuery}"` : "All Products")
    );

    const [products, setProducts] = useState([]);
    const [initialLoading, setInitialLoading] = useState(true);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    
    const itemsPerPage = 16;
    const isFirstRender = useRef(true);

    // ── Update state when URL Parameters change ──────────────────────────────
    useEffect(() => {
        // Sync state with URL only if they differ (prevents loops)
        if (urlSearchQuery) {
            setSelectedCategory(`Search: "${urlSearchQuery}"`);
            setSelectedCategoryId(undefined);
        } else if (urlCategoryId) {
            setSelectedCategoryId(urlCategoryId);
            setSelectedCategory(urlCategoryName || "Category products");
        } else {
            // When URL becomes clean, reset to All Products if we were in a URL-driven state
            if (urlSearchQuery === '' && urlCategoryId === '' && !isFirstRender.current) {
                setSelectedCategory("All Products");
                setSelectedCategoryId(undefined);
            }
        }
        setCurrentPage(1);
    }, [urlSearchQuery, urlCategoryId, urlCategoryName]);

    // ── Fetch Logic ──────────────────────────────────────────────────────────
    useEffect(() => {
        const fetchProducts = async () => {
            // Use initialLoading for the very first fetch, fetching for updates
            if (isFirstRender.current) {
                setInitialLoading(true);
                isFirstRender.current = false;
            } else {
                setFetching(true);
            }
            setError(null);

            try {
                // Determine search mode vs listing mode
                // urlSearchQuery (from URL) takes priority for "Search Mode"
                if (urlSearchQuery) {
                    const response = await productService.searchProducts(urlSearchQuery);
                    const fetchedProducts = response?.data?.data || [];
                    setProducts(fetchedProducts);
                    setTotalPages(1);
                } else {
                    // Normal listing mode (optionally filtered by category)
                    const params = {
                        page: currentPage,
                        limit: itemsPerPage,
                        ...(selectedCategoryId ? { category: selectedCategoryId } : {}),
                    };
                    const response = await productService.getAllProducts(params);
                    const fetchedProducts = response?.data?.data || [];
                    const total = response?.data?.totalPages || 1;
                    setProducts(fetchedProducts);
                    setTotalPages(total);
                    
                    // Smooth scroll top on page change (only if not first render)
                    if (currentPage > 1) {
                        const topPos = window.innerWidth < 1024 ? 200 : 400;
                        window.scrollTo({ top: topPos, behavior: 'smooth' });
                    }
                }
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products. Please try again later.");
            } finally {
                setInitialLoading(false);
                setFetching(false);
            }
        };

        fetchProducts();
    }, [currentPage, selectedCategoryId, urlSearchQuery]);

    const handleCategorySelect = (label, categoryId) => {
        // If we have URL params, clear them to return to clean state controlled by sidebar
        if (urlSearchQuery || urlCategoryId) {
            router.replace('/products');
        }
        setSelectedCategory(label);
        setSelectedCategoryId(categoryId);
        setCurrentPage(1);
    };

    const headerTitle = urlSearchQuery
        ? `Search results for "${urlSearchQuery}"`
        : (selectedCategory || 'All Products');

    return (
        <div className="py-10 md:py-20">
            <div className="mx-auto w-full max-w-full 2xl:max-w-[1980px] px-4 sm:px-6 lg:px-8 xl:px-[120px] 2xl:px-[160px]">
                <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                    {/* Sidebar */}
                    <aside className="lg:sticky lg:top-28 shrink-0 w-full lg:w-auto z-30">
                        <ProductSidebar 
                            selectedItem={selectedCategory} 
                            onSelect={handleCategorySelect} 
                        />
                    </aside>

                    <div className="flex-1 w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">

                            {/* Section Header */}
                            <div className="bg-[#113578] px-4 sm:px-6 py-4 shrink-0 flex items-center gap-3">
                                {urlSearchQuery && <Search className="w-5 h-5 text-blue-300 shrink-0" />}
                                <h2 className="text-white font-bold text-base sm:text-lg truncate">
                                    {headerTitle}
                                </h2>
                                {fetching && (
                                    <span className="ml-auto">
                                        <span className="block w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                    </span>
                                )}
                                {urlSearchQuery && !initialLoading && !fetching && (
                                    <span className="ml-auto bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {products.length} result{products.length !== 1 ? 's' : ''}
                                    </span>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="p-2 sm:p-6 flex-1 min-h-[400px] relative">

                                {initialLoading ? (
                                    /* Initial Skeleton State */
                                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                                        {[...Array(8)].map((_, i) => (
                                            <div key={i} className="bg-gray-50 animate-pulse rounded-xl h-[300px] border border-gray-100" />
                                        ))}
                                    </div>

                                ) : error ? (
                                    /* Error State */
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
                                        <p className="text-gray-500 mb-6">{error}</p>
                                        <button
                                            onClick={() => window.location.reload()}
                                            className="px-6 py-2 bg-[#113578] text-white rounded-lg font-semibold hover:bg-[#048BFF] transition-colors"
                                        >
                                            Retry
                                        </button>
                                    </div>

                                ) : (
                                    /* Results Area */
                                    <div className={`transition-all duration-300 ${fetching ? 'opacity-40 pointer-events-none grayscale' : 'opacity-100'}`}>
                                        {products.length === 0 ? (
                                            /* Empty State */
                                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                                <PackageSearch className="w-16 h-16 text-gray-300 mb-4" />
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    {urlSearchQuery ? `No results for "${urlSearchQuery}"` : 'No Products Found'}
                                                </h3>
                                                <p className="text-gray-500">
                                                    {urlSearchQuery
                                                        ? 'Try a different search term or browse our categories.'
                                                        : "We couldn't find any products in this category."}
                                                </p>
                                            </div>
                                        ) : (
                                            /* Product Grid */
                                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                                                {products.map((p) => <ProductCard key={p._id} product={p} />)}
                                            </div>
                                        )}

                                        {/* Pagination */}
                                        {!urlSearchQuery && !error && products.length > 0 && totalPages > 1 && (
                                            <div className="mt-12 flex justify-center items-center gap-2 pb-4">
                                                <button
                                                    disabled={currentPage === 1}
                                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                                    className="w-10 h-10 flex items-center justify-center bg-black text-[#077ADE] text-2xl rounded-lg cursor-pointer hover:bg-gray-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-md"
                                                >&lt;</button>
                                                {[...Array(totalPages)].map((_, i) => (
                                                    <button
                                                        key={i + 1}
                                                        onClick={() => setCurrentPage(i + 1)}
                                                        className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm transition-all shadow-sm ${currentPage === i + 1
                                                            ? 'bg-[#077ADE] text-white font-bold scale-105 shadow-blue-200 shadow-lg'
                                                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                                                            }`}
                                                    >{i + 1}</button>
                                                ))}
                                                <button
                                                    disabled={currentPage === totalPages}
                                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                                    className="w-10 h-10 flex items-center justify-center bg-black text-[#077ADE] text-2xl rounded-lg cursor-pointer hover:bg-gray-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-md"
                                                >&gt;</button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;