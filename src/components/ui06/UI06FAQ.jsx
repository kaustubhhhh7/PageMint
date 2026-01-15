import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    { q: "Can I transfer my ticket?", a: "Yes! You can transfer your ticket to another attendee up to 48 hours before the event via your account dashboard." },
    { q: "Is lunch included in the pass?", a: "Lunch and refreshments are included with Pro and VIP passes. Starter pass holders have access to paid food stalls." },
    { q: "Is there parking available?", a: "The Mint Convention Center has a dedicated parking lot with 500+ spots. Valet is available for VIP holders." },
    { q: "Do you offer student discounts?", a: "Yes, we offer a 50% discount on Starter Passes for valid ID holders. Email students@nexa.com." },
    { q: "Will sessions be recorded?", a: "All Keynote sessions will be live-streamed and recorded. Workshop sessions are in-person only." },
    { q: "What is the refund policy?", a: "Full refunds are available until 14 days prior to the event. After that, only transfers are allowed." }
];

const UI06FAQ = () => {
    const [search, setSearch] = useState('');
    const [openIndex, setOpenIndex] = useState(null);

    const filtered = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()));

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-slate-900 mb-6">Frequently Asked</h2>

                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    {filtered.length === 0 ? (
                        <div className="text-center text-slate-400 py-8">No results found for "{search}"</div>
                    ) : filtered.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-help hover:border-indigo-300 transition-colors"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <div className="p-6 flex items-center justify-between">
                                <h3 className="font-bold text-slate-800 text-lg pr-8">{item.q}</h3>
                                <ChevronDown
                                    className={`text-indigo-500 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </div>
                            <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI06FAQ;
