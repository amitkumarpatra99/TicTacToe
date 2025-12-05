import React, { useState } from 'react';
import useSound from '../hooks/useSound';
import useTicTacToe from '../hooks/useTicTacToe';
import Board from './Board';
import Sidebar from './Sidebar';
import ScoreBoard from './ScoreBoard';
import Footer from './Footer';

const Game = () => {
    const [soundEnabled, setSoundEnabled] = useState(true);
    const sound = useSound(soundEnabled);
    const game = useTicTacToe(sound);
    const [playerName, setPlayerName] = useState('Player');

    const toggleSound = () => {
        setSoundEnabled(!soundEnabled);
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto w-full items-start justify-center p-4">
            <section className="flex flex-col items-center gap-6 bg-gray-800/40 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl w-full max-w-md">
                <div className="flex flex-col items-center gap-2 w-full">
                    <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider">
                        TIC TAC TOE
                    </h1>
                    <div
                        className={`px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase ${game.statusColor === '#4ade80' ? 'bg-green-500/20 text-green-400' :
                                game.statusColor === '#f472b6' ? 'bg-pink-500/20 text-pink-400' :
                                    'bg-gray-700 text-gray-400'
                            }`}
                        id="status"
                    >
                        {game.status}
                    </div>
                </div>

                <Board
                    cells={game.cells}
                    onCellClick={game.handleHumanMove}
                    winData={game.winData}
                />

                <ScoreBoard scores={game.scores} playerName={playerName} />
            </section>

            <Sidebar
                onNewGame={game.resetGame}
                onUndo={game.undo}
                onResetScores={() => game.setScores({ h: 0, a: 0, t: 0 })}
                difficulty={game.difficulty}
                setDifficulty={game.setDifficulty}
                aiSpeed={game.aiSpeed}
                setAiSpeed={game.setAiSpeed}
                humanSide={game.human}
                setSide={game.setSide}
                soundEnabled={soundEnabled}
                toggleSound={toggleSound}
                playerName={playerName}
                setPlayerName={setPlayerName}
            />
        </div>
    );
};

export default Game;
