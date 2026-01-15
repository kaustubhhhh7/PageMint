import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { tours } from './ui09Data';

const UI09FeaturedTours = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-2 block">Handpicked For You</span>
                        <h2 className="text-4xl font-bold text-slate-900">Featured Tours</h2>
                    </div>
                    <Link to="/ui/09/tours" className="hidden md:flex items-center gap-2 font-bold text-sky-600 hover:text-sky-700">
                        View All Tours <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden snap-center group hover:shadow-xl transition-shadow"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-sm font-bold px-3 py-1 rounded-full text-slate-800 shadow-sm">
                                    {tour.type}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} className="text-sky-500" /> {tour.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star size={14} className="text-orange-400 fill-current" /> {tour.rating}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">
                                    {tour.title}
                                </h3>

                                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                                    {tour.desc}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div>
                                        <span className="text-xs text-slate-400 block">Per Person</span>
                                        <span className="text-lg font-bold text-slate-900">₹{tour.price.toLocaleString()}</span>
                                    </div>
                                    <Link
                                        to={`/ui/09/tours/${tour.id}`}
                                        className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-sky-500 transition-colors"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/ui/09/tours" className="inline-flex items-center gap-2 font-bold text-sky-600 hover:text-sky-700">
                        View All Tours <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default UI09FeaturedTours;
