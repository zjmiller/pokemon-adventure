const getCoordsPlayerIsTryingToMoveTo = require('./getCoordsPlayerIsTryingToMoveTo.js');

module.exports = function getLocationPlayerIsTryingToMoveTo(state, playerId, direction) {
  const { x, y } = getCoordsPlayerIsTryingToMoveTo(state, playerId, direction);
  const locations = state.locations;
  return locations.find(loc => loc.x === x && loc.y === y);
}
