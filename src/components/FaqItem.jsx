"use client";



export default function FaqItem({ question, answer, isOpen, onToggle }) {
    return (
        <div
            onClick={onToggle}
            style={{
                borderRadius: "10px",
                cursor: "pointer",
                border: "1.5px solid #048BFF",
                borderColor: isOpen ? "#048BFF" : "#CBD5E1",
                background: "#ffffff",
                boxShadow: isOpen
                    ? "0 6px 24px rgba(4,139,255,0.13)"
                    : "0 1px 4px rgba(0,0,0,0.05)",
                /* All card-level transitions */
                transition:
                    "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
                transform: "translateY(0)",
                userSelect: "none",
            }}
            onMouseEnter={(e) => {
                if (!isOpen) e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            {/* ── Question row ───────────────────────────────────────── */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "16px 18px",
                }}
            >
                <p
                    style={{
                        margin: 0,
                        fontSize: "clamp(0.85rem, 1.6vw, 0.97rem)",
                        fontWeight:  500,
                        color: isOpen ? "#048BFF" : "#1a1a1a",
                        lineHeight: 1.45,
                        flex: 1,
                        transition: "color 0.3s ease, font-weight 0.2s ease",
                    }}
                >
                    {question}
                </p>

                {/* ── Animated +/× button ─────────────────────────────── */}
                <div
                    style={{
                        flexShrink: 0,
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: isOpen
                            ? "linear-gradient(135deg, #048BFF 0%, #0264C8 100%)"
                            : "#15548A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        /* Spring-like rotation */
                        transition:
                            "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        boxShadow: isOpen
                            ? "0 0 0 4px rgba(4,139,255,0.18)"
                            : "none",
                    }}
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M8 3V13M3 8H13"
                            stroke="#ffffff"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            {/* ── Answer panel — CSS Grid height trick ────────────────── */}
            {/*
                The outer div is a 1-column grid.
                Closed → grid-template-rows: 0fr   (collapses to 0)
                Open   → grid-template-rows: 1fr   (expands to content height)
                The inner div must have min-height: 0 so the grid can crush it.
            */}
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                {/* Inner wrapper — must have min-height:0 + overflow:hidden */}
                <div style={{ minHeight: 0, overflow: "hidden" }}>
                    <p
                        style={{
                            margin: 0,
                            padding: "4px 18px 18px",
                            fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)",
                            color: "#4B5563",
                            lineHeight: 1.7,
                            /* Fade + slide the text in as the panel opens */
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                            transition:
                                "opacity 0.35s ease 0.08s, transform 0.35s ease 0.08s",
                        }}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}
