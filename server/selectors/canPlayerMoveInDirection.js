const isPlayerTryingToMoveOutOfBounds = require('./isPlayerTryingToMoveOutOfBounds');
const getLocationPlayerIsTryingToMoveTo = require('./getLocationPlayerIsTryingToMoveTo');
const isLocationUnoccupiedByPlayerAndNPC = require('./isLocationUnoccupiedByPlayerAndNPC');


module.exports = function canPlayerMoveInDirection(state, playerId, direction) {
  const playerIsTryingToMoveOutOfBounds = isPlayerTryingToMoveOutOfBounds(state, playerId, direction);
  if (playerIsTryingToMoveOutOfBounds) return false;

  const locationPlayerIsTryingToMoveTo = getLocationPlayerIsTryingToMoveTo(state, playerId, direction);
  return isLocationUnoccupiedByPlayerAndNPC(state, locationPlayerIsTryingToMoveTo);
}
