const tilemap = require('../terrain/tilemap');
const hiddenInfo = require('../terrain/hiddenInfo');
const movementInfo = require('../terrain/movementInfo');

const initialState = [];

tilemap.forEach((layer, z) =>
  layer.forEach((row, y) =>
    row.forEach((tileId, x) => {
      const tileIfExists = initialState.find(tile => tile.x === x && tile.y === y)

      if (!tileIfExists && tileId !== null) {
        initialState.push({
          x,
          y,
          tiles: [{ tileId, z }],
          movementInfo: movementInfo(tileId),
          playerHidden: hiddenInfo(tileId),
        });
      } else if (tileId !== null) {

        tileIfExists.tiles.push({ tileId, z });

        const {
          left: oldLeft,
          up: oldUp,
          right: oldRight,
          down: oldDown
        } = tileIfExists.movementInfo;

        const {
          left: newLeft,
          up: newUp,
          right: newRight,
          down: newDown
        } = movementInfo(tileId);

        tileIfExists.movementInfo = {
          left: oldLeft && newLeft,
          up: oldUp && newUp,
          right: oldRight && newRight,
          down: oldDown && newDown,
        };

      }
    })
  )
);
module.exports = function(state, action) {
  if (state === undefined) state = initialState;
  return state;
}
