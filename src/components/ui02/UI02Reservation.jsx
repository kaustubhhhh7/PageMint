import React, { useState } from 'react';
import Container from '../common/Container';

const UI02Reservation = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="reserve" className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-stone-100 -z-10"></div>

            <Container>
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-orange-100/50 overflow-hidden flex flex-col md:flex-row">
                    {/* Left Info Panel */}
                    <div className="md:w-1/3 bg-stone-800 text-white p-10 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif font-bold mb-6">Reserve a Table</h3>
                            <p className="text-stone-300 text-sm mb-8 leading-relaxed">
                                We accept reservations for lunch and dinner. For large groups, please contact us directly.
                            </p>
                        </div>
                        <div className="space-y-4 relative z-10 text-sm">
                            <div>
                                <p className="text-stone-400 uppercase text-xs tracking-wider mb-1">Opening Hours</p>
                                <p className="font-medium">Mon - Sun: 9am - 11pm</p>
                            </div>
                            <div>
                                <p className="text-stone-400 uppercase text-xs tracking-wider mb-1">Contact</p>
                                <p className="font-medium">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        {/* Circle Decor */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-700 rounded-full blur-3xl opacity-50"></div>
                    </div>

                    {/* Right Form */}
                    <div className="md:w-2/3 p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-2">Date</label>
                                    <input type="date" id="date" required className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-stone-700 mb-2">Time</label>
                                    <input type="time" id="time" required className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">Guests</label>
                                    <select id="guests" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all">
                                        {[1, 2, 3, 4, 5, 6, "7+"].map(n => (
                                            <option key={n} value={n}>{n} Person{n !== 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Special Requests (Optional)</label>
                                <textarea id="message" rows="3" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Allergies, high chair needed, etc."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200 transform active:scale-[0.98]">
                                Confirm Reservation
                            </button>

                            {submitted && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium animate-fade-in-up border border-green-100">
                                    ✅ Reservation request received! We'll contact you shortly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UI02Reservation;
