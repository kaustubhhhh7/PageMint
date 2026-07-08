import React, { useState } from 'react';
import { Check, X, Zap } from 'lucide-react';

const UI08PricingEnroll = () => {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('Prolific');

    const features = [
        { name: "Live Cohort Sessions", starter: false, pro: true, career: true },
        { name: "Async Video Content", starter: true, pro: true, career: true },
        { name: "Community Access", starter: true, pro: true, career: true },
        { name: "Project Reviews", starter: "Automated", pro: "Peer + Mentor", career: "Senior Engineer" },
        { name: "Career Services", starter: false, pro: false, career: true },
        { name: "Mock Interviews", starter: false, pro: false, career: "Unlimited" },
        { name: "Certificate", starter: true, pro: true, career: true },
    ];

    const plans = [
        { id: 'starter', name: "Starter", price: "$299" },
        { id: 'pro', name: "Pro", price: "$599" },
        { id: 'career', name: "Career", price: "$1299" },
    ];

    const openEnroll = (plan) => {
        setSelectedPlan(plan);
        setIsEnrollOpen(true);
    };

    return (
        <section id="pricing" className="py-24 bg-zinc-50 border-b border-zinc-200">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-black text-zinc-900 mb-4">Invest in your craft.</h2>
                    <p className="text-zinc-500 mb-4">Transparent pricing. No hidden fees.</p>
                    <div className="inline-block bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                        ✨ Early bird scholarships available for Oct cohort
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-4 divide-x divide-zinc-200 bg-zinc-50 text-center">
                        <div className="p-6 bg-white"></div>
                        {plans.map(plan => (
                            <div key={plan.id} className="p-6">
                                <h3 className="font-bold text-lg text-zinc-900 mb-1">{plan.name}</h3>
                                <div className="text-2xl font-black text-zinc-900">{plan.price}</div>
                            </div>
                        ))}
                    </div>

                    <div className="divide-y divide-zinc-100">
                        {features.map((feature, idx) => (
                            <div key={idx} className="grid grid-cols-4 divide-x divide-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <div className="p-4 pl-8 flex items-center text-sm font-medium text-zinc-700">
                                    {feature.name}
                                </div>
                                <div className="p-4 flex items-center justify-center text-sm text-zinc-600">
                                    {typeof feature.starter === 'boolean' ? (
                                        feature.starter ? <Check size={18} className="text-zinc-900" /> : <span className="text-zinc-300">-</span>
                                    ) : feature.starter}
                                </div>
                                <div className="p-4 flex items-center justify-center text-sm text-zinc-600 font-medium">
                                    {typeof feature.pro === 'boolean' ? (
                                        feature.pro ? <Check size={18} className="text-zinc-900" /> : <span className="text-zinc-300">-</span>
                                    ) : feature.pro}
                                </div>
                                <div className="p-4 flex items-center justify-center text-sm text-zinc-900 font-bold bg-amber-50/30">
                                    {typeof feature.career === 'boolean' ? (
                                        feature.career ? <Check size={18} className="text-amber-600" /> : <span className="text-zinc-300">-</span>
                                    ) : feature.career}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-4 divide-x divide-zinc-200 border-t border-zinc-200 p-6 gap-4">
                        <div className="hidden md:block"></div>
                        <button onClick={() => openEnroll('Starter')} className="w-full py-3 rounded-lg border border-zinc-300 font-bold text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900">
                            Choose Starter
                        </button>
                        <button onClick={() => openEnroll('Pro')} className="w-full py-3 rounded-lg bg-zinc-900 font-bold text-sm text-white hover:bg-zinc-800 shadow-lg shadow-zinc-200">
                            Choose Pro
                        </button>
                        <button onClick={() => openEnroll('Career')} className="w-full py-3 rounded-lg bg-amber-400 font-bold text-sm text-amber-950 hover:bg-amber-500 shadow-lg shadow-amber-100">
                            Choose Career
                        </button>
                    </div>
                </div>

                {/* Enrollment Modal */}
                {isEnrollOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsEnrollOpen(false)}>
                        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-200 relative" onClick={e => e.stopPropagation()}>
                            <button onClick={() => setIsEnrollOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900">
                                <X size={20} />
                            </button>

                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-amber-50">
                                    <Zap size={32} fill="currentColor" />
                                </div>
                                <h3 className="text-2xl font-black text-zinc-900 mb-2">Join the Cohort</h3>
                                <p className="text-zinc-500">You selected the <span className="font-bold text-zinc-900">{selectedPlan}</span> plan.</p>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Email Address</label>
                                    <input type="email" placeholder="you@company.com" className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">First Name</label>
                                        <input type="text" placeholder="Jane" className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Last Name</label>
                                        <input type="text" placeholder="Doe" className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all" />
                                    </div>
                                </div>

                                <button type="button" className="w-full bg-zinc-900 text-white font-bold py-4 rounded-lg hover:bg-zinc-800 transition-all mt-4">
                                    Proceed to Checkout
                                </button>
                                <p className="text-center text-xs text-zinc-400 mt-4">Secure payment via Stripe. 14-day refund policy.</p>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default UI08PricingEnroll;
