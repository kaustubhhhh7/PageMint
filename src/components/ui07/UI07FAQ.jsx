import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const UI07FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndex, setOpenIndex] = useState(0);

    const questions = [
        { q: "Is VaultPay a regulated bank?", a: "Yes, VaultPay is a fully licensed and regulated financial institution. We partner with Tier-1 banks globally to safeguard client funds in segregated accounts." },
        { q: "How secure are my funds?", a: "We employ military-grade encryption, 2FA enforcement, and real-time fraud monitoring. All deposits are insured up to $250,000 via our banking partners." },
        { q: "Can I issue cards to my employees?", a: "Absolutely. You can issue unlimited virtual cards instantly and physical cards with a few clicks. Each card can have custom spend limits and restrictions." },
        { q: "Do you support international wires?", a: "Yes, we support payments to over 140 countries in 30+ currencies. Transfers typically settle within 1 business day." },
        { q: "Does VaultPay integrate with Xero/Quickbooks?", a: "Yes, we have native 2-way sync integrations with all major accounting platforms, including Xero, Quickbooks, Netsuite, and Sage." },
        { q: "What is the approval process?", a: "Most business accounts are approved within 24 hours. We use automated KYC/KYB checks to speed up onboarding without compromising compliance." },
    ];

    const filteredQuestions = questions.filter(item =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>

                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search help articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
                        />
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredQuestions.length > 0 ? (
                        filteredQuestions.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all">
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                                >
                                    {item.q}
                                    <ChevronDown size={20} className={`text-slate-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                                </button>
                                <div
                                    className={`px-5 text-slate-600 leading-relaxed transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    {item.a}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-slate-500 py-8">
                            No matching questions found.
                        </div>
                    )}
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-slate-500">Still have questions?</p>
                    <button className="text-emerald-600 font-bold text-sm hover:underline mt-1">Visit Help Center</button>
                </div>
            </div>
        </section>
    );
};

export default UI07FAQ;
