const getMovementInfo = require('../../shared/terrain/movementInfo.js');

module.exports = function canTerrainBeMovedIntoFromDirection(state, terrain, direction) {
  return terrain.movementInfo[direction];
}
