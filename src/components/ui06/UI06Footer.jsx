import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const UI06Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6 text-white">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded flex items-center justify-center font-black shadow-lg shadow-orange-200">N</div>
                        <span className="font-black text-xl tracking-tighter">NEXA <span className="text-orange-400">SUMMIT</span></span>
                    </div>
                    <p className="max-w-sm mb-8 leading-relaxed">
                        Connecting the world's brightest minds to shape the future of technology. Join us in Mumbai for the event of the year.
                    </p>
                    <div className="flex gap-4">
                        <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Twitter size={20} /></button>
                        <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Linkedin size={20} /></button>
                        <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Facebook size={20} /></button>
                        <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Instagram size={20} /></button>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><a href="#speakers" className="hover:text-orange-400 transition-colors">Speakers</a></li>
                        <li><a href="#schedule" className="hover:text-orange-400 transition-colors">Schedule</a></li>
                        <li><a href="#tickets" className="hover:text-orange-400 transition-colors">Get Tickets</a></li>
                        <li><a href="#venue" className="hover:text-orange-400 transition-colors">Venue Info</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-2">
                            <span className="font-bold text-slate-600">Email:</span> hello@nexasummit.com
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-slate-600">Phone:</span> +91 98765 43210
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-slate-600">Press:</span> press@nexasummit.com
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-wider">
                <div>&copy; 2026 CORE3. Designed by Kaustubh Ghadshi</div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default UI06Footer;
