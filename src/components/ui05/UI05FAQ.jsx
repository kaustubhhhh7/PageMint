import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-slate-700'}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-indigo-100 text-indigo-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-slate-600 leading-relaxed text-lg max-w-3xl">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const UI05FAQ = () => {
    const faqs = [
        {
            question: "Does the Active Noise Cancellation block voices?",
            answer: "Yes, our advanced hybrid ANC algorithm specifically targets mid-frequency sounds like human voices and background chatter, reducing them by up to 32dB so you can focus."
        },
        {
            question: "Are they water resistant?",
            answer: "AURA Pods are rated IPX5 water and sweat resistant. They can handle heavy workouts and rain without issues, but should not be submerged in water."
        },
        {
            question: "How long is the shipping time?",
            answer: "We offer free express shipping on all orders. Typically, you can expect delivery within 3-5 business days depending on your location."
        },
        {
            question: "What is the return policy?",
            answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your AURA Pods, simply return them in their original condition for a full refund."
        },
        {
            question: "Can I use them with multiple devices?",
            answer: "Yes! AURA Pods support multipoint connection, allowing you to pair with two devices simultaneously and seamlessly switch between them."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-500 text-lg">Everything you need to know about the product and billing.</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI05FAQ;
