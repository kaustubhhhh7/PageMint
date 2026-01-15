import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Bed, Bath, Maximize, ArrowUpRight } from 'lucide-react';

const UI10PropertyCard = ({ property }) => {
    return (
        <div className="group relative bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 overflow-hidden">

            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Link to={`/ui/10/properties/${property.id}`}>
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                </Link>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    {property.featured && (
                        <span className="bg-stone-900 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                            Featured
                        </span>
                    )}
                    {property.tag && (
                        <span className="bg-white/90 backdrop-blur-sm text-stone-900 border border-stone-200 text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                            {property.tag}
                        </span>
                    )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-rose-500 transition-colors">
                    <Heart size={16} />
                </button>

                {/* Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-serif text-stone-900 group-hover:text-amber-700 transition-colors">
                            <Link to={`/ui/10/properties/${property.id}`}>{property.title}</Link>
                        </h3>
                        <div className="flex items-center text-stone-500 text-xs uppercase tracking-wider mt-1">
                            <MapPin size={12} className="mr-1" />
                            {property.location}
                        </div>
                    </div>
                    <p className="text-lg font-medium text-stone-900 font-serif">
                        {property.price}
                    </p>
                </div>

                <div className="h-px w-full bg-stone-100 my-4" />

                <div className="flex items-center justify-between text-stone-500 text-sm">
                    <div className="flex items-center gap-2" title="Bedrooms">
                        <Bed size={16} strokeWidth={1.5} />
                        <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-2" title="Bathrooms">
                        <Bath size={16} strokeWidth={1.5} />
                        <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-2" title="Square Feet">
                        <Maximize size={16} strokeWidth={1.5} />
                        <span>{property.sqft} sqft</span>
                    </div>
                </div>
            </div>

            {/* Quick View / Action Button - appears on hover */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <Link to={`/ui/10/properties/${property.id}`} className="bg-stone-900 text-white p-3 rounded-full hover:bg-amber-600 transition-colors shadow-lg block">
                    <ArrowUpRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default UI10PropertyCard;
