import Image from "next/image";

/**
 * TrustCards layout (matches reference):
 *
 *  ┌──────────────────────────────────────┐
 *  │ [Icon]   Title (bold, teal)          │  ← Row 1: icon + title side-by-side
 *  │                                      │
 *  │ Description text spanning full width │  ← Row 2: description below
 *  └──────────────────────────────────────┘
 */
export default function TrustCards({ title, description, icon, alt }) {
    return (
        <div style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "20px 22px",
            border: "1px solid #048BFF",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
        }}>

            {/* ── Row 1: Icon box + Title ── */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
            }}>
                {/* Icon box with pink gradient border */}
                <div style={{
                    flexShrink: 0,
                    width: "60px",
                    height: "60px",
                    borderRadius: "12px",
                    padding: "2px",
                    background: "linear-gradient(135deg, #E91E8C, #9C27B0)",
                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}>
                        <Image
                            src={icon}
                            alt={alt}
                            width={34}
                            height={34}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>

                {/* Title */}
                <h3 style={{
                    color: "#0D1B2A",
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                    lineHeight: 1.3,
                    margin: 0,
                }}>
                    {title}
                </h3>
            </div>

            {/* ── Row 2: Description ── */}
            <p style={{
                color: "#555555",
                fontSize: "clamp(0.82rem, 1.6vw, 0.93rem)",
                lineHeight: 1.65,
                margin: 0,
            }}>
                {description}
            </p>

        </div>
    );
}