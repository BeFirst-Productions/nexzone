"use client";

import React, { useState, useEffect, use } from "react";
import InnerHero from "@/components/Common/Hero/InnerHero";
import ProductDetail from "@/components/Products/ProductDetail";
import { productService } from "@/services";
import { Loader2, AlertCircle } from "lucide-react";

export default function ProductDetailPage({ params: paramsPromise }) {
    // params is a promise in Next.js 15+ and should be unwrapped
    const params = use(paramsPromise);
    const { id } = params;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            
            setLoading(true);
            setError(null);
            try {
                const response = await productService.getProductById(id);
                // response.data contains the JSON body { success, message, data }
                const fetchedProduct = response?.data?.data || null;
                
                if (fetchedProduct) {
                    setProduct(fetchedProduct);
                } else {
                    setError("Product not found");
                }
            } catch (err) {
                console.error("Failed to fetch product:", err);
                setError(err.response?.data?.message || "Failed to load product details");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50">
                <Loader2 className="w-12 h-12 animate-spin text-[#113578] mb-4" />
                <p className="text-gray-500 font-medium">Loading Product...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <main className="min-h-screen">
                <InnerHero
                    breadcrumb={[
                        { label: "Products", href: "/products" },
                        { label: "Error", href: "" }
                    ]}
                />
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                    <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{error || "Product Not Found"}</h2>
                    <p className="text-gray-500 max-w-md mx-auto mb-8">
                        The product you're looking for might have been removed or the link is incorrect.
                    </p>
                    <a 
                        href="/products" 
                        className="bg-[#113578] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#048BFF] transition-all"
                    >
                        Back to All Products
                    </a>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <InnerHero
                breadcrumb={[
                    { label: "Products", href: "/products" },
                    { label: "Product Details", href: "" }
                ]}
            />
            <ProductDetail product={product} />
        </main>
    );
}