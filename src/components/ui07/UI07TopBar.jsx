import React from 'react';
import { Menu, Download, Phone } from 'lucide-react';

const UI07TopBar = ({ setIsMobileOpen }) => {
    return (
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-md"
                >
                    <Menu size={24} />
                </button>

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-slate-400">VaultPay</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-900">Business Banking</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors border border-transparent hover:border-emerald-100 rounded-md hover:bg-emerald-50">
                    <Download size={14} /> Brochure
                </button>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-md hover:bg-slate-800 active:scale-95 transition-all shadow-sm"
                >
                    <Phone size={14} /> Talk to Sales
                </button>
            </div>
        </header>
    );
};

export default UI07TopBar;
