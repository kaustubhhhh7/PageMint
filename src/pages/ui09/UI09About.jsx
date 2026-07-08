import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';
import { teamMembers } from '../../components/ui09/ui09Data';

const UI09About = () => {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-20">
                <span className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Crafting Journeys, Not Just Trips</h1>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Founded in 2010, VoyageVista was born out of a simple belief: travel should be transformative. We don't just book hotels and flights; we curate experiences that connect you with the soul of a destination.
                </p>
            </div>

            {/* Values */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 text-sky-500">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainable Travel</h3>
                        <p className="text-slate-500">We prioritize eco-friendly partners and support local communities in every destination.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Passion First</h3>
                        <p className="text-slate-500">Our itineraries are crafted by travel addicts who have personally explored every route.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 text-teal-500">
                            <Target size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Detail Obsessed</h3>
                        <p className="text-slate-500">From airport pickups to restaurant reservations, we handle the boring stuff.</p>
                    </div>
                </div>
            </div>

            {/* Team Placeholder */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet The Explorers</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="group text-center">
                            <div className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden relative shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                            <p className="text-sky-500 text-sm font-bold uppercase">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default UI09About;
