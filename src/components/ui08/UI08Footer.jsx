import React from 'react';
import { BookOpen, Mail } from 'lucide-react';

const UI08Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <BookOpen size={16} fill="currentColor" />
                        </div>
                        <span className="font-black text-lg">SkillSprint</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Empowering the next generation of full-stack developers through immersive, project-based learning.
                    </p>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-600">© 2026 SkillSprint Inc.</div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Platform</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#curriculum" className="hover:text-blue-400 transition-colors">Curriculum</a></li>
                        <li><a href="#mentors" className="hover:text-blue-400 transition-colors">Mentorship</a></li>
                        <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Support</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Stay Updated</h4>
                    <p className="text-sm mb-4">Get the latest tutorials and course updates.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Enter your email" className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-blue-500" />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 flex items-center justify-center transition-colors">
                            <Mail size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default UI08Footer;
