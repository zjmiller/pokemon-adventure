module.exports = ({ playerId, direction }, { dispatch }, actionsList) => {
  const action = {
    type: 'MOVE_PLAYER',
    playerId,
    direction,
  };

  // It is important actionsList.push(action) comes before dispatch(action)
  // dispatch triggers a websocket push
  // and this push is a set of actions
  // for the set to be complete, actionsList must be up-to-date
  actionsList.push(action);
  dispatch(action);
}
