import React from 'react';

const Sidebar = ({
    onNewGame,
    onUndo,
    onResetScores,
    difficulty,
    setDifficulty,
    aiSpeed,
    setAiSpeed,
    humanSide,
    setSide,
    soundEnabled,
    toggleSound,
    playerName,
    setPlayerName
}) => {
    return (
        <aside className="bg-slate-900/40 backdrop-blur-xl p-6 rounded-3xl w-full xl:w-full shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/5 flex flex-col gap-5 relative h-full group hover:border-blue-500/20 transition-all duration-500 overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none"></div>

            <h2 className="text-xs font-black text-blue-400/80 uppercase tracking-widest mb-1 flex items-center gap-2 relative z-10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                Command Panel
            </h2>

            <button
                className="w-full py-4 px-6 rounded-xl font-black text-white uppercase tracking-wider shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 active:scale-[0.98] transition-all duration-300 relative overflow-hidden group border border-blue-400/30 shadow-blue-500/20"
                id="newGame"
                onClick={onNewGame}
            >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                Initialize New Round
            </button>

            {/* Controls Stack */}
            <div className="flex flex-col gap-5 relative z-10">

                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Identity</span>
                    <input
                        className="w-full bg-slate-950/40 border border-white/5 rounded-xl px-4 py-3 text-blue-100 placeholder-slate-600 focus:border-blue-500/50 focus:bg-slate-900/60 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all shadow-inner backdrop-blur-sm"
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="OPERATOR NAME"
                        maxLength={10}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Team Selection</span>
                    <div className="flex bg-slate-950/40 rounded-xl p-1 border border-white/5 shadow-inner h-[54px] backdrop-blur-sm">
                        <button
                            className={`flex-1 rounded-lg font-black text-sm transition-all duration-300 relative overflow-hidden ${humanSide === 'X' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                            onClick={() => setSide('X')}
                        >
                            <span className="relative z-10">X</span>
                        </button>
                        <button
                            className={`flex-1 rounded-lg font-black text-sm transition-all duration-300 relative overflow-hidden ${humanSide === 'O' ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                            onClick={() => setSide('O')}
                        >
                            <span className="relative z-10">O</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">AI Intelligence</span>
                    <div className="relative">
                        <select
                            className="w-full bg-slate-950/40 border border-white/5 rounded-xl px-4 py-3 text-slate-300 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-colors shadow-inner appearance-none cursor-pointer h-[54px] backdrop-blur-sm"
                            id="difficulty"
                            value={difficulty}
                            onChange={(e) => setDifficulty(parseInt(e.target.value))}
                        >
                            <option value="1">Training (Random)</option>
                            <option value="2">Tactical (Smart)</option>
                            <option value="3">Unbeatable (God)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Processing Speed</span>
                    <div className="h-[54px] flex items-center px-4 bg-slate-950/40 border border-white/5 rounded-xl backdrop-blur-sm">
                        <input
                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                            type="range"
                            id="animSpeed"
                            min="100"
                            max="800"
                            value={aiSpeed}
                            onChange={(e) => setAiSpeed(parseInt(e.target.value))}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-3 relative z-10">
                <button
                    className="py-3 px-4 rounded-xl font-bold text-slate-400 bg-slate-800/40 hover:bg-slate-700/60 hover:text-white transition-all border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl active:scale-95"
                    id="undoBtn"
                    onClick={onUndo}
                >
                    Undo
                </button>
                <button
                    className="py-3 px-4 rounded-xl font-bold text-slate-400 bg-slate-800/40 hover:bg-slate-700/60 hover:text-white transition-all border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl active:scale-95"
                    id="resetScore"
                    onClick={onResetScores}
                >
                    Reset
                </button>
            </div>

            <button
                className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:text-white hover:bg-white/10 transition-all z-20"
                id="soundBtn"
                title="Toggle Sound"
                onClick={toggleSound}
                style={{ opacity: soundEnabled ? 1 : 0.5 }}
            >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-4 0h-2.5l-5 5H2v6h2.5l5 5V3.23zm2.5 0v17.54l-5-5H6.5V8.23h2.5l5-5z" />
                </svg>
            </button>

        </aside>
    );
};

export default Sidebar;
