const initialState = [];

module.exports = (state, action) => {
  if (state === undefined) state = initialState;

  if (action.type === 'CREATE_PLAYER') {
    if (state.some(player => player.id === action.playerId)) return state;

    return state.concat({
      id: action.playerId,
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
          { facing: 'left' }
        );
      })
    }

    if (action.direction === 'right') {
      return state.map(player => {
        if (player.id !== action.playerId) return player;
        return Object.assign(
          {},
          player,
          { facing: 'right' }
        );
      })
    }

    return state;
  }

  return state;
};
