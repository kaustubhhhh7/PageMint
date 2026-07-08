import React from 'react';
import { Star } from 'lucide-react';

const UI07Testimonials = () => {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Trusted by 4,000+ businesses</h2>
                    <p className="text-slate-500">Join the fastest growing companies building on VaultPay.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "VaultPay transformed how we handle international payroll. The API integration was seamless and their compliance tools saved us hundreds of legal hours.",
                            author: "Sarah J.",
                            role: "CTO @ TechFlow",
                            initials: "SJ"
                        },
                        {
                            quote: "Finally, a banking interface that doesn't look like it was built in 1995. The dashboard is intuitive, fast, and gives us total visibility over spend.",
                            author: "Michael R.",
                            role: "Founder @ ScaleUp",
                            initials: "MR"
                        },
                        {
                            quote: "The fraud protection is real. We stopped a $20k unauthorized charge automatically last month. That alone paid for the service for ten years.",
                            author: "Elena V.",
                            role: "Finance Director @ CorpX",
                            initials: "EV"
                        }
                    ].map((t, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-amber-400 fill-amber-400" />)}
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-6 font-medium">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                                    <div className="text-xs text-slate-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI07Testimonials;
