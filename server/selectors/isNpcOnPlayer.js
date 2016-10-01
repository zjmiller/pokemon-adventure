module.exports = function(state, npcId) {
  const locations = state.locations;
  const npcLoc = locations.find(loc => loc.npc === npcId);
  return npcLoc.player;
}
