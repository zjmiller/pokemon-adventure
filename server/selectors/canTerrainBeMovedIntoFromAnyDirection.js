const canTerrainBeMovedIntoFromDirection = require('./canTerrainBeMovedIntoFromDirection');

module.exports = function canTerrainBeMovedIntoFromAnyDirection(state, terrain) {
  const directions = ['left', 'up', 'right', 'down'];
  let result = false;
  directions.forEach(direction => {
    const terrainCanBeMovedIntoFromDirection = canTerrainBeMovedIntoFromDirection(state, terrain, direction);
    if (terrainCanBeMovedIntoFromDirection) result = true;
  });
  return result;
}
