import StarRating from "./StarRating";
import { buildWhatsAppURL } from "@/utils/whatsappMessage";

// ── ProductInfo ──────────────────────────────────────────────────────────────
// Right-side panel: category pills, title, short description, optional rating,
// optional price, and WhatsApp / Call CTA buttons.
//
// Props (all from the product object):
//   category         : string  — e.g. "Copiers & Printers"
//   subCategory      : string  — optional
//   title / name     : string  — product heading
//   shortDescription : string  — optional one-liner
//   rating           : number  — optional (hidden when null / undefined)
//   reviewCount      : number  — optional
//   price            : string|number — optional (hidden when null / "")
// ────────────────────────────────────────────────────────────────────────────

const ProductInfo = ({ product }) => {
    const hasPrice = product.price != null && product.price !== "";
    const hasRating = product.rating != null;

    // Correctly resolve category and subCategory names whether they come as strings or objects
    const categoryName = typeof product.category === 'object' ? product.category?.name : product.category;
    const subCategoryName = typeof product.subCategory === 'object' ? product.subCategory?.name : product.subCategory;

    // Use resolved strings for the whatsapp message URL generator
    const whatsappURL = buildWhatsAppURL({
        ...product,
        category: categoryName,
        subCategory: subCategoryName
    });

    return (
        <div className="w-full flex flex-col gap-5">

            {/* ── Category + Subcategory Pills ─────────────────────────── */}
            {(categoryName || subCategoryName) && (
                <div className="flex items-center gap-2 flex-wrap">

                    {categoryName && (
                        <span className="inline-flex items-center gap-1.5 bg-[#EFF6FF] text-[#113578] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#BFDBFE]">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {categoryName}
                        </span>
                    )}

                    {subCategoryName && (
                        <span className="inline-flex items-center gap-1.5 bg-[#F0FDF4] text-[#166534] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#BBF7D0]">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            {subCategoryName}
                        </span>
                    )}
                </div>
            )}

            {/* ── Product Title ─────────────────────────────────────────── */}
            <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#113578] leading-tight">
                {product.title || product.name}
            </h1>

            {/* ── Short Description ─────────────────────────────────────── */}
            {product.shortDescription && (
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {product.shortDescription}
                </p>
            )}

            <hr className="border-gray-100" />

            {/* ── Rating (optional) ─────────────────────────────────────── */}
            {hasRating && (
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Customer Rating
                    </p>
                    <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                </div>
            )}

            {/* ── Price (optional) ──────────────────────────────────────── */}
            {hasPrice && (
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#113578]">
                        ${product.price}
                    </span>
                </div>
            )}

            {/* ── CTA Buttons ───────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">

                {/* WhatsApp — pre-filled message via whatsappMessage.js */}
                <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="product-whatsapp-cta"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] active:scale-[0.98] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                >
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                </a>

                {/* Call */}
                <a
                    href="tel:+971508998716"
                    id="product-call-cta"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#113578] hover:bg-[#0d2860] active:scale-[0.98] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                >
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call Now
                </a>
            </div>
        </div>
    );
};

export default ProductInfo;
