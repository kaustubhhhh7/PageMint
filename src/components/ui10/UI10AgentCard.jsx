import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const UI10AgentCard = ({ agent }) => {
    return (
        <div className="bg-white border border-stone-100 hover:border-amber-200 transition-colors duration-300 p-8 text-center group">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-stone-100 group-hover:border-amber-600 transition-colors duration-300">
                <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>

            <h3 className="text-xl font-serif text-stone-900 mb-1">{agent.name}</h3>
            <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-4">{agent.role}</p>

            <p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">
                {agent.specialty} • {agent.experience} Exp.
            </p>

            <div className="flex justify-center gap-4 border-t border-stone-100 pt-6">
                <Link to="#" className="text-stone-400 hover:text-amber-600 transition-colors"><Instagram size={16} /></Link>
                <Link to="#" className="text-stone-400 hover:text-amber-600 transition-colors"><Linkedin size={16} /></Link>
                <Link to="#" className="text-stone-400 hover:text-amber-600 transition-colors"><Mail size={16} /></Link>
            </div>
        </div>
    );
};

export default UI10AgentCard;
