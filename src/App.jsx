import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import CardSelection from './components/CardSelection/CardSelection';
import GameBoard from './components/GameBoard/GameBoard';

const App = () => {
  const [numberOfCards, setNumberOfCards] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleCardSelection = (count) => {
    setNumberOfCards(count);
  };

  const handleGameWin = useCallback((winner) => {
    if (winner === 'player') {
      setShowConfetti(true);
      // Stop confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, []);

  const handleResetGame = () => {
    setShowConfetti(false);
    setNumberOfCards(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 z-999">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
          zIndex={9999}
          position='fixed'
        />
      )}

      <AnimatePresence mode="wait">
        {!numberOfCards ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CardSelection onSelectCards={handleCardSelection} />
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GameBoard 
              numberOfCards={numberOfCards}
              onWin={handleGameWin}
              onReset={handleResetGame}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;