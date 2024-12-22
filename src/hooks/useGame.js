import { useState, useEffect, useCallback } from 'react';
import { fetchWrestlers } from '../services/api';
import { GAME_STATES, ROUND_RESULT_DURATION } from '../constants/gameConstants';
import { shuffleArray, compareStats, splitDeck } from '../utils/helpers';

const useGame = () => {
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
      const [playerCards, computerCards] = splitDeck(wrestlers);
      
      setPlayerDeck(playerCards);
      setComputerDeck(computerCards);
      setGameState(GAME_STATES.READY);
      resetRound();
    } catch (err) {
      setError('Failed to load game data');
      setGameState(GAME_STATES.GAME_OVER);
    }
  }, []);

  const resetRound = () => {
    setCurrentPlayerCard(null);
    setCurrentComputerCard(null);
    setShowComputerCard(false);
    setSelectedStat(null);
    setRoundWinner(null);
  };

  const drawCards = useCallback(() => {
    if (playerDeck.length === 0 || computerDeck.length === 0) {
      setGameState(GAME_STATES.GAME_OVER);
      return;
    }

    setCurrentPlayerCard(playerDeck[0]);
    setCurrentComputerCard(computerDeck[0]);
    setPlayerDeck(prev => prev.slice(1));
    setComputerDeck(prev => prev.slice(1));
    setGameState(GAME_STATES.SELECTING);
  }, [playerDeck, computerDeck]);

  const selectStat = useCallback((stat) => {
    if (!currentPlayerCard || !currentComputerCard) return;

    setSelectedStat(stat);
    setShowComputerCard(true);
    
    const playerValue = currentPlayerCard.stats[stat];
    const computerValue = currentComputerCard.stats[stat];
    const winner = compareStats(playerValue, computerValue, stat) ? 'player' : 'computer';
    
    setRoundWinner(winner);
    setGameState(GAME_STATES.COMPARING);
    
    setTimeout(() => {
      handleRoundEnd(winner);
    }, ROUND_RESULT_DURATION);
  }, [currentPlayerCard, currentComputerCard]);

  const handleRoundEnd = (winner) => {
    const cards = [currentPlayerCard, currentComputerCard];
    if (winner === 'player') {
      setPlayerDeck(prev => [...prev, ...shuffleArray(cards)]);
    } else {
      setComputerDeck(prev => [...prev, ...shuffleArray(cards)]);
    }
    
    setGameState(GAME_STATES.READY);
    resetRound();
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
      initializeGame
    }
  };
};

export default useGame;