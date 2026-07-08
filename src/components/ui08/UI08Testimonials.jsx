import React from 'react';

const UI08Testimonials = () => {
    return (
        <section id="reviews" className="bg-white border-b border-black py-24 lg:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-24 text-right">
                    Student<br />Stories
                </h2>

                <div className="grid gap-24">

                    {/* Review 1 (Left) */}
                    <div className="max-w-2xl mr-auto">
                        <div className="text-4xl md:text-5xl font-black leading-tight mb-8">
                            "I CAME IN KNOWING SYNTAX. I LEFT THINKING LIKE AN ARCHITECT."
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-black"></div>
                            <div className="text-sm font-bold uppercase tracking-widest">
                                Sarah Jenkins, <span className="text-zinc-500">Frontend @ Vercel</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 (Right) */}
                    <div className="max-w-2xl ml-auto text-right">
                        <div className="text-4xl md:text-5xl font-black leading-tight mb-8">
                            "NO FLUFF. BRUTALLY HONEST REVIEWS. EXACTLY WHAT I NEEDED."
                        </div>
                        <div className="flex items-center justify-end gap-4">
                            <div className="text-sm font-bold uppercase tracking-widest">
                                Marcus Chen, <span className="text-zinc-500">Engineer @ Stripe</span>
                            </div>
                            <div className="h-px w-12 bg-black"></div>
                        </div>
                    </div>

                    {/* Review 3 (Left) */}
                    <div className="max-w-2xl mr-auto">
                        <div className="text-4xl md:text-5xl font-black leading-tight mb-8">
                            "THE CAPSTONE PROJECT ALONE GOT ME HIRED. BEST INVESTMENT EVER."
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-black"></div>
                            <div className="text-sm font-bold uppercase tracking-widest">
                                Elena Rod, <span className="text-zinc-500">UX Lead @ Airbnb</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI08Testimonials;
