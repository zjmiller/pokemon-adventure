module.exports = function locationIsUnoccupied(state, location){
  return !(
    location.player
    && location.npc
    && location.berry
    && location.mushroom
    && location.gem
  );
}
