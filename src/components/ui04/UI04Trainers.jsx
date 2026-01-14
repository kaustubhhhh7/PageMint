import React, { useRef } from 'react';

const TrainerCard = ({ name, specialty, rating, experience, image, initials }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-[420px] bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 ease-out border border-slate-100"
        >
            {/* Placeholder Image/Avatar */}
            <div className="h-full w-full bg-slate-200 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${image} mix-blend-overlay opacity-80`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Fallback Initials/Icon if no real image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-slate-900/10 select-none">
                    {initials}
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 text-white transform transition-transform duration-300 group-hover:-translate-y-4">
                <div className="flex justify-between items-end mb-2">
                    <h3 className="text-2xl font-bold uppercase italic">{name}</h3>
                    <span className="text-orange-400 font-bold flex items-center gap-1">
                        ★ {rating}
                    </span>
                </div>
                <p className="text-slate-300 font-medium mb-4">{specialty} • {experience} Exp</p>

                {/* Socials - Reveal on Hover */}
                <div className="flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {['IG', 'YT', 'IN'].map((social) => (
                        <button key={social} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-orange-500 transition-colors font-bold text-xs">
                            {social}
                        </button>
                    ))}
                </div>
            </div>

            {/* Top Shine */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

const UI04Trainers = () => {
    const trainers = [
        { name: 'Alex Ryker', specialty: 'Strength & Conditioning', experience: '8 Years', rating: '4.9', initials: 'AR', image: 'from-slate-500 to-slate-800' },
        { name: 'Sarah Chen', specialty: 'HIIT & Mobility', experience: '5 Years', rating: '5.0', initials: 'SC', image: 'from-orange-400 to-red-600' },
        { name: 'Mike Ross', specialty: 'Powerlifting', experience: '10 Years', rating: '4.8', initials: 'MR', image: 'from-blue-500 to-indigo-800' },
        { name: 'Emma Cole', specialty: 'Yoga & Recovery', experience: '6 Years', rating: '4.9', initials: 'EC', image: 'from-emerald-400 to-teal-700' },
    ];

    return (
        <section id="trainers" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tighter mb-2">
                            MEET YOUR <span className="text-orange-600">COACHES.</span>
                        </h2>
                        <p className="text-lg text-slate-600">Expert guidance to help you smash your goals.</p>
                    </div>
                    <button className="hidden md:block text-slate-900 font-bold uppercase tracking-wider hover:text-orange-600 transition-colors border-b-2 border-black hover:border-orange-600 pb-1">
                        View All Trainers
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainers.map((trainer, idx) => (
                        <TrainerCard key={idx} {...trainer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI04Trainers;
