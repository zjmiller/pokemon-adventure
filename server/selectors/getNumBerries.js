module.exports = function getNumBerries(state) {
  const locations = state.locations;
  const locationsWithBerries = locations.filter(loc => loc.berry);
  return locationsWithBerries.length;
}
