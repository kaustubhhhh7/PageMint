import React, { useRef, useState } from 'react';

const reviews = [
    { name: "Sarah J.", role: "Audiophile", rating: 5, text: "I've tried every flagship earbud on the market. These blow them all away. The soundstage is incredibly wide." },
    { name: "Mike T.", role: "Tech Reviewer", rating: 5, text: "The noise cancellation is witchcraft. I can't hear my mechanical keyboard when I'm typing. 10/10." },
    { name: "Jessica L.", role: "Musician", rating: 5, text: "Finally, earbuds that respect the mix. No boosted bass mud, just pure, clean audio fidelity." },
    { name: "David R.", role: "Commuter", rating: 4, text: "Battery life is insane. I charge the case once a week and I use them 4 hours a day." },
    { name: "Alex K.", role: "Gamer", rating: 5, text: "The low latency mode is a game changer for mobile FPS. Footsteps are distinct and directional." },
];

const UI05Reviews = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const amount = 400;
            current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
        }
    };

    return (
        <section id="reviews" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-black text-slate-900 mb-2">Verified Vibes.</h2>
                    <p className="text-slate-500">See what the world is hearing.</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => scroll('left')} className="p-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
                        ←
                    </button>
                    <button onClick={() => scroll('right')} className="p-4 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                        →
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-12 px-6 no-scrollbar cursor-grab active:cursor-grabbing select-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {reviews.map((review, i) => (
                    <div
                        key={i}
                        className="min-w-[300px] md:min-w-[400px] bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 hover:rotate-1 transition-all duration-300 ease-out"
                    >
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, stars) => (
                                <span key={stars} className={`text-xl ${stars < review.rating ? 'text-orange-500' : 'text-slate-300'}`}>★</span>
                            ))}
                        </div>
                        <p className="text-lg text-slate-700 font-medium mb-8 leading-relaxed">"{review.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                {review.name[0]}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">{review.name}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">{review.role}</span>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Verified User</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Spacer */}
                <div className="min-w-[50px]"></div>
            </div>
        </section>
    );
};

export default UI05Reviews;
