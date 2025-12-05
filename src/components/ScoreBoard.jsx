import React from 'react';

const ScoreBoard = ({ scores, playerName }) => {
    return (
        <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center justify-center bg-gray-900/40 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-blue-400" id="scoreHuman">{scores.h}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">{playerName || 'Player'}</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900/40 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-white" id="scoreTie">{scores.t}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Draws</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900/40 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-pink-400" id="scoreAI">{scores.a}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">AI Bot</div>
            </div>
        </div>
    );
};

export default ScoreBoard;
