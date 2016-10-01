const isPlayerTryingToMoveOutOfBounds = require('./isPlayerTryingToMoveOutOfBounds');
const getLocationPlayerIsTryingToMoveTo = require('./getLocationPlayerIsTryingToMoveTo');
const isLocationUnoccupiedByPlayer = require('./isLocationUnoccupiedByPlayer');
const getTerrainPlayerIsTryingToMoveTo = require('./getTerrainPlayerIsTryingToMoveTo');
const canTerrainBeMovedIntoFromDirection = require('./canTerrainBeMovedIntoFromDirection.js');

module.exports = function canPlayerMoveInDirection(state, playerId, direction) {
  const playerIsTryingToMoveOutOfBounds = isPlayerTryingToMoveOutOfBounds(state, playerId, direction);
  if (playerIsTryingToMoveOutOfBounds) return false;

  const location = getLocationPlayerIsTryingToMoveTo(state, playerId, direction);
  const locationIsOccupiedByPlayer = isLocationUnoccupiedByPlayer(state, location);
  if (!locationIsOccupiedByPlayer) return false;

  const terrain = getTerrainPlayerIsTryingToMoveTo(state, playerId, direction);
  const terrainCanBeMovedIntoFromDirection = canTerrainBeMovedIntoFromDirection(state, terrain, direction);
  if (!terrainCanBeMovedIntoFromDirection) return false;

  return true;
}
