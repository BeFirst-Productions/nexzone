"use client";

import React, { useState } from 'react';
import Container from '../Common/Layout/Container';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const ContactInfoCard = ({ icon: Icon, title, content, subContent, href }) => {
    const CardContent = (
        <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer w-full text-left h-full">
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#048BFF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div>
                <h4 className="text-white font-semibold text-sm md:text-lg mb-0.5 md:mb-1">{title}</h4>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{content}</p>
                {subContent && <p className="text-gray-400 text-[10px] md:text-xs mt-0.5 md:mt-1">{subContent}</p>}
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
                {CardContent}
            </a>
        );
    }

    return CardContent;
};

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (data) => {
        const newErrors = {};

        if (!data.name.trim()) {
            newErrors.name = 'Full name is required.';
        } else if (data.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters.';
        }

        if (!data.email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (data.phone && !/^[+\d\s\-()]{7,15}$/.test(data.phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }

        if (!data.subject) {
            newErrors.subject = 'Please select a service.';
        }

        if (!data.message.trim()) {
            newErrors.message = 'Message cannot be empty.';
        } else if (data.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters.';
        }

        return newErrors;
    };

    const handleChange = (field, value) => {
        const updated = { ...formData, [field]: value };
        setFormData(updated);
        // Clear error for that field on change
        if (errors[field]) {
            const updatedErrors = { ...errors };
            delete updatedErrors[field];
            setErrors(updatedErrors);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // ── Format WhatsApp Message ─────────────────────────────────────────
        const WHATSAPP_NUMBER = "971508997350";
        const message = `👋 *New Contact Enquiry*

━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone || 'N/A'}
📂 *Service:* ${formData.subject}
📝 *Message:* ${formData.message}
━━━━━━━━━━━━━━━━━━━━━━`;

        const encodedMessage = encodeURIComponent(message);
        const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(waURL, '_blank');

        setErrors({});
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const fieldClass = (field) =>
        `w-full px-6 py-4 rounded-xl bg-white border ${errors[field] ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-gray-100 focus:border-[#113578] focus:ring-[#113578]/5'} focus:ring-4 outline-none transition-all placeholder:text-gray-300 shadow-sm`;

    return (
        <section className="py-20 bg-white">
            <Container>
                {/* Header Section */}
                <div className="max-w-4xl mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get in <span className="text-[#048BFF]">Touch</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl text-lg">
                        Have questions about our services or need a quote? Reach out to our team of experts today.
                    </p>
                </div>

                <div className="flex flex-col-reverse lg:flex-row gap-8 items-stretch">
                    {/* Contact Information Box */}
                    <div
                        className="w-full lg:w-[380px] p-6 md:p-10 rounded-[30px] flex flex-col gap-4 md:gap-6 shadow-2xl"
                        style={{ backgroundImage: "linear-gradient(180deg, rgba(21,84,138,1.00) 0%, rgba(11,17,17,1.00) 100%)" }}
                    >
                        <ContactInfoCard
                            icon={MapPin}
                            title="Visit Us"
                            content="Al Nahda Sharjah,UAE"
                            subContent="Open: 9:00 AM - 6:00 PM"
                        // href="https://www.google.com/maps/search/?api=1&query=Sharjah+Industrial+Area-3+UAE"
                        />

                        <ContactInfoCard
                            icon={Phone}
                            title="Call Us"
                            content="+971 50 899 8716"
                            subContent="Mon-Fri, 24/7 Support"
                            href="tel:+971508998716"
                        />

                        <ContactInfoCard
                            icon={Mail}
                            title="Email Us"
                            content="info@nexzoneuae.com"
                            // subContent="support@nexzoneuae.com"
                            href="mailto:info@nexzoneuae.com"
                        />

                        <ContactInfoCard
                            icon={MessageSquare}
                            title="Live Chat"
                            content="Available on WhatsApp"
                            subContent="Fastest response time"
                            href="https://wa.me/971508997350"
                        />
                    </div>

                    {/* Contact Form Section */}
                    <div className="flex-1 bg-[#F8FAFC] rounded-[40px] p-6 md:p-12 border border-blue-50/50 shadow-sm">

                        {/* Success Banner */}
                        {submitted && (
                            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-green-50 border border-green-200 px-6 py-4 text-green-700 font-semibold">
                                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-800 ml-1">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className={fieldClass('name')}
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                />
                                {errors.name && <p className="text-red-500 text-xs ml-1 mt-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-800 ml-1">Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className={fieldClass('email')}
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                />
                                {errors.email && <p className="text-red-500 text-xs ml-1 mt-1">{errors.email}</p>}
                            </div>

                            {/* Phone */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-800 ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+971 -- --- ----"
                                    className={fieldClass('phone')}
                                    value={formData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                />
                                {errors.phone && <p className="text-red-500 text-xs ml-1 mt-1">{errors.phone}</p>}
                            </div>

                            {/* Subject */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-800 ml-1">Subject <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select
                                        className={`${fieldClass('subject')} appearance-none`}
                                        value={formData.subject}
                                        onChange={(e) => handleChange('subject', e.target.value)}
                                    >
                                        <option value="">Select Service</option>
                                        <option value="Printer Service">Printer Service</option>
                                        <option value="Rental Solutions">Rental Solutions</option>
                                        <option value="Supplies & Sales">Supplies & Sales</option>
                                        <option value="Support">General Inquiry</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                </div>
                                {errors.subject && <p className="text-red-500 text-xs ml-1 mt-1">{errors.subject}</p>}
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="text-sm font-bold text-gray-800 ml-1">Your Message <span className="text-red-500">*</span></label>
                                <textarea
                                    rows="6"
                                    placeholder="How can we help you?"
                                    className={fieldClass('message') + ' resize-none'}
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs ml-1 mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit */}
                            <div className="md:col-span-2 mt-2">
                                <button
                                    type="submit"
                                    className="bg-[#113578] hover:bg-[#048BFF] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-[#048BFF]/20 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                                >
                                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                {/* <div className="mt-20 rounded-[40px] overflow-hidden shadow-2xl h-[450px] border-4 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.40226343513!2d55.234857497265625!3d25.291986400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sSharjah%20Industrial%20Area%203!5e0!3m2!1sen!2sae!4v1714861326054!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div> */}
            </Container>
        </section>
    );
};

export default ContactSection;
