const initialState = [];

module.exports = (state, action) => {
  if (state === undefined) state = initialState;

  if (action.type === 'CREATE_PLAYER') {
    if (state.some(player => player.id === action.playerId)) return state;

    return state.concat({
      id: action.playerId,
      color: action.color,
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

  if (action.type === 'EAT_NPC') {
    return state.map(player => {
      const isPlayerSpecified = player.id === action.playerId;
      if (!isPlayerSpecified) return player;
      if (player.hp - action.damage > 0) {
        // if player doesn't die
        return Object.assign(
          {},
          player,
          {
            hp: player.hp - action.damage,
            pokedex: Object.assign(
              {},
              player.pokedex,
              {
                [action.speciesId]: (player.pokedex[action.speciesId] || 0) + 1,
              }
            ),
          }
        );
      } else {
        // if player does die,
        // reset hp and reset pokemon except for what person currently is
        return Object.assign(
          {},
          player,
          {
            hp: 10,
            pokedex: [{pokemonSpeciesId: 1}],
          }
        );
      }

    })
  }

  return state;
};
