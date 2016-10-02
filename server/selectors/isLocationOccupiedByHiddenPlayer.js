const getTerrainFromLocation = require('./getTerrainFromLocation');

module.exports = function isLocationOccupiedByHiddenPlayer(state, location){
  return location.player && getTerrainFromLocation(state, location).playerHidden;
}
