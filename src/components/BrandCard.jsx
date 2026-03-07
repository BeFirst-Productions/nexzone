

export default function BrandCard({ name, logo }) {
    return (
        <div
            style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "14px 28px",
                height: "72px",
                minWidth: "150px",
                margin: "0 10px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
            }}
        >
            <img
                src={logo}
                alt={name}
                style={{
                    display: "block",
                    maxWidth: "110px",
                    maxHeight: "44px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                }}
                onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const span = document.createElement("span");
                    span.textContent = name;
                    span.style.cssText =
                        "font-weight:800;font-size:1rem;color:#1a1a1a;letter-spacing:0.5px;white-space:nowrap;";
                    e.currentTarget.parentElement.appendChild(span);
                }}
            />
        </div>
    );
}