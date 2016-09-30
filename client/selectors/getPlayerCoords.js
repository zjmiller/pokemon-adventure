module.exports = function getPlayerCoords(state, playerId) {
  const location = state.locations.find(loc => loc.player === playerId);
  const { x, y } = location;
  return { x, y };
}
