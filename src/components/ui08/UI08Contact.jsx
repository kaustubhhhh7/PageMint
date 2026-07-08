import React from 'react';

const UI08Contact = () => {
    return (
        <section id="contact" className="bg-zinc-100 py-24 lg:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Form */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                            Apply Now
                        </h2>

                        <form className="space-y-12">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">First Name *</label>
                                    <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-zinc-500 transition-colors rounded-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Last Name *</label>
                                    <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-zinc-500 transition-colors rounded-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address *</label>
                                <input type="email" className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-zinc-500 transition-colors rounded-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">GitHub Profile</label>
                                <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-zinc-500 transition-colors rounded-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Why do you want to join?</label>
                                <textarea rows="3" className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-zinc-500 transition-colors resize-none rounded-none"></textarea>
                            </div>

                            <button type="button" className="bg-black text-white px-12 py-4 font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors w-full md:w-auto">
                                Submit Application
                            </button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-zinc-500">
                                Contact Info
                            </h3>
                            <div className="mb-12">
                                <p className="text-2xl font-bold mb-2">admissions@skillsprint.com</p>
                                <p className="text-xl text-zinc-600">San Francisco, CA</p>
                            </div>
                        </div>

                        <div>
                            <div className="h-px w-full bg-black/10 mb-8"></div>
                            <div className="flex justify-between items-end">
                                <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                    © 2026 SkillSprint
                                </div>
                                <div className="flex gap-6">
                                    <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-zinc-500">Instagram</a>
                                    <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-zinc-500">Twitter</a>
                                    <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-zinc-500">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI08Contact;
