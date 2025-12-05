import React from 'react';
import Cell from './Cell';

const Board = ({ cells, onCellClick, winData }) => {
    return (
        <div className="grid grid-cols-3 gap-3 bg-gray-900/50 p-3 rounded-xl border border-white/5" id="board">
            {cells.map((cell, i) => (
                <Cell
                    key={i}
                    value={cell}
                    onClick={() => onCellClick(i)}
                    isWin={winData && winData.line.includes(i)}
                />
            ))}
        </div>
    );
};

export default Board;
