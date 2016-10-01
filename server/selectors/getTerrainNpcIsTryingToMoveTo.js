const getCoordsNpcIsTryingToMoveTo = require('./getCoordsNpcIsTryingToMoveTo.js');

module.exports = function getTerrainNpcIsTryingToMoveTo(state, npcId, direction) {
  const { x, y } = getCoordsNpcIsTryingToMoveTo(state, npcId, direction);
  const terrain = state.terrain;
  return terrain.find(loc => loc.x === x && loc.y === y);
}
