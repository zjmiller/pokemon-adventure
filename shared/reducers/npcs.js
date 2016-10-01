const initialState = [];

module.exports = function(state, action){
  if (state === undefined) state = initialState;

  if (action.type === 'MOVE_NPC') {
    return state.map(npc => {
      if (npc.id !== action.npcId) return npc;

      return Object.assign(
        {},
        npc,
        {
          facing: (action.direction === 'left' || action.direction === 'right')
          ? action.direction
          : npc.facing,
        }
      )
    })
  }

  if (action.type === 'SPAWN_NPC') {
    const newState = state.concat({
      id: action.npcId,
      pokemonSpeciesId: action.pokemonSpeciesId,
      facing: 'left',
    });

    return newState;
  }

  if (action.type === 'EAT_POKEMON') {
    return state.filter(npc => npc.id !== action.npcId);
  }

  return state;
}
