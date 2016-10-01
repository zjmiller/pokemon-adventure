module.exports = function getNumBerries(state) {
  const locations = state.locations;
  const locationsWithNpcs = locations.filter(loc => loc.npc);
  return locationsWithNpcs.length;
}
