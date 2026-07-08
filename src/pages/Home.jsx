import React, { useState } from 'react';
import UIGrid from '../components/hub/UIGrid';

import Footer from '../components/hub/Footer';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const Home = () => {
    const [showExplore, setShowExplore] = useState(false);

    return (
        <div className="h-[100dvh] overflow-hidden flex flex-col bg-stone-50 font-sans selection:bg-teal-100 selection:text-teal-700 pt-20">

            {/* Hero Section */}
            <main className="flex-1 flex flex-col justify-center relative overflow-hidden">
                {/* Abstract Minimal Background Pattern */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none"></div>
                
                {/* Subtle Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
                    <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000"></div>
                </div>
                
                {/* Fade to bottom */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-stone-50/50 to-stone-50 pointer-events-none"></div>

                <Container>
                    <div className="relative text-center max-w-4xl mx-auto z-10 px-4 sm:px-0">
                        {/* Premium Badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100/50 shadow-sm shadow-teal-100/50 mb-6 sm:mb-8 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-blue-700">
                                Crafted by KAUSTUBH <span className="text-teal-300 mx-1">•</span> Premium UI Interfaces
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl mb-2 sm:mb-6 leading-tight">
                            <span className="block mb-1 sm:mb-2">PageMint</span>
                            <span className="block text-teal-700 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500">
                                UI Showcase Hub
                            </span>
                        </h1>

                        <p className="mt-3 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed font-light px-4 sm:px-0">
                            A curated collection of <span className="font-semibold text-slate-900">10 distinct landing page experiences</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-4 sm:mb-10 px-4 sm:px-0">
                            <button 
                                onClick={() => setShowExplore(true)} 
                                className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold text-lg rounded-full shadow-sm hover:shadow-md hover:bg-slate-700 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden border border-slate-700"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                                <span>Explore Interfaces</span>
                                <svg className="w-5 h-5 text-teal-400 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>


                    </div>
                </Container>
            </main>

            {/* Overlay UIGrid */}
            <div className={`fixed inset-0 z-[100] flex items-end justify-center transition-all duration-500 ${showExplore ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div 
                    className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${showExplore ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setShowExplore(false)}
                />
                <div className={`relative w-full max-h-[95vh] overflow-y-auto bg-white rounded-t-3xl shadow-2xl transition-transform duration-500 transform ${showExplore ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="sticky top-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center pt-4 pb-6 border-b border-slate-100 px-4">
                        <div className="w-12 h-1.5 bg-slate-200 rounded-full mb-4 cursor-pointer" onClick={() => setShowExplore(false)}></div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight text-center">
                            Select an Interface
                        </h2>
                        <p className="text-slate-500 text-sm text-center">
                            Choose any UI to preview its complete landing page.
                        </p>
                        <button onClick={() => setShowExplore(false)} className="absolute right-4 sm:right-6 top-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <UIGrid isModal={true} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
