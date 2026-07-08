import React from 'react';

const UI03About = () => {
    const needs = [
        { label: 'Location', value: 'Mumbai, India', icon: '📍' },
        { label: 'Focus', value: 'Web + UI Desgn', icon: '🎯' },
        { label: 'Strength', value: 'Consistency', icon: '⚡' },
        { label: 'Goal', value: 'Solving Problems', icon: '🚀' },
    ];

    return (
        <section id="about" className="py-24 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column - Story */}
                    <div className="lg:col-span-7">
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">About Me</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                            More than just code. <br />
                            It's about the <span className="italic text-slate-500">experience.</span>
                        </h3>
                        <div className="prose prose-lg text-slate-600">
                            <p className="mb-4">
                                I started my journey with a simple curiosity about how things work on the web. That curiosity quickly turned into a passion for building interfaces that not only look good but feel right.
                            </p>
                            <p>
                                Currently pursuing my B.Sc in IT, I bridge the gap between technical logic and creative design. I don't just write code; I craft digital solutions that solve real-world problems while maintaining a high standard of aesthetic quality.
                            </p>
                            <p className="mt-4 font-medium text-slate-900 border-l-4 border-indigo-500 pl-4 py-1 bg-slate-50 rounded-r-lg">
                                "I believe the best code is the one you don't notice—where everything just works seamlessly."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Quick Facts Grid */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {needs.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:rotate-1"
                                >
                                    <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{item.label}</h4>
                                    <p className="text-lg font-bold text-slate-900">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI03About;
