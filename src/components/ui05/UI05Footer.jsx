import React from 'react';

const UI05Footer = () => {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                                A
                            </div>
                            <span className="font-bold text-2xl tracking-tight">AURA <span className="font-light text-slate-400">Pods</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Premium wireless audio. <br />Engineered for perfection.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-300">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            <button onClick={() => scrollTo('overview')} className="text-slate-400 hover:text-white transition-colors text-left text-sm">
                                Overview
                            </button>
                            <button onClick={() => scrollTo('highlights')} className="text-slate-400 hover:text-white transition-colors text-left text-sm">
                                Highlights
                            </button>
                            <button onClick={() => scrollTo('specs')} className="text-slate-400 hover:text-white transition-colors text-left text-sm">
                                Tech Specs
                            </button>
                            <button onClick={() => scrollTo('buy')} className="text-slate-400 hover:text-white transition-colors text-left text-sm">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* Newsletter (Dummy) */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-300">Stay Updated</h4>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2026 AURA Pods. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default UI05Footer;
