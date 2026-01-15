import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../../components/ui10/ui10Data';
import { MapPin, Bed, Bath, Maximize, Share2, Heart, ArrowLeft, CheckCircle } from 'lucide-react';

const UI10PropertyDetails = () => {
    const { id } = useParams();
    // In a real app, fetch by ID. Here we find in array or default to first if mock id logic simplest
    const property = properties.find(p => p.id === parseInt(id)) || properties[0];

    // Mortgage Calc State
    const [downPayment, setDownPayment] = useState(20); // %
    const [interestRate, setInterestRate] = useState(4.5);
    const [tenure, setTenure] = useState(30);

    const calculateMortgage = () => {
        const principal = property.priceVal * (1 - downPayment / 100);
        const r = interestRate / 100 / 12;
        const n = tenure * 12;
        const monthly = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return Math.floor(monthly).toLocaleString();
    };

    return (
        <div className="bg-stone-50 min-h-screen pb-24">
            {/* Nav Offset */}
            <div className="h-24 bg-white"></div>

            {/* Breadcrumb */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500">
                <Link to="/ui/10" className="hover:text-stone-900">Home</Link>
                <span>/</span>
                <Link to="/ui/10/properties" className="hover:text-stone-900">Properties</Link>
                <span>/</span>
                <span className="text-stone-900 font-bold">{property.title}</span>
            </div>

            {/* Main Content */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column (Images & Info) */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Main Image */}
                    <div className="relative aspect-video w-full bg-stone-200 overflow-hidden group">
                        <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 flex gap-3">
                            <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-stone-900 transition-colors">
                                <Share2 size={18} />
                            </button>
                            <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-rose-500 transition-colors">
                                <Heart size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Header Info Mobile */}
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                                {property.title}
                            </h1>
                            <p className="text-2xl md:text-3xl font-serif text-amber-700 whitespace-nowrap">
                                {property.price}
                            </p>
                        </div>
                        <div className="flex items-center text-stone-500 uppercase tracking-widest text-xs font-bold">
                            <MapPin size={14} className="mr-2 text-amber-600" />
                            {property.location}
                        </div>
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-4 border-y border-stone-200 py-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-stone-100 rounded-full text-stone-900"><Bed size={20} /></div>
                            <div>
                                <span className="block text-xl font-bold font-serif">{property.beds}</span>
                                <span className="text-xs uppercase tracking-widest text-stone-500">Bedrooms</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-stone-100 rounded-full text-stone-900"><Bath size={20} /></div>
                            <div>
                                <span className="block text-xl font-bold font-serif">{property.baths}</span>
                                <span className="text-xs uppercase tracking-widest text-stone-500">Bathrooms</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-stone-100 rounded-full text-stone-900"><Maximize size={20} /></div>
                            <div>
                                <span className="block text-xl font-bold font-serif">{property.sqft}</span>
                                <span className="text-xs uppercase tracking-widest text-stone-500">Sq Ft</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-2xl font-serif mb-6">About this Property</h3>
                        <p className="text-stone-600 leading-relaxed font-light text-lg">
                            {property.description}
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-2xl font-serif mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {property.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-stone-600">
                                    <CheckCircle size={16} className="text-amber-600" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column (Sidebar) */}
                <div className="lg:col-span-1 space-y-8">

                    {/* Agent Box */}
                    <div className="bg-white p-8 border border-stone-200 shadow-xl shadow-stone-200/50 sticky top-28">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-6">Listing Agent</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-stone-200 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Agent" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg">Alexandra Vautier</h4>
                                <span className="text-xs text-amber-600 font-bold uppercase">Senior Partner</span>
                            </div>
                        </div>
                        <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-4 mb-3 hover:bg-stone-800 transition-colors">
                            Schedule Viewing
                        </button>
                        <button className="w-full border border-stone-900 text-stone-900 font-bold uppercase tracking-widest text-xs py-4 hover:bg-stone-50 transition-colors">
                            Request Details
                        </button>
                    </div>

                    {/* Mortgage Calculator */}
                    <div className="bg-stone-100 p-8 border border-stone-200">
                        <h3 className="text-xl font-serif mb-6">Mortgage Calculator</h3>

                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Down Payment (%)</label>
                                <input
                                    type="range" min="5" max="50" value={downPayment}
                                    onChange={(e) => setDownPayment(e.target.value)}
                                    className="w-full accent-amber-600 h-1 bg-stone-300 rounded"
                                />
                                <div className="text-right text-sm font-bold mt-1">{downPayment}%</div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Interest Rate (%)</label>
                                <input
                                    type="number" step="0.1" value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="w-full p-2 bg-white border border-stone-300 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Tenure (Years)</label>
                                <select
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    className="w-full p-2 bg-white border border-stone-300 text-sm"
                                >
                                    <option value="15">15 Years</option>
                                    <option value="20">20 Years</option>
                                    <option value="30">30 Years</option>
                                </select>
                            </div>
                        </div>

                        <div className="border-t border-stone-300 pt-6">
                            <span className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Est. Monthly Payment</span>
                            <span className="text-3xl font-serif text-amber-700">${calculateMortgage()}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UI10PropertyDetails;
