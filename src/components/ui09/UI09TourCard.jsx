import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, MapPin } from 'lucide-react';

const UI09TourCard = ({ tour }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="h-56 overflow-hidden relative">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-slate-800 shadow-sm uppercase tracking-wide">
                    {tour.type}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-sky-500" /> {tour.location}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} className="text-sky-500" /> {tour.duration}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                    {tour.title}
                </h3>

                <p className="text-slate-500 text-sm mb-6 line-clamp-2 flex-1">
                    {tour.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div>
                        <span className="text-xs text-slate-400 block">From</span>
                        <span className="text-lg font-bold text-slate-900">₹{tour.price.toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1 text-xs font-bold text-orange-400">
                            <Star size={14} fill="currentColor" /> {tour.rating}
                        </div>
                        <Link
                            to={`/ui/09/tours/${tour.id}`}
                            className="text-sky-600 text-sm font-bold hover:underline"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UI09TourCard;
