import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import UI09TourCard from '../../components/ui09/UI09TourCard';
import UI09TourFilters from '../../components/ui09/UI09TourFilters';
import { tours } from '../../components/ui09/ui09Data';

const UI09Tours = () => {
    const [searchParams] = useSearchParams();
    const typeParam = searchParams.get('type');

    const [filters, setFilters] = useState({
        type: typeParam || 'all',
        maxPrice: 200000,
    });

    useEffect(() => {
        if (typeParam) {
            setFilters(prev => ({ ...prev, type: typeParam }));
        }
    }, [typeParam]);

    // Filter Logic
    const filteredTours = tours.filter(tour => {
        const matchesType = filters.type === 'all' || tour.type === filters.type;
        const matchesPrice = tour.price <= filters.maxPrice;
        return matchesType && matchesPrice;
    });

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 py-12 mb-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Find Your Perfect Trip</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Browse our curated collection of adventures, relaxing getaways, and cultural experiences designed for the modern traveler.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-8">

                {/* Filters Sidebar */}
                <div className="lg:col-span-1">
                    <UI09TourFilters filters={filters} setFilters={setFilters} />
                </div>

                {/* Results Grid */}
                <div className="lg:col-span-3">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-slate-500 text-sm font-semibold">{filteredTours.length} Tours Found</span>
                        <select className="bg-white border border-slate-200 text-slate-600 text-sm rounded-lg px-3 py-2 outline-none focus:border-sky-500">
                            <option>Sort by: Popular</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>

                    {filteredTours.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTours.map(tour => (
                                <UI09TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 border-dashed">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">No Tours Found</h3>
                            <p className="text-slate-500">Try adjusting your filters to see more results.</p>
                            <button
                                onClick={() => setFilters({ type: 'all', maxPrice: 200000 })}
                                className="mt-6 text-sky-600 font-bold hover:underline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UI09Tours;
