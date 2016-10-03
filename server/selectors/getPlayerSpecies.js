module.exports = function(state, playerId) {
  const player = state.players.find(player => player.id === playerId);
  return player.pokemonSpeciesId;
}
