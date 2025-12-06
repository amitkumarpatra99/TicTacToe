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

                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">System Operations</span>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            className={`h-[54px] rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 border ${soundEnabled
                                ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                                : 'bg-slate-950/40 text-slate-500 border-white/5 hover:text-slate-300'
                                }`}
                            onClick={toggleSound}
                        >
                            {soundEnabled ? (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                                    <span>ON</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                                    <span>OFF</span>
                                </>
                            )}
                        </button>

                        <button
                            className="h-[54px] rounded-xl font-bold text-sm text-red-400 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all duration-300 flex items-center justify-center gap-2"
                            onClick={onResetScores}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            Purge Data
                        </button>
                    </div>
                </div>

                {/* Decorative Status Indicator */}
                <div className="mt-auto border-t border-white/5 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        <span className="text-[10px] font-bold text-green-500/80 tracking-widest uppercase">System Online</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-600">v2.4.0</div>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
