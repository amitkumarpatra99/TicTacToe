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
        <aside className="bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl w-full md:w-80 shadow-2xl border border-white/10 flex flex-col gap-6">

            <button
                className="w-full py-4 px-6 rounded-xl font-bold text-white uppercase tracking-wider shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] transition-all duration-200"
                id="newGame"
                onClick={onNewGame}
            >
                Start New Round
            </button>

            <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Player Name</span>
                <input
                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors shadow-inner"
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter Name"
                    maxLength={10}
                />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Side</span>
                <div className="flex bg-gray-900/50 rounded-lg p-1 border border-gray-700/50 shadow-inner">
                    <button
                        className={`flex-1 py-2 rounded-md font-bold text-sm transition-all duration-200 ${humanSide === 'X' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        onClick={() => setSide('X')}
                    >X</button>
                    <button
                        className={`flex-1 py-2 rounded-md font-bold text-sm transition-all duration-200 ${humanSide === 'O' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        onClick={() => setSide('O')}
                    >O</button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">AI Level</span>
                <select
                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors shadow-inner appearance-none cursor-pointer"
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(parseInt(e.target.value))}
                >
                    <option value="1">Novice (Random)</option>
                    <option value="2">Veteran (Smart)</option>
                    <option value="3">God Mode (Unbeatable)</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">AI Speed</span>
                <input
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    type="range"
                    id="animSpeed"
                    min="100"
                    max="800"
                    value={aiSpeed}
                    onChange={(e) => setAiSpeed(parseInt(e.target.value))}
                />
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                <button
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-gray-300 bg-gray-700/50 hover:bg-gray-700 hover:text-white transition-colors border border-white/5 shadow-md"
                    id="undoBtn"
                    onClick={onUndo}
                >
                    Undo
                </button>
                <button
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-gray-300 bg-gray-700/50 hover:bg-gray-700 hover:text-white transition-colors border border-white/5 shadow-md"
                    id="resetScore"
                    onClick={onResetScores}
                >
                    Reset
                </button>
            </div>

            <button
                className="absolute top-4 right-4 md:static md:self-end md:mt-0 p-3 rounded-full bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition-all border border-white/5 shadow-lg"
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
