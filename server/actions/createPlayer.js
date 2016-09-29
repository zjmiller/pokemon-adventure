module.exports = ({ id }, { dispatch }, actionsList) => {
  const action = {
    type: 'CREATE_PLAYER',
    id,
  };

  dispatch(action);
  actionsList.push(action);
}
