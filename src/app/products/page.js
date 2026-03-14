import React, { Suspense } from 'react';
import InnerHero from '@/components/Common/Hero/InnerHero';
import ProductListing from '@/components/Products/ProductListing';

const ProductsPage = () => {
    return (
        <main className="min-h-screen">
            <InnerHero
                title="Our Products"
                breadcrumb={[
                    { label: 'Products', href: '/products' }
                ]}
            />

            {/* Suspense required because ProductListing uses useSearchParams() */}
            <Suspense fallback={
                <div className="py-20 flex justify-center items-center min-h-[400px]">
                    <div className="w-10 h-10 border-4 border-[#077ADE] border-t-transparent rounded-full animate-spin" />
                </div>
            }>
                <ProductListing />
            </Suspense>
        </main>
    );
};

export default ProductsPage;
