import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const UI08ComparisonTable = () => {
    const features = [
        { name: "Course Content", basic: "Recorded", pro: "Live + Recorded", elite: "Live + Recorded" },
        { name: "Mentor Support", basic: <Minus size={18} className="text-slate-300" />, pro: "Weekly Group Q&A", elite: "1:1 Sessions" },
        { name: "Code Reviews", basic: "Auto-graded", pro: "Peer Review", elite: "Senior Dev Review" },
        { name: "Career Services", basic: <Minus size={18} className="text-slate-300" />, pro: "Resume Review", elite: "Guaranteed Interview" },
        { name: "Certificate", basic: <Check size={18} className="text-green-500" />, pro: <Check size={18} className="text-green-500" />, elite: <Check size={18} className="text-green-500" /> },
        { name: "Community", basic: "Read-only", pro: "Full Access", elite: "Private Channel" },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="py-4 px-4 text-sm font-bold text-slate-500">Feature Comparison</th>
                        <th className="py-4 px-4 text-sm font-bold text-slate-900 text-center">Audit Track</th>
                        <th className="py-4 px-4 text-sm font-bold text-indigo-600 text-center bg-indigo-50 rounded-t-xl">Professional</th>
                        <th className="py-4 px-4 text-sm font-bold text-slate-900 text-center">Bootcamp Plus</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feat, i) => (
                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50">
                            <td className="py-4 px-4 text-sm font-bold text-slate-700">{feat.name}</td>
                            <td className="py-4 px-4 text-sm text-slate-500 text-center fill-current flex justify-center items-center">{typeof feat.basic === 'string' ? feat.basic : feat.basic}</td>
                            <td className="py-4 px-4 text-sm text-slate-900 font-bold text-center bg-indigo-50/30 flex justify-center items-center">{typeof feat.pro === 'string' ? feat.pro : feat.pro}</td>
                            <td className="py-4 px-4 text-sm text-slate-500 text-center flex justify-center items-center">{typeof feat.elite === 'string' ? feat.elite : feat.elite}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UI08ComparisonTable;
