const initialState = [];

module.exports = (state, action) => {
  if (state === undefined) state = initialState;

  if (action.type === 'CREATE_PLAYER') {
    if (state.some(player => player.id === action.playerId)) return state;

    return state.concat({
      id: action.playerId,
      facing: 'left',
      hp: 10,
      pokemonSpeciesId: action.pokemonSpeciesId,
      pokedex: [{pokemonSpeciesId: 1}],
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
      });
    }

    if (action.direction === 'right') {
      return state.map(player => {
        if (player.id !== action.playerId) return player;
        return Object.assign(
          {},
          player,
          { facing: 'right' }
        );
      });
    }

    return state;
  }

  if (action.type === 'EAT_BERRY') {
    return state.map(player => {
      if (player.id !== action.playerId) return player;
      return Object.assign(
        {},
        player,
        { hp: player.hp + 1 }
      );
    });
  }

  if (action.type === 'EAT_MUSHROOM') {
    return state.map(player => {
      if (player.id !== action.playerId) return player;
      return Object.assign(
        {},
        player,
        { hp: player.hp - 1 }
      );
    });
  }

  return state;
};
