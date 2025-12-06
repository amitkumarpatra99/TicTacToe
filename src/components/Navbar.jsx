import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaCode, FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Navbar = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-xl" />,
            url: 'https://github.com/amitkumarpatra99',
            color: 'hover:text-white'
        },
        {
            name: 'Developer',
            icon: <FaCode className="text-xl" />,
            url: 'https://github.com/amitkumarpatra99',
            color: 'hover:text-cyan-300'
        }
    ];

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl shadow-blue-900/20 w-full max-w-5xl flex items-center justify-between"
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
                        Tic Tac Toe
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-6">
                    <a
                        href="https://github.com/amitkumarpatra99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-all hover:scale-105 group"
                    >
                        <FaGithub className="text-lg group-hover:text-white transition-colors" />
                        <span>GitHub</span>
                    </a>

                    <div className="w-px h-5 bg-white/10"></div>

                    <a
                        href="https://github.com/amitkumarpatra99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                    >
                        <FaCode className="text-lg" />
                        <span>Developer</span>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </motion.div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-4 right-4 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 sm:hidden overflow-y-auto max-h-[85vh]"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all ${link.color} text-slate-300`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.icon}
                                <span className="font-bold">{link.name}</span>
                            </a>
                        ))}

                        <div className="w-full h-px bg-white/10 my-1"></div>

                        {/* Integrated Controls for Mobile */}
                        <div className="pb-4">
                            <Sidebar
                                onNewGame={() => { if (props.game) props.game.resetGame(); setIsMobileMenuOpen(false); }}
                                onUndo={props.game?.undo}
                                onResetScores={() => props.game?.setScores({ h: 0, a: 0, t: 0 })}
                                difficulty={props.game?.difficulty}
                                setDifficulty={props.game?.setDifficulty}
                                aiSpeed={props.game?.aiSpeed}
                                setAiSpeed={props.game?.setAiSpeed}
                                humanSide={props.game?.human}
                                setSide={props.game?.setSide}
                                soundEnabled={props.soundEnabled}
                                toggleSound={props.toggleSound}
                                playerName={props.playerName}
                                setPlayerName={props.setPlayerName}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
