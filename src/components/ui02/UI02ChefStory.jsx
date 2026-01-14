import React from 'react';
import Container from '../common/Container';

const UI02ChefStory = () => {
    return (
        <section id="chef" className="py-20 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    {/* Left - Image Placeholder */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[3/4] rounded-t-full rounded-b-[2rem] bg-stone-200 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-stone-400 to-stone-200 flex items-center justify-center">
                                <span className="font-serif italic text-3xl text-stone-500">Chef's Portrait</span>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-orange-100 rounded-t-full rounded-b-[2rem] -z-10 scale-110"></div>
                    </div>

                    {/* Right - Story */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-block px-3 py-1 bg-stone-100 text-stone-500 text-xs font-bold tracking-widest uppercase mb-4">
                            Our Philosophy
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6">
                            Meet our Chef.
                        </h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            "Cooking is not just about ingredients, it's about time, patience, and memory. At Cafe Noura, we try to capture the essence of a warm home meal, elevated with modern techniques."
                        </p>
                        <p className="text-stone-500 mb-8">
                            Chef Antoine brings over 15 years of culinary experience from kitchens across Europe and the Middle East, blending robust flavors with delicate touches.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Locally sourced, organic ingredients",
                                "Authentic flavors with a modern twist",
                                "Sustainable & zero-waste kitchen practices"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs text-bold">
                                        ✓
                                    </div>
                                    <span className="text-stone-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="text-orange-600 font-bold tracking-wide uppercase text-sm hover:text-orange-700 hover:underline underline-offset-4 transition-all">
                            Learn More About Our Journey
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UI02ChefStory;
