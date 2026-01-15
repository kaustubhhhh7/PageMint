import React, { useState } from 'react';
import { MessageSquare, Heart, Send } from 'lucide-react';

const UI08CommunityWall = () => {
    const [posts, setPosts] = useState([
        { id: 1, user: "Alex M.", avatar: "bg-indigo-500", text: "Just deployed my first MERN app! 🚀 The deployment module was a lifesaver.", tags: ["#win", "#deployment"], likes: 12 },
        { id: 2, user: "Sarah K.", avatar: "bg-rose-500", text: "Stuck on Redux for 2 days, finally clicked after today's mentor session. 💡", tags: ["#learning", "#react"], likes: 8 },
        { id: 3, user: "David L.", avatar: "bg-teal-500", text: "Anyone down for a pair programming session tonight? Working on the e-com project.", tags: ["#collab", "#project"], likes: 5 }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handlePost = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newPost = {
            id: Date.now(),
            user: "You",
            avatar: "bg-slate-900",
            text: inputValue,
            tags: ["#community"],
            likes: 0
        };
        setPosts([newPost, ...posts]);
        setInputValue('');
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Not just a course. A Community.</h2>
                    <p className="text-slate-500">Learn alongside 500+ developers. Debug together. Win together.</p>
                </div>

                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm">
                    {/* Post Input */}
                    <form onSubmit={handlePost} className="flex gap-4 mb-10">
                        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold shrink-0">Y</div>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Share a win or ask for help..."
                                className="w-full h-12 rounded-xl border border-slate-200 pl-4 pr-12 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <button type="submit" className="absolute right-2 top-2 p-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </form>

                    {/* Feed */}
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-in slide-in-from-top-2 fade-in duration-300">
                                <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 rounded-full ${post.avatar} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                                        {post.user.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div className="font-bold text-slate-900">{post.user}</div>
                                            <span className="text-[10px] text-slate-400">Just now</span>
                                        </div>
                                        <p className="text-slate-600 text-sm mt-1 mb-3">{post.text}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-2">
                                                {post.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">{tag}</span>
                                                ))}
                                            </div>
                                            <button className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors">
                                                <Heart size={14} /> {post.likes}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UI08CommunityWall;
