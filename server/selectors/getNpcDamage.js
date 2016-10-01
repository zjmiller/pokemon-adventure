module.exports = function getNpcDamage(state, npcId) {
  const npc = state.npcs.find(npc => npc.id === npcId);
  const species = state.pokemonSpecies.find(species => species.id === npc.pokemonSpeciesId);
  return species.damage;
}
