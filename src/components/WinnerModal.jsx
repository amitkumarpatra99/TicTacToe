import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

const WinnerModal = ({ winner, onReset, isDraw }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
                {winner === 'X' || winner === 'O' ? (
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={500}
                        gravity={0.15}
                    />
                ) : null}

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative w-full max-w-md bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden text-center"
                >
                    {/* Ambient Glow */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 blur-[60px] opacity-40 pointer-events-none rounded-full ${winner === 'X' ? 'bg-blue-500' : winner === 'O' ? 'bg-cyan-500' : 'bg-purple-500'
                        }`}></div>

                    <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4 relative z-10">
                        {isDraw ? 'Game Over' : 'Victory Claimed'}
                    </h2>

                    <div className="mb-8 relative z-10">
                        {isDraw ? (
                            <div className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                DRAW
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-2xl text-slate-300 font-light">The winner is</span>
                                <span className={`text-8xl font-black drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] ${winner === 'X' ? 'text-blue-400' : 'text-cyan-400'
                                    }`}>
                                    {winner}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-3 relative z-10">
                        <button
                            onClick={onReset}
                            className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            Play Again
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default WinnerModal;
