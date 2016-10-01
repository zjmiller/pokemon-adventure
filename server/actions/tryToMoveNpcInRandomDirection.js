const canNpcMoveInDirection = require('../selectors/canNpcMoveInDirection');
const getRandomDirection = require('../selectors/getRandomDirection');

module.exports = function tryToMoveNpcInRandomDirection({ npcId }, { dispatch, getState }, actionsList){
  const direction = getRandomDirection();
  const npcCanMoveInDirection = canNpcMoveInDirection(getState(), npcId, direction);
  if (npcCanMoveInDirection) {
    const action = {
      type: 'MOVE_NPC',
      npcId,
      direction,
    };

    actionsList.push(action);
    dispatch(action);
  }
};
