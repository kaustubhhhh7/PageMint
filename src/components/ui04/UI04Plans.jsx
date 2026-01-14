import React, { useState } from 'react';

const UI04Plans = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'quarterly'

    const plans = [
        {
            name: 'Starter',
            priceMonthly: 29,
            priceQuarterly: 75,
            features: ['Access to gym floor', '2 Group classes/mo', 'Locker access', 'Free WiFi'],
            highlight: false
        },
        {
            name: 'Pro',
            priceMonthly: 59,
            priceQuarterly: 150,
            features: ['Unlimited Gym Access', 'Unlimited Classes', '1 PT Session/mo', 'Nutrition Guide', 'Guest Pass'],
            highlight: true
        },
        {
            name: 'Elite',
            priceMonthly: 99,
            priceQuarterly: 270,
            features: ['All Pro features', '4 PT Sessions/mo', 'Private Locker', 'Towel Service', 'Sauna Access', 'Custom Meal Plan'],
            highlight: false
        }
    ];

    return (
        <section id="plans" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header & Toggle */}
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-8 text-center">
                        CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">WEAPON.</span>
                    </h2>

                    {/* Toggle Switch */}
                    <div className="relative inline-flex bg-slate-900 p-1 rounded-full border border-white/10">
                        <div
                            className={`absolute top-1 bottom-1 w-[50%] bg-white/10 rounded-full shadow-sm transition-all duration-300 ease-out ${billingCycle === 'monthly' ? 'left-1' : 'left-[calc(50%-4px)] translate-x-1'}`}
                        ></div>
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`relative z-10 px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('quarterly')}
                            className={`relative z-10 px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${billingCycle === 'quarterly' ? 'text-white' : 'text-slate-500'}`}
                        >
                            Quarterly <span className="text-[10px] text-green-400 ml-1">-15%</span>
                        </button>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`relative group bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]
                            ${plan.highlight ? 'border-orange-500 shadow-lg scale-105 z-10 bg-slate-900' : 'border-white/5 hover:border-white/20'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20 animate-pulse">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white uppercase italic mb-4">{plan.name}</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-black text-white tracking-tighter">
                                    ${billingCycle === 'monthly' ? plan.priceMonthly : plan.priceQuarterly}
                                </span>
                                <span className="text-slate-500 font-bold ml-2">
                                    /{billingCycle === 'monthly' ? 'mo' : 'qtr'}
                                </span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center text-slate-300 font-medium opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"
                                        style={{ transitionDelay: `${i * 100}ms` }}
                                    >
                                        <span className="w-5 h-5 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 font-bold uppercase tracking-wider skew-x-[-10deg] transition-all duration-300 relative overflow-hidden group/btn 
                                ${plan.highlight
                                    ? 'bg-orange-600 text-white hover:bg-orange-500 shadow-xl shadow-orange-500/30'
                                    : 'bg-transparent text-white border-2 border-white/10 hover:border-orange-500 hover:text-orange-500'}`}
                            >
                                <span className="relative z-10 inline-block skew-x-[10deg]">Select Plan</span>
                                {plan.highlight && (
                                    <span className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-150 rounded-full transition-transform duration-500 opacity-0 group-hover/btn:opacity-100 origin-center"></span>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI04Plans;
