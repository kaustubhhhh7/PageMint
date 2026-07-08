import React from 'react';
import Container from '../common/Container';

const UI01Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'CTO at TechStart',
            content: "MintFlow drastically reduced our deployment times. What used to take hours now takes minutes. It's an absolute game-changer for our dev team.",
            stars: 5,
        },
        {
            name: 'David Chen',
            role: 'Founder of Designly',
            content: "The best developer experience I've had in years. The documentation is clear, the support is responsive, and the platform just works. Highly recommended.",
            stars: 5,
        },
        {
            name: 'Maria Garcia',
            role: 'Product Lead at ScaleUp',
            content: "We were able to launch our MVP in record time thanks to the pre-built components and intuitive workflow. I can't imagine building without it now.",
            stars: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-slate-50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-bold text-indigo-600 uppercase tracking-wide">Testimonials</h2>
                    <h3 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Loved by builders
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col h-full relative">
                            <div className="flex text-amber-400 mb-4">
                                {[...Array(t.stars)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                            <blockquote className="flex-1 text-slate-600 italic mb-6">
                                "{t.content}"
                            </blockquote>
                            <div className="mt-auto flex items-center">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                                    {t.name.charAt(0)}
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                                    <div className="text-xs text-slate-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UI01Testimonials;
