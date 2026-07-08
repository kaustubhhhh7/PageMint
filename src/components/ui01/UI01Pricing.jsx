import React, { useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const UI01Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section id="pricing" className="py-20 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-bold text-indigo-600 uppercase tracking-wide">Pricing</h2>
                    <h3 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Simple plans for every stage
                    </h3>
                    <p className="mt-4 text-xl text-slate-500">
                        Choose the plan that best fits your needs. Scale up or down at any time.
                    </p>

                    <div className="mt-8 flex justify-center items-center gap-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isAnnual ? 'bg-indigo-600' : 'bg-slate-200'}`}
                        >
                            <span
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isAnnual ? 'translate-x-5' : 'translate-x-0'}`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                            Yearly <span className="text-indigo-600 text-xs ml-1 font-bold">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Starter Plan */}
                    <div className="rounded-2xl border border-slate-200 p-8 hover:border-indigo-300 transition-colors">
                        <h4 className="text-lg font-semibold text-slate-900">Starter</h4>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-4xl font-extrabold text-slate-900">{isAnnual ? '$0' : '$0'}</span>
                            <span className="ml-1 text-slate-500">/mo</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-500">Perfect for side projects.</p>
                        <ul className="mt-6 space-y-4">
                            {['1 User', '1 Project', 'Community Support', 'Basic Analytics', 'Git Integration'].map((feature) => (
                                <li key={feature} className="flex items-start">
                                    <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-slate-600 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="secondary" className="mt-8 w-full">Start Free</Button>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative rounded-2xl border-2 border-indigo-600 p-8 bg-white shadow-xl scale-105 z-10">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="inline-flex px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-indigo-600 text-white">
                                Most Popular
                            </span>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900">Pro</h4>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-4xl font-extrabold text-slate-900">{isAnnual ? '$29' : '$39'}</span>
                            <span className="ml-1 text-slate-500">/mo</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-500">For fast-growing teams.</p>
                        <ul className="mt-6 space-y-4">
                            {['5 Users', 'Unlimited Projects', 'Priority Support', 'Advanced Analytics', 'Private Repos', 'Custom Domains'].map((feature) => (
                                <li key={feature} className="flex items-start">
                                    <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-slate-600 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="primary" className="mt-8 w-full shadow-lg shadow-indigo-200">Choose Pro</Button>
                    </div>

                    {/* Business Plan */}
                    <div className="rounded-2xl border border-slate-200 p-8 hover:border-indigo-300 transition-colors">
                        <h4 className="text-lg font-semibold text-slate-900">Business</h4>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-4xl font-extrabold text-slate-900">{isAnnual ? '$79' : '$99'}</span>
                            <span className="ml-1 text-slate-500">/mo</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-500">For scaling organizations.</p>
                        <ul className="mt-6 space-y-4">
                            {['Unlimited Users', 'Unlimited Everything', '24/7 Dedicated Support', 'SSO & Audit Logs', 'SLA Guarantee', 'Custom Contracts'].map((feature) => (
                                <li key={feature} className="flex items-start">
                                    <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-slate-600 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="secondary" className="mt-8 w-full">Contact Sales</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UI01Pricing;
