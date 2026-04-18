import React from 'react';
import Container from '../Layout/Container';
import SearchBar from '../Navbar/SearchBar';

const Footer = () => {
    return (
        <footer className=" py-5 md:py-10 text-white">
            <Container>
                <div className=" space-y-4">

                    {/* Top Header Section */}
                    <div
                        className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl p-6 lg:px-12 lg:py-6 shadow-2xl"
                        style={{
                            backgroundImage: "linear-gradient(270deg, rgba(21,84,138,1.00) 0%, rgba(11,17,17,1.00) 100%)",
                            backgroundPosition: "center center"
                        }}
                    >
                        <div className="flex items-center">
                            <img src="/images/branding/NEXZONE LOGO WHITE.svg" alt="Nexzone Logo" className="w-32 h-24 md:w-40 md:h-24 xl:w-48 xl:h-28 object-contain object-left" />
                        </div>

                        <div className="flex items-stretch shrink-0 w-full md:w-auto">
                            <SearchBar isFooter />
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

                        {/* Left Large Section - Links */}
                        <div
                            className="col-span-1 rounded-[40px] p-10 lg:col-span-2 shadow-xl"
                            style={{
                                backgroundImage: "linear-gradient(270deg, rgba(21,84,138,1.00) 0%, rgba(11,17,17,1.00) 100%)",
                                backgroundPosition: "center center"
                            }}
                        >
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                                <div className="space-y-6">
                                    <h4 className="text-base md:text-xl font-semibold tracking-normal">Explore</h4>
                                    <ul className="space-y-4 ">
                                        <li><a href="/" className="transition-colors hover:text-white">Home</a></li>
                                        <li><a href="/products" className="transition-colors hover:text-white">Products</a></li>
                                        <li><a href="/services" className="transition-colors hover:text-white">Services</a></li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-base md:text-xl font-semibold tracking-normal">Resources</h4>
                                    <ul className="space-y-4 ">
                                        <li><a href="/privacy" className="transition-colors hover:text-white">Privacy</a></li>
                                        <li><a href="/terms" className="transition-colors hover:text-white">Terms</a></li>

                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-base md:text-xl font-semibold tracking-normal">Company</h4>
                                    <ul className="space-y-4 ">
                                        <li><a href="/company-profile" className="transition-colors hover:text-white">Company profile</a></li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-base md:text-xl font-semibold tracking-normal">Support</h4>
                                    <ul className="space-y-4 ">
                                        <li><a href="/contact" className="transition-colors hover:text-white">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10 pt-8 border-t border-white/10 text-center w-full">
                                <p className="text-sm font-medium">
                                    © 2026 <span className="text-[#048BFF]">Nexzone.</span> Published by <a href="https://nextmedia.ae/" target="_blank" rel="noopener noreferrer" className="text-[#048BFF] cursor-pointer hover:underline">Next Media </a>Group.
                                </p>
                            </div>
                        </div>

                        {/* Right Section Cards */}
                        <div className="flex flex-col gap-4">

                            {/* Follow Section */}
                            <div className="flex-1 rounded-[40px] bg-linear-to-br from-[#0c243f] to-[#004c99] p-10 shadow-xl">
                                <h4 className="mb-4 text-2xl md:text-3xl font-semibold tracking-tight">Follow in</h4>
                                <p className="mb-8 text-sm md:text-base leading-relaxed ">
                                    Follow us for updates on printer sales, maintenance, networking solutions, and office equipment in Dubai.                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.facebook.com/share/17vAWEJVji"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110 hover:shadow-lg"
                                        style={{
                                            backgroundImage: "url('/socialmedia-icons/facebook.svg')",
                                            backgroundSize: '100% 100%',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}
                                        aria-label="Facebook"
                                    ></a>
                                    <a
                                        href="https://www.linkedin.com/company/112245114/admin/dashboard/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110 hover:shadow-lg"
                                        style={{
                                            backgroundImage: "url('/socialmedia-icons/linked-in.svg')",
                                            backgroundSize: '100% 100%',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}
                                        aria-label="LinkedIn"
                                    ></a>
                                    <a
                                        href="https://www.instagram.com/nexzone_dubai?igsh=OXdybXloN3FxcTVq"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110 hover:shadow-lg"
                                        style={{
                                            backgroundImage: "url('/socialmedia-icons/instagram.svg')",
                                            backgroundSize: '100% 100%',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}
                                        aria-label="Instagram"
                                    ></a>
                                    <a
                                        href="https://wa.me/971508997350"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110 hover:shadow-lg"
                                        style={{
                                            backgroundImage: "url('/socialmedia-icons/whatsapp.svg')",
                                            backgroundSize: '100% 100%',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}
                                        aria-label="WhatsApp"
                                    ></a>
                                </div>
                            </div>

                            {/* Bottom Card */}
                            {/* <div className="flex h-24 items-center rounded-[40px] bg-linear-to-br from-[#0c243f] to-[#004c99] px-10 shadow-xl">
                               
                            </div> */}
                        </div>

                    </div>

                </div>
            </Container>
        </footer >
    );
};

export default Footer;
