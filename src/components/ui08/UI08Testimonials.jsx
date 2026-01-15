import React from 'react';
import { Star, Quote } from 'lucide-react';

const UI08Testimonials = () => {
    return (
        <section className="py-24 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* Success Stats Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-slate-100 pb-16 mb-16 text-center">
                    <div>
                        <div className="text-3xl font-black text-slate-900">10k+</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Graduates</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-slate-900">4.8</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Avg Rating</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-slate-900">92%</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Hiring Rate</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-slate-900">120h</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Content</div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900">Student Success Stories</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Jason M.", role: "Now at Amazon", quote: "The curriculum is perfectly structured. I went from zero to building full-stack apps in 2 months." },
                        { name: "Lisa T.", role: "Now at Shopify", quote: "Mentorship makes the difference. Having a senior dev review my code weekly was priceless." },
                        { name: "Marcus R.", role: "Freelance Dev", quote: "I landed my first $5k client project just 3 weeks after finishing the bootcamp." }
                    ].map((t, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-2xl relative">
                            <Quote className="absolute top-6 right-6 text-slate-200" size={40} />
                            <div className="flex gap-1 mb-4 text-orange-400">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 font-medium leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
                            <div>
                                <div className="font-bold text-slate-900">{t.name}</div>
                                <div className="text-sm font-bold text-blue-600">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI08Testimonials;
