import React, { useState } from 'react';
import UI10AgentCard from '../../components/ui10/UI10AgentCard';
import { agents } from '../../components/ui10/ui10Data';
import { X, Calendar, Clock } from 'lucide-react';

const UI10Agents = () => {
    const [selectedAgent, setSelectedAgent] = useState(null);

    const handleBook = (agent) => {
        setSelectedAgent(agent);
    };

    return (
        <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-6">Our Experts</h1>
                    <p className="text-stone-500 font-light text-lg">
                        Meet the dedicated team of professionals who make your real estate dreams a reality.
                        With decades of combined experience, our agents are the best in the industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agents.map(agent => (
                        <div key={agent.id} className="relative group">
                            <UI10AgentCard agent={agent} />
                            <div className="bg-white px-8 pb-8 pt-0 border-x border-b border-stone-100 group-hover:border-amber-200 transition-colors">
                                <button
                                    onClick={() => handleBook(agent)}
                                    className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-4 hover:bg-amber-600 transition-colors"
                                >
                                    Book Meeting
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            {selectedAgent && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-lg shadow-2xl animate-fade-in relative">
                        <button
                            onClick={() => setSelectedAgent(null)}
                            className="absolute top-4 right-4 text-stone-400 hover:text-stone-900"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 border-b border-stone-100">
                            <h3 className="text-2xl font-serif mb-2">Book with {selectedAgent.name}</h3>
                            <p className="text-stone-500 text-sm">Select a time to discuss your requirements.</p>
                        </div>

                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                                        <input type="date" className="w-full pl-10 p-3 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-amber-600" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                                        <select className="w-full pl-10 p-3 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-amber-600">
                                            <option>09:00 AM</option>
                                            <option>11:00 AM</option>
                                            <option>02:00 PM</option>
                                            <option>04:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Your Details</label>
                                <input type="text" placeholder="Full Name" className="w-full p-3 bg-stone-50 border border-stone-200 text-sm mb-3 focus:outline-none focus:border-amber-600" />
                                <input type="email" placeholder="Email Address" className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-amber-600" />
                            </div>

                            <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-sm py-4 hover:bg-amber-600 transition-colors">
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UI10Agents;
