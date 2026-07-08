import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';

const ReviewCard = ({ name, role, review, rating, date }) => (
    <div className="min-w-[350px] md:min-w-[400px] bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-start">
        <div className="flex gap-1 mb-4 text-orange-400">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < rating ? "currentColor" : "none"} className={i >= rating ? "text-slate-200" : ""} />
            ))}
        </div>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">"{review}"</p>
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    {name} <BadgeCheck size={16} className="text-blue-500" />
                </h4>
                <p className="text-sm text-slate-500">{role}</p>
            </div>
            <span className="text-xs font-medium text-slate-400">{date}</span>
        </div>
    </div>
);

const UI05Reviews = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -420 : 420;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "Audio Engineer",
            review: "The fidelity on these is absolutely insane for the price point. The transparency mode feels completely natural, unlike other premium brands I've tested.",
            rating: 5,
            date: "2 weeks ago"
        },
        {
            name: "Marcus Chen",
            role: "Tech Reviewer",
            review: "Finally, a pair of buds that actually stay in my ears during a marathon. The battery life is legit – went 3 days without charging the case.",
            rating: 5,
            date: "1 month ago"
        },
        {
            name: "Alisha Thorne",
            role: "Casual Listener",
            review: "I love the color options and the unboxing was such a vibe. Pairing with my Pixel was instant. Sound is bass-heavy but clear.",
            rating: 4,
            date: "3 weeks ago"
        },
        {
            name: "David Ross",
            role: "Pro Gamer",
            review: "The low latency mode is a game changer for mobile FPS. I don't feel any lag at all. Mic quality is crystal clear for discord calls.",
            rating: 5,
            date: "5 days ago"
        },
        {
            name: "Emily Blunt",
            role: "Music Producer",
            review: "Surprisingly flat frequency response which is great for reference tracks on the go. The ANC kills the subway noise completely.",
            rating: 5,
            date: "1 week ago"
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-5xl font-bold text-slate-900 mb-4">Loved by thousands.</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-slate-900">4.9</span>
                        <div className="flex text-orange-400">
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                        </div>
                        <span className="text-slate-500 font-medium">from 2,000+ verified reviews</span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="p-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600 hover:text-indigo-600"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600 hover:text-indigo-600"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Spacer for left padding alignment */}
                <div className="w-1 shrink-0 lg:w-[calc((100vw-1280px)/2)]" />

                {reviews.map((review, idx) => (
                    <ReviewCard key={idx} {...review} />
                ))}

                {/* Spacer for right padding alignment */}
                <div className="w-6 shrink-0" />
            </div>
        </section>
    );
};

export default UI05Reviews;
