export const GAME_STATES = {
    LOADING: 'loading',
    READY: 'ready',
    SELECTING: 'selecting',
    COMPARING: 'comparing',
    GAME_OVER: 'game_over'
  };
  
  export const STATS = {
    fights: {
      label: 'Total Matches',
      format: (value) => value.toString()
    },
    chest: {
      label: 'Chest Size',
      format: (value) => `${value}"`
    },
    biceps: {
      label: 'Biceps Size',
      format: (value) => `${value}"`
    },
    weight: {
      label: 'Weight',
      format: (value) => `${value} lbs`
    }
  };
  
  export const ANIMATION_DURATION = 500;
  export const ROUND_RESULT_DURATION = 2000;
  export const INITIAL_CARDS = 6;