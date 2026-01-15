import React, { useState } from 'react';
import { Check, X, ShieldCheck, Zap } from 'lucide-react';
import UI08ComparisonTable from './UI08ComparisonTable';

const UI08PricingEnroll = () => {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [enrollState, setEnrollState] = useState('form');
    const [scholarshipActive, setScholarshipActive] = useState(false);

    const handleEnroll = (plan) => {
        setSelectedPlan(plan);
        setEnrollState('form');
        setIsEnrollModalOpen(true);
    };

    const submitEnrollment = (e) => {
        e.preventDefault();
        setEnrollState('success');
    };

    const getPrice = (basePrice) => {
        if (!scholarshipActive) return basePrice;
        // Mock discount logic
        if (basePrice === 'Free') return 'Free';
        const num = parseInt(basePrice.replace('$', ''));
        return `$${Math.floor(num * 0.6)}`;
    };

    const plans = [
        {
            name: "Audit Track",
            basePrice: "Free",
            desc: "Self-paced video learning.",
            features: ["Full Video Library", "Community Access"],
            cta: "Start Learning",
            highlight: false
        },
        {
            name: "Professional",
            basePrice: "$399",
            desc: "Live mentorship + Certification.",
            features: ["Everything in Audit", "Weekly Live Sessions", "Code Reviews", "Certificate"],
            cta: "Enroll Now",
            highlight: true
        },
        {
            name: "Bootcamp Plus",
            basePrice: "$999",
            desc: "Job guarantee program.",
            features: ["Everything in Pro", "1:1 Career Coaching", "Mock Interviews", "Internship Intro"],
            cta: "Apply for Plus",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-slate-900 mb-6">Invest in yourself.</h2>

                    {/* Scholarship Toggle */}
                    <div className="inline-flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-200 shadow-inner">
                        <span className={`text-sm font-bold transition-colors ${!scholarshipActive ? 'text-slate-400' : 'text-slate-900'}`}>Standard</span>
                        <button
                            onClick={() => setScholarshipActive(!scholarshipActive)}
                            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${scholarshipActive ? 'bg-indigo-600' : 'bg-slate-300'}`}
                        >
                            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${scholarshipActive ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-sm font-bold flex items-center gap-1 transition-colors ${scholarshipActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                            <Zap size={14} fill="currentColor" /> Student Scholarship (-40%)
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 items-center mb-24">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative p-8 rounded-3xl bg-white border flex flex-col transition-all duration-300 ${plan.highlight ? 'border-indigo-500 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-sm opacity-90 hover:opacity-100 hover:scale-[1.02]'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-bold text-xs uppercase px-4 py-1 rounded-full shadow-md">
                                    Most Popular
                                </div>
                            )}
                            {scholarshipActive && plan.basePrice !== 'Free' && (
                                <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">
                                    SAVE 40%
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="text-4xl font-black text-slate-900 mb-2 transition-all key={scholarshipActive}">
                                {getPrice(plan.basePrice)}
                                {scholarshipActive && plan.basePrice !== 'Free' && <span className="text-lg text-slate-400 line-through ml-2 font-medium">{plan.basePrice}</span>}
                            </div>
                            <p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">{plan.desc}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feat, f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                                        <Check size={18} className="text-indigo-500 shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleEnroll(plan)}
                                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 ${plan.highlight
                                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/30'
                                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-center mb-8">Compare Plans</h3>
                    <UI08ComparisonTable />
                </div>
            </div>

            {/* Enrollment Modal */}
            {isEnrollModalOpen && (
                <div className="fixed inset-0 z-[80] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in-95 shadow-2xl">
                        <button onClick={() => setIsEnrollModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 z-10">
                            <X size={20} />
                        </button>

                        {enrollState === 'form' ? (
                            <div className="p-8">
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Secure your seat</h3>
                                <p className="text-slate-500 mb-6 text-sm">You are enrolling in <strong>{selectedPlan.name}</strong>.</p>

                                <form onSubmit={submitEnrollment} className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold text-slate-700 uppercase">Email Address</label>
                                        <input type="email" required className="w-full mt-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" placeholder="jane@example.com" />
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 mt-6">
                                        <div className="flex justify-between items-center mb-4 text-sm font-bold text-slate-900">
                                            <span>Total</span>
                                            <span className="text-xl">{getPrice(selectedPlan.basePrice)}</span>
                                        </div>
                                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-95">
                                            Confirm Enrollment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="p-12 text-center bg-indigo-50 h-full flex flex-col items-center justify-center">
                                <div className="w-16 h-16 bg-white text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    <Check size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Success!</h3>
                                <p className="text-slate-600 mb-8">Welcome to the cohort. Check your email for access instructions.</p>
                                <button onClick={() => setIsEnrollModalOpen(false)} className="bg-slate-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-800 shadow-lg">
                                    Done
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default UI08PricingEnroll;
