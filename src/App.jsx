import React from 'react';
import Game from './components/Game';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <Game />
      <Footer />
    </div>
  );
}
