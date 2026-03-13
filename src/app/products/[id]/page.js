// File location: app/products/[id]/page.js
// ─────────────────────────────────────────────────────────────────────────────
// SERVER component — no "use client" needed.
// params.id = the MongoDB _id from the URL e.g. /products/69b258650ac3a22e44d64a56
// ─────────────────────────────────────────────────────────────────────────────

import { notFound } from "next/navigation";
import InnerHero from "@/components/Common/Hero/InnerHero";
import ProductDetail from "@/components/Products/ProductDetail";

async function getProduct(id) {
    try {
        const res = await fetch(
            `http://localhost:5000/v1/api/web/product/get-product/${id}`,
            { cache: "no-store" }
        );
        if (!res.ok) return null;
        const json = await res.json();
        // Backend returns: { success: true, message: "...", data: { ...product } }
      console.log(json.data);
      
        return json?.data || null;
    } catch (err) {
        console.error("Failed to fetch product:", err);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = await getProduct(id);
    if (!product) return { title: "Product Not Found | NexZone" };
    return {
        title: `${product.name} | NexZone`,
        description: product.shortDescription || `Learn more about ${product.name}`,
    };
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) notFound();

    return (
        <main className="min-h-screen">
            <InnerHero
                // title={product.name}
                breadcrumb={[{ label: "Products", href: "/products" },{label:"Product Details",href:""}]}
            />
            <ProductDetail product={product} />
        </main>
    );
}