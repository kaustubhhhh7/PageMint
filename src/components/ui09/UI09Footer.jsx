import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const UI09Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                                <MapPin size={16} fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold text-white">VoyageVista</span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400 mb-6">
                            Crafting unforgettable journeys across the globe since 2010. Your adventure begins with us.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-400 hover:text-white transition-all"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><NavLink to="/ui/09" className="hover:text-sky-400 transition-colors">Home</NavLink></li>
                            <li><NavLink to="/ui/09/about" className="hover:text-sky-400 transition-colors">About Us</NavLink></li>
                            <li><NavLink to="/ui/09/tours" className="hover:text-sky-400 transition-colors">All Tours</NavLink></li>
                            <li><NavLink to="/ui/09/gallery" className="hover:text-sky-400 transition-colors">Gallery</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-sky-500 shrink-0" />
                                <span>123 Adventure Way,<br />Travel City, TC 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-sky-500 shrink-0" />
                                <span>+1 (800) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-sky-500 shrink-0" />
                                <span>hello@voyagevista.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-xs text-slate-400 mb-4">Subscribe for latest deals & updates.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                            />
                            <button className="bg-sky-500 text-white font-bold py-3 rounded-lg hover:bg-sky-600 transition-colors text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2026 CORE3. Designed by Kaustubh Ghadshi</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default UI09Footer;
