import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const UI07ContactSales = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-16">

                    {/* Left Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Let's talk business.</h2>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                Ready to modernize your financial stack? Our enterprise team is ready to design a custom solution for your organization.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Email Us</div>
                                    <div className="text-slate-500">enterprise@vaultpay.com</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Call Us</div>
                                    <div className="text-slate-500">+1 (555) 000-0000</div>
                                    <div className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm EST</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Headquarters</div>
                                    <div className="text-slate-500">120 Financial District Blvd<br />New York, NY 10005</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-3 bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                        {submitted ? (
                            <div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center text-center p-8 animate-in fade-in">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                <p className="text-slate-500">Thank you for contacting us. A dedicated account manager will reach out within 2 hours.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-sm font-bold text-emerald-600 hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Work Email</label>
                                        <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Company Name</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white" placeholder="Acme Inc." />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Company Size</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white">
                                            <option>1-10 employees</option>
                                            <option>11-50 employees</option>
                                            <option>51-200 employees</option>
                                            <option>201-1000 employees</option>
                                            <option>1000+ employees</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white" placeholder="Tell us about your needs..." />
                                </div>

                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
                                    <label htmlFor="consent" className="text-xs text-slate-500">
                                        I agree to the privacy policy and consent to receive communications from VaultPay.
                                    </label>
                                </div>

                                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2">
                                    Request Demo <Send size={18} />
                                </button>

                                <p className="text-xs text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500" /> All data is transmitted via secure 256-bit encryption.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UI07ContactSales;
