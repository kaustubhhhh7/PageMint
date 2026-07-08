import React from 'react';

const UI08Curriculum = () => {
    const modules = [
        {
            number: "01",
            title: "Foundations",
            desc: "Command line mastery, Git workflows, and the architectural principles of the modern web."
        },
        {
            number: "02",
            title: "Frontend",
            desc: "Deep dive into JS internals, React limits, and state management patterns at scale."
        },
        {
            number: "03",
            title: "Backend",
            desc: "Designing resilient APIs, database schema optimization, and authentication systems."
        },
        {
            number: "04",
            title: "DevOps",
            desc: "CI/CD pipelines, Docker containerization, and AWS infrastructure as code."
        },
        {
            number: "05",
            title: "System Design",
            desc: "Architecture patterns for high-availability distributed systems."
        },
        {
            number: "06",
            title: "Capstone",
            desc: "Build, launch, and monetize a SaaS product from scratch."
        }
    ];

    return (
        <section id="curriculum" className="bg-white border-b border-black py-24 lg:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-24 border-b border-black pb-12">
                    Our<br />Programs
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {modules.map((mod, idx) => (
                        <div key={idx} className="group cursor-default">
                            <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-zinc-200 pb-2 w-max group-hover:text-black group-hover:border-black transition-colors">
                                Module {mod.number}
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:underline decoration-4 underline-offset-4">
                                {mod.title}
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed max-w-sm">
                                {mod.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default UI08Curriculum;
