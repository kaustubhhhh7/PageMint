import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const UI09Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-4xl font-bold text-center text-slate-900 mb-16">Get In Touch</h1>

                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* Info Side */}
                    <div className="bg-slate-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />

                        <div>
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="text-sky-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Our Office</h4>
                                        <p className="text-slate-400 text-sm">123 Adventure Way, Suite 400<br />Travel City, TC 90210</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="text-sky-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone</h4>
                                        <p className="text-slate-400 text-sm">Mon-Fri from 8am to 5pm</p>
                                        <p className="font-bold">+1 (800) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="text-sky-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email</h4>
                                        <p className="text-slate-400 text-sm">For general inquiries</p>
                                        <p className="font-bold">hello@voyagevista.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-slate-400 text-sm">Connect with us on social media for daily travel inspiration.</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-12">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500" placeholder="Tell us about your dream trip..."></textarea>
                            </div>

                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-sky-200 transition-all flex items-center justify-center gap-2 w-full md:w-auto">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UI09Contact;
