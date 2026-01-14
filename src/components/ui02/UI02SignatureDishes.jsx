import React from 'react';
import Container from '../common/Container';

const UI02SignatureDishes = () => {
    const dishes = [
        { name: "Truffle Mushroom Risotto", price: "₹450", tag: "Bestseller", desc: "Creamy arborio rice with black truffle oil and parmesan.", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80" },
        { name: "Grilled Salmon Fillet", price: "₹680", tag: "Chef's Pick", desc: "Served with asparagus and lemon butter glaze.", image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=800&q=80" },
        { name: "Avocado Toast Royale", price: "₹320", tag: "Breakfast", desc: "Sourdough, poached egg, chili flakes, and microgreens.", image: "https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&w=800&q=80" },
        { name: "Spiced Lamb Chops", price: "₹850", tag: "Premium", desc: "Marinated in rosemary and garlic, served with mash.", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80" },
        { name: "Classic Tiramisu", price: "₹290", tag: "Dessert", desc: "Espresso-soaked ladyfingers with mascarpone cream.", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80" },
        { name: "Berry Hibiscus Iced Tea", price: "₹180", tag: "New", desc: "Refreshing blend of hibiscus, berries, and mint.", image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=800&q=80" },
    ];

    return (
        <section id="specials" className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">Signature Dishes</h2>
                    <p className="text-stone-500 max-w-xl mx-auto">
                        Curated favorites that define our passion for flavor and quality ingredients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dishes.map((dish, index) => (
                        <div key={index} className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-stone-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-orange-100">
                            {/* Image */}
                            <div className="h-56 relative overflow-hidden">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                {dish.tag && (
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 shadow-sm uppercase tracking-wider">
                                        {dish.tag}
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-stone-800 font-serif group-hover:text-orange-700 transition-colors">
                                        {dish.name}
                                    </h3>
                                    <span className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-2 py-1 rounded-lg">
                                        {dish.price}
                                    </span>
                                </div>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    {dish.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UI02SignatureDishes;
