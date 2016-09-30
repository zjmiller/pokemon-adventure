module.exports = function locationPlayerIsTryingToMoveTo(state, playerId, direction) {
  const oldI = state.locations.findIndex(loc => loc.player === playerId);
  const oldLoc = state[oldI];
  const oldX = oldLoc.x;
  const oldY = oldLoc.y;

  let newX = oldX;
  let newY = oldY;
  if (action.direction === 'left') newX--;
  if (action.direction === 'up') newY--;
  if (action.direction === 'right') newX++;
  if (action.direction === 'down') newY++;

  const newI = state.findIndex(loc => loc.x === newX && loc.y === newY);
  return state.locations[newI];
}
