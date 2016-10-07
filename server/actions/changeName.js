module.exports = ({playerId, newName}, { dispatch, getState }, actionsList) => {

  const action = {
    type: 'CHANGE_NAME',
    playerId,
    newName,
  };

  console.log(action);

  // It is important actionsList.push(action) comes before dispatch(action)
  // dispatch triggers a websocket push
  // and this push is a set of actions
  // for the set to be complete, actionsList must be up-to-date
  actionsList.push(action);
  dispatch(action);
}
