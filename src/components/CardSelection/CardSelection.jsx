import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardSelection = ({ onSelectCards }) => {
  const [showInstructions, setShowInstructions] = useState(true);
  const cardOptions = [5, 7, 9, 11];

  const Instructions = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/50 rounded-xl p-6 mb-8 max-w-md w-full backdrop-blur-sm"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white font-bold">How to Play</h2>
        <button 
          onClick={() => setShowInstructions(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      <ul className="text-gray-300 space-y-3">
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">1.</span>
          <span>Select number of cards (5-11) to start your game</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">2.</span>
          <span>Draw cards to begin each round</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">3.</span>
          <span>Choose a stat from your card to compete:
            <ul className="ml-6 mt-1 space-y-1 list-disc">
              <li>Rank: Lower number wins</li>
              <li>Other stats: Higher number wins</li>
            </ul>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">4.</span>
          <span>Winner takes both cards</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">5.</span>
          <span>Collect all cards to win the game!</span>
        </li>
      </ul>
      <button
        onClick={() => setShowInstructions(false)}
        className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold
                   hover:bg-blue-700 transition-colors shadow-lg"
      >
        Let's Play!
      </button>
    </motion.div>
  );

  const CardOptions = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md"
    >
      <h2 className="text-2xl text-white text-center mb-6">Select Number of Cards</h2>
      <div className="grid grid-cols-2 gap-6">
        {cardOptions.map((number) => (
          <motion.button
            key={number}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCards(number)}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white 
                     px-8 py-6 rounded-xl font-bold shadow-lg text-xl
                     hover:from-blue-500 hover:to-blue-600 transition-all
                     border border-blue-400/20"
          >
            {number} Cards
          </motion.button>
        ))}
      </div>
      <button
        onClick={() => setShowInstructions(true)}
        className="w-full mt-6 px-4 py-2 text-gray-400 hover:text-white 
                   transition-colors text-sm"
      >
        Show Instructions
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-[#ff4500] mb-8">WWE Trump Cards</h1>
      
      <AnimatePresence mode="wait">
        {showInstructions ? <Instructions /> : <CardOptions />}
      </AnimatePresence>
    </div>
  );
};

export default CardSelection;