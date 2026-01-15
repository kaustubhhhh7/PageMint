import React from 'react';

const UI04Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-600 to-orange-500"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 bg-white skew-x-[-10deg] flex items-center justify-center rounded-sm hover:bg-orange-500 transition-colors">
                                <span className="text-black font-bold text-lg skew-x-[10deg]">I</span>
                            </div>
                            <span className="text-2xl font-black italic tracking-tighter uppercase">
                                Iron<span className="text-orange-500">Pulse</span>
                            </span>
                        </a>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Forging stronger bodies and sharper minds since 2024. Join the movement today.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">Explore</h4>
                        <ul className="space-y-3">
                            <li><a href="#programs" className="text-slate-400 hover:text-orange-500 transition-colors">Programs</a></li>
                            <li><a href="#trainers" className="text-slate-400 hover:text-orange-500 transition-colors">Trainers</a></li>
                            <li><a href="#plans" className="text-slate-400 hover:text-orange-500 transition-colors">Membership</a></li>
                            <li><a href="#results" className="text-slate-400 hover:text-orange-500 transition-colors">Success Stories</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">Support</h4>
                        <ul className="space-y-3">
                            <li><a href="#faq" className="text-slate-400 hover:text-orange-500 transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">Stay Strong</h4>
                        <p className="text-slate-400 text-sm mb-4">Get the latest workout tips and exclusive offers.</p>
                        <div className="flex">
                            <input type="email" placeholder="ENTER EMAIL" className="w-full bg-white/10 border-none rounded-l-lg px-4 py-3 text-sm focus:ring-1 focus:ring-orange-500 outline-none text-white placeholder-slate-500" />
                            <button className="bg-orange-600 px-4 py-2 rounded-r-lg font-bold hover:bg-orange-500 transition-colors text-white">GO</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm font-medium">
                        © 2026 CORE3. Designed by Kaustubh Ghadshi
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {/* Dummy Social Icons */}
                        {['Twitter', 'Instagram', 'YouTube'].map(social => (
                            <a key={social} href="#" className="text-slate-500 hover:text-white text-xs font-bold uppercase transition-colors">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default UI04Footer;
