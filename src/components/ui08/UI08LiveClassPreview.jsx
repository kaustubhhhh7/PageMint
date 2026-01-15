import React from 'react';
import { Mic, Video, Users, MessageSquare, Hand, MoreVertical, Smile } from 'lucide-react';

const UI08LiveClassPreview = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Main Window */}
            <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 relative z-10 animate-fade-in-up">

                {/* Header */}
                <div className="h-10 bg-slate-800 flex items-center justify-between px-4 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-white text-xs font-bold tracking-wide">LIVE</span>
                        <span className="text-slate-400 text-xs">|</span>
                        <span className="text-slate-300 text-xs truncate">System Design: Scaling to 1M Users</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-600" />
                        <div className="w-3 h-3 rounded-full bg-slate-600" />
                    </div>
                </div>

                {/* Video Area Grid */}
                <div className="p-4 grid grid-cols-3 gap-3 h-64 bg-slate-900 relative">
                    {/* Instructor (Large) */}
                    <div className="col-span-2 row-span-2 bg-indigo-900/20 rounded-lg border border-indigo-500/30 relative overflow-hidden group">
                        {/* Avatar / Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-indigo-400">
                                JD
                            </div>
                        </div>
                        <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-[10px] text-white font-bold backdrop-blur-md">
                            Instructor (Jane Doe)
                        </div>
                        <div className="absolute top-3 right-3 text-indigo-400">
                            <Mic size={16} />
                        </div>
                    </div>

                    {/* Student 1 */}
                    <div className="bg-slate-800 rounded-lg relative overflow-hidden border border-slate-700">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-sm">AK</div>
                        </div>
                    </div>
                    {/* Student 2 */}
                    <div className="bg-slate-800 rounded-lg relative overflow-hidden border border-slate-700">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">ML</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="h-14 bg-slate-800 border-t border-slate-700 flex items-center justify-between px-6">
                    <div className="flex items-center gap-4 text-slate-400">
                        <div className="hover:bg-slate-700 p-2 rounded-full cursor-pointer transition-colors"><Mic size={18} /></div>
                        <div className="hover:bg-slate-700 p-2 rounded-full cursor-pointer transition-colors"><Video size={18} /></div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">
                            Leave
                        </button>
                    </div>

                    <div className="flex items-center gap-4 text-slate-400">
                        <div className="hover:bg-slate-700 p-2 rounded-full cursor-pointer transition-colors relative">
                            <Hand size={18} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full" />
                        </div>
                        <div className="hover:bg-slate-700 p-2 rounded-full cursor-pointer transition-colors"><MoreVertical size={18} /></div>
                    </div>
                </div>

                {/* Floating Chat Overlay */}
                <div className="absolute bottom-20 right-4 w-48 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 uppercase font-bold tracking-wider">
                        <span>Class Chat</span>
                        <Users size={12} />
                    </div>
                    <div className="space-y-2 mb-2">
                        <div className="flex gap-2 items-start">
                            <div className="w-4 h-4 rounded-full bg-green-500 shrink-0" />
                            <div className="text-[10px] text-slate-300 leading-tight">Can you explain CAP theorem again?</div>
                        </div>
                        <div className="flex gap-2 items-start">
                            <div className="w-4 h-4 rounded-full bg-purple-500 shrink-0" />
                            <div className="text-[10px] text-slate-300 leading-tight">Wow, that makes total sense now! 🤯</div>
                        </div>
                    </div>
                    <div className="relative">
                        <input className="w-full bg-slate-800 rounded border border-slate-700 text-[10px] px-2 py-1 text-white focus:outline-none focus:border-indigo-500" placeholder="Type..." />
                        <Smile size={10} className="absolute right-2 top-1.5 text-slate-400" />
                    </div>
                </div>

            </div>

            {/* Attendance Badge Float */}
            <div className="absolute -left-6 top-10 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20">
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 ring-2 ring-white" />
                    <div className="w-6 h-6 rounded-full bg-rose-500 ring-2 ring-white" />
                    <div className="w-6 h-6 rounded-full bg-teal-500 ring-2 ring-white" />
                </div>
                <span className="text-xs font-bold text-slate-600">+142 Online</span>
            </div>

            <style>{`
                 @keyframes bounce-slow {
                     0%, 100% { transform: translateY(0); }
                     50% { transform: translateY(-10px); }
                 }
                 .animate-bounce-slow {
                     animation: bounce-slow 3s infinite ease-in-out;
                 }
             `}</style>
        </div>
    );
};

export default UI08LiveClassPreview;
