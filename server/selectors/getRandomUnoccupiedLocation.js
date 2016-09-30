const getTerrainFromLocation = require('./getTerrainFromLocation');
const canTerrainBeMovedIntoFromAnyDirection = require('./canTerrainBeMovedIntoFromAnyDirection');

function getAllUnoccupiedLocations(state) {
  const locations = state.locations;
  const unOccupiedLocations = locations.filter(loc => {
    return !(loc.player || loc.npc || loc.berry || loc.mushroom || loc.gem);
  });
  return unOccupiedLocations;
}

function getAllUnoccupiedAndReachableLocations(state) {
  const allUnOccupiedLocations = getAllUnoccupiedLocations(state);
  return allUnOccupiedLocations.filter(location => {
    const terrain = getTerrainFromLocation(state, location);
    return canTerrainBeMovedIntoFromAnyDirection(state, terrain);
  });
}

module.exports = function getRandomUnoccupiedLocation(state) {
  const allUnoccupiedAndReachableLocations = getAllUnoccupiedAndReachableLocations(state);
  const randomI = Math.floor(Math.random() * allUnoccupiedAndReachableLocations.length);
  return allUnoccupiedAndReachableLocations[randomI];
}
