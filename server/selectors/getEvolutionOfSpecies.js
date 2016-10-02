module.exports = function getEvolutionOfSpecies(state, speciesId) {
  const species = state.pokemonSpecies.find(species => species.id === speciesId);
  return species.evolution;
}
