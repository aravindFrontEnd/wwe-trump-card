import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WrestlerCard from '../Card/WrestlerCard';
import './Battlefield.css';

const Battlefield = ({
  playerCard,
  computerCard,
  showComputerCard,
  selectedStat,
  roundWinner,
  onSelectStat,
  gameState,
}) => {
  const vsVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="battlefield">
      {/* Player Side */}
      <div className="card-area player-area">
        <div className="player-label">Your Card</div>
        <WrestlerCard
          wrestler={playerCard}
          faceUp={true}
          isActive={roundWinner === 'player'}
          onSelectStat={gameState === 'selecting' ? onSelectStat : null}
          selectedStat={selectedStat}
        />
        <AnimatePresence>
          {roundWinner === 'player' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="winner-badge"
            >
              Winner!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Center Area */}
      <div className="center-area">
        <motion.div
          variants={vsVariants}
          animate="animate"
          className="vs-badge"
        >
          VS
        </motion.div>
        {selectedStat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="comparing-stat"
          >
            Comparing: {selectedStat}
          </motion.div>
        )}
      </div>

      {/* Computer Side */}
      <div className="card-area computer-area">
        <div className="player-label">Computer's Card</div>
        <WrestlerCard
          wrestler={computerCard}
          faceUp={showComputerCard}
          isActive={roundWinner === 'computer'}
          showStats={showComputerCard}
        />
        <AnimatePresence>
          {roundWinner === 'computer' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="winner-badge"
            >
              Winner!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Battlefield;