import Link from 'next/link';

export const ProductCard = ({ product }) => {
    // ── Get the first image URL from images[] array ──────────────────
    const getImageUrl = () => {
        if (product.images && product.images.length > 0) {
            return product.images[0].url || null;
        }
        return null;
    };

    const imageSrc = getImageUrl() || '/images/products/placeholder.png';
    
    // ── Get Subcategory Name (Adjust this based on your exact MongoDB schema) ──
    const subcategoryName = product.category?.name ;

    return (
        <Link
            href={`/products/${product._id}`}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group transition-all hover:shadow-md h-full cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative w-full aspect-square bg-[#F5F5F7] flex items-center justify-center overflow-hidden">
                <img
                    src={imageSrc}
                    alt={product.name || "Product"}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* NEW: Subcategory Badge (Top Left) */}
                {/* {subcategoryName && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                        <span className="bg-[#113578]/90 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-semibold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                            {subcategoryName}
                        </span>
                    </div>
                )} */}
            </div>

            {/* Info */}
            <div className="p-2 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                    {subcategoryName && (
                        <p className="text-[9px] sm:text-[12px]  tracking-wider text-gray-600 font-medium mb-1">
                            {subcategoryName}
                        </p>
                    )}
                    <div className="h-[3em] leading-[1.2] overflow-hidden mb-1 sm:mb-2">
                        <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] xl:text-sm font-semibold text-[#113578] line-clamp-3 leading-[1.2]">
                            {product.name}
                        </h3>
                    </div>
                    <div className="h-[3.6em] leading-[1.2] overflow-hidden mb-1 sm:mb-2">
                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] xl:text-sm font-normal text-gray-500 line-clamp-3 leading-[1.2]">
                            {product.shortDescription || "No description available"}
                        </p>
                    </div>

                    <div className="flex flex-col min-[400px]:flex-row items-start min-[400px]:items-center justify-between gap-1 sm:gap-2">
                        {product.price != null && product.price !== '' && (
                            <span className="text-[11px] sm:text-sm md:text-lg font-bold text-[#113578]">
                                ${product.price}
                            </span>
                        )}
                        <span className="bg-black text-white text-[8px] sm:text-[9px] md:text-[11px] px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-gray-800 transition-colors font-medium whitespace-nowrap">
                            View Details
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};