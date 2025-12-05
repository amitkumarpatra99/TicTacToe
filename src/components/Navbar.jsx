import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-blue-900/20 flex items-center gap-8"
            >
                {/* Logo */}
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
                    Tic Tac Toe
                </span>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-4">
                    <a href="https://github.com/amitkumarpatra99" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all">
                        GitHub
                    </a>
                    <div className="w-px h-4 bg-white/10"></div>
                    <button className="text-sm font-bold text-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
                        Developer
                    </button>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
