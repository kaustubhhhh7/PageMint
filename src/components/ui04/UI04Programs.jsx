import React, { useState } from 'react';

const UI04Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);

    const programs = [
        { id: 1, title: 'Strength Builder', level: 'Advanced', icon: '🏋️‍♂️', desc: 'Maximize raw power and muscle density.', duration: '12 Weeks', sessions: '5x / Week', focus: 'Hypertrophy' },
        { id: 2, title: 'Fat Burn HIIT', level: 'Intermediate', icon: '🔥', desc: 'High intensity intervals for maximum burn.', duration: '8 Weeks', sessions: '4x / Week', focus: 'Cardio & Conditioning' },
        { id: 3, title: 'Lean Muscle', level: 'Beginner', icon: '💪', desc: 'Sculpt a toned, athletic physique.', duration: '10 Weeks', sessions: '4x / Week', focus: 'Full Body' },
        { id: 4, title: 'Mobility & Flex', level: 'All Levels', icon: '🧘', desc: 'Improve reading of motion and prevent injury.', duration: 'Ongoing', sessions: 'Daily', focus: 'Recovery' },
        { id: 5, title: 'Athletic Performance', level: 'Advanced', icon: '⚡', desc: 'Explosive speed and agility training.', duration: '6 Weeks', sessions: '3x / Week', focus: 'Speed & Agility' },
        { id: 6, title: 'Beginner Bootcamp', level: 'Beginner', icon: '🚀', desc: 'The perfect starting point for your journey.', duration: '4 Weeks', sessions: '3x / Week', focus: 'Fundamentals' },
    ];

    return (
        <section id="programs" className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-4">
                        PROGRAMS BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">EVERY GOAL.</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Whether you're just starting out or looking to break a plateau, we have a scientifically designed roadmap for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                            className={`group relative p-8 bg-slate-900/50 backdrop-blur-sm border-2 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-2
                            ${selectedProgram === program.id
                                    ? 'border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.15)] bg-slate-900'
                                    : 'border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-orange-500/5'}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-4xl bg-black w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-300 group-hover:border-orange-500/50">
                                    {program.icon}
                                </span>
                                <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${program.level === 'Advanced' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                                        program.level === 'Intermediate' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' :
                                            'bg-green-500/10 text-green-500 border border-green-500/20'
                                    }`}>
                                    {program.level}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 uppercase italic">{program.title}</h3>
                            <p className="text-slate-400 mb-4">{program.desc}</p>

                            <div className="flex items-center text-orange-500 font-bold uppercase text-sm group-hover:gap-2 transition-all">
                                <span>{selectedProgram === program.id ? 'Close Details' : 'View Program'}</span>
                                <span className="ml-1">→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Details Panel */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${selectedProgram ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {selectedProgram && (
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden border border-white/10">
                            {/* Bg Pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 overflow-hidden rounded-full blur-[100px] opacity-20"></div>

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="col-span-2">
                                    <h3 className="text-3xl font-black italic mb-2">{programs.find(p => p.id === selectedProgram).title}</h3>
                                    <p className="text-slate-400 mb-8 max-w-xl">
                                        This program is designed to push your limits. Includes detailed video guides, nutrition advice, and progress tracking hooks.
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Duration</p>
                                            <p className="text-xl font-bold">{programs.find(p => p.id === selectedProgram).duration}</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Frequency</p>
                                            <p className="text-xl font-bold">{programs.find(p => p.id === selectedProgram).sessions}</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Goal</p>
                                            <p className="text-xl font-bold">{programs.find(p => p.id === selectedProgram).focus}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start md:items-end">
                                    <button className="w-full md:w-auto px-8 py-4 bg-orange-600 text-white font-bold uppercase tracking-wider hover:bg-orange-500 transition-all hover:scale-105 shadow-xl shadow-orange-500/30 skew-x-[-10deg]">
                                        <span className="inline-block skew-x-[10deg]">Start This Program</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default UI04Programs;
