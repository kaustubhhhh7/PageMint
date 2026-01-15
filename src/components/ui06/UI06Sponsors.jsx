import React from 'react';
import { ArrowRight } from 'lucide-react';

const sponsors = [
    "Google Cloud", "Amazon Web Services", "Microsoft Azure",
    "Vercel", "Netlify", "Stripe",
    "Twilio", "Auth0", "Algolia",
    "Figma", "Notion", "Linear"
];

const UI06Sponsors = () => {
    return (
        <section id="sponsors" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Partners</span>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-16">Backed by the Best</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-20">
                    {sponsors.map((sponsor, idx) => (
                        <div
                            key={idx}
                            className="group relative h-20 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden hover:border-orange-200 transition-colors"
                        >
                            <span className="text-xl font-bold text-slate-400 group-hover:text-slate-800 transition-colors z-10 relative">
                                {sponsor}
                            </span>

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-orange-200/50 to-transparent z-0 pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold mb-2">Want to showcase your brand?</h3>
                            <p className="text-orange-200">Join 15+ industry leaders and get exclusive booth access.</p>
                        </div>
                        <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-orange-50 transition-colors flex items-center gap-2 shadow-lg">
                            Become a Sponsor <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .group:hover .group-hover\\:animate-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}</style>
        </section>
    );
};

export default UI06Sponsors;
