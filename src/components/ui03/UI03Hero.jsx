import React, { useEffect, useState } from 'react';

const UI03Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="ui03-hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px] animate-ui03-pulse-slow"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[80px] animate-ui03-pulse-slow delay-700"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Content */}
                <div className={`transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Available for Internships</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Designing clean <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">interfaces.</span> <br />
                        Building real <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">products.</span>
                    </h1>

                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        I'm Kaustubh, a developer focused on creating fluid digital experiences with pixel-perfect precision.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => scrollTo('projects')}
                            className="relative overflow-hidden group bg-slate-900 text-white px-8 py-4 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20"
                        >
                            <span className="relative z-10 flex items-center">
                                View Projects
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </span>
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="px-8 py-4 rounded-xl font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all hover:shadow-sm"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Right Content - Profile Card */}
                <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out transform ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

                    {/* Main Card */}
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl shadow-indigo-100/50 border border-slate-100 max-w-sm w-full z-20 hover:-translate-y-2 transition-transform duration-500">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center text-2xl font-bold text-indigo-600 border-2 border-white shadow-lg">
                                KG
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Kaustubh</h3>
                                <p className="text-sm text-slate-500">Frontend Developer</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-slate-50">
                                <span className="text-slate-500 text-sm">Projects</span>
                                <span className="text-slate-900 font-semibold">10+ Completed</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-slate-50">
                                <span className="text-slate-500 text-sm">Skills</span>
                                <span className="text-slate-900 font-semibold">15+ Technologies</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-slate-500 text-sm">Learning</span>
                                <span className="text-slate-900 font-semibold flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    Daily
                                </span>
                            </div>
                        </div>

                        {/* Floating elements attached to card */}
                        <div className="absolute -right-8 -bottom-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block animate-ui03-bounce-slow">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-indigo-50 rounded-lg">
                                    <span className="text-xl">✨</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium uppercase">Currently Building</p>
                                    <p className="text-sm font-bold text-slate-900">PageMint</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative blobs behind card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full z-10 animate-ui03-spin-slow-reverse"></div>
                </div>
            </div>


            <style>{`
                .animate-ui03-pulse-slow {
                    animation: ui03-pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-ui03-bounce-slow {
                    animation: ui03-bounce 3s infinite;
                }
                .animate-ui03-spin-slow-reverse {
                    animation: ui03-spin 15s linear infinite reverse;
                }
                @keyframes ui03-pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: .5; }
                }
                @keyframes ui03-bounce {
                    0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
                    50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
                }
                @keyframes ui03-spin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>

        </section>
    );
};

export default UI03Hero;
