import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, Star, Check, X, Calendar, User } from 'lucide-react';
import { tours } from '../../components/ui09/ui09Data';

const UI09TourDetails = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [activeTab, setActiveTab] = useState('itinerary');
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        // Find tour by ID (convert string id to number)
        const foundTour = tours.find(t => t.id === Number(id));
        setTour(foundTour);
        window.scrollTo(0, 0);
    }, [id]);

    if (!tour) return <div className="pt-32 text-center">Loading...</div>;

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Banner */}
            <div className="relative h-[60vh] min-h-[400px]">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tour.type}</span>
                            <span className="flex items-center gap-1 text-xs font-bold bg-white/20 backdrop-blur px-3 py-1 rounded-full"><Star size={12} fill="currentColor" className="text-yellow-400" /> {tour.rating}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
                        <div className="flex items-center gap-6 text-sm md:text-lg font-medium text-slate-200">
                            <span className="flex items-center gap-2"><MapPin size={20} className="text-sky-400" /> {tour.location}</span>
                            <span className="flex items-center gap-2"><Clock size={20} className="text-sky-400" /> {tour.duration}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">

                {/* Left Column: Content */}
                <div className="lg:col-span-2">

                    {/* Tabs */}
                    <div className="flex border-b border-slate-200 mb-8">
                        {['itinerary', 'inclusions'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 font-bold text-sm uppercase tracking-wider relative transition-colors ${activeTab === tab ? 'text-sky-600' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                                {tab}
                                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-500" />}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[300px]">
                        {activeTab === 'itinerary' && (
                            <div className="space-y-8 animate-in fade-in duration-300">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Day by Day Itinerary</h2>
                                <div className="border-l-2 border-slate-100 ml-4 space-y-8">
                                    {tour.itinerary?.map((item, idx) => (
                                        <div key={idx} className="relative pl-8">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow-sm" />
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">Day {item.day}: {item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'inclusions' && (
                            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                                <div className="bg-sky-50 p-6 rounded-2xl">
                                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                                        <Check size={20} className="text-green-500" /> What's Included
                                    </h3>
                                    <ul className="space-y-3">
                                        {tour.inclusions?.map((inc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" /> {inc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-6 rounded-2xl">
                                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                                        <X size={20} className="text-red-500" /> What's Excluded
                                    </h3>
                                    <ul className="space-y-3">
                                        {tour.exclusions?.map((exc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> {exc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Column: Booking Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sticky top-32">
                        <div className="mb-6">
                            <span className="text-slate-500 text-sm">Total Price Per Person</span>
                            <div className="text-3xl font-bold text-slate-900">₹{tour.price.toLocaleString()}</div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl">
                                <Calendar className="text-sky-500" />
                                <div>
                                    <div className="text-xs font-bold uppercase text-slate-400">Next Departure</div>
                                    <div className="font-semibold text-sm">Aug 15, 2026</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl">
                                <User className="text-sky-500" />
                                <div>
                                    <div className="text-xs font-bold uppercase text-slate-400">Available Spots</div>
                                    <div className="font-semibold text-sm">4 Seats Left</div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsBookingOpen(true)}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-1"
                        >
                            Book My Adventure
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-4">No credit card required for reservation.</p>
                    </div>
                </div>

            </div>

            {/* Booking Modal */}
            {isBookingOpen && (
                <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95">
                        <button
                            onClick={() => setIsBookingOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Request Booking</h2>
                            <p className="text-slate-500 text-sm">You are inquiring for: <br /><span className="font-bold text-slate-800">{tour.title}</span></p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Booking request received!'); setIsBookingOpen(false); }}>
                            <input type="text" placeholder="Full Name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500" />
                            <input type="email" placeholder="Email Address" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500" />
                            <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500" />
                            <button className="w-full bg-sky-500 text-white font-bold py-3 rounded-xl hover:bg-sky-600 transition-colors">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default UI09TourDetails;
