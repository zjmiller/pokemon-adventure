const getRandomUnoccupiedLocation = require('../selectors/getRandomUnoccupiedLocation.js');

module.exports = (options, { dispatch, getState }, actionsList) => {
  const randomUnoccupiedLocation = getRandomUnoccupiedLocation(getState());

  const action = {
    type: 'SPAWN_MUSHROOM',
    x: randomUnoccupiedLocation.x,
    y: randomUnoccupiedLocation.y,
  };

  // It is important actionsList.push(action) comes before dispatch(action)
  // dispatch triggers a websocket push
  // and this push is a set of actions
  // for the set to be complete, actionsList must be up-to-date
  actionsList.push(action);
  dispatch(action);
}
