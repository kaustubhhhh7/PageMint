import React, { useRef } from 'react';
import { Star, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

const UI05Reviews = () => {
    const scrollRef = useRef(null);

    const reviews = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Music Producer",
            text: "The soundstage is impossibly wide for earbuds this size. I can hear layers in my own mixes I missed before.",
            stars: 5,
        },
        {
            id: 2,
            name: "David Chen",
            role: "Tech Reviewer",
            text: "Battery life that actually matches the claims. The transparency mode is the most natural I've ever heard.",
            stars: 5,
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            role: "Commuter",
            text: "ANC is a game changer for the subway. I put them on and the world just disappears. Worth every penny.",
            stars: 5,
        },
        {
            id: 4,
            name: "Marcus Johnson",
            role: "Casual Gamer",
            text: "Latency mode works perfectly for mobile gaming. No sync issues at all, and the spatial audio is wild.",
            stars: 4,
        },
        {
            id: 5,
            name: "Priya Patel",
            role: "Audiophile",
            text: "Finally, wireless buds that respect the bass without drowning out the mids. A balanced masterpiece.",
            stars: 5,
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-2">Loved by thousands.</h2>
                    <p className="text-slate-500">See what the pros are saying about AURA.</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="p-3 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all text-slate-600"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-3 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all text-slate-600"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="min-w-[350px] md:min-w-[400px] bg-white p-8 rounded-[2rem] shadow-sm snap-center border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group hover:-rotate-1"
                    >
                        <div className="flex gap-1 mb-4 text-yellow-400">
                            {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>

                        <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
                            "{review.text}"
                        </p>

                        <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                            <div>
                                <h4 className="font-bold text-slate-900">{review.name}</h4>
                                <span className="text-sm text-slate-500">{review.role}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                <ShieldCheck size={14} />
                                Verified
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UI05Reviews;
