// ── whatsappMessage.js ───────────────────────────────────────────────────────
// Builds a pre-formatted WhatsApp deep-link URL that opens a chat with
// NEXZONE's number and pre-fills a structured product-enquiry message.
//
// Usage:
//   import { buildWhatsAppURL } from "@/utils/whatsappMessage";
//   const url = buildWhatsAppURL(product);           // use as href
// ────────────────────────────────────────────────────────────────────────────

/** NEXZONE WhatsApp number in international format (no spaces / dashes). */
const WHATSAPP_NUMBER = "971508997350"; // 050 899 7350 → UAE +971

/**
 * Returns a wa.me deep-link with a pre-filled, formatted enquiry message.
 *
 * @param {Object} product
 * @param {string}  product.name
 * @param {string}  [product.title]
 * @param {string}  [product.category]
 * @param {string}  [product.subCategory]
 * @param {string}  [product.shortDescription]
 * @param {number}  [product.rating]
 * @param {number}  [product.reviewCount]
 * @param {string|number} [product.price]
 * @param {string}  [product.slug]
 * @returns {string} Full wa.me URL
 */
export function buildWhatsAppURL(product = {}) {
    const {
        name = "",
        title = "",
        category = "",
        subCategory = "",
        shortDescription = "",
        rating,
        reviewCount,
        price,
        slug = "",
    } = product;

    const displayName = title || name;

    // ── Build message lines ─────────────────────────────────────────────────
    const lines = [];

    lines.push("👋 Hello NEXZONE Team,");
    lines.push("");
    lines.push("I'm interested in the following product and would like more information:");
    lines.push("");
    lines.push("━━━━━━━━━━━━━━━━━━━━━━");
    lines.push(` *Product:* ${displayName}`);

    if (category) lines.push(` *Category:* ${category}`);
    if (subCategory) lines.push(` *Sub-category:* ${subCategory}`);
    if (subCategory) lines.push(` *Sub-category:* ${subCategory}`);

    // if (shortDescription) {
    //     lines.push("");
    //     lines.push(`📝 *About:* ${shortDescription}`);
    // }

    // if (price != null && price !== "") {
    //     lines.push(`💰 *Listed Price:* $${price}`);
    // }

    // if (rating != null) {
    //     const stars = "⭐".repeat(Math.round(rating));
    //     const reviewText = reviewCount ? ` (${reviewCount.toLocaleString()} reviews)` : "";
    //     lines.push(`${stars} *Rating:* ${Number(rating).toFixed(1)}${reviewText}`);
    // }

    // lines.push("━━━━━━━━━━━━━━━━━━━━━━");
    // lines.push("");
    // lines.push("Please provide details on:");
    // lines.push("• Availability & stock");
    // lines.push("• Best price / quotation");
    // lines.push("• Warranty & after-sales support");
    // lines.push("");
    lines.push("Thank you! 🙏");

    // ── Encode and return ───────────────────────────────────────────────────
    const message = lines.join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
