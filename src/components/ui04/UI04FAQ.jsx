import React, { useState } from 'react';

const UI04FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { q: "Is there a free trial?", a: "Yes! We offer a 7-day free trial with full access to all programs and features. No commitment required." },
        { q: "Can beginners join?", a: "Absolutely. Our 'Beginner Bootcamp' and 'Foundation' tracks are specifically designed to build your confidence and technique from scratch." },
        { q: "Do you provide diet plans?", a: "Yes. Every subscription includes access to our nutrition database and general meal guides tailored to your goal (Fat Loss or Muscle Gain)." },
        { q: "Can I cancel anytime?", a: "We believe in earning your loyalty, not locking you in. You can cancel your subscription instantly from your dashboard settings." },
        { q: "Are the trainers certified?", a: "Every coach on IronPulse holds elite-level certifications (CSCS, NASM, etc.) and has verified experience training clients." }
    ];

    return (
        <section id="faq" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <h2 className="text-4xl font-black text-white italic tracking-tighter mb-12 text-center">
                    GOT <span className="text-orange-500 decoration-slate-800 underline decoration-4 underline-offset-4">QUESTIONS?</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === index ? 'border-orange-500 bg-slate-900' : 'border-white/10 bg-black hover:border-white/20'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{faq.q}</span>
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-45 bg-orange-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                </span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed font-medium">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI04FAQ;
