export default function canSpeciesEvolve(state, speciesId) {
  return state.pokemonSpecies.find(species => species.id === speciesId).evolution;
}
