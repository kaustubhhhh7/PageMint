import React from 'react';

const UI08Philosophy = () => {
    return (
        <section id="philosophy" className="bg-black text-white py-24 lg:py-32 border-b border-white/20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-24 text-center lg:text-left">
                    Philosophy
                </h2>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-zinc-400">
                            Our Core Values
                        </h3>
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-2xl font-bold uppercase mb-2">Build to Last</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                    We teach you to write code that survives. Maintainability, readability, and scalability are not optional.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold uppercase mb-2">No Magic</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                    We peel back the layers of abstraction. You will understand how your tools work, from the request lifecycle to the render loop.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xl md:text-2xl leading-relaxed font-medium mb-12">
                            "The best engineers are not the ones who know all the answers, but the ones who know how to find them. Our goal is to make ourselves obsolete by teaching you how to learn."
                        </p>
                        <button className="border border-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Meet the Instructors
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default UI08Philosophy;
