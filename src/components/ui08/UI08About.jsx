import React from 'react';

const UI08About = () => {
    return (
        <section className="bg-white border-b border-black">
            <div className="grid lg:grid-cols-2">

                {/* Left: Image Placeholder */}
                <div className="bg-zinc-100 min-h-[600px] border-b lg:border-b-0 lg:border-r border-black flex items-center justify-center p-12">
                    <div className="w-full max-w-sm aspect-square bg-white border border-black p-2 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
                        <div className="w-full h-full bg-zinc-200 flex items-center justify-center grayscale">
                            {/* Abstract Image Rep */}
                            <span className="text-6xl font-black text-black/20">MENTOR</span>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="p-12 lg:p-24 flex flex-col justify-center">
                    <h2 className="text-5xl lg:text-7xl font-black uppercase leading-none tracking-tighter mb-12">
                        About<br />The<br />Cohort
                    </h2>

                    <div className="space-y-8 max-w-lg">
                        <p className="text-lg leading-relaxed text-zinc-800">
                            We don't believe in tutorials. We believe in immersion. Our cohort is structured like a high-performance engineering team. You submit PRs, conduct code reviews, and deploy to production from Week 1.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-800">
                            Led by senior engineers from top tech companies, this program is the bridge between "knowing how to code" and "being an engineer".
                        </p>

                        <button className="inline-block border border-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                            Read Our Manifesto
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UI08About;
