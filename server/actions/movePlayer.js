const canPlayerMoveInDirection = require('../selectors/canPlayerMoveInDirection');
const isPlayerOnTopOfItem = require('../selectors/isPlayerOnTopOfItem');

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

    const playerIsOnTopOfItem = isPlayerOnTopOfItem(getState(), playerId);
    if (playerIsOnTopOfItem) {
      const action = {
        type: 'EAT_BERRY',
        playerId,
      };
      actionsList.push(action);
      dispatch(action);
    }
  } else {
    dispatch({type: 'NOOP'});
  }
}
