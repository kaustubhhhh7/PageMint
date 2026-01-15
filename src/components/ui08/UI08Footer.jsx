import React from 'react';
import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';

const UI08Footer = () => {
    return (
        <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <BookOpen size={20} className="text-zinc-100" />
                            <span className="text-lg font-bold text-zinc-100 tracking-tight">MonoLearn</span>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed mb-6">
                            A minimal, editor-first learning experience for developers who want to ship code, not just watch videos.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Course Outline</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>© 2026 CORE3. Designed by Kaustubh Ghadshi</p>
                    <p>Designed with discipline in San Francisco.</p>
                </div>

            </div>
        </footer>
    );
};

export default UI08Footer;
