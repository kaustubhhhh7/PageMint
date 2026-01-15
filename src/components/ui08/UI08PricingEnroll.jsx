import React, { useState } from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

const UI08PricingEnroll = () => {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [enrollState, setEnrollState] = useState('form'); // form | success

    const handleEnroll = (plan) => {
        setSelectedPlan(plan);
        setEnrollState('form');
        setIsEnrollModalOpen(true);
    };

    const submitEnrollment = (e) => {
        e.preventDefault();
        setEnrollState('success');
    };

    const plans = [
        {
            name: "Audit Track",
            price: "Free",
            desc: "Access to video lessons only.",
            features: ["Full Video Library", "Community Access", "No Certificate"],
            cta: "Start Learning",
            highlight: false
        },
        {
            name: "Professional",
            price: "$399",
            desc: "Mentorship & Certificates.",
            features: ["Everything in Audit", "Live Mentor Sessions", "Project Reviews", "Certificate of Completion", "Career Support"],
            cta: "Enroll Now",
            highlight: true
        },
        {
            name: "Bootcamp Plus",
            price: "$999",
            desc: "Guaranteed Internship.",
            features: ["Everything in Pro", "1-on-1 Career Coaching", "Mock Interviews", "Guaranteed Internship", "Lifetime Access"],
            cta: "Apply for Plus",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                        </span>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-wide">Only 28 seats left</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Invest in your career.</h2>
                    <p className="text-slate-500">Transparent pricing. No hidden fees. 14-day money back guarantee.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative p-8 rounded-3xl bg-white border flex flex-col ${plan.highlight ? 'border-orange-500 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-sm'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-bold text-xs uppercase px-4 py-1 rounded-full shadow-md">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="text-4xl font-black text-slate-900 mb-2">{plan.price}</div>
                            <p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">{plan.desc}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feat, f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                                        <Check size={18} className="text-blue-500 shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleEnroll(plan)}
                                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${plan.highlight
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'
                                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enrollement Modal */}
            {isEnrollModalOpen && (
                <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in-95">
                        <button onClick={() => setIsEnrollModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
                            <X size={20} />
                        </button>

                        {enrollState === 'form' ? (
                            <div className="p-8">
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Secure your seat</h3>
                                <p className="text-slate-500 mb-6 text-sm">You are enrolling in <strong>{selectedPlan.name}</strong>.</p>

                                <form onSubmit={submitEnrollment} className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold text-slate-700 uppercase">Full Name</label>
                                        <input type="text" required className="w-full mt-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Jane Doe" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-slate-700 uppercase">Email Address</label>
                                        <input type="email" required className="w-full mt-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="jane@example.com" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-slate-700 uppercase">Discount Code (Optional)</label>
                                        <input type="text" className="w-full mt-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border-dashed" placeholder="SAVE20" />
                                    </div>

                                    <div className="pt-4">
                                        <div className="flex justify-between items-center mb-4 text-sm font-bold text-slate-900">
                                            <span>Total</span>
                                            <span>{selectedPlan.price}</span>
                                        </div>
                                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-95">
                                            Confirm Enrollment
                                        </button>
                                        <div className="flex items-center justify-center gap-1 mt-3 text-[10px] text-slate-400 font-bold uppercase">
                                            <ShieldCheck size={12} /> SSL Encrypted Payment
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="p-12 text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Enrollment Initiated!</h3>
                                <p className="text-slate-500 mb-8">Please check your email for the next steps to complete your registration.</p>
                                <button onClick={() => setIsEnrollModalOpen(false)} className="bg-slate-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-800">
                                    Back to Course
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
