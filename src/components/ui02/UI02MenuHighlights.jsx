import React, { useState } from 'react';
import Container from '../common/Container';

const UI02MenuHighlights = () => {
    const [activeTab, setActiveTab] = useState('Coffee');

    const menuItems = {
        'Breakfast': [
            { name: "Full English Breakfast", price: "₹420", desc: "Eggs, sausages, beans, mushrooms, toast." },
            { name: "Pancakes Stack", price: "₹280", desc: "Maple syrup, fresh berries, whipped cream." },
            { name: "Granola Bowl", price: "₹240", desc: "Greek yogurt, honey, seasonal fruits." },
            { name: "Eggs Benedict", price: "₹340", desc: "Poached eggs, hollandaise, english muffin." },
        ],
        'Coffee': [
            { name: "Cappuccino", price: "₹180", desc: "Double shot espresso, steamed milk foam." },
            { name: "Caramel Macchiato", price: "₹210", desc: "Vanilla syrup, espresso, caramel drizzle." },
            { name: "Cold Brew", price: "₹190", desc: "Steeped for 18 hours, smooth finish." },
            { name: "Affogato", price: "₹220", desc: "Espresso shot over vanilla bean gelato." },
        ],
        'Desserts': [
            { name: "Chocolate Fondant", price: "₹310", desc: "Molten center, served with vanilla ice cream." },
            { name: "Lemon Tart", price: "₹260", desc: "Zesty lemon curd, buttery pastry crust." },
            { name: "New York Cheesecake", price: "₹340", desc: "Classic creamy texture, berry compote." },
        ],
        'Dinner': [
            { name: "Pan-Seared Scallops", price: "₹650", desc: "Cauliflower puree, crispy chorizo." },
            { name: "Ribeye Steak", price: "₹1200", desc: "Prime cut, peppercorn sauce, roasted potatoes." },
            { name: "Wild Mushroom Pasta", price: "₹480", desc: "Tagliatelle, truffle cream sauce, parsley." },
        ]
    };

    const tabs = Object.keys(menuItems);

    return (
        <section id="menu" className="py-20 bg-stone-50">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column - Tabs */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24">
                            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-8">Menu Highlights</h2>
                            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between group whitespace-nowrap ${activeTab === tab
                                                ? 'bg-orange-600 text-white shadow-lg shadow-orange-200'
                                                : 'bg-white text-stone-600 hover:bg-white/80'
                                            }`}
                                    >
                                        <span className="font-bold tracking-wide">{tab}</span>
                                        <span className={`hidden lg:block text-xl transition-transform ${activeTab === tab ? 'translate-x-1' : 'opacity-0 group-hover:opacity-50'}`}>
                                            →
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-8 hidden lg:block">
                                <button className="flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors font-medium">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Full Menu PDF
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Menu List */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-stone-100">
                            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-8 pb-4 border-b border-stone-100 flex items-center justify-between">
                                <span>{activeTab}</span>
                                <span className="text-sm font-sans font-normal text-stone-400">Selected Category</span>
                            </h3>
                            <div className="space-y-8">
                                {menuItems[activeTab].map((item, idx) => (
                                    <div key={idx} className="flex justify-between gap-4 group">
                                        <div className="flex-1">
                                            <div className="flex items-baseline justify-between mb-1 relative">
                                                <h4 className="text-lg font-bold text-stone-800 group-hover:text-orange-700 transition-colors pr-4 bg-white z-10">
                                                    {item.name}
                                                </h4>
                                                {/* Dotted Line Leader */}
                                                <div className="absolute inset-x-0 bottom-2 border-b-2 border-dotted border-stone-200 -z-0"></div>
                                                <span className="text-lg font-bold text-orange-600 bg-white z-10 pl-4">{item.price}</span>
                                            </div>
                                            <p className="text-stone-500 text-sm italic">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UI02MenuHighlights;
