import React, { useState } from 'react';

const faqs = [
    { question: "What is the warranty period?", answer: "Aura Pods come with a comprehensive 2-year manufacturer warranty covering any defects in materials or workmanship." },
    { question: "What acts as the return policy?", answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, return them in original condition for a full refund." },
    { question: "How long does delivery take?", answer: "Standard shipping takes 3-5 business days. Express shipping options are available at checkout for 1-2 day delivery." },
    { question: "Does ANC work during calls?", answer: "Yes! Our AI-powered voice isolation works in tandem with ANC to ensure both you and your caller hear absolutely nothing but clear voice." },
    { question: "Is it compatible with Android and iOS?", answer: "Absolutely. Aura Pods use Bluetooth 5.3 standards and work seamlessly with any Bluetooth-enabled device, including phones, laptops, and consoles." },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-200">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {question}
                </span>
                <span className={`relative w-8 h-8 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {/* Morphing Icon */}
                    <span className={`absolute w-full h-0.5 bg-current transition-all ${isOpen ? 'bg-blue-600' : 'bg-slate-400'}`}></span>
                    <span className={`absolute h-full w-0.5 bg-current transition-all ${isOpen ? 'rotate-90 opacity-0' : 'bg-slate-400'}`}></span>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-slate-600 leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const UI05FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Frequently Asked.</h2>
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            {...faq}
                            isOpen={activeIndex === index}
                            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI05FAQ;
