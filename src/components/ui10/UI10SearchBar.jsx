import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UI10SearchBar = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        location: '',
        type: '',
        budget: '',
        beds: ''
    });

    const handleSearch = () => {
        // Construct query string
        const params = new URLSearchParams();
        if (searchParams.location) params.append('location', searchParams.location);
        if (searchParams.type) params.append('type', searchParams.type);
        if (searchParams.budget) params.append('budget', searchParams.budget);

        navigate(`/ui/10/properties?${params.toString()}`);
    };

    return (
        <div className="max-w-5xl mx-auto bg-white p-6 shadow-xl shadow-stone-200/50 rounded-lg border border-stone-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                {/* Location */}
                <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1 ml-1 group-focus-within:text-amber-600 transition-colors">Location</label>
                    <div className="relative border-b border-stone-200 group-focus-within:border-amber-600 transition-colors pb-1">
                        <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <select
                            className="w-full pl-6 bg-transparent outline-none text-stone-800 text-sm appearance-none cursor-pointer"
                            value={searchParams.location}
                            onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                        >
                            <option value="">Any Location</option>
                            <option value="dubai">Dubai, UAE</option>
                            <option value="london">London, UK</option>
                            <option value="newyork">New York, USA</option>
                            <option value="beverlyhills">Beverly Hills, USA</option>
                            <option value="paris">Paris, France</option>
                        </select>
                    </div>
                </div>

                {/* Property Type */}
                <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1 ml-1 group-focus-within:text-amber-600 transition-colors">Type</label>
                    <div className="relative border-b border-stone-200 group-focus-within:border-amber-600 transition-colors pb-1">
                        <Home className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <select
                            className="w-full pl-6 bg-transparent outline-none text-stone-800 text-sm appearance-none cursor-pointer"
                            value={searchParams.type}
                            onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}
                        >
                            <option value="">Any Type</option>
                            <option value="villa">Villa</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="apartment">Apartment</option>
                            <option value="estate">Private Estate</option>
                        </select>
                    </div>
                </div>

                {/* Budget */}
                <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1 ml-1 group-focus-within:text-amber-600 transition-colors">Budget</label>
                    <div className="relative border-b border-stone-200 group-focus-within:border-amber-600 transition-colors pb-1">
                        <DollarSign className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <select
                            className="w-full pl-6 bg-transparent outline-none text-stone-800 text-sm appearance-none cursor-pointer"
                            value={searchParams.budget}
                            onChange={(e) => setSearchParams({ ...searchParams, budget: e.target.value })}
                        >
                            <option value="">Any Range</option>
                            <option value="1-5">$1M - $5M</option>
                            <option value="5-10">$5M - $10M</option>
                            <option value="10-20">$10M - $20M</option>
                            <option value="20+">$20M+</option>
                        </select>
                    </div>
                </div>

                {/* Bedrooms */}
                <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1 ml-1 group-focus-within:text-amber-600 transition-colors">Bedrooms</label>
                    <div className="relative border-b border-stone-200 group-focus-within:border-amber-600 transition-colors pb-1">
                        <Bed className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <select
                            className="w-full pl-6 bg-transparent outline-none text-stone-800 text-sm appearance-none cursor-pointer"
                            value={searchParams.beds}
                            onChange={(e) => setSearchParams({ ...searchParams, beds: e.target.value })}
                        >
                            <option value="">Any</option>
                            <option value="1">1+ Beds</option>
                            <option value="2">2+ Beds</option>
                            <option value="3">3+ Beds</option>
                            <option value="4">4+ Beds</option>
                            <option value="5">5+ Beds</option>
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                    <button
                        onClick={handleSearch}
                        className="w-full bg-stone-900 text-white h-10 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold hover:bg-amber-700 transition-all duration-300"
                    >
                        <Search size={14} />
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UI10SearchBar;
