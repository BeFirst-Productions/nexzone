"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Common/Layout/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { products } from "@/data/products";

export default function ProductsSection() {
    return (
        <section className="w-full py-10 md:py-20 ">
            {/* Section Heading - Outside Container */}

            <Container>
            <div className= "mb-20">
                <SectionHeading 
                    normalText="Our" 
                    highlightText="Products" 
                    highlightColor="text-blue-600"
                />
            </div>
                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="group bg-white  border border-2 rounded-2xl border-[#15548A] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col max-w-[280px] 2xl:max-w-[320px] mx-auto w-full"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-80  flex items-center justify-center ">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="group-hover:scale-105 transition-transform duration-300 py-4 "
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-4 bg-[#15548A] text-white flex-1 flex flex-col">
                                <h3 className="text-base  font-semibold leading-snug mb-2 line-clamp-2">
                                    {product.name}
                                </h3>
                                <p className="text-xs  leading-relaxed line-clamp-2">
                                    {product.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
