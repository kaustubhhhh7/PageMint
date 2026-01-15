import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const UI10Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-300 py-20 font-sans border-t-4 border-amber-700">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif text-white tracking-widest uppercase">
                            Aurelian<span className="text-amber-600">.</span>
                        </h2>
                        <p className="text-stone-400 leading-relaxed max-w-xs font-light">
                            Curating the world's most exceptional properties for the most discerning clients. Elevate your lifestyle.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                                    <Icon size={20} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white text-sm uppercase tracking-[0.2em] font-medium">Discover</h3>
                        <ul className="space-y-4 font-light text-stone-400">
                            <li><Link to="/ui/10/properties" className="hover:text-amber-500 transition-colors">All Properties</Link></li>
                            <li><Link to="/ui/10/properties?filter=featured" className="hover:text-amber-500 transition-colors">Featured Listings</Link></li>
                            <li><Link to="/ui/10/agents" className="hover:text-amber-500 transition-colors">Our Agents</Link></li>
                            <li><Link to="/ui/10/about" className="hover:text-amber-500 transition-colors">The Brand</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="text-white text-sm uppercase tracking-[0.2em] font-medium">Contact</h3>
                        <ul className="space-y-4 font-light text-stone-400">
                            <li>123 Luxury Lane, Beverly Hills, CA 90210</li>
                            <li>+1 (310) 555-0199</li>
                            <li>hello@aurelianestates.com</li>
                            <li>Daily 9AM - 8PM PST</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-white text-sm uppercase tracking-[0.2em] font-medium">Newsletter</h3>
                        <p className="text-stone-400 font-light text-sm">
                            Subscribe for exclusive off-market listings.
                        </p>
                        <div className="flex border-b border-stone-700 pb-2">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent w-full outline-none text-white placeholder-stone-600 text-xs tracking-widest uppercase"
                            />
                            <button className="text-stone-400 hover:text-white transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 uppercase tracking-widest font-light">
                    <p>© 2026 Aurelian Estates. All rights reserved.</p>
                    <div className="space-x-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-stone-300">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default UI10Footer;
