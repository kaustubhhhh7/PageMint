import React, { useState } from 'react';
import { Award, CheckCircle, Search } from 'lucide-react';

const UI08CertificateSection = () => {
    const [id, setId] = useState('');
    const [status, setStatus] = useState(null); // null | 'verified' | 'error'

    const handleVerify = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            if (id.length > 5) setStatus('verified');
            else setStatus('error');
        }, 800);
    };

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: Content & Verification Tool */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                        <Award size={14} /> Gold Standard
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Industry recognized certification.</h2>
                    <p className="text-slate-400 text-lg mb-12">
                        Our certificates are verifiable and integrated with LinkedIn. Recruiters trust SkillSprint graduates.
                    </p>

                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                        <h4 className="font-bold mb-4 flex items-center gap-2">
                            Verify a Certificate
                        </h4>
                        <form onSubmit={handleVerify} className="relative">
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="Enter Certificate ID (e.g. SKILL-2026-X)"
                                className="w-full bg-slate-900 border border-slate-600 rounded-xl py-4 pl-4 pr-12 text-white focus:outline-none focus:border-indigo-500"
                            />
                            <button type="submit" className="absolute right-2 top-2 p-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white transition-colors">
                                <Search size={18} />
                            </button>
                        </form>

                        {status === 'verified' && (
                            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400 text-sm font-bold animate-in fade-in slide-in-from-top-1">
                                <CheckCircle size={16} /> Verified: Valid Certificate Found.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 text-sm font-bold animate-in fade-in slide-in-from-top-1">
                                <CheckCircle size={16} /> ID not found. Try '123456'.
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Visual Certification Mock */}
                <div className="relative group perspective-1000">
                    <div className="absolute inset-0 bg-indigo-600 rounded-lg rotate-3 opacity-20 group-hover:rotate-6 transition-transform" />
                    <div className="bg-white text-slate-900 p-8 rounded-lg shadow-2xl relative border-8 border-slate-100">
                        <div className="border border-slate-200 p-8 h-full flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                                <Award size={32} className="text-indigo-600" />
                            </div>
                            <h4 className="text-xl font-serif text-slate-900 mb-2">Certificate of Completion</h4>
                            <p className="text-slate-500 italic mb-8">This is to certify that</p>
                            <div className="text-3xl font-black font-serif text-slate-900 mb-8 border-b-2 border-slate-200 pb-2 px-8">
                                Alex Johnson
                            </div>
                            <p className="text-sm text-slate-500 mb-2">has successfully completed the</p>
                            <h5 className="font-bold text-indigo-700 text-lg mb-8">Full-Stack Web Development Bootcamp</h5>

                            <div className="w-full flex justify-between items-end text-xs text-slate-400 mt-auto">
                                <div className="text-left">
                                    <div className="w-24 h-px bg-slate-300 mb-1" />
                                    Instructor Signature
                                </div>
                                <div className="w-16 h-16 border border-slate-200 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-full" />
                                </div>
                                <div className="text-right">
                                    <div className="w-24 h-px bg-slate-300 mb-1" />
                                    Date: Jan 20, 2026
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UI08CertificateSection;
