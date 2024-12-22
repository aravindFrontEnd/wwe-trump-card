import wrestlerData from '../wrestlerData'; // Adjust the path as needed

export const fetchWrestlers = async () => {
  try {
    return wrestlerData.map(wrestler => ({
      id: wrestler.rank,
      name: wrestler.ringName,
      realName: wrestler.realName,
      rank: parseInt(wrestler.rank),
      image: wrestler.image,
      stats: {
        fights: parseInt(wrestler.fights) || 0,
        chest: parseInt(wrestler.chest) || 0,
        biceps: parseFloat(wrestler.biceps) || 0,
        weight: parseInt(wrestler.weight) || 0
      }
    }));
  } catch (error) {
    console.error('Error processing wrestlers:', error);
    throw error;
  }
};