const getPlayerCoords = require('./getPlayerCoords');

module.exports = function getTerrainPlayerIsOn(state, playerId) {
  const { x, y } = getPlayerCoords(state, playerId);
  return state.terrain.find(t => t.x === x && t.y === y);
}
