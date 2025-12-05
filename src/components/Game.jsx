import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Toaster } from 'react-hot-toast';
import useSound from '../hooks/useSound';
import useTicTacToe from '../hooks/useTicTacToe';
import Board from './Board';
import Sidebar from './Sidebar';
import ScoreBoard from './ScoreBoard';
import HistoryLog from './HistoryLog';
import Footer from './Footer';

const Game = () => {
    const [soundEnabled, setSoundEnabled] = useState(true);
    const sound = useSound(soundEnabled);
    const game = useTicTacToe(sound);
    const [playerName, setPlayerName] = useState('Player');

    const toggleSound = () => {
        setSoundEnabled(!soundEnabled);
    };

    return (
        <div className="w-full flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 bg-transparent overflow-hidden relative">
            <Toaster
                position="top-center"
                reverseOrder={false}
                containerStyle={{
                    top: 80,
                }}
            />
            {game.winData && game.winData.winner === game.human && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={500}
                />
            )}

            {/* Command Center Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] xl:grid-cols-[320px_1fr_320px] gap-3 w-full max-w-[1600px] mx-auto relative z-10 items-center">

                {/* Left Panel: Data Stream */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col gap-6 order-2 lg:order-1"
                >
                    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 h-full">
                        <h2 className="text-xs font-black text-blue-400/80 uppercase tracking-widest flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            Data Stream
                        </h2>
                        <ScoreBoard scores={game.scores} playerName={playerName} />

                        <div className="w-full h-px bg-white/5 my-2"></div>

                        <div className="flex-1 min-h-[200px] xl:min-h-0 overflow-hidden flex flex-col">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">Match Logs</h3>
                            <HistoryLog history={game.matchHistory} />
                        </div>
                    </div>
                </motion.div>

                {/* Center Panel: Main Game Board */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-6 order-1 lg:order-2 py-4"
                >
                    <div className="flex flex-col items-center gap-4 w-full">
                        <motion.h1
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] text-center font-sans"
                        >
                            TIC<span className="text-blue-500">TAC</span>TOE
                        </motion.h1>

                        <motion.div
                            key={game.status}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase backdrop-blur-md border shadow-[0_0_20px_rgba(0,0,0,0.2)] ${game.statusColor.includes('success') ? 'bg-green-500/10 border-green-500/20 text-green-400 shadow-green-500/10' :
                                game.statusColor.includes('secondary') ? 'bg-pink-500/10 border-pink-500/20 text-pink-400 shadow-pink-500/10' :
                                    game.statusColor.includes('primary') ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-blue-500/10' :
                                        'bg-slate-800/50 border-white/5 text-slate-400'
                                }`}
                        >
                            {game.status}
                        </motion.div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <Board
                            cells={game.cells}
                            onCellClick={game.handleHumanMove}
                            winData={game.winData}
                        />
                    </div>
                </motion.div>

                {/* Right Panel: Controls */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full lg:w-auto order-3"
                >
                    <Sidebar
                        onNewGame={game.resetGame}
                        onUndo={game.undo}
                        onResetScores={() => game.setScores({ h: 0, a: 0, t: 0 })}
                        difficulty={game.difficulty}
                        setDifficulty={game.setDifficulty}
                        aiSpeed={game.aiSpeed}
                        setAiSpeed={game.setAiSpeed}
                        humanSide={game.human}
                        setSide={game.setSide}
                        soundEnabled={soundEnabled}
                        toggleSound={toggleSound}
                        playerName={playerName}
                        setPlayerName={setPlayerName}
                    />
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Game;
