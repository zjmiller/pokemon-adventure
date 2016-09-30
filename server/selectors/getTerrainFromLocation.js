module.exports = function getTerrainFromLocation(state, location) {
  const {x, y} = location;
  return state.terrain.find(t => t.x === x && t.y === y);
}
