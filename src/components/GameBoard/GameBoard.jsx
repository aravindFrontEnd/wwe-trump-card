import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Battlefield from '../Battlefield/Battlefield';
import Controls from '../Controls/Controls';
import Instructions from '../Instructions/Instructions';
import useGame from '../../hooks/useGame';

const GameBoard = ({ numberOfCards, onWin, onReset }) => {
  const [showInstructions, setShowInstructions] = useState(false);
  
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
  } = useGame(numberOfCards);

  // Call onWin when game ends
  React.useEffect(() => {
    if (gameState === 'game_over') {
      onWin?.(playerDeck.length > computerDeck.length ? 'player' : 'computer');
    }
  }, [gameState, onWin, playerDeck.length, computerDeck.length]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-xl text-center">
          <h2 className="text-2xl text-red-500 font-bold mb-4">Error</h2>
          <p className="text-white mb-4">{error}</p>
          <button
            onClick={actions.initializeGame}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="text-center mb-8">
        <div className="flex items-center justify-center gap-4">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 
                     to-yellow-500 bg-clip-text text-transparent"
          >
            WWE Trump Cards
          </motion.h1>
          
          <button
            onClick={() => setShowInstructions(true)}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 
                     transition-colors text-sm"
          >
            How to Play
          </button>
          
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 
                     transition-colors text-sm"
          >
            New Game
          </button>
        </div>
      </header>

      {gameState === 'loading' ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
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
        </>
      )}

      <Instructions
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
      />
    </div>
  );
};

export default GameBoard;