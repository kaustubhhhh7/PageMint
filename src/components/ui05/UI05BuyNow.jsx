import React, { useState } from 'react';
import { ShoppingBag, Truck, ShieldCheck, RefreshCw, CheckCircle, Plus, Minus } from 'lucide-react';

const UI05BuyNow = () => {
    const [color, setColor] = useState('graphite');
    const [bundle, setBundle] = useState('pods');
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const basePrice = 1999;

    const colors = [
        { id: 'graphite', name: 'Graphite', hex: '#1e293b' },
        { id: 'pearl', name: 'Pearl', hex: '#f8fafc' },
        { id: 'mint', name: 'Mint', hex: '#a7f3d0' }
    ];

    const bundles = [
        { id: 'pods', name: 'Standard', price: 0, items: 'AURA Pods' },
        { id: 'case', name: '+ Protection', price: 499, items: 'Pods + Shield Case' },
        { id: 'charger', name: 'Ultimate', price: 999, items: 'Pods + Case + 30W Charger' }
    ];

    const totalPrice = (basePrice + bundles.find(b => b.id === bundle).price) * quantity;

    const handleAddToCart = () => {
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 3000);
    };

    return (
        <section id="buy" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Visual Configurator */}
                <div className="relative bg-slate-50 rounded-[3rem] aspect-square flex items-center justify-center p-12 overflow-hidden border border-slate-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100" />

                    {/* Dynamic Product Visual representation based on color */}
                    <div className={`relative w-64 h-80 rounded-[3rem] shadow-2xl transition-all duration-500 ease-out transform ${color === 'graphite' ? 'bg-slate-800' : color === 'pearl' ? 'bg-white' : 'bg-emerald-100'} border-4 border-white flex flex-col items-center p-6`}>
                        {/* Case Details */}
                        <div className={`w-full h-1/2 rounded-[2rem] mb-4 shadow-inner ${color === 'graphite' ? 'bg-slate-700' : color === 'pearl' ? 'bg-slate-50' : 'bg-emerald-50'}`} />
                        <div className={`w-3 h-3 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.8)] bg-green-400 mt-auto`} />
                    </div>
                </div>

                {/* Right Configurator Controls */}
                <div className="space-y-10">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-4">
                            In Stock • Ready to Ship
                        </div>
                        <h2 className="text-5xl font-black text-slate-900 mb-2">AURA Pods</h2>
                        <p className="text-2xl text-slate-500 font-medium">₹{totalPrice.toLocaleString()}</p>
                    </div>

                    <div className="space-y-6">
                        {/* Color Selector */}
                        <div>
                            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 block">Select Finish</span>
                            <div className="flex gap-4">
                                {colors.map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => setColor(c.id)}
                                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${color === c.id ? 'border-slate-900 scale-110' : 'border-transparent hover:scale-105'}`}
                                    >
                                        <div className="w-9 h-9 rounded-full shadow-sm border border-black/10" style={{ backgroundColor: c.hex }} />
                                    </button>
                                ))}
                            </div>
                            <p className="mt-2 text-sm text-slate-500">Color: <span className="text-slate-900 font-medium">{colors.find(c => c.id === color).name}</span></p>
                        </div>

                        {/* Bundle Selector */}
                        <div>
                            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 block">Choose Bundle</span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {bundles.map(b => (
                                    <button
                                        key={b.id}
                                        onClick={() => setBundle(b.id)}
                                        className={`p-4 rounded-2xl border-2 text-left transition-all ${bundle === b.id ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 hover:border-slate-300'}`}
                                    >
                                        <div className="font-bold text-slate-900 text-sm">{b.name}</div>
                                        <div className="text-xs text-slate-500 mt-1">{b.price > 0 ? `+ ₹${b.price}` : 'Base'}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 block">Quantity</span>
                            <div className="inline-flex items-center border-2 border-slate-200 rounded-full p-1">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(Math.min(5, quantity + 1))}
                                    className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 pt-8 flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 mb-4">
                            <div className="flex items-center gap-2"><Truck size={16} /> Free Delivery</div>
                            <div className="flex items-center gap-2"><ShieldCheck size={16} /> 1 Year Warranty</div>
                            <div className="flex items-center gap-2"><RefreshCw size={16} /> 7 Day Replacement</div>
                            <div className="flex items-center gap-2"><CheckCircle size={16} /> Secure Checkout</div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                Add to Cart
                            </button>
                            <button className="flex-1 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Checkout Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Added to Cart Toast */}
            {addedToCart && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3 animate-fade-in-up">
                    <CheckCircle size={20} className="text-green-400" />
                    <span className="font-medium">Added to cart successfully!</span>
                </div>
            )}
        </section>
    );
};

export default UI05BuyNow;
