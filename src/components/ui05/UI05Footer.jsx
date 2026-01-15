import React from 'react';
import { ArrowRight, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const UI05Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

                {/* Brand Column */}
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-6">AURA</h3>
                    <p className="max-w-xs mb-8">
                        Redefining the future of personal audio. Designed in California, assembled with precision.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"><Facebook size={18} /></a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div>
                    <h4 className="text-white font-bold mb-6">Product</h4>
                    <ul className="space-y-4">
                        <li><a href="#overview" className="hover:text-indigo-400 transition-colors">Overview</a></li>
                        <li><a href="#specs" className="hover:text-indigo-400 transition-colors">Tech Specs</a></li>
                        <li><a href="#reviews" className="hover:text-indigo-400 transition-colors">Reviews</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Accessories</a></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div>
                    <h4 className="text-white font-bold mb-6">Stay in the loop</h4>
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                        <button className="py-3 px-6 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2">
                            Subscribe <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
                <p>© 2026 CORE3. Designed by Kaustubh Ghadshi</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default UI05Footer;
