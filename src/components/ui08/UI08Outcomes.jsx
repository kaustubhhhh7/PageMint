import React from 'react';
import { Briefcase, Code, Cloud, Terminal, GitBranch, Layout } from 'lucide-react';

const UI08Outcomes = () => {
    const outcomes = [
        { icon: Code, title: "Full-Stack Mastery", desc: "Build complete web apps from scratch." },
        { icon: Cloud, title: "Cloud Deployment", desc: "Ship to AWS, Vercel, and Netlify." },
        { icon: Briefcase, title: "Job Ready Portfolio", desc: "4 production-grade projects." },
        { icon: Terminal, title: "Clean Code", desc: "Write maintainable, scalable logic." },
        { icon: GitBranch, title: "Team Collaboration", desc: "Master Git and Pull Requests." },
        { icon: Layout, title: "Design Systems", desc: "Implement pixel-perfect UI libraries." }
    ];

    return (
        <section id="outcomes" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Your Future</div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Don't just code.<br />Engineer solutions.</h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-md">
                            Our graduates don't just know syntax—they know how to build, deploy, and scale real products in a professional environment.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {outcomes.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Skills Matrix Visualization */}
                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="font-bold text-lg">Skills Matrix Growth</h3>
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded font-mono">Job Ready</span>
                        </div>

                        <div className="space-y-6">
                            {[
                                { skill: "Frontend Engineering", val: 92, color: "bg-blue-500" },
                                { skill: "Backend Logic", val: 85, color: "bg-orange-500" },
                                { skill: "Database Design", val: 78, color: "bg-purple-500" },
                                { skill: "System Architecture", val: 70, color: "bg-pink-500" },
                                { skill: "DevOps & CI/CD", val: 65, color: "bg-teal-500" }
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span className="text-slate-300">{s.skill}</span>
                                        <span className="text-slate-500">{s.val}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${s.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${s.val}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                            <button className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
                                Download Comprehensive Syllabus
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI08Outcomes;
