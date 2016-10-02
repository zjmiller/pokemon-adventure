module.exports = function getSpeciesDamage(state, speciesId) {
  const species = state.pokemonSpecies.find(species => species.id === speciesId);
  return species.damage;
}
