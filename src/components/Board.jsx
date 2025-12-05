import React from 'react';
import Cell from './Cell';

const Board = ({ cells, onCellClick, winData }) => {
    return (
        <div className="board" id="board">
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
