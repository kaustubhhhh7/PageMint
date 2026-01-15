import React from 'react';
import { ArrowRight, ShieldCheck, Activity, CreditCard, Lock } from 'lucide-react';

const UI07HeroOverview = () => {
    return (
        <section id="overview" className="bg-slate-50 pt-16 pb-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="relative z-10 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Enterprise-Ready • 99.99% Uptime</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                        Business banking that <span className="text-emerald-600">earns trust.</span>
                    </h1>

                    <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                        The secure, compliant, and scalable financial operating system for modern enterprises. Control spend, automate compliance, and scale globally.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-slate-900 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-slate-900/20">
                            Request a Demo
                        </button>
                        <button
                            onClick={() => document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-slate-600 border border-slate-200 px-8 py-3.5 rounded-lg font-bold hover:bg-slate-50 hover:text-slate-900 transition-all hover:border-slate-300"
                        >
                            View Security
                        </button>
                    </div>

                    <div className="pt-8 flex flex-wrap gap-3">
                        {["PCI-DSS Ready", "SOC 2 Type II", "256-bit Encryption", "ISO 27001"].map((badge, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded hover:border-emerald-200 transition-colors cursor-default">
                                <ShieldCheck size={14} className="text-emerald-500" />
                                <span className="text-xs font-bold text-slate-600">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content: Dashboard Mock */}
                <div className="relative perspective-1000">
                    <div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Dashboard Card Container */}
                    <div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-200/50 p-6 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out z-10">

                        {/* Header Mock */}
                        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                            <div className="flex gap-4">
                                <div className="w-32 h-4 bg-slate-100 rounded animate-pulse" />
                                <div className="w-20 h-4 bg-slate-50 rounded" />
                            </div>
                            <div className="w-8 h-8 bg-slate-100 rounded-full" />
                        </div>

                        {/* Balance Row */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="col-span-2 bg-slate-50 border border-slate-100 rounded-lg p-5 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                <div className="text-xs font-bold text-slate-400 uppercase mb-2">Total Balance</div>
                                <div className="text-3xl font-black text-slate-900 mb-2">$1,248,820.50</div>
                                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                                    <Activity size={12} /> +2.4% this week
                                </div>
                            </div>
                            <div className="col-span-1 bg-slate-900 rounded-lg p-5 text-white flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><CreditCard size={40} /></div>
                                <div className="text-xs font-bold opacity-60 uppercase">Active Cards</div>
                                <div className="text-2xl font-bold">142</div>
                                <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                                    <div className="bg-emerald-400 w-3/4 h-full rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Recent Transactions List */}
                        <div className="space-y-4">
                            <div className="text-xs font-bold text-slate-400 uppercase mb-2">Recent Transactions</div>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-default border border-transparent hover:border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                            <div className="w-4 h-4 rounded-sm bg-slate-300" />
                                        </div>
                                        <div>
                                            <div className="w-24 h-3 bg-slate-200 rounded mb-1" />
                                            <div className="w-16 h-2 bg-slate-100 rounded" />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="w-16 h-3 bg-slate-200 rounded mb-1 ml-auto" />
                                        <div className="w-10 h-2 bg-emerald-100 rounded ml-auto" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Fraud Alert Floating Widget */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-red-100 flex items-center gap-3 animate-bounce-slow">
                            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                                <Lock size={18} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-800">Fraud Protection</div>
                                <div className="text-[10px] font-medium text-slate-500">Secure & Active</div>
                            </div>
                            <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
                .perspective-1000 { perspective: 1000px; }
                .rotate-y-[-5deg] { transform: rotateY(-5deg); }
                .rotate-x-[5deg] { transform: rotateX(5deg); }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default UI07HeroOverview;
