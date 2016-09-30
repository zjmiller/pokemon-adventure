module.exports = function isPlayerTryingToMoveOutOfBounds(state, playerId, direction) {
  const locations = state.locations;
  const oldI = locations.findIndex(loc => loc.player === playerId);
  const oldLoc = locations[oldI];
  const oldX = oldLoc.x;
  const oldY = oldLoc.y;

  let newX = oldX;
  let newY = oldY;
  if (direction === 'left') newX--;
  if (direction === 'up') newY--;
  if (direction === 'right') newX++;
  if (direction === 'down') newY++;

  return newX < 0 || newX > 29 || newY < 0 || newY > 19;
}
