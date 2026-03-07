export default function SectionHeading({
    normalText = "About",
    highlightText = "",
    highlightColor = "text-blue-600",
    className = ""
}) {
    return (
        <div className="inline-block">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold relative z-10 ${className}`}>
                {normalText} <span className={highlightColor}>{highlightText}</span>
            </h2>

            {/* Decorative SVG swoosh — always stretches to match text width */}
            <svg
                width="100%"
                height="40"
                viewBox="0 0 373 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="block -mt-6"
            >
                <path
                    d="M-291.538 0H-181.714C-180.811 0 -180.079 0.732166 -180.079 1.63534C-180.079 2.53851 -180.811 3.27068 -181.714 3.27068H-250.224C-255.027 3.27068 -258.682 7.52976 -256.66 11.8866C-251.159 23.738 -238.664 35.1209 -230.7 41.0532C-229.389 42.0294 -227.792 42.5188 -226.158 42.5188H339.41C360.022 44.2478 368.957 63.9469 371.893 78.6145C372.795 83.1233 369.13 87 364.531 87H170.955C170.232 87 169.646 86.4143 169.646 85.6917C169.646 84.9692 170.232 84.3835 170.955 84.3835H320.97C326.11 84.3835 329.933 79.5711 327.957 74.8262C321.39 59.0611 309.442 49.8864 302.47 46.4533C301.522 45.9867 300.475 45.7882 299.418 45.7858L-265.388 44.5014C-265.793 44.5005 -266.209 44.4682 -266.609 44.4009C-290.803 40.329 -297.77 20.6717 -298.843 7.30017C-299.175 3.17172 -295.679 0 -291.538 0Z"
                    fill="url(#swoosh_grad)"
                />
                <defs>
                    <linearGradient
                        id="swoosh_grad"
                        x1="373.003"
                        y1="43.5"
                        x2="-298.997"
                        y2="43.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#15548A" />
                        <stop offset="1" stopColor="white" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
