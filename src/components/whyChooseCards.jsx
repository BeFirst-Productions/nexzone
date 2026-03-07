"use client";

import Image from "next/image";

export default function FeatureCard({ title, description, icon, alt }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
            width: "100%",
        }}>

            {/* ── TOP: Black Icon Box ── */}
            <div style={{
                width: "86px",
                height: "86px",
                borderRadius: "18px",
                background: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 28px rgba(0,0,0,0.55)",
                flexShrink: 0,
            }}>
                <Image
                    src={icon}
                    alt={alt}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* ── BOTTOM: Card ── */}
            <div style={{
                width: "100%",
                position: "relative",
                borderRadius: "16px",
                backgroundImage: "linear-gradient(90deg, rgba(21,84,138,1.00) 0%, rgba(11,17,17,1.00) 100%)",
                backgroundPosition: "center center",
                boxShadow: "0 6px 22px rgba(0,0,0,0.45)",
                minHeight: "110px",
                display: "flex",
                alignItems: "center",
            }}>

                {/*
                 * Pink accent bar .
                
                 */}
                <div style={{
                    position: "absolute",
                    top: "0px",
                    bottom: "0px",
                    left: "18px",
                    width: "10px",
                    background: "#BC237A",
                    zIndex: 1,
                }} />

      
                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    paddingLeft: "30px",
                    paddingRight: "18px",
                    paddingTop: "22px",
                    paddingBottom: "22px",
                    gap: "8px",
                    position: "relative",
                    zIndex: 2,
                }}>
                    <p style={{
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: "clamp(13px, 2vw, 24px)",
                        letterSpacing: "0.05em",
                        lineHeight: 1.3,
                        textTransform: "uppercase",
                        margin: 0,
                    }}>
                        {title}
                    </p>
                    <p style={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "clamp(12px, 1.5vw, 20px)",
                        lineHeight: 1.3,
                        whiteSpace: "pre-line",
                        margin: 0,
                        fontWeight: 400,
                    }}>
                        {description}
                    </p>
                </div>
            </div>

        </div>
    );
}
