"use client";

import Image from "next/image";
import Container from "@/components/Common/Layout/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { useEffect, useRef, useState } from "react";

const features = [
    {
        id: 1,
        title: "Injection Workshop",
        description: "Carry out your machines fabulous performance continuously by scheduling servicing regularly, quick troubleshooting, and expert technical support which will not only help to reduce the downtime but also extend the life of the equipment.",
        iconSvg: (
            <svg width="89" height="75" viewBox="0 0 89 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <path d="M87.4499 61.9922C87.4242 62.0012 84.8415 62.8691 82.0996 62.8691C77.8953 62.8691 75.7385 60.8938 75.6888 57.0118C75.7383 53.1164 77.8957 51.1413 82.0999 51.1413C84.8348 51.1413 87.4242 52.0091 87.4501 52.0181C87.5024 52.0361 87.5566 52.0447 87.6101 52.0452C87.8987 52.0565 88.1353 51.8173 88.1353 51.5291C88.1353 51.4422 88.1138 51.3599 88.0757 51.288C87.9444 50.968 87.2539 49.4052 85.7052 47.8361C84.1367 46.2468 81.3545 44.3519 77.0083 44.3519C70.1468 44.3519 67.1245 50.0676 66.2028 52.317H47.2276V43.0589H56.8266C57.3732 43.0589 57.8158 42.6158 57.8158 42.0697V30.2236C57.8158 29.6772 57.3728 29.2344 56.8266 29.2344H31.4832C30.9368 29.2344 30.494 29.6773 30.494 30.2236V42.0697C30.494 42.6163 30.937 43.0589 31.4832 43.0589H41.3969V52.3169H21.9297C21.0078 50.0676 17.9849 44.3515 11.1236 44.3515C6.77764 44.3515 3.99556 46.2464 2.42693 47.8359C0.726973 49.5587 0.0613744 51.273 0.0338761 51.3453C-0.0373373 51.5323 0.00584906 51.7434 0.144574 51.8871C0.283299 52.0311 0.492885 52.0821 0.682376 52.0179C0.708112 52.0093 3.29788 51.1411 6.03237 51.1411C10.237 51.1411 12.394 53.1162 12.4437 56.9983C12.394 60.8935 10.2371 62.8688 6.03272 62.869C3.29771 62.8691 0.708112 62.0006 0.682376 61.992C0.493238 61.9282 0.283299 61.9786 0.144574 62.1228C0.0056728 62.2668 -0.0373373 62.4782 0.0338761 62.6648C0.0613744 62.7368 0.726973 64.4513 2.4271 66.1742C3.99574 67.764 6.77782 69.6587 11.1238 69.6587C17.9862 69.6587 21.0083 63.9426 21.9299 61.6934H41.3971V74.2638C41.3971 74.5488 41.6281 74.7803 41.9133 74.7803H46.7114C46.9966 74.7803 47.2279 74.549 47.2279 74.2638V61.6934H66.2029C67.1243 63.9428 70.1466 69.6587 77.0089 69.6587C81.355 69.6587 84.1371 67.764 85.7057 66.1742C87.406 64.4513 88.0714 62.7368 88.0989 62.6648C88.1702 62.478 88.1272 62.2666 87.9882 62.1228C87.849 61.9788 87.6396 61.9275 87.4499 61.9922Z" fill="#E0CC21" />
                <path d="M2.36543 43.5131C2.90553 43.7465 3.52953 43.6691 3.99647 43.3111C4.03207 43.2836 7.61513 40.9498 11.8395 40.9498C15.1972 40.9498 18.0535 42.3455 20.3292 45.841C20.6347 46.3106 21.1515 46.5788 21.6893 46.5788C21.7122 46.5788 21.7351 46.5783 21.7582 46.5771C22.6237 46.5424 23.3147 45.8301 23.3147 44.9559C23.3147 44.8877 23.3105 44.8209 23.3023 44.7551C22.9792 39.3865 24.272 31.9452 28.8714 27.0412C32.3932 23.2864 37.4401 21.3827 43.8726 21.3827L43.9883 21.3829L44.1097 21.3825C50.6499 21.3825 55.7512 23.2864 59.2729 27.041C64.9234 33.0652 64.8321 41.806 64.6698 44.3416C64.6227 45.0777 65.0778 45.7528 65.7778 45.9853C66.4781 46.2178 67.2465 45.9487 67.6489 45.3307C69.8486 41.9517 72.5921 40.803 75.8034 40.803C80.1157 40.803 83.9104 43.254 83.9455 43.2826C84.4084 43.6587 85.0407 43.7506 85.5913 43.5213C86.1422 43.2926 86.5231 42.7797 86.5832 42.1865C86.6204 41.8188 87.4602 33.0985 84.3879 26.1954C84.0329 25.3976 83.1096 25.0238 82.2991 25.3502L81.7777 25.5601C79.8812 26.3239 75.5435 28.0716 73.101 29.0447C72.7371 28.3415 72.1794 27.4112 71.3279 26.1445C70.8382 25.4163 70.3524 24.7276 69.9602 24.1829C71.501 22.7058 74.448 19.8682 76.5589 17.7579C77.0949 17.2218 77.1883 16.3863 76.7843 15.745C71.6681 7.62953 65.1117 3.7833 60.5124 1.98516C55.4931 0.0229147 51.6784 0.000176174 51.5185 0.000176174C50.7072 0.000176174 50.0209 0.598968 49.9109 1.40294L48.6912 10.3173H39.2862L38.0666 1.40259C37.9566 0.598791 37.2702 0 36.459 0C36.2991 0 32.4843 0.0223862 27.465 1.98463C22.8659 3.78277 16.3097 7.62935 11.1936 15.7447C10.7894 16.386 10.883 17.2213 11.4189 17.7572C13.5295 19.8678 16.4764 22.7056 18.0176 24.1828C17.6252 24.7274 17.1392 25.4161 16.6499 26.1443C15.7981 27.411 15.2408 28.3413 14.8768 29.0445C12.3482 28.0373 7.78876 26.1998 6.03504 25.4932L5.67897 25.3497C4.86848 25.0232 3.94517 25.3969 3.58999 26.1951C0.517586 33.0984 1.35716 41.8187 1.39453 42.1864C1.45394 42.7723 1.82552 43.2801 2.36543 43.5131ZM5.98251 28.9713C8.84233 30.1234 14.0829 32.2322 15.2417 32.6778C15.7405 32.8697 16.6966 33.1031 17.4443 31.2518C18.1921 29.4004 19.6763 27.3414 21.4633 24.9728C21.9597 24.315 21.8841 23.3894 21.2876 22.8209C21.2463 22.7812 17.5334 19.2422 14.6485 16.3919C18.2577 11.0904 22.9158 7.28104 28.5112 5.06091C31.2753 3.96415 33.6435 3.52982 35.0586 3.35796L36.2628 12.1604C36.373 12.964 37.0594 13.5628 37.8706 13.5628H50.107C50.9182 13.5628 51.6046 12.964 51.7147 12.1604L52.919 3.35743C56.498 3.79388 66.195 5.9338 73.3287 16.3928C70.444 19.2422 66.7314 22.7812 66.69 22.8209C66.0933 23.3894 66.0181 24.315 66.5143 24.9728C68.3015 27.3408 69.8556 29.5953 70.5334 31.2518C71.211 32.9082 72.2367 32.8701 72.7361 32.6778C73.897 32.2316 79.1137 30.1323 81.9952 28.9715C83.2346 32.5574 83.4696 36.5469 83.4632 39.1242C81.5905 38.1066 78.8463 37.5584 75.8034 37.5584C73.5869 37.5584 70.6554 37.6107 67.8532 40.1023C67.4993 35.7823 66.1356 29.6142 61.6398 24.8212C57.48 20.3862 51.582 18.1376 44.1095 18.1376L43.9875 18.1379H43.8726C36.5077 18.1379 30.6641 20.3864 26.5045 24.8212C21.8589 29.7744 20.4711 36.1542 20.1194 40.589C17.2113 37.9735 14.1504 37.7045 11.8396 37.7045C8.92799 37.7045 6.31355 38.3096 4.51523 39.2201C4.50254 36.6465 4.72781 32.6022 5.98251 28.9713Z" fill="#E0CC21" />
            </svg>
        ),
        borderColor: "border-[#E0CC21]"
    },
    {
        id: 2,
        title: "Video Content",
        description: "",
        iconSvg: null,
        isVideo: true,
        borderColor: "border-blue-400"
    },
    {
        id: 3,
        title: "On-time delivery",
        description: "Learn about the ways our intelligent printing and document solutions help to make your business processes more efficient, at the same time enabling you to save costs and increase the level of your productivity throughout the whole organization.",
        iconSvg: (
            <svg width="86" height="78" viewBox="0 0 86 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.51819e-07 3.89967C5.51819e-07 2.86542 0.41185 1.87352 1.14495 1.14219C1.87804 0.410857 2.87234 0 3.90909 0H46.9091C47.9458 0 48.9401 0.410857 49.6732 1.14219C50.4063 1.87352 50.8182 2.86542 50.8182 3.89967V23.398H66.4545C69.0213 23.398 71.5629 23.9024 73.9343 24.8823C76.3056 25.8621 78.4603 27.2984 80.2753 29.109C82.0902 30.9196 83.5299 33.0691 84.5122 35.4347C85.4944 37.8004 86 40.3358 86 42.8964V58.4951C86.001 61.0057 85.1925 63.45 83.6938 65.4668C82.1951 67.4837 80.0858 68.9661 77.6776 69.695C76.9606 72.0543 75.5149 74.1273 73.5467 75.6182C71.5785 77.1091 69.1886 77.9417 66.7179 77.997C64.2472 78.0524 61.8222 77.3277 59.7889 75.9264C57.7557 74.5252 56.2181 72.5189 55.3957 70.1941H30.6082C29.7858 72.5189 28.2482 74.5252 26.215 75.9264C24.1817 77.3277 21.7567 78.0524 19.286 77.997C16.8153 77.9417 14.4254 77.1091 12.4572 75.6182C10.489 74.1273 9.0433 72.0543 8.32637 69.695C5.91741 68.9668 3.80725 67.4846 2.30781 65.4677C0.808367 63.4508 -0.000771384 61.0062 5.51819e-07 58.4951V42.8964H23.4545C24.4913 42.8964 25.4856 42.4855 26.2187 41.7542C26.9518 41.0229 27.3636 40.031 27.3636 38.9967C27.3636 37.9625 26.9518 36.9706 26.2187 36.2392C25.4856 35.5079 24.4913 35.0971 23.4545 35.0971H5.51819e-07V27.2977H15.6364C16.6731 27.2977 17.6674 26.8869 18.4005 26.1555C19.1336 25.4242 19.5455 24.4323 19.5455 23.398C19.5455 22.3638 19.1336 21.3719 18.4005 20.6406C17.6674 19.9092 16.6731 19.4984 15.6364 19.4984H5.51819e-07V3.89967ZM50.8182 62.3948H55.3957C56.1685 60.2127 57.5727 58.3083 59.4306 56.9225C61.2886 55.5366 63.5167 54.7317 65.8334 54.6093C68.15 54.487 70.4509 55.0529 72.4451 56.2353C74.4392 57.4178 76.0371 59.1637 77.0365 61.2522C77.7696 60.521 78.1816 59.5293 78.1818 58.4951V42.8964C78.1818 39.7936 76.9463 36.8179 74.747 34.6239C72.5477 32.43 69.5648 31.1974 66.4545 31.1974H50.8182V62.3948ZM23.4545 66.2944C23.4545 65.2602 23.0427 64.2683 22.3096 63.537C21.5765 62.8056 20.5822 62.3948 19.5455 62.3948C18.5087 62.3948 17.5144 62.8056 16.7813 63.537C16.0482 64.2683 15.6364 65.2602 15.6364 66.2944C15.6364 67.3287 16.0482 68.3206 16.7813 69.0519C17.5144 69.7833 18.5087 70.1941 19.5455 70.1941C20.5822 70.1941 21.5765 69.7833 22.3096 69.0519C23.0427 68.3206 23.4545 67.3287 23.4545 66.2944ZM63.6908 63.5374C62.9577 64.2685 62.5457 65.2603 62.5455 66.2944C62.5453 67.1967 62.8587 68.071 63.4323 68.7686C64.0059 69.4661 64.8042 69.9437 65.6912 70.1199C66.5781 70.2961 67.4989 70.16 68.2966 69.7348C69.0943 69.3097 69.7196 68.6217 70.0658 67.7883C70.412 66.9548 70.4579 66.0273 70.1955 65.1639C69.9331 64.3005 69.3788 63.5545 68.6269 63.0532C67.875 62.5518 66.9721 62.326 66.072 62.4143C65.172 62.5026 64.3304 62.8995 63.6908 63.5374Z" fill="#BC237A" />
            </svg>
        ),
        borderColor: "border-[#BC237A]"
    }
];

export default function AboutSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // fire only once
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-10 md:py-20">
            <Container>
                <div
                    className="flex flex-col gap-12 transition-all duration-1000 ease-out"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    }}
                >
                    {/* Top Section - About Us Text and Image */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
                        {/* Left - About Text */}
                        <div className="w-full lg:w-1/2">
                            <SectionHeading
                                normalText="About"
                                highlightText="Us"
                                highlightColor="text-[#077ADE]"
                            />

                          <p className="text-sm md:text-base lg:text-lg  leading-relaxed mt-12">
                                NexZone Technologies FZE LLC is a leading office automation company based in Al
                                Nahda, Sharjah, UAE. We specialize in printer sales and <strong>Rental Services</strong>, <strong>Photocopier AMC Contracts</strong>, <strong>Scanners</strong>, and <strong>IT Accessories</strong> for businesses of all sizes. As Trusted
                                Printer Suppliers in Dubai, we are committed to delivering reliable, efficient, and
                                cost-effective document solutions that help companies improve productivity and simplify
                                their daily operations. Through partnerships with top international brands, we ensure
                                high-quality products, durability, and long-term performance for our clients.
                            </p>
                        </div>

                        {/* Right - Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src="/images/about-us/about-us.webp"
                                    alt="About NexZone Technologies"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section - Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className={`rounded-2xl ${feature.isVideo ? 'overflow-hidden p-0' : `border-2 ${feature.borderColor} p-6`} shadow-sm hover:shadow-md transition-shadow`}
                            >
                                {feature.isVideo ? (
                                    <div className="relative w-full h-full min-h-[280px]">
                                        <video
                                            src="/video/about-us.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-between gap-4 mb-4">
                                            <h3 className="text-lg md:text-xl font-semibold text-black">
                                                {feature.title}
                                            </h3>
                                            {feature.iconSvg && (
                                                <div className="w-24 h-24 shrink-0 flex items-center justify-center">
                                                    {feature.iconSvg}
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
