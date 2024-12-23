import { useState, useEffect, useCallback } from 'react';
import { GAME_STATES } from '../constants/gameConstants';
import { fetchWrestlers } from '../services/api';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const useGame = (numberOfCards = 5) => {
  const [gameState, setGameState] = useState(GAME_STATES.LOADING);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [computerDeck, setComputerDeck] = useState([]);
  const [currentPlayerCard, setCurrentPlayerCard] = useState(null);
  const [currentComputerCard, setCurrentComputerCard] = useState(null);
  const [showComputerCard, setShowComputerCard] = useState(false);
  const [selectedStat, setSelectedStat] = useState(null);
  const [roundWinner, setRoundWinner] = useState(null);
  const [error, setError] = useState(null);

  const initializeGame = useCallback(async () => {
    try {
      setGameState(GAME_STATES.LOADING);
      const wrestlers = await fetchWrestlers();
      const shuffled = shuffleArray(wrestlers);
      
      // Use only the selected number of cards
      const totalCards = numberOfCards * 2;
      const selectedCards = shuffled.slice(0, totalCards);
      
      setPlayerDeck(selectedCards.slice(0, numberOfCards));
      setComputerDeck(selectedCards.slice(numberOfCards));
      setGameState(GAME_STATES.READY);
      setRoundWinner(null);
      setCurrentPlayerCard(null);
      setCurrentComputerCard(null);
      setShowComputerCard(false);
      setSelectedStat(null);
    } catch (err) {
      setError('Failed to load game data');
      setGameState(GAME_STATES.ERROR);
    }
  }, [numberOfCards]);

  const drawCards = useCallback(() => {
    if (playerDeck.length === 0 || computerDeck.length === 0) {
      setGameState(GAME_STATES.GAME_OVER);
      return;
    }

    setCurrentPlayerCard(playerDeck[0]);
    setCurrentComputerCard(computerDeck[0]);
    setPlayerDeck(prev => prev.slice(1));
    setComputerDeck(prev => prev.slice(1));
    setShowComputerCard(false);
    setSelectedStat(null);
    setGameState(GAME_STATES.SELECTING);
  }, [playerDeck, computerDeck]);

  const selectStat = useCallback((stat) => {
    if (!currentPlayerCard || !currentComputerCard) return;

    setSelectedStat(stat);
    setShowComputerCard(true);
    
    const playerValue = stat === 'rank' 
      ? currentPlayerCard.rank 
      : currentPlayerCard.stats[stat];
    
    const computerValue = stat === 'rank'
      ? currentComputerCard.rank
      : currentComputerCard.stats[stat];
    
    // For rank, lower is better; for other stats, higher is better
    const winner = stat === 'rank'
      ? playerValue <= computerValue ? 'player' : 'computer'
      : playerValue >= computerValue ? 'player' : 'computer';
    
    setRoundWinner(winner);
    setGameState(GAME_STATES.COMPARING);
    
    setTimeout(() => {
      handleRoundEnd(winner);
    }, 2000);
  }, [currentPlayerCard, currentComputerCard]);

  const handleRoundEnd = (winner) => {
    const cards = [currentPlayerCard, currentComputerCard];
    
    if (winner === 'player') {
      setPlayerDeck(prev => [...prev, ...shuffleArray(cards)]);
      
      // Check if this was the last round and player won
      if (computerDeck.length === 0 && playerDeck.length === 0) {
        setGameState(GAME_STATES.GAME_OVER);
        return;
      }
    } else {
      setComputerDeck(prev => [...prev, ...shuffleArray(cards)]);
      
      // Check if this was the last round and computer won
      if (playerDeck.length === 0 && computerDeck.length === 0) {
        setGameState(GAME_STATES.GAME_OVER);
        return;
      }
    }
    
    // If not game over, reset for next round
    resetRound();
  };

  const resetRound = () => {
    setCurrentPlayerCard(null);
    setCurrentComputerCard(null);
    setShowComputerCard(false);
    setSelectedStat(null);
    setRoundWinner(null);
    setGameState(GAME_STATES.READY);
  };

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    gameState,
    playerDeck,
    computerDeck,
    currentPlayerCard,
    currentComputerCard,
    showComputerCard,
    selectedStat,
    roundWinner,
    error,
    actions: {
      drawCards,
      selectStat,
      initializeGame,
      resetGame: initializeGame
    }
  };
};

export default useGame;