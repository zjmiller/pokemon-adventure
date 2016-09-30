module.exports = function getCoordsPlayerIsTryingToMoveTo(state, playerId, direction) {
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

  return { x: newX, y: newY };
}
