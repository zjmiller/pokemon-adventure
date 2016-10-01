const isNpcTryingToMoveOutOfBounds = require('./isNpcTryingToMoveOutOfBounds');
const getLocationNpcIsTryingToMoveTo = require('./getLocationNpcIsTryingToMoveTo');
const isLocationUnoccupiedByNpc = require('./isLocationUnoccupiedByNpc');
const getTerrainNpcIsTryingToMoveTo = require('./getTerrainNpcIsTryingToMoveTo');
const canTerrainBeMovedIntoFromDirection = require('./canTerrainBeMovedIntoFromDirection.js');

module.exports = function canNpcMoveInDirection(state, npcId, direction) {
  const npcIsTryingToMoveOutOfBounds = isNpcTryingToMoveOutOfBounds(state, npcId, direction);
  if (npcIsTryingToMoveOutOfBounds) return false;

  const location = getLocationNpcIsTryingToMoveTo(state, npcId, direction);
  const locationIsOccupiedByNpc = !isLocationUnoccupiedByNpc(state, location);
  if (locationIsOccupiedByNpc) return false;

  const terrain = getTerrainNpcIsTryingToMoveTo(state, npcId, direction);
  const terrainCanBeMovedIntoFromDirection = canTerrainBeMovedIntoFromDirection(state, terrain, direction);
  if (!terrainCanBeMovedIntoFromDirection) return false;

  return true;
}
