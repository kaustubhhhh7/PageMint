import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const UI08Mentors = () => {
    const mentors = [
        {
            name: "Alex Rivera",
            role: "Senior Frontend Engineer",
            company: "ex-Google",
            skills: ["React Architecture", "Performance", "A11y"],
            image: "bg-blue-100", // placeholder
            highlight: "Top Skill: System Design",
            initials: "AR"
        },
        {
            name: "Sarah Chen",
            role: "Lead Backend Developer",
            company: "Netflix",
            skills: ["Node.js", "Microservices", "AWS"],
            image: "bg-orange-100",
            highlight: "Mentor of the Month",
            initials: "SC",
            isStar: true
        },
        {
            name: "David Kim",
            role: "Full Stack Team Lead",
            company: "Airbnb",
            skills: ["GraphQL", "Typescript", "Testing"],
            image: "bg-green-100",
            highlight: "Top Skill: Mentorship",
            initials: "DK"
        },
        {
            name: "Emily Davis",
            role: "Product Designer",
            company: "Spotify",
            skills: ["UI/UX", "Design Systems", "Figma"],
            image: "bg-purple-100",
            highlight: "Top Skill: User Research",
            initials: "ED"
        }
    ];

    return (
        <section id="mentors" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Learn from industry veterans.</h2>
                    <p className="text-slate-500">Weekly live Q&A sessions and 1:1 code reviews.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor, i) => (
                        <div key={i} className="group relative bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden">
                            {/* Card Header/Image Placeholder */}
                            <div className={`h-32 ${mentor.image} w-full relative`}>
                                <div className="absolute -bottom-10 left-6">
                                    <div className="w-20 h-20 rounded-2xl bg-slate-900 border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-xl">
                                        {mentor.initials}
                                    </div>
                                </div>
                                {mentor.isStar && (
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm">
                                        Star Mentor
                                    </div>
                                )}
                            </div>

                            <div className="pt-12 p-6">
                                <h3 className="font-bold text-lg text-slate-900">{mentor.name}</h3>
                                <div className="text-sm font-medium text-slate-500 mb-1">{mentor.role}</div>
                                <div className="text-xs font-bold text-blue-600 mb-4">{mentor.company}</div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {mentor.skills.map((skill, si) => (
                                        <span key={si} className="text-[10px] font-bold bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-blue-600/95 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h4 className="text-white font-bold text-lg mb-2">{mentor.highlight}</h4>
                                <p className="text-blue-100 text-sm mb-6">"Passionate about writing clean code and helping juniors scale."</p>
                                <button className="bg-white text-blue-600 font-bold px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors shadow-lg">
                                    Book 1:1 Session
                                </button>
                                <div className="flex gap-4 mt-8">
                                    <Linkedin size={20} className="text-white hover:text-blue-200 cursor-pointer" />
                                    <Twitter size={20} className="text-white hover:text-blue-200 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI08Mentors;
