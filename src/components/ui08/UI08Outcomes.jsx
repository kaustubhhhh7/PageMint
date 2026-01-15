import React, { useState, useEffect } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const UI08Outcomes = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) setIsVisible(true);
        }, { threshold: 0.3 });

        const el = document.getElementById('outcomes-chart');
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="outcomes" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-4">Career Impact</div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">We don't just teach code.<br />We launch careers.</h2>
                        <p className="text-slate-500 text-lg mb-8 max-w-md">
                            Employers don't care about certificates. They care about what you can ship. Our hiring partners actively recruit from our weekly demo days.
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Briefcase size={18} className="text-indigo-500" /> Career Services Included
                            </h4>
                            <ul className="space-y-3">
                                {["Resume Optimization", "LinkedIn Profile Audit", "Mock Technical Interviews", "Salary Negotiation Support"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <CheckCircle size={16} className="text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Scoreboard Visual */}
                    <div id="outcomes-chart" className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16" />

                        <h3 className="text-xl font-bold mb-8 relative z-10">Candidate Readiness Score</h3>

                        <div className="space-y-8 relative z-10">
                            {[
                                { label: "Technical Proficiency", val: 92, color: "bg-indigo-500" },
                                { label: "System Design", val: 85, color: "bg-rose-500" },
                                { label: "Communication", val: 98, color: "bg-teal-400" },
                                { label: "Project Quality", val: 94, color: "bg-purple-500" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm font-bold mb-2 text-slate-300">
                                        <span>{item.label}</span>
                                        <span className={isVisible ? 'opacity-100 transition-opacity duration-1000 delay-[500ms]' : 'opacity-0'}>{item.val}/100</span>
                                    </div>
                                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${item.color} transition-all duration-1500 ease-out`}
                                            style={{ width: isVisible ? `${item.val}%` : '0%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                            <div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Hiring Partners</div>
                                <div className="text-lg font-bold">450+ Companies</div>
                            </div>
                            <div className="flex -space-x-2 opacity-80">
                                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-600 border border-slate-500" />)}
                                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-white font-bold">+99</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI08Outcomes;
