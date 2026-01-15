import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import UI10PropertyFilters from '../../components/ui10/UI10PropertyFilters';
import UI10PropertyCard from '../../components/ui10/UI10PropertyCard';
import { properties } from '../../components/ui10/ui10Data';
import { Grid, List } from 'lucide-react';

const UI10Properties = () => {
    const [searchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        type: 'all',
        beds: '',
        search: ''
    });

    // Initialize filters from URL params
    useEffect(() => {
        const typeParam = searchParams.get('type');
        const bedsParam = searchParams.get('beds');

        if (typeParam) setFilters(prev => ({ ...prev, type: typeParam.charAt(0).toUpperCase() + typeParam.slice(1) }));
        if (bedsParam) setFilters(prev => ({ ...prev, beds: bedsParam + '+' }));
    }, [searchParams]);

    // Filtering logic
    const filteredProperties = properties.filter(prop => {
        const typeMatch = filters.type === 'all' || prop.type === filters.type;
        const bedsMatch = !filters.beds || prop.beds >= parseInt(filters.beds);
        // Basic search filter can be added here
        return typeMatch && bedsMatch;
    });

    return (
        <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-6">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-4">Properties</h1>
                        <p className="text-stone-500 font-light">
                            {filteredProperties.length} exclusive listings found
                        </p>
                    </div>

                    {/* Sort / View Toggle (Visual only for now) */}
                    <div className="flex gap-4 mt-6 md:mt-0">
                        <select className="bg-transparent border-b border-stone-300 text-sm py-2 pr-8 focus:outline-none focus:border-amber-600">
                            <option>Sort by: Featured</option>
                            <option>Price: High to Low</option>
                            <option>Price: Low to High</option>
                            <option>Newest First</option>
                        </select>
                        <div className="flex gap-2 text-stone-400">
                            <button className="p-2 text-stone-900 bg-white border border-stone-200"><Grid size={18} /></button>
                            <button className="p-2 hover:text-stone-900"><List size={18} /></button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-1/4">
                        <UI10PropertyFilters filters={filters} setFilters={setFilters} />
                    </div>

                    {/* Grid */}
                    <div className="w-full lg:w-3/4">
                        {filteredProperties.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredProperties.map(property => (
                                    <UI10PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64 text-center">
                                <h3 className="text-xl font-serif text-stone-400 mb-2">No properties match your criteria.</h3>
                                <button
                                    onClick={() => setFilters({ type: 'all', beds: '', search: '' })}
                                    className="text-amber-600 underline hover:text-amber-700"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}

                        {/* Pagination Dummy */}
                        {filteredProperties.length > 0 && (
                            <div className="mt-16 flex justify-center gap-2">
                                <button className="w-10 h-10 border border-stone-900 bg-stone-900 text-white font-serif">1</button>
                                <button className="w-10 h-10 border border-stone-200 hover:border-stone-900 font-serif transition-colors">2</button>
                                <button className="w-10 h-10 border border-stone-200 hover:border-stone-900 font-serif transition-colors">3</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UI10Properties;
