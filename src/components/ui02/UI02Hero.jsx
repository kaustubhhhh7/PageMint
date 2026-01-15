import React from 'react';
import Container from '../common/Container';

const UI02Hero = () => {
    return (
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-orange-50/50"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 rounded-l-[5rem] -z-10 opacity-60 hidden lg:block"></div>

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
                        <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-orange-100 text-orange-700 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 animate-pulse">
                            Fresh • Seasonal • Crafted
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-800 leading-tight mb-4 sm:mb-6">
                            A cozy place for <br className="hidden sm:block" />
                            <span className="text-orange-600">comfort & cuisine.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Experience the warmth of handcrafted meals, artisanal coffee, and a space designed for slow living.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <a href="#menu" className="w-full sm:w-auto">
                                <button className="w-full bg-stone-800 text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-stone-200 active:translate-y-0 active:scale-95 focus:ring-4 focus:ring-stone-200 outline-none">
                                    Explore Menu
                                </button>
                            </a>
                            <a href="#reserve" className="w-full sm:w-auto">
                                <button className="w-full bg-white text-stone-800 border border-stone-200 px-8 py-3.5 rounded-full font-medium hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95 focus:ring-4 focus:ring-stone-100 outline-none">
                                    Reserve Now
                                </button>
                            </a>
                        </div>

                        {/* Stats Strip */}
                        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 text-center lg:text-left">
                            <div>
                                <h4 className="font-bold text-stone-800 text-lg sm:text-xl">20+</h4>
                                <p className="text-[10px] text-stone-500 uppercase tracking-wide mt-1">Signature Dishes</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-800 text-lg sm:text-xl">5⭐</h4>
                                <p className="text-[10px] text-stone-500 uppercase tracking-wide mt-1">Customer Love</p>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <h4 className="font-bold text-stone-800 text-lg sm:text-xl">Daily</h4>
                                <p className="text-[10px] text-stone-500 uppercase tracking-wide mt-1">9AM – 11PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Food Hero Card */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] bg-stone-200 overflow-hidden shadow-2xl shadow-orange-100 group">
                            {/* Placeholder for Main Image */}
                            {/* Main Image */}
                            <img
                                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Delicious gourmet food"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                            {/* Floating Mini Card 1 */}
                            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform rotate-3 transition-transform group-hover:rotate-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                        ★
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 font-bold uppercase">Rating</p>
                                        <p className="text-stone-800 font-bold">4.8/5.0</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Mini Card 2 */}
                            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-[200px] transform -rotate-2 transition-transform group-hover:-rotate-3">
                                <p className="text-xs text-orange-600 font-bold uppercase mb-1">Today's Special</p>
                                <p className="text-stone-800 font-bold leading-tight">Roasted Pumpkin Soup with Sage</p>
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full -z-10 blur-2xl opacity-60"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UI02Hero;
