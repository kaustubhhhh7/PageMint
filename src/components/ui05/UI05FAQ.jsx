import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full border border-slate-100 transition-all duration-300 ${isOpen ? 'bg-indigo-600 border-indigo-600 text-white rotate-180' : 'bg-white text-slate-400 group-hover:border-indigo-200'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-slate-500 leading-relaxed max-w-2xl">{answer}</p>
            </div>
        </div>
    );
};

const UI05FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "What is the warranty period?",
            a: "AURA Pods come with a comprehensive 2-year manufacturer warranty covering all hardware defects and battery performance issues."
        },
        {
            q: "What is the return policy?",
            a: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the sound, fit, or feel, return them for a full refund. No questions asked."
        },
        {
            q: "How long does shipping take?",
            a: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout. International orders typically arrive within 7-10 days."
        },
        {
            q: "Does ANC work during calls?",
            a: "Yes! Our Hybrid ANC system works during calls to block out background noise for you, while our 6-mic beamforming array clears up your voice for the person on the other end."
        },
        {
            q: "Is it compatible with Android and iOS?",
            a: "Absolutely. AURA Pods feature universal Bluetooth 5.3 compatibility. We also support Google Fast Pair for Android and high-quality AAC codecs for iOS devices."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-500">Everything you need to know about the product and support.</p>
                </div>

                <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100">
                    {faqs.map((faq, idx) => (
                        <AccordionItem
                            key={idx}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI05FAQ;
