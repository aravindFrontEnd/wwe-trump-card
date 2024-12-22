import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../constants/gameConstants';
import './WrestlerCard.css';

const WrestlerCard = ({
  wrestler,
  faceUp = true,
  isActive = false,
  onSelectStat,
  selectedStat = null,
  showStats = true,
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
      className="card-container"
    >
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
              className="card-image"
            />
          </div>
          
          <p className="wrestler-real-name">{wrestler.realName}</p>

          {showStats && (
            <div className="stats-container">
              {Object.entries(wrestler.stats).map(([stat, value]) => (
                <motion.button
                  key={stat}
                  variants={statsVariants}
                  whileHover="hover"
                  onClick={() => onSelectStat?.(stat)}
                  disabled={!onSelectStat}
                  className={`stat-button ${
                    selectedStat === stat ? 'selected' : ''
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

        {/* Back of the card */}
        <div className="card-back">
          <div className="wwe-logo">
            <h2>WWE</h2>
            <h3>TRUMP CARDS</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WrestlerCard;