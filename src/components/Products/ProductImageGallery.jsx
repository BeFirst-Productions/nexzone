"use client";

import { useState } from "react";
import Image from "next/image";

// ── ProductImageGallery ──────────────────────────────────────────────────────
// Left-side image section: large main image with fade-on-switch + thumbnail strip.
// Props:
//   images      : string[]  — array of image src paths
//   productName : string    — used for alt text
// ────────────────────────────────────────────────────────────────────────────

const ProductImageGallery = ({ images = [], productName = "Product" }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [showZoom, setShowZoom] = useState(false);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPos({ x, y });
    };

    const handleThumbClick = (idx) => {
        if (idx === activeIdx) return;
        setImgLoaded(false);
        setActiveIdx(idx);
    };

    const activeImg = images[activeIdx];
    const src = activeImg?.url || (typeof activeImg === 'string' ? activeImg : "/images/products/placeholder.png");

    return (
        <div className="w-full flex flex-col gap-4">

            {/* ── Main Image ───────────────────────────────────────────── */}
            <div
                className="relative w-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md group select-none"
                style={{ paddingBottom: "75%", cursor: showZoom ? "none" : "zoom-in" }}
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
            >
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

                    {/* Shimmer skeleton while image loads */}
                    {!imgLoaded && (
                        <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200 animate-pulse rounded-2xl" />
                    )}

                    <div className="relative w-full h-full p-6 sm:p-10">
                        <Image
                            key={activeIdx}
                            src={src}
                            alt={`${productName} – view ${activeIdx + 1}`}
                            fill
                            className={`object-contain mix-blend-multiply transition-opacity duration-500
                                ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                            onLoad={() => setImgLoaded(true)}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            style={{
                                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                                transform: showZoom ? "scale(2.8)" : "scale(1)",
                                transition: showZoom
                                    ? "transform-origin 0.1s ease-out, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                    : "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s"
                            }}
                        />
                    </div>
                </div>

                {/* Lens Overlay */}
                {showZoom && (
                    <div
                        className="absolute pointer-events-none border border-white/30 bg-white/10 backdrop-invert-[0.1] shadow-2xl rounded-lg"
                        style={{
                            width: "100px",
                            height: "100px",
                            left: `${zoomPos.x}%`,
                            top: `${zoomPos.y}%`,
                            transform: "translate(-50%, -50%)",
                            zIndex: 10
                        }}
                    />
                )}

                {/* Counter badge */}
                {images.length > 1 && (
                    <div className={`absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full select-none pointer-events-none transition-all duration-300
                        ${showZoom ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}>
                        {activeIdx + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* ── Thumbnail Strip ──────────────────────────────────────── */}
            {images.length > 0 && (
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {images.map((thumbSrc, idx) => (
                        <button
                            key={idx}
                            id={`product-thumb-${idx}`}
                            onClick={() => handleThumbClick(idx)}
                            aria-label={`View image ${idx + 1}`}
                            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#113578]
                                ${activeIdx === idx
                                    ? "border-[#048BFF] shadow-md shadow-blue-200 scale-[1.03]"
                                    : "border-gray-200 hover:border-[#113578]/50 hover:shadow-sm"
                                }`}
                        >
                            <Image
                                src={thumbSrc?.url || (typeof thumbSrc === 'string' ? thumbSrc : "/images/products/placeholder.png")}
                                alt={`${productName} thumbnail ${idx + 1}`}
                                fill
                                className="object-contain p-1.5 mix-blend-multiply"
                                sizes="(max-width: 768px) 25vw, 12vw"
                            />

                            {/* Active blue tint overlay */}
                            {activeIdx === idx && (
                                <div className="absolute inset-0 bg-[#048BFF]/8 pointer-events-none rounded-xl" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductImageGallery;
