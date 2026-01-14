import React, { useState } from 'react';

const UI03Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    const skillChips = [
        { name: 'React', desc: 'Building complex single-page applications.' },
        { name: 'Tailwind CSS', desc: 'Rapidly styling responsive interfaces.' },
        { name: 'Node.js', desc: 'Backend logic and API development.' },
        { name: 'SQL', desc: 'Database management and complex queries.' },
        { name: 'Git', desc: 'Version control and team collaboration.' },
        { name: 'JavaScript', desc: 'Core logic and dynamic interactions.' },
        { name: 'TypeScript', desc: 'Type-safe code for scalable apps.' },
        { name: 'Figma', desc: 'UI/UX prototyping and design systems.' }
    ];

    const skillCards = [
        { name: 'Frontend Development', percentage: 90, color: 'bg-indigo-500' },
        { name: 'UI/UX Design', percentage: 80, color: 'bg-purple-500' },
        { name: 'Backend Logic', percentage: 70, color: 'bg-blue-500' },
        { name: 'Database Architecture', percentage: 75, color: 'bg-green-500' },
        { name: 'DevOps Basics', percentage: 40, color: 'bg-orange-500' },
        { name: 'Problem Solving', percentage: 95, color: 'bg-pink-500' },
    ];

    return (
        <section id="skills" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Expertise</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        Tools & Technologies
                    </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
                    {skillChips.map((skill) => (
                        <button
                            key={skill.name}
                            onClick={() => setActiveSkill(skill.name === activeSkill ? null : skill.name)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${activeSkill === skill.name
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md'
                                }`}
                        >
                            {skill.name}
                        </button>
                    ))}
                </div>

                {/* Dynamic Description Area */}
                <div className={`text-center mb-20 transition-all duration-500 overflow-hidden ${activeSkill ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-lg text-slate-700 font-medium inline-block bg-white px-8 py-3 rounded-xl shadow-sm border border-slate-100">
                        <span className="text-indigo-600 font-bold mr-2">{activeSkill}:</span>
                        {skillChips.find(s => s.name === activeSkill)?.desc}
                    </p>
                </div>

                {/* Progress Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCards.map((card, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
                            <div className="flex justify-between items-end mb-4">
                                <h4 className="font-bold text-slate-800 text-lg">{card.name}</h4>
                                <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-900 transition-colors">{card.percentage}%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                                <div
                                    className={`h-2.5 rounded-full ${card.color} w-[0%] group-hover:w-[${card.percentage}%] transition-all duration-1000 ease-out`}
                                    style={{ width: `${card.percentage}%` }}
                                >
                                    <div className={`w-full h-full animate-pulse opacity-50`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI03Skills;
