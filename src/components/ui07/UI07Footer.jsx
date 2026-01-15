import React from 'react';
import { Shield } from 'lucide-react';

const UI07Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-emerald-400">
                        <Shield size={18} fill="currentColor" />
                    </div>
                    <span className="text-lg font-bold text-slate-900 tracking-tight">VaultPay</span>
                </div>

                <div className="flex gap-8 text-sm font-medium text-slate-500">
                    <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Security</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Sitemap</a>
                </div>

                <div className="text-sm text-slate-400">
                    &copy; 2026 VaultPay Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default UI07Footer;
