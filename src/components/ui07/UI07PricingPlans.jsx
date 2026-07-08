import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const UI07PricingPlans = () => {
    const [annual, setAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            price: annual ? 0 : 0,
            desc: "For pre-seed startups.",
            features: ["Free Business Account", "5 Team Members", "10 Virtual Cards", "Basic Analytics", "Standard Support"],
            cta: "Open Account",
            highlight: false
        },
        {
            name: "Growth",
            price: annual ? 49 : 59,
            desc: "For scaling teams.",
            features: ["Everything in Starter", "Unlimited Team Members", "Unlimited Virtual Cards", "Automatic Expense Mgmt", "Priority Support", "Bulk Payments"],
            cta: "Start 30-Day Trial",
            highlight: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "For large organizations.",
            features: ["Everything in Growth", "Custom API Limits", "Dedicated Success Manager", "Custom SLA", "On-Prem Deployment", "Audit Logs Export"],
            cta: "Contact Sales",
            highlight: false,
            isEnterprise: true
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Simple, transparent pricing.</h2>

                    {/* Toggle */}
                    <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-full shadow-sm">
                        <button
                            onClick={() => setAnnual(false)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!annual ? 'bg-slate-900 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${annual ? 'bg-slate-900 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Annual <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded ml-1">SAVE 20%</span>
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <div key={i} className={`relative bg-white p-8 rounded-2xl border flex flex-col ${plan.highlight ? 'border-emerald-500 ring-1 ring-emerald-500 shadow-xl shadow-emerald-500/10' : 'border-slate-200 shadow-sm hover:shadow-lg transition-shadow'}`}>
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                                <p className="text-sm text-slate-500 mt-1">{plan.desc}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-4xl font-black text-slate-900">
                                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                                    {typeof plan.price === 'number' && <span className="text-base font-medium text-slate-400 ml-1">/mo</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <Check size={16} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-emerald-500' : 'text-slate-400'}`} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${plan.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI07PricingPlans;
