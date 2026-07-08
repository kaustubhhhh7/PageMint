import React, { useState } from 'react';
import { CreditCard, RefreshCw, Users, PieChart, Globe, Bell, FileText, Anchor, ArrowRight, X } from 'lucide-react';

const UI07Features = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    const features = [
        { id: 1, icon: FileText, title: "Smart Invoicing", desc: "Automate invoice creation and reconciliation.", details: "Create recurring invoices, track payments in real-time, and automatically reconcile incoming transfers with outstanding bills." },
        { id: 2, icon: RefreshCw, title: "Bulk Transfers", desc: "Pay your entire team or vendors in one click.", details: "Upload CSVs or use our API to fire off thousands of payments instantly. Supports defined approval workflows." },
        { id: 3, icon: CreditCard, title: "Corporate Cards", desc: "Issue physical and virtual cards instantly.", details: "Set custom spend limits per card, restrict merchant categories, and freeze compromised cards instantly from the dashboard." },
        { id: 4, icon: PieChart, title: "Expense Limits", desc: "Control spend before it happens.", details: "Enforce company policies programmatically. expenses outside policy are automatically flagged for review." },
        { id: 5, icon: Users, title: "Team Approvals", desc: "Multi-level sign-off workflows.", details: "Design custom approval chains based on amount, department, or project. Ensure no large payment leaves without oversight." },
        { id: 6, icon: Bell, title: "Real-time Alerts", desc: "Instant notifications for every transaction.", details: "Get notified via Slack, Email, or SMS the moment money moves. Configure custom triggers for balance thresholds." },
        { id: 7, icon: Globe, title: "Multi-currency", desc: "Hold and exchange 30+ currencies.", details: "Local banking details for USD, GBP, EUR and more. Save on fx rates with mid-market pricing." },
        { id: 8, icon: Anchor, title: "API Access", desc: "Connect with your existing ERP.", details: "Full read-write API access to build custom integrations with Netsuite, Xero, or your proprietary tools." },
    ];

    return (
        <section id="features" className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Powerful Features</h2>
                        <p className="text-slate-500 max-w-xl">
                            Everything you need to manage corporate finance in one unified platform.
                        </p>
                    </div>
                    <button className="text-emerald-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        View Full Feature List <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            onClick={() => setActiveFeature(feature)}
                            className={`bg-white p-6 rounded-xl border transition-all cursor-pointer group ${activeFeature?.id === feature.id ? 'border-emerald-500 ring-1 ring-emerald-500 shadow-md' : 'border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5'}`}
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-500">{feature.desc}</p>

                            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center text-xs font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                Learn more <ArrowRight size={12} className="ml-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feature Spotlight Interaction (Inline Modal) */}
            {activeFeature && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()} // Prevent close on modal click
                    >
                        <button
                            onClick={() => setActiveFeature(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8">
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <activeFeature.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">{activeFeature.title}</h3>
                            <p className="text-lg text-slate-600 font-medium mb-6">{activeFeature.desc}</p>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Deep Dive</h4>
                                <p className="text-slate-700 leading-relaxed text-sm">
                                    {activeFeature.details}
                                </p>
                            </div>

                            <button className="w-full mt-8 bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                                Request Access
                            </button>
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div className="absolute inset-0 z-[-1]" onClick={() => setActiveFeature(null)} />
                </div>
            )}
        </section>
    );
};

export default UI07Features;
