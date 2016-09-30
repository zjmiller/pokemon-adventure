module.exports = function isLocationUnoccupiedByPlayerAndNPC(state, location){
  return !(
    location.player
    || location.npc
  );
}
