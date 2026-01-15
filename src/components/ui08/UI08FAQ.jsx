import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const UI08FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { q: "Is this course beginner friendly?", a: "Yes! We start with HTML/CSS fundamentals. No prior coding experience is required, just a willingness to learn." },
        { q: "Do I get a certificate upon completion?", a: "Absolutely. You'll receive a verified certificate of completion that you can add to your LinkedIn profile and resume." },
        { q: "What if I miss a live class?", a: "All live sessions are recorded and uploaded to your dashboard within 24 hours, so you can catch up at your own pace." },
        { q: "Is there a refund policy?", a: "We offer a 14-day no-questions-asked money back guarantee. If you're not satisfied, we'll refund you in full." },
        { q: "Can I watch the lessons on mobile?", a: "Yes, our platform is fully responsive. You can watch lectures and track progress from your phone or tablet." },
        { q: "Do you provide job placement support?", a: "Our Pro and Plus tiers include dedicated career support, resume reviews, and mock interviews to help you get hired." }
    ];

    const filtered = faqs.filter(f => f.q.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search keywords..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    </div>
                </div>

                <div className="space-y-4">
                    {filtered.map((item, i) => (
                        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-900">{item.q}</span>
                                <ChevronDown className={`text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in slide-in-from-top-2">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <div className="text-center text-slate-500 py-8">No results found.</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default UI08FAQ;
