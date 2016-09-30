function getAllUnoccupiedLocations(state) {
  const locations = state.locations;
  const unOccupiedLocations = locations.filter(loc => {
    return !(loc.player || loc.npc || loc.berry || loc.mushroom || loc.gem);
  });
  return unOccupiedLocations;
}

module.exports = function getRandomUnoccupiedLocation(state) {
  const allUnoccupiedLocations = getAllUnoccupiedLocations(state);
  const randomI = Math.floor(Math.random() * allUnoccupiedLocations.length);
  return allUnoccupiedLocations[randomI];
}
