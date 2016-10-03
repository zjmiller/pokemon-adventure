const initialState = {
  totalPlayers: 0,
  totalPokemonCaught: 0,
}

module.exports = function(state, action){
  if (state === undefined) state = initialState;

  if (action.type === 'CREATE_PLAYER') {
    return Object.assign(
      {},
      state,
      { totalPlayers: state.totalPlayers + 1 }
    );
  }

  if (action.type === 'EAT_NPC') {
    return Object.assign(
      {},
      state,
      { totalPokemonCaught: state.totalPokemonCaught + 1 }
    );
  }

  return state;
}
