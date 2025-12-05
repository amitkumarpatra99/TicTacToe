import React from 'react';

const Cell = ({ value, onClick, disabled, isWin }) => {
    const getSVG = (type) => {
        if (type === 'X') {
            return (
                <svg viewBox="0 0 100 100" className="mark-x" width="60" height="60">
                    <path d="M20,20 L80,80 M80,20 L20,80" fill="none" />
                </svg>
            );
        }
        return (
            <svg viewBox="0 0 100 100" className="mark-o" width="60" height="60">
                <circle cx="50" cy="50" r="35" fill="none" />
            </svg>
        );
    };

    return (
        <div
            className={`cell ${value ? 'disabled' : ''} ${isWin ? 'win' : ''}`}
            onClick={!disabled ? onClick : undefined}
        >
            {value && getSVG(value)}
        </div>
    );
};

export default Cell;
