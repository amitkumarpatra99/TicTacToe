import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HistoryLog = ({ history }) => {
    return (
        <div className="bg-gray-800/40 backdrop-blur-md p-4 rounded-xl border border-white/10 w-full shadow-lg flex flex-col gap-2 max-h-48 overflow-y-auto custom-scrollbar">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest sticky top-0 bg-gray-900/80 p-1 rounded backdrop-blur-sm z-10 w-full text-center">Match History</h3>

            <div className="flex flex-col gap-2">
                <AnimatePresence>
                    {history.length === 0 ? (
                        <p className="text-gray-600 text-xs text-center py-4 italic">No games played yet</p>
                    ) : (
                        history.map((record, index) => (
                            <motion.div
                                key={record.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className={`flex items-center justify-between p-2 rounded-lg text-xs font-medium border border-white/5 ${record.result === 'win' ? 'bg-gradient-to-r from-blue-900/30 to-blue-800/10 text-blue-200' :
                                        record.result === 'loss' ? 'bg-gradient-to-r from-pink-900/30 to-pink-800/10 text-pink-200' :
                                            'bg-gray-700/30 text-gray-400'
                                    }`}
                            >
                                <span className="font-bold">Match #{index + 1}</span>
                                <span>{record.message}</span>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HistoryLog;
