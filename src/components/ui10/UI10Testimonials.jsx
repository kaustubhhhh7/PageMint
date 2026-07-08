import React from 'react';
import { testimonials } from './ui10Data';
import { Quote } from 'lucide-react';

const UI10Testimonials = () => {
    return (
        <section className="py-24 bg-stone-100 relative overflow-hidden">
            {/* Background Texture similar to Hero */}
            <div className="absolute inset-0 bg-stone-50/20"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h4 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">
                        Testimonials
                    </h4>
                    <h2 className="text-4xl lg:text-5xl font-serif text-stone-900">
                        Client Experiences
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="bg-white p-10 border-t-2 border-stone-200 hover:border-amber-600 transition-colors duration-300 shadow-sm relative">
                            <Quote className="absolute top-8 left-8 text-stone-200 w-10 h-10" fill="currentColor" />
                            <p className="text-stone-600 italic font-serif text-lg leading-relaxed mb-8 relative z-10 pt-4">
                                "{item.text}"
                            </p>
                            <div>
                                <h5 className="font-bold text-stone-900 text-sm uppercase tracking-wide">
                                    {item.name}
                                </h5>
                                <span className="text-xs text-amber-600 font-bold uppercase tracking-widest mt-1 block">
                                    Purchased {item.purchase}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI10Testimonials;
