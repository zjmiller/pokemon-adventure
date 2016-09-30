const getLocationPlayerIsTryingToMoveTo = require('./getLocationPlayerIsTryingToMoveTo');
const isLocationUnoccupiedByPlayerAndNPC = require('./isLocationUnoccupiedByPlayerAndNPC');

module.exports = function canPlayerMoveInDirection(state, playerId, direction) {
  const locationPlayerIsTryingToMoveTo = getLocationPlayerIsTryingToMoveTo(state, playerId, direction);
  return isLocationUnoccupiedByPlayerAndNPC(state, locationPlayerIsTryingToMoveTo);
}
