const getLocationPlayerIsTryingToMoveTo = require('./getLocationPlayerIsTryingToMoveTo');
const isLocationUnoccupied = require('./isLocationUnoccupied');

module.exports = function canPlayerMoveInDirection(state, playerId, direction) {
  const locationPlayerIsTryingToMoveTo = getLocationPlayerIsTryingToMoveTo(state, playerId, direction);
  return isLocationUnoccupied(state, locationPlayerIsTryingToMoveTo);
}
