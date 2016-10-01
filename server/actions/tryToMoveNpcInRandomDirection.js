const canNpcMoveInDirection = require('../selectors/canNpcMoveInDirection');
const getRandomDirection = require('../selectors/getRandomDirection');
const isNpcOnPlayer = require('../selectors/isNpcOnPlayer');
const getIdOfPlayerNpcIsOn = require('../selectors/getIdOfPlayerNpcIsOn');
const getSpeciesIdOfNpc = require('../selectors/getSpeciesIdOfNpc');
const getNpcDamage = require('../selectors/getNpcDamage');

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

    const npcIsOnPlayer = isNpcOnPlayer(getState(), npcId);
    if (npcIsOnPlayer) {
      const action = {
        type: 'EAT_NPC',
        playerId: getIdOfPlayerNpcIsOn(getState(), npcId),
        npcId,
        damage: getNpcDamage(getState(), npcId),
        speciesId: getSpeciesIdOfNpc(getState(), npcId),
      };

      actionsList.push(action);
      dispatch(action);
    }
  }
};
