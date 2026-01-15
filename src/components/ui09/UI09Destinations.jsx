import React from 'react';
import { Link } from 'react-router-dom';
import { destinations } from './ui09Data';

const UI09Destinations = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-2 block">Choose Your Vibe</span>
                    <h2 className="text-4xl font-bold text-slate-900">Popular Destinations</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <Link
                            to="/ui/09/tours"
                            key={dest.id}
                            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-md cursor-pointer"
                        >
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                                    {dest.vibe}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">{dest.name}</h3>
                                <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-4">
                                    <span className="text-slate-300 text-sm">Starting from</span>
                                    <span className="text-white font-bold text-lg">₹{dest.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default UI09Destinations;
