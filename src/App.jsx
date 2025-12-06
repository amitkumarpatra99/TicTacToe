import React, { useState } from 'react';
import Game from './components/Game';
import Navbar from './components/Navbar';
import useSound from './hooks/useSound';
import useTicTacToe from './hooks/useTicTacToe';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [playerName, setPlayerName] = useState('Player');

  const sound = useSound(soundEnabled);
  const game = useTicTacToe(sound);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center text-white relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Dynamic Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 blur-[130px] rounded-full mix-blend-screen animate-pulse duration-[4000ms]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/5 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[6000ms]"></div>
        <div className="absolute top-[20%] left-[50%] w-[30vw] h-[30vw] bg-indigo-600/5 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <Navbar
        game={game}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        playerName={playerName}
        setPlayerName={setPlayerName}
      />

      <main className="w-full flex-1 flex flex-col relative z-10 px-4 pb-8 pt-24 max-w-[1600px] mx-auto">
        <Game
          game={game}
          soundEnabled={soundEnabled}
          toggleSound={toggleSound}
          playerName={playerName}
          setPlayerName={setPlayerName}
        />
      </main>
    </div>
  );
}
