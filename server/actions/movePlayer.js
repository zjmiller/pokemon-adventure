const canPlayerMoveInDirection = require('../selectors/canPlayerMoveInDirection');
const isPlayerOnTopOfBerry = require('../selectors/isPlayerOnTopOfBerry');
const isPlayerOnTopOfMushroom = require('../selectors/isPlayerOnTopOfMushroom');

module.exports = ({ playerId, direction }, { dispatch, getState }, actionsList) => {
  const playerCanMoveInDirection = canPlayerMoveInDirection(getState(), playerId, direction);

  if (playerCanMoveInDirection) {
    const action = {
      type: 'MOVE_PLAYER',
      playerId,
      direction,
    };
    actionsList.push(action);
    dispatch(action);

    const playerIsOnTopOfBerry = isPlayerOnTopOfBerry(getState(), playerId);
    if (playerIsOnTopOfBerry) {
      const action = {
        type: 'EAT_BERRY',
        playerId,
      };
      actionsList.push(action);
      dispatch(action);
    }

    const playerIsOnTopOfMushroom = isPlayerOnTopOfMushroom(getState(), playerId);
    if (playerIsOnTopOfMushroom) {
      const action = {
        type: 'EAT_MUSHROOM',
        playerId,
      };
      actionsList.push(action);
      dispatch(action);
    }
  } else {
    dispatch({type: 'NOOP'});
  }
}
