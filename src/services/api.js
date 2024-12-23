import axios from 'axios';

const BASE_URL = 'https://wrestler-data-api.vercel.app/api/wrestlers';

export const fetchWrestlers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.map(wrestler => ({
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
    console.error('Error fetching wrestlers:', error);
    throw error;
  }
};