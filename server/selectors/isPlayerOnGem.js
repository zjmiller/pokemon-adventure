module.exports = function(state, playerId) {
  const locations = state.locations;
  const playerLoc = locations.find(loc => loc.player === playerId);
  return playerLoc.gem;
}
