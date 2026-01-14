import React, { useState } from 'react';

const colors = [
    { id: 'graphite', name: 'Graphite', hex: '#1f2937' },
    { id: 'pearl', name: 'Pearl', hex: '#f3f4f6' },
    { id: 'mint', name: 'Mint', hex: '#a7f3d0' },
];

const UI05BuyNow = () => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);

    const basePrice = 249;
    const price = basePrice * quantity;

    const handleAddToCart = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section id="buy" className="py-24 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-slate-100 to-white -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Visual Side */}
                <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
                    <div className={`relative w-80 h-80 rounded-[3rem] transition-colors duration-500 shadow-2xl flex items-center justify-center border border-white/50 backdrop-blur-sm
                          ${selectedColor.id === 'graphite' ? 'bg-slate-900' :
                            selectedColor.id === 'pearl' ? 'bg-slate-100' : 'bg-emerald-100'}`}
                    >
                        {/* Abstract Pod Representation */}
                        <div className={`w-32 h-32 rounded-full shadow-inner flex items-center justify-center transition-colors duration-500
                                ${selectedColor.id === 'graphite' ? 'bg-slate-800' :
                                selectedColor.id === 'pearl' ? 'bg-white' : 'bg-emerald-200'}`}
                        >
                            <span className={`text-4xl font-black ${selectedColor.id === 'graphite' ? 'text-slate-700' : 'text-slate-300'}`}>A</span>
                        </div>

                        {/* Decoration Particles */}
                        <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-white/20 animate-pulse"></div>
                        <div className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-white/10 animate-blob"></div>
                    </div>
                </div>

                {/* Order Form Side */}
                <div className="relative">
                    {/* Toast Notification */}
                    <div className={`absolute -top-20 right-0 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 transition-all duration-300 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
                        <span className="text-green-400">✓</span> Added to cart
                    </div>

                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Pre-Order Now</span>
                    <h2 className="text-5xl font-black text-slate-900 mb-8">Ready to listen?</h2>

                    <div className="space-y-8">
                        {/* Color Selection */}
                        <div>
                            <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 block">Select Finish</label>
                            <div className="flex gap-4">
                                {colors.map(color => (
                                    <button
                                        key={color.id}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-all ${selectedColor.id === color.id ? 'border-blue-600 scale-110 shadow-lg' : 'border-slate-200 hover:border-slate-300'}`}
                                        title={color.name}
                                    >
                                        <div className="w-12 h-12 rounded-xl" style={{ backgroundColor: color.hex }}></div>
                                    </button>
                                ))}
                            </div>
                            <p className="mt-3 text-slate-900 font-medium">{selectedColor.name}</p>
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 block">Quantity</label>
                            <div className="inline-flex items-center bg-slate-100 rounded-full p-1">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-900 font-bold hover:bg-slate-50 active:scale-95 transition-transform"
                                >-</button>
                                <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-900 font-bold hover:bg-slate-50 active:scale-95 transition-transform"
                                >+</button>
                            </div>
                        </div>

                        {/* Total & Actions */}
                        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Total Price</p>
                                <p className="text-4xl font-black text-slate-900">${price}</p>
                            </div>
                            <div className="flex gap-4 w-full sm:w-auto">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 sm:flex-none px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl active:scale-95"
                                >
                                    Add to Cart
                                </button>
                                <button className="flex-1 sm:flex-none px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30 active:scale-95">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UI05BuyNow;
