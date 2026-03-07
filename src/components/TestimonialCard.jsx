"use client";


export default function TestimonialCard({
    name,
    company,
    initials,
    color,
    review,
    image,
}) {
    return (
        <div

            className="
                flex flex-col gap-[14px]
                h-[205px] max-xl:h-auto
                overflow-hidden max-xl:overflow-visible
                box-border
                pt-[18px] px-[20px] pb-[16px]
                max-[560px]:pt-[14px] max-[560px]:pb-[14px] max-[560px]:px-[16px]
                max-[560px]:gap-[12px]
                border-[5px] border-[#15548A]
                shadow-[inset_0_0_0_2px_rgba(21,84,138,0.12)]
                rounded-[18px] max-[560px]:rounded-[14px]
                bg-[#f3f5f5]
                transition-[transform,box-shadow] duration-300 ease-in-out
            "
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                    "inset 0 0 0 2px rgba(21,84,138,0.12), 0 14px 36px rgba(21,84,138,0.16)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                    "inset 0 0 0 2px rgba(21, 84, 138, 0.12)";
            }}
        >

            <div className="flex items-start justify-between gap-[12px] shrink-0">


                <div className="min-w-0 flex-1">
                    <p
                        className="
                            m-0 font-extrabold text-[#111111]
                            leading-[1.2] whitespace-nowrap
                            overflow-hidden text-ellipsis
                        "
                        style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                    >
                        {name}
                    </p>
                    <p
                        className="
                            mt-[5px] mb-0 mx-0
                            text-[#6B7280] leading-[1.3]
                            whitespace-nowrap overflow-hidden text-ellipsis
                        "
                        style={{ fontSize: "clamp(0.72rem, 1.1vw, 0.82rem)" }}
                    >
                        {company}
                    </p>
                </div>


                <div
                    className="
                        shrink-0 rounded-full overflow-hidden
                        flex items-center justify-center
                        w-[72px] h-[72px]
                        max-[900px]:w-[56px] max-[900px]:h-[56px]
                        max-[560px]:w-[48px] max-[560px]:h-[48px]
                    "
                    style={{ background: color }}
                >
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover block"
                        />
                    ) : (
                        <span className="font-extrabold text-base text-white">
                            {initials}
                        </span>
                    )}
                </div>
            </div>


            <div className="flex-1 flex items-start gap-[8px] overflow-hidden max-xl:overflow-visible">


                <img
                    src="/images/icons/quote.svg"
                    alt=""
                    aria-hidden="true"
                    className="
                        block h-auto shrink-0 mt-[2px] select-none
                        w-[26px] max-[560px]:w-[20px]
                    "
                />

                <p
                    className="
                        m-0 text-[#374151] leading-[1.7]
                        overflow-hidden line-clamp-4
                        max-xl:overflow-visible max-xl:line-clamp-none max-xl:block
                    "
                    style={{ fontSize: "clamp(0.8rem, 1.3vw, 0.92rem)" }}
                >
                    {review}
                </p>
            </div>
        </div>
    );
}
