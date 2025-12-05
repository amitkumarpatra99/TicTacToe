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
        <div className="min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 bg-gray-900 overflow-hidden relative">
            <Toaster position="top-center" reverseOrder={false} />
            {game.winData && game.winData.winner === game.human && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={500}
                />
            )}

            <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto w-full items-start justify-center relative z-10">

                {/* Main Game Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6 bg-gray-800/40 p-4 sm:p-6 md:p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl"
                >
                    <div className="flex flex-col items-center gap-2 w-full">
                        <motion.h1
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wider drop-shadow-sm text-center"
                        >
                            TIC TAC TOE
                        </motion.h1>

                        <motion.div
                            key={game.status}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg border border-white/5 ${game.statusColor.includes('success') ? 'bg-green-500/20 text-green-400' :
                                game.statusColor.includes('secondary') ? 'bg-pink-500/20 text-pink-400' :
                                    game.statusColor.includes('primary') ? 'bg-blue-500/20 text-blue-400' :
                                        'bg-gray-700/50 text-gray-300'
                                }`}
                        >
                            {game.status}
                        </motion.div>
                    </div>

                    <Board
                        cells={game.cells}
                        onCellClick={game.handleHumanMove}
                        winData={game.winData}
                    />

                    <ScoreBoard scores={game.scores} playerName={playerName} />

                    {/* Game History Log */}
                    <HistoryLog history={game.matchHistory} />
                </motion.section>

                {/* Sidebar Controls */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full xl:w-auto"
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
