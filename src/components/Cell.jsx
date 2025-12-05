import React from 'react';

import { motion } from 'framer-motion';

const Cell = ({ value, onClick, disabled, isWin }) => {
    const getSVG = (type) => {
        if (type === 'X') {
            return (
                <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    viewBox="0 0 100 100"
                    className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg"
                    fill="none"
                >
                    <motion.path
                        d="M25,25 L75,75 M75,25 L25,75"
                        stroke="#22d3ee"
                        strokeWidth="10"
                        strokeLinecap="round"
                    />
                </motion.svg>
            );
        }
        return (
            <motion.svg
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewBox="0 0 100 100"
                className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg"
                fill="none"
            >
                <circle cx="50" cy="50" r="25" stroke="#f472b6" strokeWidth="10" strokeLinecap="round" />
            </motion.svg>
        );
    };

    return (
        <motion.div
            whileHover={!value && !disabled ? { scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" } : {}}
            whileTap={!value && !disabled ? { scale: 0.95 } : {}}
            className={`
                w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl transition-all duration-300
                backdrop-blur-md relative overflow-hidden group border
                ${value ? 'cursor-default' : 'cursor-pointer hover:bg-blue-500/10'}
                ${isWin ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.3)]' : 'bg-slate-800/30 border-white/10 shadow-lg'}
            `}
            onClick={!disabled ? onClick : undefined}
        >
            {isWin && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-cyan-400/20 blur-xl animate-pulse"
                />
            )}

            {/* Grid Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/0 to-blue-500/5 group-hover:to-blue-500/10 transition-all"></div>

            {value && getSVG(value)}
        </motion.div>
    );
};

export default Cell;
