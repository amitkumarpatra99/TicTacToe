import React from 'react';

const Cell = ({ value, onClick, disabled, isWin }) => {
    const getSVG = (type) => {
        if (type === 'X') {
            return (
                <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg" fill="none">
                    <path d="M25,25 L75,75 M75,25 L25,75" stroke="#22d3ee" strokeWidth="10" strokeLinecap="round" />
                </svg>
            );
        }
        return (
            <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg" fill="none">
                <circle cx="50" cy="50" r="25" stroke="#f472b6" strokeWidth="10" strokeLinecap="round" />
            </svg>
        );
    };

    return (
        <div
            className={`
                w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-lg transition-all duration-300
                shadow-inner border border-white/5
                ${value ? 'cursor-default' : 'cursor-pointer hover:bg-gray-700 hover:shadow-lg'}
                ${isWin ? 'bg-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.2)] border-green-500/30' : 'bg-gray-800'}
            `}
            onClick={!disabled ? onClick : undefined}
        >
            {value && getSVG(value)}
        </div>
    );
};

export default Cell;
