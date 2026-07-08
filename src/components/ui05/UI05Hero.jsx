import React from 'react';
import { ArrowRight, Zap, Radio, Battery } from 'lucide-react';

const UI05Hero = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="overview" className="relative min-h-[auto] lg:min-h-screen flex items-center pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-20 overflow-hidden bg-slate-50">
            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 w-full h-full items-center relative z-10">

                {/* Left Content */}
                <div className="flex flex-col gap-6 sm:gap-8 text-center lg:text-left pt-6 sm:pt-10 lg:pt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm self-center lg:self-start animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-slate-500">New Release 2024</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] animate-fade-in-up delay-100">
                        Hear the <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                            Future.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl font-light text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
                        Studio-grade sound. All-day comfort. <br className="hidden lg:block" />
                        Zero distractions. meet AURA.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center animate-fade-in-up delay-300">
                        <button
                            onClick={() => scrollTo('buy')}
                            className="w-full sm:w-auto group relative px-8 py-3.5 sm:py-4 bg-slate-900 text-white rounded-full font-bold overflow-hidden shadow-2xl hover:shadow-indigo-500/30 transition-all hover:scale-105"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                            <span className="relative flex items-center justify-center gap-2">
                                Pre-Order Now <ArrowRight size={18} />
                            </span>
                        </button>
                        <button
                            onClick={() => scrollTo('highlights')}
                            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-105 shadow-sm"
                        >
                            Explore Features
                        </button>
                    </div>
                </div>

                {/* Right Content - 3D CSS Product Mock */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center animate-float-slow">
                    {/* Product Case */}
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-slate-200 rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center justify-center z-20">
                        {/* Inner Case Shadow */}
                        <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-slate-100 to-slate-50 shadow-inner" />

                        {/* L Bud */}
                        <div className="absolute left-10 top-10 w-24 h-40 bg-gradient-to-br from-white to-slate-100 rounded-full shadow-lg border border-white transform -rotate-12 flex flex-col items-center p-2 z-30 group cursor-pointer transition-transform hover:-translate-y-4">
                            <div className="w-full h-1/2 rounded-full bg-slate-50 shadow-inner mb-2" />
                            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                        </div>

                        {/* R Bud */}
                        <div className="absolute right-10 bottom-10 w-24 h-40 bg-gradient-to-br from-white to-slate-100 rounded-full shadow-lg border border-white transform rotate-12 flex flex-col items-center p-2 z-30 group cursor-pointer transition-transform hover:-translate-y-4">
                            <div className="w-full h-1/2 rounded-full bg-slate-50 shadow-inner mb-2" />
                            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                        </div>

                        {/* Aura Logo on Case */}
                        <div className="absolute bottom-6 opacity-30 font-bold tracking-widest text-slate-400 text-sm">AURA</div>
                    </div>

                    {/* Floating Spec Chips */}
                    <div className="absolute top-[15%] -right-[5%] bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 animate-float-delayed border border-white/50 z-40">
                        <Battery size={20} className="text-green-500" />
                        <span className="font-semibold text-slate-700">48h Battery</span>
                    </div>

                    <div className="absolute bottom-[15%] -left-[5%] bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 animate-float-delayed-2 border border-white/50 z-40">
                        <Radio size={20} className="text-indigo-500" />
                        <span className="font-semibold text-slate-700">ANC Active</span>
                    </div>

                    <div className="absolute top-[55%] -right-[10%] bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 animate-float-delayed-3 border border-white/50 z-40">
                        <Zap size={20} className="text-yellow-500" />
                        <span className="font-semibold text-slate-700">Ultra Low Latency</span>
                    </div>

                </div>
            </div>

            {/* CSS for specific keyframes if not global */}
            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-shinewrap:hover .animate-shine { animation: shine 1s; }
        .animate-float-delayed { animation: float-slow 5s ease-in-out infinite 1s; }
        .animate-float-delayed-2 { animation: float-slow 7s ease-in-out infinite 2s; }
        .animate-float-delayed-3 { animation: float-slow 6s ease-in-out infinite 3s; }
        .animate-fade-in-up { 
          animation: fadeUp 0.8s ease-out forwards; 
          opacity: 0; 
          transform: translateY(20px); 
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
};

export default UI05Hero;
