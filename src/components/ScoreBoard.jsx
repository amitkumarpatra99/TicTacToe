import React from 'react';

const ScoreBoard = ({ scores, playerName }) => {
    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between bg-slate-950/40 p-4 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                <div className="absolute inset-0 bg-blue-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="flex flex-col relative z-10">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Player</span>
                    <span className="text-xl font-black text-white">{playerName || 'Human'}</span>
                </div>
                <span className="text-3xl font-black text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" id="scoreHuman">{scores.h}</span>
            </div>

            <div className="flex items-center justify-between bg-slate-950/40 p-4 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Draws</span>
                    <span className="text-xl font-black text-white">Tie Game</span>
                </div>
                <span className="text-3xl font-black text-slate-200" id="scoreTie">{scores.t}</span>
            </div>

            <div className="flex items-center justify-between bg-slate-950/40 p-4 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-red-500/30 transition-colors">
                <div className="absolute inset-0 bg-red-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="flex flex-col relative z-10">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Machine</span>
                    <span className="text-xl font-black text-white">AI Bot</span>
                </div>
                <span className="text-3xl font-black text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]" id="scoreAI">{scores.a}</span>
            </div>
        </div>
    );
};

export default ScoreBoard;
