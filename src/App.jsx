import React from 'react';
import Game from './components/Game';


import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black flex flex-col items-center text-white relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Dynamic Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <Navbar />

      <main className="w-full flex-1 flex flex-col relative z-10 px-4 pb-8 pt-24 max-w-[1600px] mx-auto">
        <Game />
      </main>
    </div>
  );
}
