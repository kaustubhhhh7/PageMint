import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

const UI08FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [search, setSearch] = useState('');

    const faqs = [
        { q: "Is this course suitable for complete beginners?", a: "Yes. The 'Fundamentals' module starts from zero, covering how the internet works, HTML, and CSS basics before moving to JavaScript." },
        { q: "What is the time commitment?", a: "We recommend dedicating 8-10 hours per week. 2 hours for live sessions/video content, and 6-8 hours for coding projects." },
        { q: "Do I get lifetime access?", a: "Absolutely. You get lifetime access to all course materials, including future updates to the React and Node.js modules." },
        { q: "How does the mentorship work?", a: "Pro and Career plans include office hours. You can book 15-min slots with mentors to unblock specific issues or get career advice." },
        { q: "Is there a refund policy?", a: "Yes, we offer a 14-day no-questions-asked refund policy if you find the course isn't the right fit for you." }
    ];

    const filteredFaqs = faqs.filter(f =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">

                <div className="mb-12">
                    <h2 className="text-3xl font-black text-zinc-900 mb-6">Frequently Asked.</h2>

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full p-4 pl-12 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all font-medium text-zinc-900 placeholder:text-zinc-500"
                        />
                    </div>
                </div>

                <div className="border-t border-zinc-200">
                    {filteredFaqs.map((faq, index) => (
                        <div key={index} className="border-b border-zinc-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full py-6 flex justify-between items-center text-left hover:bg-zinc-50 transition-colors px-2 rounded-lg -mx-2"
                            >
                                <span className="font-bold text-zinc-900 text-lg pr-8">{faq.q}</span>
                                <span className={`text-zinc-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-zinc-900' : ''}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-zinc-500 leading-relaxed pr-8 pl-1">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                    {filteredFaqs.length === 0 && (
                        <div className="py-8 text-center text-zinc-400">
                            No matching questions found.
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default UI08FAQ;
