import React from 'react';
import Container from '../common/Container';

const UI02Reviews = () => {
    const reviews = [
        { name: "Sarah Jenkins", role: "Food Critic", rating: 5, text: "The ambiance is unmatched. I've never had a risotto this creamy outside of Italy. Truly a hidden gem in the city." },
        { name: "Michael Chen", role: "Regular Guest", rating: 5, text: "Perfect spot for Sunday brunch. The coffee is exceptional and the staff always remembers my order. Highly recommended!" },
        { name: "Emma Wilson", role: "Lifestyle Blogger", rating: 5, text: "A visual and culinary delight. Every corner is Instagram-worthy, and the desserts are simply to die for." },
    ];

    return (
        <section id="reviews" className="py-20 bg-stone-50">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-stone-800 mb-2">What guests say</h2>
                        <p className="text-stone-500">Stories from our community.</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                        <span className="font-bold text-stone-700 text-sm">Rating</span>
                        <span className="font-bold text-orange-600 text-sm">4.8/5.0</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
                            <div className="flex text-orange-400 mb-4">
                                {[...Array(review.rating)].map((_, r) => (
                                    <span key={r}>★</span>
                                ))}
                            </div>
                            <p className="text-stone-600 mb-6 italic leading-relaxed">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-500">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-800 text-sm">{review.name}</h4>
                                    <p className="text-stone-400 text-xs uppercase tracking-wide">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UI02Reviews;
