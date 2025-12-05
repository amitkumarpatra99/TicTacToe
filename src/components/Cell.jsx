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
            whileHover={!value && !disabled ? { scale: 1.05, backgroundColor: "rgba(31, 41, 55, 0.8)" } : {}}
            whileTap={!value && !disabled ? { scale: 0.95 } : {}}
            className={`
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-lg transition-colors duration-300
                shadow-inner border border-white/5 relative overflow-hidden
                ${value ? 'cursor-default' : 'cursor-pointer bg-gray-800'}
                ${isWin ? 'bg-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.2)] border-green-500/30' : 'bg-gray-800'}
            `}
            onClick={!disabled ? onClick : undefined}
        >
            {isWin && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-green-400/10 blur-xl"
                />
            )}
            {value && getSVG(value)}
        </motion.div>
    );
};

export default Cell;
