import React from 'react';
import { Filter } from 'lucide-react';

const UI09TourFilters = ({ filters, setFilters }) => {

    const handleTypeChange = (type) => {
        setFilters(prev => ({ ...prev, type: prev.type === type ? 'all' : type }));
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-slate-800 font-bold border-b border-slate-100 pb-3">
                <Filter size={20} className="text-sky-500" /> Filters
            </div>

            <div className="space-y-8">
                {/* Type Filter */}
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Tour Type</h4>
                    <div className="space-y-2">
                        {['all', 'adventure', 'honeymoon', 'family'].map(type => (
                            <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center transition-colors ${filters.type === type ? 'border-sky-500 bg-sky-500' : 'group-hover:border-sky-400'}`}>
                                    {filters.type === type && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                </div>
                                <span className="text-sm text-slate-600 capitalize group-hover:text-slate-900 transition-colors">
                                    {type === 'all' ? 'All Tours' : type}
                                </span>
                                <input
                                    type="radio"
                                    name="type"
                                    className="hidden"
                                    checked={filters.type === type}
                                    onChange={() => handleTypeChange(type)}
                                />
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Range Filter (Simulated) */}
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Price Range</h4>
                    <input
                        type="range"
                        min="25000"
                        max="200000"
                        step="5000"
                        value={filters.maxPrice}
                        onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                        <span>₹25k</span>
                        <span>₹{filters.maxPrice.toLocaleString()}</span>
                    </div>
                </div>

                {/* Duration Filter (Simulated Logic) */}
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Duration</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Short (< 5 Days)', 'Medium (5-8 Days)', 'Long (9+ Days)'].map((label, idx) => (
                            <button
                                key={idx}
                                onClick={() => { }} // Placeholder logic
                                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 hover:border-sky-500 hover:text-sky-500 transition-colors"
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UI09TourFilters;
