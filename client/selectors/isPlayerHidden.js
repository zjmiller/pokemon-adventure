const getTerrainPlayerIsOn = require('./getTerrainPlayerIsOn');

module.exports = function isPlayerHidden(state, playerId){
  const terrain = getTerrainPlayerIsOn(state, playerId);
  return terrain.playerHidden;
}
