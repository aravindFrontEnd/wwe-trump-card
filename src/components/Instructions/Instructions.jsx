import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Instructions = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-800 p-6 rounded-xl max-w-md w-full mx-4 space-y-4"
          onClick={e => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold text-white">How to Play</h2>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Click "Draw Cards" to start each round</li>
            <li>Choose a stat from your card to compete</li>
            <li>Lower rank wins, higher stats win</li>
            <li>Winner takes both cards</li>
            <li>Collect all cards to win the game!</li>
          </ul>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg 
                     hover:bg-blue-700 transition-colors w-full"
          >
            Got it!
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Instructions;