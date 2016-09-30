const canPlayerMoveInDirection = require('../selectors/canPlayerMoveInDirection');

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
  } else {
    dispatch({type: 'NOOP'});  
  }
}
