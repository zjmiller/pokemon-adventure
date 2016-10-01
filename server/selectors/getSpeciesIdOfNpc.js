module.exports = function getSpeciesIdOfNpc(state, npcId) {
  const npc = state.npcs.find(npc => npc.id === npcId);
  return npc.pokemonSpeciesId;
}
