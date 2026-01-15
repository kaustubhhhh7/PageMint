import React from 'react';

const UI10About = () => {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            {/* Hero Text */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
                <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-8">
                    The Art of <br />
                    <span className="italic text-stone-500">Living Well.</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <p className="text-xl font-light text-stone-600 leading-relaxed">
                        Founded in 2010, Aurelian Estates was born from a desire to redefine the luxury real estate experience. We believe that a home is more than just a place to live—it is a sanctuary, a statement, and a legacy.
                    </p>
                    <p className="text-xl font-light text-stone-600 leading-relaxed">
                        Our philosophy is simple: perfection in every detail. From the properties we curate to the service we provide, we strive for excellence in all that we do.
                    </p>
                </div>
            </div>

            {/* Image Banner */}
            <div className="w-full h-[500px] relative bg-stone-900 mb-24 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Stats */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-b border-stone-100 py-16">
                    <div className="space-y-4">
                        <span className="text-5xl font-serif text-amber-600">$2.5B+</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-900">Total Sales Volume</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-5xl font-serif text-amber-600">30+</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-900">Global Cities</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-5xl font-serif text-amber-600">1000+</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-900">Private Tours</p>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-serif text-stone-900 mb-6">Our Mission</h2>
                    <p className="text-stone-500 leading-relaxed font-light">
                        To connect the world's most discerning individuals with the world's most exceptional properties. We are not just selling homes; we are curating lifestyles and facilitating dreams.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-serif text-stone-900 mb-6">Our Process</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <span className="font-serif text-amber-600 text-xl italic">01.</span>
                            <span className="text-stone-600">Deep consultation to understand your unique lifestyle needs.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="font-serif text-amber-600 text-xl italic">02.</span>
                            <span className="text-stone-600">Curated selection of on and off-market opportunities.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="font-serif text-amber-600 text-xl italic">03.</span>
                            <span className="text-stone-600">Seamless negotiation and acquisition management.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UI10About;
