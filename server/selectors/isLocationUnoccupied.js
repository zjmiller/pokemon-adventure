module.exports = function isLocationUnoccupied(state, location){
  return !(
    location.player
    || location.npc
    || location.berry
    || location.mushroom
    || location.gem
  );
}
