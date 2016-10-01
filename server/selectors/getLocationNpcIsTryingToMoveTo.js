const getCoordsNpcIsTryingToMoveTo = require('./getCoordsNpcIsTryingToMoveTo.js');

module.exports = function getLocationNpcIsTryingToMoveTo(state, npcId, direction) {
  const { x, y } = getCoordsNpcIsTryingToMoveTo(state, npcId, direction);
  const locations = state.locations;
  return locations.find(loc => loc.x === x && loc.y === y);
}
