import React, { useState } from 'react';
import { Clock, MapPin, Plus, Check, ChevronDown, ChevronUp, Calendar, X } from 'lucide-react';

const scheduleData = {
    day1: [
        { id: 101, time: "09:00 AM", title: "Opening Keynote: The Future of Intelligence", speaker: "Dr. Elena Vos", location: "Main Hall A", description: "A deep dive into how AGI will transform industries within the next decade.", track: "AI" },
        { id: 102, time: "10:30 AM", title: "Scaling Cloud Infrastructure for Billions", speaker: "Marcus Chen", location: "Hall B", description: "Strategies for hyper-scale architecture from the VP of Cloud at Stratus.", track: "Cloud" },
        { id: 103, time: "01:00 PM", title: "Invisible Design Workshop", speaker: "Sarah Jenkins", location: "Workshop Room 1", description: "Hands-on session on creating interfaces that disappear. Bring your laptops.", track: "Design" },
        { id: 104, time: "03:00 PM", title: "Zero Trust Security in 2026", speaker: "David Ross", location: "Hall C", description: "Why the castle-and-moat security model is dead and what replaces it.", track: "Security" },
    ],
    day2: [
        { id: 201, time: "09:00 AM", title: "Startup Grind: From Zero to One", speaker: "Priya Patel", location: "Main Hall A", description: "Real talk on finding product-market fit in a saturated market.", track: "Startups" },
        { id: 202, time: "11:00 AM", title: "Quantum Computing Applied", speaker: "James Wilson", location: "Hall B", description: "Practical applications of quantum algorithms available today.", track: "Innovation" },
        { id: 203, time: "02:00 PM", title: "Designing for the Next Billion Users", speaker: "Anita Roy", location: "Hall C", description: "Accessibility and localization strategies for emerging markets.", track: "Design" },
        { id: 204, time: "04:00 PM", title: "Closing Panel: Ethics in Tech", speaker: "All Keynote Speakers", location: "Main Hall A", description: "A roundtable discussion on the responsibility of technologists.", track: "General" },
    ]
};

const trackColors = {
    'AI': 'bg-cyan-50 text-cyan-700 border-cyan-200',
    'Cloud': 'bg-teal-50 text-teal-700 border-teal-200',
    'Design': 'bg-lime-50 text-lime-700 border-lime-200',
    'Security': 'bg-slate-100 text-slate-700 border-slate-300',
    'Startups': 'bg-cyan-50 text-cyan-700 border-cyan-200',
    'Innovation': 'bg-teal-50 text-teal-700 border-teal-200',
    'General': 'bg-slate-100 text-slate-700 border-slate-300'
};

const hallColors = {
    'Main Hall A': 'bg-cyan-500 text-white',
    'Hall B': 'bg-lime-500 text-slate-900',
    'Hall C': 'bg-teal-500 text-white',
    'Workshop Room 1': 'bg-slate-500 text-white'
};

const UI06Schedule = () => {
    const [activeDay, setActiveDay] = useState('day1');
    const [expandedSession, setExpandedSession] = useState(null);
    const [myAgenda, setMyAgenda] = useState([]);

    const toggleAgenda = (id, e) => {
        e.stopPropagation();
        if (myAgenda.includes(id)) {
            setMyAgenda(myAgenda.filter(item => item !== id));
        } else {
            setMyAgenda([...myAgenda, id]);
        }
    };

    const toggleExpand = (id) => {
        setExpandedSession(expandedSession === id ? null : id);
    };

    const currentSchedule = scheduleData[activeDay];

    return (
        <section id="schedule" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

                {/* Main Schedule Column */}
                <div className="lg:col-span-2">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Event Schedule</h2>

                        {/* Session Tracks Legend */}
                        <div className="mb-6 flex flex-wrap gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Tracks:</span>
                            {Object.keys(trackColors).map(track => (
                                <span key={track} className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${trackColors[track]}`}>
                                    {track}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setActiveDay('day1')}
                                className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${activeDay === 'day1' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-300 transform scale-105' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                            >
                                Day 01 <span className="block text-xs font-normal opacity-80">March 15</span>
                            </button>
                            <button
                                onClick={() => setActiveDay('day2')}
                                className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${activeDay === 'day2' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-300 transform scale-105' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                            >
                                Day 02 <span className="block text-xs font-normal opacity-80">March 16</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {currentSchedule.map((session) => (
                            <div
                                key={session.id}
                                className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-lg ${expandedSession === session.id ? 'bg-slate-50 border-cyan-200 shadow-md' : 'bg-white border-slate-200 hover:border-cyan-100'}`}
                                onClick={() => toggleExpand(session.id)}
                            >
                                <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                    <div className="w-24 shrink-0 text-slate-900 font-mono font-bold text-lg border-r border-slate-200 pr-6">
                                        {session.time}
                                    </div>
                                    <div className="grow">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${trackColors[session.track] || trackColors['General']}`}>
                                                {session.track}
                                            </span>
                                            {myAgenda.includes(session.id) && (
                                                <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                                                    <Check size={10} /> Added
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">{session.title}</h3>
                                        <p className="text-slate-500 font-medium text-sm mt-1">{session.speaker}</p>
                                    </div>
                                    <div className="shrink-0 flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                        <button
                                            onClick={(e) => toggleAgenda(session.id, e)}
                                            className={`p-2 rounded-full transition-colors ${myAgenda.includes(session.id) ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100 border border-cyan-200'}`}
                                            title={myAgenda.includes(session.id) ? "Remove from Agenda" : "Add to Agenda"}
                                        >
                                            {myAgenda.includes(session.id) ? <Check size={20} /> : <Plus size={20} />}
                                        </button>
                                        <div className={`transform transition-transform duration-300 ${expandedSession === session.id ? 'rotate-180' : ''} text-slate-400`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSession === session.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-6 pb-6 pl-6 md:pl-36 text-slate-600">
                                        <p className="mb-4 leading-relaxed">{session.description}</p>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-3 py-1 rounded-lg text-xs font-bold ${hallColors[session.location] || 'bg-slate-500 text-white'}`}>
                                                {session.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar: My Agenda Widget */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 bg-white border-2 border-cyan-200 rounded-3xl p-6 shadow-xl shadow-cyan-200/50">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan-100">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-200">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">My Agenda</h3>
                                <p className="text-xs text-slate-500 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                                    {myAgenda.length} sessions selected
                                </p>
                            </div>
                        </div>

                        {myAgenda.length === 0 ? (
                            <div className="text-center py-8 text-slate-400">
                                <p className="text-sm">No sessions added yet.</p>
                                <p className="text-xs mt-2">Click the <Plus size={12} className="inline bg-cyan-50 rounded p-0.5 text-cyan-600" /> button to build your schedule.</p>
                            </div>
                        ) : (
                            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {[...scheduleData.day1, ...scheduleData.day2]
                                    .filter(s => myAgenda.includes(s.id))
                                    .sort((a, b) => a.id - b.id)
                                    .map(s => (
                                        <div key={s.id} className="p-3 bg-cyan-50 rounded-xl border border-cyan-100 flex gap-3 group relative hover:bg-cyan-100 transition-colors">
                                            <div className="shrink-0 mt-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-cyan-600 mb-0.5">{s.time} • {s.id < 200 ? 'Day 1' : 'Day 2'}</div>
                                                <div className="text-sm font-bold text-slate-900 leading-tight">{s.title}</div>
                                                <button
                                                    onClick={(e) => toggleAgenda(s.id, e)}
                                                    className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )}

                        <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-3 rounded-xl font-bold text-sm tracking-wide hover:shadow-lg hover:shadow-cyan-300/50 transition-all shadow-md">
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UI06Schedule;
