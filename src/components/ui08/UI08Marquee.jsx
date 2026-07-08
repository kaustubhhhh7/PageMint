import React from 'react';

const UI08Marquee = () => {
    return (
        <div className="bg-black text-white py-2 overflow-hidden border-b border-white/10">
            <div className="flex w-max animate-marquee">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-xs font-bold uppercase tracking-[0.2em] mx-8">
                        / Start Coding Today
                    </span>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default UI08Marquee;
