import React, { useState } from 'react';
import { Map, MapPin, Copy, Check, Car, Coffee, Wifi, Accessibility } from 'lucide-react';

const UI06Venue = () => {
    const [copied, setCopied] = useState(false);
    const address = "Mint Convention Center, Sector 45, Tech Park, Mumbai, 400001";

    const copyAddress = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="venue" className="py-24 bg-slate-50 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mt-12">
                <div className="space-y-8">
                    <div>
                        <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2 block">The Location</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Mint Convention Center</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Located in the heart of Mumbai's tech district, MCC offers world-class facilities with state-of-the-art auditoriums and networking lounges designed for collision and collaboration.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div>
                                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Full Address</div>
                                <div className="font-bold text-slate-900 pr-8">{address}</div>
                            </div>
                            <button
                                onClick={copyAddress}
                                className="p-2 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors text-cyan-600 border border-cyan-200"
                                title="Copy Address"
                            >
                                {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500"><Wifi size={16} /> Free WiFi</div>
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500"><Car size={16} /> Valet Parking</div>
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500"><Coffee size={16} /> Premium Cafe</div>
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500"><Accessibility size={16} /> Wheelchair Access</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-bold text-slate-900">Travel Tips</h4>
                        <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 text-sm text-cyan-900 font-medium">
                            🚗 Traffic is heavy during peak hours (9AM - 11AM). We recommend using the Metro Line 3 to "Tech Park Station".
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="relative h-[500px] w-full bg-slate-200 rounded-3xl overflow-hidden shadow-2xl group border-4 border-cyan-200">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000)' }}></div>
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce border-2 border-cyan-500">
                            <MapPin size={32} className="text-cyan-600" />
                        </div>
                    </div>
                    {/* Interactive overlay hinting to open map */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <button className="w-full font-bold text-cyan-600 uppercase text-xs tracking-widest text-center">Open in Google Maps</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UI06Venue;

// --- Sponsors ---
// Note: Normally I'd separate these, but for speed in this specific 'write_to_file' flow I'll split them if allowed,
// OR I will separate them in the actual prompt execution.
// Wait, I should do one file per tool call to be safe and clean. I'll just write UI06Venue here.
