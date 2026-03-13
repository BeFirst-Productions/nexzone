"use client";

import Link from "next/link";
import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";

/**
 * ProductDetail
 *
 * WHAT CHANGED:
 * - Passes `specifications={product.specifications}` (Mongoose Map as plain object)
 *   instead of `specs={product.specs}` (the old hardcoded array format)
 * - category is now an object { _id, name, slug } from .populate() — we read .name
 */
const ProductDetail = ({ product }) => {
    console.log(product,"ppp");
    const images = product.images?.length ? product.images : [];

    // Category comes populated: { _id, name, slug }
    const categoryName = typeof product.category === "object"
        ? product.category?.name
        : product.category;

    return (
        <section className="py-10 md:py-20">
            <div className="mx-auto w-full max-w-full 2xl:max-w-[1980px] px-4 sm:px-6 lg:px-8 xl:px-[120px] 2xl:px-[160px]">

                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500 flex-wrap" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-[#113578] transition-colors font-medium">Home</Link>
                    <span className="text-gray-300 select-none">›</span>
                    <Link href="/products" className="hover:text-[#113578] transition-colors font-medium">Products</Link>
                    {categoryName && (
                        <>
                            <span className="text-gray-300 select-none">›</span>
                            <span className="text-gray-500 font-medium">{categoryName}</span>
                        </>
                    )}
                    <span className="text-gray-300 select-none">›</span>
                    <span className="text-[#113578] font-semibold truncate max-w-[200px] sm:max-w-none">
                        {product.name}
                    </span>
                </nav>

                {/* Two-Column Layout */}
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">

                    {/* LEFT — sticky image gallery */}
                    <div className="w-full lg:w-[48%] xl:w-[45%] lg:sticky lg:top-28">
                        <ProductImageGallery images={images} productName={product.name} />
                    </div>

                    {/* RIGHT — info + description */}
                    <div className="w-full lg:flex-1 flex flex-col gap-6">
                        <ProductInfo product={product} />

                        {/* ✅ FIX: specifications (Mongoose Map object) not specs (old array) */}
                        <ProductDescription
                            description={product.description}
                            specifications={product.specifications}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;