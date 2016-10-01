module.exports = function getNumBerriesOnMap(state) {
  const locations = state.locations;
  const locationsWithBerries = locations.filter(loc => loc.mushroom);
  return locationsWithBerries.length;
}
