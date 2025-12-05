import React from 'react';

const ScoreBoard = ({ scores, playerName }) => {
    return (
        <div className="scoreboard">
            <div className="score-card">
                <div className="score-val" id="scoreHuman">{scores.h}</div>
                <div className="score-label">{playerName || 'Player'}</div>
            </div>
            <div className="score-card">
                <div className="score-val" id="scoreTie">{scores.t}</div>
                <div className="score-label">Draws</div>
            </div>
            <div className="score-card">
                <div className="score-val" id="scoreAI">{scores.a}</div>
                <div className="score-label">AI Bot</div>
            </div>
        </div>
    );
};

export default ScoreBoard;
