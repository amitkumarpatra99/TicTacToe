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
                    className="w-12 h-12 md:w-16 md:h-16"
                    style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.8)) drop-shadow(0 0 15px rgba(34,211,238,0.4))" }}
                    fill="none"
                >
                    <motion.path
                        d="M25,25 L75,75 M75,25 L25,75"
                        stroke="#22d3ee"
                        strokeWidth="12"
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
                className="w-12 h-12 md:w-16 md:h-16"
                style={{ filter: "drop-shadow(0 0 8px rgba(217,70,239,0.8)) drop-shadow(0 0 15px rgba(217,70,239,0.4))" }}
                fill="none"
            >
                <circle cx="50" cy="50" r="25" stroke="#d946ef" strokeWidth="12" strokeLinecap="round" />
            </motion.svg>
        );
    };

    return (
        <motion.div
            whileHover={!value && !disabled ? { scale: 1.02, boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)" } : {}}
            whileTap={!value && !disabled ? { scale: 0.98 } : {}}
            className={`
                w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl transition-all duration-300
                backdrop-blur-md relative overflow-hidden group border
                ${value ? 'cursor-default' : 'cursor-pointer hover:bg-white/[0.02]'}
                ${isWin ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.3)]' : 'bg-black/40 border-white/10 shadow-lg hover:border-white/15'}
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

            {/* Tech Grid Background Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent)',
                    backgroundSize: '30px 30px'
                }}
            ></div>

            {/* Glowing Center */}
            {!value && !disabled && (
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-400/0 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}

            <div className="relative z-10">
                {value && getSVG(value)}
            </div>
        </motion.div>
    );
};

export default Cell;
