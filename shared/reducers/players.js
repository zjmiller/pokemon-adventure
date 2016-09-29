const initialState = [];

module.exports = (state, action) => {
  if (state === undefined) state = initialState;

  if (action.type === 'CREATE_PLAYER') {
    if (state.some(player => player.id === action.playerId)) return state;

    return state.concat({
      id: action.playerId,
      x: 0,
      y: 0,
      color: action.color,
    });
  }

  if (action.type === 'MOVE_PLAYER') {
    if (action.direction === 'right') {
      return state.map(player => {
        if (player.id !== action.playerId) return player;
        return Object.assign(
          {},
          player,
          { x: player.x + 1 }
        );
      });
    }

    if (action.direction === 'left') {
      return state.map(player => {
        if (player.id !== action.playerId) return player;
        return Object.assign(
          {},
          player,
          { x: player.x - 1 }
        );
      });
    }

    return state;
  }

  return state;
};
