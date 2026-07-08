import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const UI01Hero = () => {
    return (
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
            <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center px-4 sm:px-0">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        {/* Pill */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-4 sm:mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                            <span className="text-xs sm:text-sm font-medium text-indigo-700">v2.0 Now Live</span>
                        </div>

                        <h1 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                            <span className="block">Build faster.</span>
                            <span className="block text-indigo-600">Launch smarter.</span>
                        </h1>
                        <p className="mt-4 text-base text-slate-600 sm:mt-6 sm:text-lg lg:text-lg xl:text-xl leading-relaxed">
                            MintFlow gives you the building blocks to ship your SaaS in days, not months.
                            Secure, scalable, and designed for growth from day one.
                        </p>
                        <div className="mt-6 sm:mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button variant="primary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl shadow-indigo-200 transform transition hover:-translate-y-1">
                                Start Free Trial
                            </Button>
                            <Button variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-slate-200 hover:bg-slate-50 text-slate-700">
                                See Demo
                            </Button>
                        </div>

                        <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-100">
                            <p className="text-xs sm:text-sm font-medium text-slate-400 mb-3 sm:mb-4">Trusted by 2,000+ teams</p>
                            <div className="flex flex-wrap gap-4 sm:gap-6 items-center sm:justify-center lg:justify-start opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                {['Acme Corp', 'GlobalBank', 'Nebula', 'FoxRun'].map((logo) => (
                                    <span key={logo} className="text-sm sm:text-base lg:text-lg font-bold text-slate-800">{logo}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6">
                        <div className="relative rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                            {/* Fake UI Header */}
                            <div className="h-8 sm:h-10 bg-slate-800 border-b border-slate-700 flex items-center px-3 sm:px-4 space-x-2">
                                <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-400"></div>
                                <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-amber-400"></div>
                                <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-400"></div>
                            </div>

                            {/* Fake UI Content */}
                            <div className="p-4 sm:p-6 grid grid-cols-3 gap-4 sm:gap-6">
                                {/* Sidebar */}
                                <div className="col-span-1 space-y-3 sm:space-y-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-3 sm:h-4 bg-slate-800/50 rounded w-full animate-pulse"></div>
                                    ))}
                                </div>
                                {/* Main Area */}
                                <div className="col-span-2 space-y-4 sm:space-y-6">
                                    <div className="h-24 sm:h-32 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center">
                                        <div className="text-indigo-400 font-mono text-[10px] sm:text-sm">Analytics_Chart.js</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                        <div className="h-16 sm:h-24 bg-slate-800/50 rounded-xl"></div>
                                        <div className="h-16 sm:h-24 bg-slate-800/50 rounded-xl"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-3 sm:h-4 bg-slate-700 rounded w-3/4"></div>
                                        <div className="h-3 sm:h-4 bg-slate-800 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Highlight Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UI01Hero;
