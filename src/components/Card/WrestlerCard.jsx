import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STATS } from '../../constants/gameConstants';
import './WrestlerCard.css';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const WrestlerCard = ({
  wrestler,
  faceUp = true,
  isActive = false,
  onSelectStat,
  selectedStat = null,
  showStats = true,
  isWinner = false

}) => {
  if (!wrestler) return null;

  const cardVariants = {
    initial: {
      scale: 0.9,
      rotateY: faceUp ? 0 : 180
    },
    animate: {
      scale: isActive ? 1.1 : 1,
      rotateY: faceUp ? 0 : 180,
      transition: { duration: 0.5 }
    }
  };

  const statsVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className="card-container  w-full h-[500px] relative"
    >
      <AnimatePresence>
        {typeof isWinner === 'boolean' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`absolute -top-4 right-4 z-50 p-2 rounded-full 
                       ${isWinner ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {isWinner ? (
              <ThumbsUp className="w-6 h-6 text-white" />
            ) : (
              <ThumbsDown className="w-6 h-6 text-white" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`card ${faceUp ? '' : 'flipped'}`}>
        {/* Front of the card */}
        <div className="card-front">
          <div className="card-header">
            <span className="card-rank">#{wrestler.rank}</span>
            <h3 className="card-name">{wrestler.name}</h3>
          </div>

          <div className="card-image-wrapper">
            <img
              src={wrestler.image}
              alt={wrestler.name}
              className="card-image object-contain"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                backgroundColor: 'rgb(17, 24, 39)'
              }}
            />
          </div>

          <p className="wrestler-real-name">{wrestler.realName}</p>

          {showStats && (
            <div className="stats-container">

              <motion.button
                variants={statsVariants}
                whileHover="hover"
                onClick={() => onSelectStat?.('rank')}
                disabled={!onSelectStat}
                className={`stat-button ${selectedStat === 'rank' ? 'selected' : ''
                  } ${onSelectStat ? 'clickable' : ''}`}
              >
                <span className="stat-label">Rank</span>
                <span className="stat-value">{wrestler.rank}</span>
              </motion.button>


              {Object.entries(wrestler.stats).map(([stat, value]) => (
                <motion.button
                  key={stat}
                  variants={statsVariants}
                  whileHover="hover"
                  onClick={() => onSelectStat?.(stat)}
                  disabled={!onSelectStat}
                  className={`stat-button ${selectedStat === stat ? 'selected' : ''
                    } ${onSelectStat ? 'clickable' : ''}`}
                >
                  <span className="stat-label">{STATS[stat].label}</span>
                  <span className="stat-value">
                    {STATS[stat].format(value)}
                  </span>
                </motion.button>
              ))}
            </div>
          )}
        </div>


        <div className="card-back">
          <div className="wwe-logo no-flip">
            <h2>WWE</h2>
            <h3>TRUMP CARDS</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WrestlerCard;