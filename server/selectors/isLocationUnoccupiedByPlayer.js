module.exports = function isLocationUnoccupiedByPlayer(state, location){
  return !location.player;
}
