export const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  export const compareStats = (stat1, stat2, statName) => {
    // For rank, lower is better
    if (statName === 'rank') {
      return stat1 <= stat2;
    }
    // For all other stats, higher is better
    return stat1 >= stat2;
  };
  
  export const formatStatValue = (value, statName) => {
    switch (statName) {
      case 'weight':
        return `${value} lbs`;
      case 'chest':
      case 'biceps':
        return `${value}"`;
      default:
        return value.toString();
    }
  };
  
  export const splitDeck = (cards) => {
    const shuffled = shuffleArray(cards);
    const mid = Math.floor(shuffled.length / 2);
    return [shuffled.slice(0, mid), shuffled.slice(mid)];
  };