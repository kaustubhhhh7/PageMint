import React from 'react';
import Container from '../common/Container';

const UI02Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-serif font-bold text-white mb-6">Cafe Noura</h3>
                        <p className="max-w-xs leading-relaxed">
                            A culinary haven offering comfort, warmth, and flavors that tell a story.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#menu" className="hover:text-orange-500 transition-colors">Menu Highlights</a></li>
                            <li><a href="#specials" className="hover:text-orange-500 transition-colors">Signature Dishes</a></li>
                            <li><a href="#chef" className="hover:text-orange-500 transition-colors">Our Story</a></li>
                            <li><a href="#reserve" className="hover:text-orange-500 transition-colors">Reservations</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span>📍</span>
                                <span>123 Culinary Avenue, Food District, FD 10101</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span>📞</span>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span>✉️</span>
                                <span>hello@cafenoura.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-800 text-center text-sm">
                    <p>&copy; 2026 CORE3. Designed by Kaustubh Ghadshi</p>
                </div>
            </Container>
        </footer>
    );
};

export default UI02Footer;
