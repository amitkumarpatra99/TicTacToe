import React from 'react';

const Sidebar = ({
    onNewGame,
    onUndo,
    onResetScores,
    difficulty,
    setDifficulty,
    aiSpeed,
    setAiSpeed,
    humanSide,
    setSide,
    soundEnabled,
    toggleSound,
    playerName,
    setPlayerName
}) => {
    return (
        <aside className="sidebar glass-panel">

            <button className="btn btn-primary" id="newGame" onClick={onNewGame}>NEW ROUND</button>

            <div className="control-group">
                <span className="control-label">Player Name</span>
                <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter Name"
                    maxLength={10}
                />
            </div>

            <div className="control-group">
                <span className="control-label">Your Side</span>
                <div className="switch-row">
                    <button
                        className={`btn switch-btn ${humanSide === 'X' ? 'active' : ''}`}
                        onClick={() => setSide('X')}
                    >X</button>
                    <button
                        className={`btn switch-btn ${humanSide === 'O' ? 'active' : ''}`}
                        onClick={() => setSide('O')}
                    >O</button>
                </div>
            </div>

            <div className="control-group">
                <span className="control-label">AI Level</span>
                <select
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(parseInt(e.target.value))}
                >
                    <option value="1">Novice (Random)</option>
                    <option value="2">Veteran (Smart)</option>
                    <option value="3">God Mode (Unbeatable)</option>
                </select>
            </div>

            <div className="control-group">
                <span className="control-label">AI Speed</span>
                <input
                    type="range"
                    id="animSpeed"
                    min="100"
                    max="800"
                    value={aiSpeed}
                    onChange={(e) => setAiSpeed(parseInt(e.target.value))}
                />
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                <button className="btn" id="undoBtn" style={{ flex: 1 }} onClick={onUndo}>Undo</button>
                <button className="btn" id="resetScore" style={{ flex: 1 }} onClick={onResetScores}>Reset</button>
            </div>

            <button
                className="sound-toggle"
                id="soundBtn"
                title="Toggle Sound"
                onClick={toggleSound}
                style={{ opacity: soundEnabled ? 1 : 0.6 }}
            >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-4 0h-2.5l-5 5H2v6h2.5l5 5V3.23zm2.5 0v17.54l-5-5H6.5V8.23h2.5l5-5z" />
                </svg>
            </button>

        </aside>
    );
};

export default Sidebar;
