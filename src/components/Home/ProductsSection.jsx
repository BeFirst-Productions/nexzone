"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Common/Layout/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { productService } from "@/services";

export default function ProductsSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestProducts = async () => {
            setLoading(true);
            try {
         
                const response = await productService.getAllProducts({ limit: 8 });
                const fetchedProducts = response?.data?.data || [];


                const sortedProducts = [...fetchedProducts].sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }).slice(0, 8);

                setProducts(sortedProducts);
            } catch (error) {
                console.error("Error fetching latest products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestProducts();
    }, []);

 
    if (loading) {
        return (
            <section className="w-full py-10 md:py-20">
                <Container>
                    <div className="mb-20">
                        <SectionHeading
                            normalText="Our"
                            highlightText="Products"
                            highlightColor="text-blue-600"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-gray-100 animate-pulse rounded-2xl h-[450px] w-full max-w-[280px] 2xl:max-w-[320px] mx-auto border-2 border-gray-200"
                            />
                        ))}
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section className="w-full py-10 md:py-20 ">
            <Container>
                <div className="mb-20">
                    <SectionHeading
                        normalText="Our"
                        highlightText="Products"
                        highlightColor="text-blue-600"
                    />
                </div>
           
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {products.map((product) => {
              
                        const imageSrc = product.images?.[0]?.url || '/images/products/placeholder.png';

                        return (
                            <Link
                                key={product._id}
                                href={`/product/get-product/${product._id}`}
                                className="group bg-white border-2 rounded-2xl border-[#15548A] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col max-w-[280px] 2xl:max-w-[320px] mx-auto w-full"
                            >
                                {/* Product Image */}
                                <div className="relative w-full h-80  flex items-center justify-center ">
                                    <Image
                                        src={imageSrc}
                                        alt={product.name || "Product"}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        className="group-hover:scale-105 transition-transform duration-300 py-4 "
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-4 bg-[#15548A] text-white flex-1 flex flex-col">
                                    <h3 className="text-base font-semibold leading-tight mb-2 line-clamp-2 h-10">
                                        {product.name}
                                    </h3>

                                </div>
                            </Link>
                        );
                    })}
                </div>

                {products.length === 0 && !loading && (
                    <div className="text-center py-10">
                        <p className="text-gray-500">No products found.</p>
                    </div>
                )}
            </Container>
        </section>
    );
}
