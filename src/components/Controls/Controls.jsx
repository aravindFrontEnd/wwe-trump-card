import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GAME_STATES } from '../../constants/gameConstants';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './Controls.css';

const Controls = ({
  gameState,
  roundWinner,
  onDrawCards,
  onResetGame,
  playerDeckCount,
  computerDeckCount
}) => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(false);

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  // Show confetti when player wins
  React.useEffect(() => {
    if (gameState === GAME_STATES.GAME_OVER && playerDeckCount > computerDeckCount) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000);
    }
  }, [gameState, playerDeckCount, computerDeckCount]);

  return (
    <div className="controls">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1000
          }}
        />
      )}

      {/* Scoreboard */}
      <div className="scoreboard">
        <div className="score-item">
          <span className="score-label">Your Cards</span>
          <span className="score-value">{playerDeckCount}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Computer's Cards</span>
          <span className="score-value">{computerDeckCount}</span>
        </div>
      </div>

      {/* Game Controls */}
      <div className="control-buttons">
        <AnimatePresence mode="wait">
          {gameState === GAME_STATES.READY && (
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onClick={onDrawCards}
              className="game-button primary"
            >
              Draw Cards
            </motion.button>
          )}

          {roundWinner && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`round-result ${roundWinner}`}
            >
              {roundWinner === 'player' 
                ? '🎉 You won this round!'
                : '💻 Computer won this round!'}
            </motion.div>
          )}

          {gameState === GAME_STATES.GAME_OVER && (
            <div className="game-over">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="game-over-content"
              >
                <div className="trophy">🏆</div>
                <h2 className="winner-text">
                  {playerDeckCount > computerDeckCount 
                    ? 'Congratulations! You Won!'
                    : 'Game Over! Computer Won!'}
                </h2>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={onResetGame}
                  className="game-button secondary"
                >
                  Play Again
                </motion.button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Controls;