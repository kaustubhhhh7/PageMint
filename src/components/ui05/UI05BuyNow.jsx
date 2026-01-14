import React, { useState } from 'react';
import { ShoppingBag, Check, CreditCard, Truck } from 'lucide-react';

const UI05BuyNow = () => {
    const [color, setColor] = useState('Graphite');
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const price = 249;

    const colors = [
        { name: 'Graphite', hex: '#334155', text: 'text-slate-700' },
        { name: 'Pearl', hex: '#F1F5F9', text: 'text-slate-500' },
        { name: 'Mint', hex: '#6EE7B7', text: 'text-emerald-500' },
    ];

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 3000);
    };

    return (
        <section id="buy" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: Product Viz (Simplified for this view) */}
                <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md h-full min-h-[600px]">
                    <div className={`w-80 h-80 rounded-full shadow-2xl transition-all duration-700 relative flex items-center justify-center
                        ${color === 'Graphite' ? 'bg-gradient-to-br from-slate-700 to-slate-900 shadow-slate-900/50' :
                            color === 'Mint' ? 'bg-gradient-to-br from-emerald-300 to-teal-500 shadow-emerald-500/30' :
                                'bg-gradient-to-br from-slate-100 to-white shadow-white/20'
                        }
                     `}>
                        {/* Abstract Bud Shape */}
                        <div className="w-32 h-48 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 transform -rotate-12" />
                        <div className="absolute bottom-10 font-bold tracking-[0.3em] opacity-30 mix-blend-overlay">AURA</div>
                    </div>
                    <div className="mt-12 text-center space-y-2">
                        <h3 className="text-3xl font-bold">{color} Edition</h3>
                        <p className="text-white/50">Limited Stock Available</p>
                    </div>
                </div>

                {/* Right: Order Form */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-slate-900">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h2 className="text-4xl font-black mb-2">AURA Pods</h2>
                            <div className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full w-fit">
                                <Check size={14} /> In Stock & Ready to Ship
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold text-slate-900">${price * quantity}</div>
                            <div className="text-slate-400 line-through text-lg">${299 * quantity}</div>
                        </div>
                    </div>

                    {/* Color Selector */}
                    <div className="mb-8">
                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 block">Select Color</label>
                        <div className="flex gap-4">
                            {colors.map((c) => (
                                <button
                                    key={c.name}
                                    onClick={() => setColor(c.name)}
                                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${color === c.name ? 'ring-2 ring-indigo-600 ring-offset-2 scale-110' : 'hover:scale-105 ring-1 ring-slate-200'}`}
                                    style={{ backgroundColor: c.hex }}
                                >
                                    {color === c.name && <Check size={24} className={c.name === 'Pearl' ? 'text-slate-800' : 'text-white'} />}
                                </button>
                            ))}
                        </div>
                        <p className="mt-3 text-sm font-medium text-slate-500">Selected: <span className="text-slate-900">{color}</span></p>
                    </div>

                    {/* Quantity */}
                    <div className="mb-10">
                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 block">Quantity</label>
                        <div className="flex items-center gap-6 bg-slate-50 w-fit rounded-xl p-2 border border-slate-200">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-indigo-600 active:scale-90 transition-all"
                            >
                                <Minus size={18} />
                            </button>
                            <span className="text-xl font-bold w-6 text-center">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-indigo-600 active:scale-90 transition-all"
                            >
                                <Plus size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                        <button
                            onClick={handleAddToCart}
                            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 relative overflow-hidden"
                        >
                            {isAdded ? (
                                <span className="animate-fade-in flex items-center gap-2">
                                    <Check size={20} /> Added to Cart!
                                </span>
                            ) : (
                                <>
                                    Add to Cart <ShoppingBag size={20} />
                                </>
                            )}
                        </button>
                        <button className="w-full py-5 bg-indigo-50 text-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-100 transition-all hover:scale-[1.02] active:scale-[0.98] border border-indigo-100">
                            Express Checkout
                        </button>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5"><Truck size={14} /> Free 2-Day Shipping</span>
                        <span className="flex items-center gap-1.5"><CreditCard size={14} /> Secure Payment</span>
                        <span className="flex items-center gap-1.5"><Check size={14} /> 2-Year Warranty</span>
                    </div>
                </div>
            </div>

            {/* Toast Notification (Simple Implementation) */}
            <div className={`fixed top-24 right-6 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-500 z-50 transform border border-white/10
                ${isAdded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'}
             `}>
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Check size={16} />
                </div>
                <div>
                    <h4 className="font-bold text-sm">Added to Cart</h4>
                    <p className="text-xs text-white/70">{quantity}x AURA Pods ( {color} )</p>
                </div>
            </div>
        </section>
    );
};

export default UI05BuyNow;
