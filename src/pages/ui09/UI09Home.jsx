import React from 'react';
import UI09Hero from '../../components/ui09/UI09Hero';
import UI09Destinations from '../../components/ui09/UI09Destinations';
import UI09FeaturedTours from '../../components/ui09/UI09FeaturedTours';
import { ShieldCheck, HeartHandshake, Award, Headset } from 'lucide-react';
import { testimonials } from '../../components/ui09/ui09Data';

const UI09WhyChooseUs = () => {
    const features = [
        { icon: <ShieldCheck size={32} />, title: "Best Price Guarantee", desc: "We ensure you get the best deal without compromising quality." },
        { icon: <Award size={32} />, title: "Expert Guides", desc: "Our local guides are certified experts with deep knowledge." },
        { icon: <HeartHandshake size={32} />, title: "Handpicked Hotels", desc: "We heavily vet every accommodation for comfort and service." },
        { icon: <Headset size={32} />, title: "24/7 Support", desc: "We are always a phone call away, no matter the time zone." },
    ];

    return (
        <section className="py-24 bg-sky-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-2 block">Why VoyageVista</span>
                    <h2 className="text-4xl font-bold text-slate-900">Experience The Difference</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const UI09Testimonials = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Traveler Stories</span>
                    <h2 className="text-4xl font-bold text-slate-900">What Our Guests Say</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100">
                            <div className="flex gap-1 mb-6 text-orange-400">
                                {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                            </div>
                            <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
                                    {t.name[0]}
                                </div>
                                <div className="text-sm">
                                    <div className="font-bold text-slate-900">{t.name}</div>
                                    <div className="text-slate-500 text-xs">{t.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const UI09Newsletter = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Get 10% Off Your First Trip</h2>
                <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                    Join our exclusive travelers club. Receive secret deals, travel guides, and inspiration directly to your inbox.
                </p>
                <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="flex-1 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full focus:outline-none focus:bg-white/20 placeholder:text-slate-500"
                    />
                    <button className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-sky-500/20 transition-all">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

const UI09Home = () => {
    return (
        <div className="overflow-x-hidden">
            <UI09Hero />
            <UI09Destinations />
            <UI09FeaturedTours />
            <UI09WhyChooseUs />
            <UI09Testimonials />
            <UI09Newsletter />
        </div>
    );
};

export default UI09Home;
