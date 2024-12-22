import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Battlefield from '../Battlefield/Battlefield';
import Controls from '../Controls/Controls';
import useGame from '../../hooks/useGame';
import './GameBoard.css';

const GameBoard = () => {
  const {
    gameState,
    playerDeck,
    computerDeck,
    currentPlayerCard,
    currentComputerCard,
    showComputerCard,
    selectedStat,
    roundWinner,
    error,
    actions
  } = useGame();

  if (error) {
    return (
      <div className="error-screen">
        <div className="error-content">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">Oops! Something went wrong</h2>
          <p className="error-message">{error}</p>
          <button 
            onClick={actions.initializeGame}
            className="game-button secondary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="game-board"
    >
      <header className="game-header">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="game-title"
        >
          WWE Trump Cards
        </motion.h1>
        <p className="game-subtitle">Choose your stats wisely!</p>
      </header>

      <AnimatePresence mode="wait">
        {gameState === 'loading' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="loading-screen"
          >
            <div className="loading-spinner" />
            <p>Loading wrestlers...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="game-content"
          >
            <Battlefield
              playerCard={currentPlayerCard}
              computerCard={currentComputerCard}
              showComputerCard={showComputerCard}
              selectedStat={selectedStat}
              roundWinner={roundWinner}
              onSelectStat={actions.selectStat}
              gameState={gameState}
            />

            <Controls
              gameState={gameState}
              roundWinner={roundWinner}
              onDrawCards={actions.drawCards}
              onResetGame={actions.initializeGame}
              playerDeckCount={playerDeck.length + (currentPlayerCard ? 1 : 0)}
              computerDeckCount={computerDeck.length + (currentComputerCard ? 1 : 0)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GameBoard;