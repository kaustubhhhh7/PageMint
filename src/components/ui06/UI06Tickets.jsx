import React, { useState } from 'react';
import { Check, Info, ShoppingCart } from 'lucide-react';

const tickets = [
    {
        id: 'starter',
        name: 'Starter Pass',
        price: 199,
        desc: 'Perfect for students and remote attendees.',
        color: 'border-slate-200',
        badge: null,
        features: ['Access to Keynotes (Livestream)', 'Digital Goodie Bag', 'Networking App Access', 'No Workshop Access']
    },
    {
        id: 'pro',
        name: 'Pro Pass',
        price: 399,
        desc: 'The complete conference experience.',
        color: 'border-indigo-500 bg-indigo-50/10',
        badge: 'Most Popular',
        features: ['All Keynotes & Panels', 'Access to Expo Hall', 'Lunch & Refreshments', 'Workshop Priority', 'After-Party Entry']
    },
    {
        id: 'vip',
        name: 'VIP All-Access',
        price: 899,
        desc: 'Exclusive access for industry leaders.',
        color: 'border-purple-500 bg-purple-50/10',
        badge: 'Limited Availability',
        features: ['All Pro Benefits', 'Private Speaker Lounge', 'VIP Gala Dinner', 'Dedicated Concierge', 'Reserved Front Row Seating']
    }
];

const UI06Tickets = () => {
    const [selectedTicket, setSelectedTicket] = useState(tickets[1].id);
    const [qty, setQty] = useState(1);

    const selectedDetails = tickets.find(t => t.id === selectedTicket);
    const total = selectedDetails ? selectedDetails.price * qty : 0;

    return (
        <section id="tickets" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-green-400" /> Selling Fast: Only 37 Seats Left
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Secure Your Spot</h2>
                    <p className="text-xl text-slate-400 max-w-xl mx-auto">Join 800+ builders in Mumbai. Choose the pass that fits your goals.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Ticket Cards */}
                    <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
                        {tickets.map((ticket) => (
                            <div
                                key={ticket.id}
                                onClick={() => setSelectedTicket(ticket.id)}
                                className={`relative rounded-3xl p-6 border-2 cursor-pointer transition-all duration-300 flex flex-col h-full ${selectedTicket === ticket.id ? `${ticket.color} shadow-2xl shadow-indigo-500/20 scale-[1.02]` : 'border-slate-800 bg-slate-800/50 hover:bg-slate-800'}`}
                            >
                                {ticket.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-lg">
                                        {ticket.badge}
                                    </div>
                                )}

                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-1">{ticket.name}</h3>
                                    <p className="text-xs text-slate-400 h-8">{ticket.desc}</p>
                                </div>
                                <div className="text-3xl font-black mb-6">${ticket.price}</div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {ticket.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                            <Check size={14} className="text-green-400 shrink-0 mt-0.5" />
                                            <span className={feat.includes('No') ? 'opacity-50' : ''}>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-2 rounded-lg font-bold text-sm tracking-wide transition-all ${selectedTicket === ticket.id ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                                    {selectedTicket === ticket.id ? 'Selected' : 'Select Pass'}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Checkout Summary Panel */}
                    <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl sticky top-28">
                        <h3 className="text-xl font-black mb-6">Checkout Summary</h3>

                        <div className="space-y-6 mb-8 border-b border-slate-100 pb-8">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-lg">{selectedDetails?.name}</div>
                                    <div className="text-xs text-slate-500">General Admission</div>
                                </div>
                                <div className="font-bold">${selectedDetails?.price}</div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="font-bold text-sm text-slate-600">Quantity</div>
                                <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
                                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm font-bold hover:text-indigo-600 transition-colors">-</button>
                                    <span className="font-bold w-4 text-center">{qty}</span>
                                    <button onClick={() => setQty(qty + 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm font-bold hover:text-indigo-600 transition-colors">+</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-8">
                            <div className="font-bold text-slate-500">Total</div>
                            <div className="text-4xl font-black tracking-tight text-indigo-600">${total}</div>
                        </div>

                        <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:shadow-indigo-500/40 active:scale-95 flex items-center justify-center gap-2">
                            Proceed to Checkout <ShoppingCart size={18} />
                        </button>

                        <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                            <Info size={12} /> Secure SSL Encryption
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI06Tickets;
