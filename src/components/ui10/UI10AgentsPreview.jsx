import React from 'react';
import { agents } from './ui10Data';
import UI10AgentCard from './UI10AgentCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UI10AgentsPreview = () => {
    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h4 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">
                            Elite Team
                        </h4>
                        <h2 className="text-4xl lg:text-5xl font-serif text-stone-900">
                            Meet Our Experts
                        </h2>
                    </div>
                    <Link to="/ui/10/agents" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-stone-900 hover:text-amber-600 transition-colors pb-2 border-b border-stone-200 hover:border-amber-600">
                        View All Agents <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agents.map(agent => (
                        <UI10AgentCard key={agent.id} agent={agent} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI10AgentsPreview;
