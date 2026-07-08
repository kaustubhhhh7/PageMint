import React from 'react';
import { Link } from 'react-router-dom';

const UI10CTA = () => {
    return (
        <section className="py-32 bg-stone-900 border-t border-stone-800 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 opacity-50"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                    Your Dream Home Awaits
                </h2>
                <p className="text-stone-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
                    Begin your journey to finding the perfect property. <br />
                    Schedule a private viewing with our senior consultants today.
                </p>
                <Link
                    to="/ui/10/contact"
                    className="inline-block bg-white text-stone-900 font-bold uppercase tracking-[0.2em] text-sm px-10 py-5 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                    Book a Viewing
                </Link>
            </div>
        </section>
    );
};

export default UI10CTA;
