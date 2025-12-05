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
        <div className="app-container">
            <section className="game-area glass-panel">
                <div className="header">
                    <h1>TIC TAC TOE</h1>
                    <div
                        className="status-badge"
                        id="status"
                        style={{ color: game.statusColor }}
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

            {/* Footer is outside the main grid in the original design? 
          Actually original design didn't have footer.
          The app-container is grid.
          If we put footer here, it might break layout if not handled.
          Let's put footer outside app-container or make it span.
          But Game returns app-container.
          Let's put footer inside Sidebar or just append it to the body in App.jsx?
          Or just put it below the app-container.
      */}
        </div>
    );
};

export default Game;
