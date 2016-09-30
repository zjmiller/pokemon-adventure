module.exports = function getLocationPlayerIsTryingToMoveTo(state, playerId, direction) {
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

  const newI = locations.findIndex(loc => loc.x === newX && loc.y === newY);
  return locations[newI];
}
