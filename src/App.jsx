import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const StartScreen = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="start-screen"
    >
      <div className="start-content">
        <h1 className="title">WWE Trump Cards</h1>
        <p className="subtitle">
          Battle with legendary WWE superstars in this epic card game!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowIntro(false)}
          className="start-button"
        >
          Start Game
        </motion.button>
        
        <div className="instructions">
          <h2 className="instructions-title">How to Play</h2>
          <ul className="instructions-list">
            <li>Draw a card from your deck</li>
            <li>Choose a stat to compare with computer's card</li>
            <li>Higher stats win (except for rank where lower is better)</li>
            <li>Winner takes both cards</li>
            <li>Collect all cards to win the game!</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <StartScreen key="intro" />
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GameBoard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;