import React from 'react';
import { Shield, Eye, FileText, Lock, Globe, Server, CheckCircle, Download, Bug } from 'lucide-react';

const UI07SecurityCompliance = () => {

    const features = [
        { icon: Lock, title: "End-to-End Encryption", desc: "AES-256 standard and TLS 1.3 for all data in transit and at rest." },
        { icon: Eye, title: "Role-Based Access", desc: "Granular permission controls to ensure data privacy within teams." },
        { icon: Shield, title: "Fraud Monitoring", desc: "Real-time AI detection of suspicious patterns and anomalies." },
        { icon: FileText, title: "Audit Logs", desc: "Immutable records of every action for complete traceability." },
        { icon: Globe, title: "Data Residency", desc: "Store your data in specific regions to meet local compliance laws." },
        { icon: Server, title: "Dedicated Infrastructure", desc: "Isolated single-tenant database options for enterprise tiers." },
    ];

    return (
        <section id="security" className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">Trust & Safety</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Security & Compliance First</h2>
                    <p className="text-slate-500 text-lg">
                        We don't just meet industry standards; we set them. Your data security is the foundation of our platform logic.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Security Features Grid */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        {features.map((feat, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all group bg-slate-50/50 hover:bg-white">
                                <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 mb-4 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors shadow-sm">
                                    <feat.icon size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar / Checklist Panel */}
                    <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Shield className="text-emerald-400" size={20} /> Compliance Status
                        </h3>

                        <div className="space-y-4 mb-8">
                            {["SOC 2 Type II Certified", "GDPR Compliant", "PCI-DSS Level 1", "ISO 27001 Certified"].map((check, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                    <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                                    {check}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-sm transition-colors shadow-lg shadow-emerald-900/20">
                                <Download size={16} /> Security Overview PDF
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-bold text-sm transition-colors border border-slate-700">
                                <Bug size={16} /> Report Vulnerability
                            </button>
                        </div>
                    </div>

                </div>

                {/* Mini Timeline Componenet */}
                <div className="mt-20 pt-12 border-t border-slate-100">
                    <h4 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Compliance Timeline</h4>
                    <div className="relative">
                        {/* Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "KYC Onboarding", desc: "Automated identity verification." },
                                { step: "02", title: "Risk Assessment", desc: "Instant sanctions screening." },
                                { step: "03", title: "Active Monitoring", desc: "24/7 transaction analysis." },
                                { step: "04", title: "Quarterly Audit", desc: "External security reviews." }
                            ].map((item, i) => (
                                <div key={i} className="relative bg-white md:bg-transparent p-4 md:p-0 rounded-lg border md:border-none border-slate-100 shadow-sm md:shadow-none z-10 text-center">
                                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 ring-4 ring-white shadow-lg">
                                        {item.step}
                                    </div>
                                    <h5 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h5>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UI07SecurityCompliance;
