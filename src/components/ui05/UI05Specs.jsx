import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';

const SpecRow = ({ label, value }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${label}: ${value}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center justify-between py-4 border-b border-slate-100 group hover:bg-slate-50 px-4 -mx-4 rounded-lg transition-colors">
            <span className="text-slate-500 font-medium">{label}</span>
            <div className="flex items-center gap-4">
                <span className="text-slate-900 font-semibold">{value}</span>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all opacity-0 group-hover:opacity-100 relative"
                    title="Copy specification"
                >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                    {copied && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-900 text-white px-2 py-1 rounded shadow-lg">
                            Copied!
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

const UI05Specs = () => {
    return (
        <section id="specs" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

                {/* Left Header */}
                <div className="lg:col-span-4 space-y-8">
                    <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Tech Specs</h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Every detail engineered for performance. From the custom driver to the power management system.
                    </p>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Compatible With</h4>
                        <div className="flex gap-2 flex-wrap">
                            {['iOS', 'Android', 'macOS', 'Windows', 'Linux'].map(platform => (
                                <span key={platform} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 mt-8">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Package size={20} /> What's in the box
                        </h4>
                        <ul className="space-y-3">
                            {['AURA Pods', 'MagSafe Charging Case', 'USB-C Charging Cable', 'Silicone Ear Tips (xs/s/m/l)', 'Quick Start Guide'].map(item => (
                                <li key={item} className="text-slate-600 text-sm flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Specs Grid */}
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-2">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Audio Technology</h3>
                        <SpecRow label="Driver" value="11mm dynamic driver" />
                        <SpecRow label="ANC" value="Active Noise Cancellation" />
                        <SpecRow label="Transparency" value="Adaptive Transparency" />
                        <SpecRow label="Spatial Audio" value="Dynamic Head Tracking" />
                        <SpecRow label="EQ" value="Adaptive EQ" />
                    </div>

                    <div className="space-y-2 mt-12 md:mt-0">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Connectivity & Battery</h3>
                        <SpecRow label="Bluetooth" value="Version 5.3" />
                        <SpecRow label="Chip" value="AURA H1 Headphone Chip" />
                        <SpecRow label="Battery (Buds)" value="Up to 9 hours" />
                        <SpecRow label="Battery (Case)" value="Up to 48 hours" />
                        <SpecRow label="Charging" value="USB-C & Wireless" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simple Icon for box
const Package = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16.5 9.4 7.5 4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

export default UI05Specs;
