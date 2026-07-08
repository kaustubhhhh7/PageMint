import React from 'react';
import UI10PropertyCard from './UI10PropertyCard';
import { properties } from './ui10Data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UI10FeaturedProperties = () => {
    // Show only the first 3 or specific featured properties
    const featuredList = properties.filter(p => p.featured).slice(0, 3);

    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h4 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">
                            Curated Collection
                        </h4>
                        <h2 className="text-4xl lg:text-5xl font-serif text-stone-900">
                            Featured Residences
                        </h2>
                    </div>
                    <Link to="/ui/10/properties" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-stone-900 hover:text-amber-600 transition-colors pb-2 border-b border-stone-200 hover:border-amber-600">
                        View All Properties <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredList.map(property => (
                        <UI10PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/ui/10/properties" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-900 hover:text-amber-600 transition-colors pb-1 border-b border-stone-200">
                        View All Properties <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default UI10FeaturedProperties;
