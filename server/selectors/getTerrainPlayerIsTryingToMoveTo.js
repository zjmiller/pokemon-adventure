const getCoordsPlayerIsTryingToMoveTo = require('./getCoordsPlayerIsTryingToMoveTo.js');

module.exports = function getTerrainPlayerIsTryingToMoveTo(state, playerId, direction) {
  const { x, y } = getCoordsPlayerIsTryingToMoveTo(state, playerId, direction);
  const terrain = state.terrain;
  return terrain.find(loc => loc.x === x && loc.y === y);
}
