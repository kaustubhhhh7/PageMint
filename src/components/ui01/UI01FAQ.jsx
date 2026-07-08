import React, { useState } from 'react';
import Container from '../common/Container';

const faqs = [
    { question: "Is there a free trial?", answer: "Yes! We offer a 14-day free trial on all paid plans. No credit card required to start." },
    { question: "Can I cancel anytime?", answer: "Absolutely. You can cancel your subscription at any time from your dashboard settings. No hidden fees." },
    { question: "Do you support teams?", answer: "Yes, our Pro and Business plans are designed for teams with built-in collaboration features and roles." },
    { question: "Is my data secure?", answer: "We use bank-level encryption (AES-256) and store your data in secure, soc2 compliant data centers." },
    { question: "Do you offer refunds?", answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service for any reason." },
];

const UI01FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-base font-bold text-indigo-600 uppercase tracking-wide">FAQ</h2>
                    <h3 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h3>
                </div>

                <div className="max-w-3xl mx-auto divide-y divide-slate-100">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full text-left focus:outline-none group"
                            >
                                <span className={`text-lg font-medium ${openIndex === index ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'} transition-colors`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-6 flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full border ${openIndex === index ? 'border-indigo-600 text-indigo-600 rotate-180' : 'border-slate-300 text-slate-400 group-hover:border-indigo-600 group-hover:text-indigo-600'} transition-all duration-200`}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`mt-2 pr-12 text-slate-600 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="pb-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UI01FAQ;
