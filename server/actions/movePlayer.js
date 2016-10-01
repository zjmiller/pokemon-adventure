const canPlayerMoveInDirection = require('../selectors/canPlayerMoveInDirection');
const isPlayerOnBerry = require('../selectors/isPlayerOnBerry');
const isPlayerOnMushroom = require('../selectors/isPlayerOnMushroom');
const isPlayerOnNpc = require('../selectors/isPlayerOnNpc');
const getIdOfNpcPlayerIsOn = require('../selectors/getIdOfNpcPlayerIsOn');
const getNpcDamage = require('../selectors/getNpcDamage');
const getSpeciesIdOfNpc = require('../selectors/getSpeciesIdOfNpc')

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

    const playerIsOnBerry = isPlayerOnBerry(getState(), playerId);
    if (playerIsOnBerry) {
      const action = {
        type: 'EAT_BERRY',
        playerId,
      };
      actionsList.push(action);
      dispatch(action);
    }

    const playerIsOnMushroom = isPlayerOnMushroom(getState(), playerId);
    if (playerIsOnMushroom) {
      const action = {
        type: 'EAT_MUSHROOM',
        playerId,
      };
      actionsList.push(action);
      dispatch(action);
    }

    const playerIsOnNpc = isPlayerOnNpc(getState(), playerId);
    if (playerIsOnNpc) {
      const npcId = getIdOfNpcPlayerIsOn(getState(), playerId);
      const speciesId = getSpeciesIdOfNpc(getState(), npcId);

      const action = {
        type: 'EAT_NPC',
        playerId,
        npcId,
        damage: getNpcDamage(getState(), npcId),
        speciesId: getSpeciesIdOfNpc(getState(), npcId),
      };

      actionsList.push(action);
      dispatch(action);
    }
  } else {
    dispatch({type: 'NOOP'});
  }
}
