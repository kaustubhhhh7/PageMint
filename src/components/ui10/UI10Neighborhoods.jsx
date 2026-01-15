import React from 'react';
import { neighborhoods } from './ui10Data';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UI10Neighborhoods = () => {
    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h4 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">
                        Iconic Locations
                    </h4>
                    <h2 className="text-4xl lg:text-5xl font-serif text-stone-900">
                        Desirable Neighborhoods
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {neighborhoods.map((hood) => (
                        <div key={hood.id} className="group relative h-[400px] overflow-hidden cursor-pointer">
                            {/* Image */}
                            <img
                                src={hood.image}
                                alt={hood.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    {hood.count} Listings
                                </span>
                                <h3 className="text-2xl font-serif text-white mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {hood.name}
                                </h3>
                                <Link
                                    to={`/ui/10/properties?location=${hood.name}`}
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/50 pb-1 w-fit hover:text-amber-400 hover:border-amber-400 transition-colors"
                                >
                                    View Listings <ArrowUpRight size={12} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI10Neighborhoods;
