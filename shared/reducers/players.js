const initialState = [];

module.exports = (state, action) => {
  if (state === undefined) state = initialState;

  if (action.type === 'CREATE_PLAYER') {
    if (state.some(player => player.id === action.playerId)) return state;

    return state.concat({
      id: action.playerId,
      x: 0,
      y: 0,
      facing: 'left',
    });
  }

  if (action.type === 'MOVE_PLAYER') {
    if (action.direction === 'left') {
      return state.map(player => {
        if (player.id !== action.playerId) return player;
        return Object.assign(
          {},
          player,
          {
            facing: 'left',
            x: player.x - 1,
          }
        );
      });
    }

    if (action.direction === 'up') {
      return state.map(player => {
        if (player.id !== action.playerId) return player;
        return Object.assign(
          {},
          player,
          { y: player.y - 1 }
        );
      });
    }

    if (action.direction === 'right') {
      return state.map(player => {
        if (player.id !== action.playerId) return player;
        return Object.assign(
          {},
          player,
          {
            facing: 'right',
            x: player.x + 1
          }
        );
      });
    }

    if (action.direction === 'down') {
      return state.map(player => {
        if (player.id !== action.playerId) return player;
        return Object.assign(
          {},
          player,
          { y: player.y + 1 }
        );
      });
    }

    return state;
  }

  return state;
};
