module.exports = function getUniqueSpeciesOnMap(state) {
  return state.locations
    .filter(loc => loc.npc)
    .map(loc => loc.npc)
    .map(npcId => state.npcs.find(npc => npc.id === npcId).pokemonSpeciesId)
    .filter((speciesId, i, arr) => arr.indexOf(speciesId) === i);
}
