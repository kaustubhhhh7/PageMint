import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const UI10Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Info */}
                    <div>
                        <h1 className="text-5xl font-serif text-stone-900 mb-8">Get in Touch</h1>
                        <p className="text-xl font-light text-stone-600 mb-12">
                            Ready to find your dream property? Or just want to explore what's possible? We are here to help.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-6">
                                <div className="p-4 bg-white border border-stone-100 rounded-full h-fit">
                                    <Phone className="text-amber-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-stone-900">Call Us</h4>
                                    <p className="text-stone-500 font-light">+1 (310) 555-0199</p>
                                    <p className="text-stone-500 text-sm mt-1">Mon-Fri: 9am - 8pm PST</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="p-4 bg-white border border-stone-100 rounded-full h-fit">
                                    <Mail className="text-amber-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-stone-900">Email Us</h4>
                                    <p className="text-stone-500 font-light">hello@aurelianestates.com</p>
                                    <p className="text-stone-500 text-sm mt-1">Responding within 2 hours</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="p-4 bg-white border border-stone-100 rounded-full h-fit">
                                    <MapPin className="text-amber-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-stone-900">Visit Us</h4>
                                    <p className="text-stone-500 font-light">123 Luxury Lane, Beverly Hills</p>
                                    <p className="text-stone-500 text-sm mt-1">CA 90210, United States</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white p-10 shadow-xl shadow-stone-200/50 border-t-4 border-amber-600">
                        <h2 className="text-2xl font-serif text-stone-900 mb-8">Send a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">First Name</label>
                                    <input required type="text" className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-amber-600 focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Last Name</label>
                                    <input required type="text" className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-amber-600 focus:outline-none transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                                <input required type="email" className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-amber-600 focus:outline-none transition-colors" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Interest</label>
                                <select className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-amber-600 focus:outline-none transition-colors text-stone-600">
                                    <option>Buying Property</option>
                                    <option>Selling Property</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Message</label>
                                <textarea rows="4" className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-sm py-5 hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-2">
                                {submitted ? 'Message Sent!' : (
                                    <>
                                        Send Request <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UI10Contact;
