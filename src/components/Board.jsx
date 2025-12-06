import React from 'react';
import Cell from './Cell';

const Board = ({ cells, onCellClick, winData }) => {
    return (
        <div className="grid grid-cols-3 gap-3 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-inner" id="board">
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
