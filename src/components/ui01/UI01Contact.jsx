import React, { useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const UI01Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-20 bg-slate-50">
            <Container>
                <div className="bg-indigo-900 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 sm:p-14 flex flex-col justify-between relative bg-gradient-to-br from-indigo-800 to-indigo-900">
                            <div>
                                <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                                    Ready to get started?
                                </h3>
                                <p className="mt-6 text-lg text-indigo-100 max-w-sm">
                                    Get in touch with us to see how MintFlow can help you scale your business. We usually respond within 2 hours.
                                </p>

                                <dl className="mt-8 space-y-6">
                                    <div className="flex items-center text-indigo-100">
                                        <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        <span>hello@mintflow.com</span>
                                    </div>
                                    <div className="flex items-center text-indigo-100">
                                        <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                </dl>
                            </div>

                            <div className="mt-12 flex space-x-6">
                                {/* Social Icons Placeholder */}
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 bg-indigo-700/50 rounded-full hover:bg-white/20 transition cursor-pointer"></div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 sm:p-14 bg-white">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                    <input type="text" id="name" required className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border outline-none transition-colors hover:border-indigo-300" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" id="email" required className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border outline-none transition-colors hover:border-indigo-300" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                    <textarea id="message" rows="4" required className="mt-1 block w-full px-4 py-3 rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border outline-none transition-colors hover:border-indigo-300" placeholder="How can we help?"></textarea>
                                </div>
                                <Button variant="primary" type="submit" className="w-full justify-center shadow-lg shadow-indigo-200">
                                    {submitted ? 'Message Sent!' : 'Send Message'}
                                </Button>
                                {submitted && (
                                    <p className="text-green-600 text-sm text-center animate-pulse">Thanks! We'll be in touch shortly.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UI01Contact;
