import React from 'react';

const UI10PropertyFilters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white p-6 border border-stone-200 sticky top-28 h-fit">
            <h3 className="font-serif text-xl mb-6 text-stone-900 border-b border-stone-100 pb-2">Filters</h3>

            {/* Search Term */}
            <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Keyword</label>
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    className="w-full bg-stone-50 border border-stone-200 p-3 text-sm focus:outline-none focus:border-amber-600 transition-colors"
                />
            </div>

            {/* Type */}
            <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Property Type</label>
                <select
                    name="type"
                    value={filters.type}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-200 p-3 text-sm focus:outline-none focus:border-amber-600 transition-colors"
                >
                    <option value="all">All Types</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Apartment">Apartment</option>
                </select>
            </div>

            {/* Beds */}
            <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Bedrooms</label>
                <div className="flex gap-2">
                    {['Any', '1+', '2+', '3+', '4+'].map((opt) => (
                        <button
                            key={opt}
                            className={`flex-1 text-xs py-2 border transition-colors
                            ${(filters.beds === opt || (opt === 'Any' && filters.beds === ''))
                                    ? 'bg-stone-900 text-white border-stone-900'
                                    : 'text-stone-600 border-stone-200 hover:border-amber-500'}`}
                            onClick={() => setFilters(prev => ({ ...prev, beds: opt === 'Any' ? '' : opt }))}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Price Range</label>
                <input
                    type="range"
                    min="1000000"
                    max="50000000"
                    step="1000000"
                    className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-xs text-stone-500 mt-2">
                    <span>$1M</span>
                    <span>$50M+</span>
                </div>
            </div>

            <button
                className="w-full bg-amber-700 text-white uppercase tracking-widest text-xs font-bold py-4 hover:bg-amber-800 transition-colors"
                onClick={() => setFilters({ type: 'all', beds: '', price: '' })}
            >
                Reset Filters
            </button>
        </div>
    );
};

export default UI10PropertyFilters;
