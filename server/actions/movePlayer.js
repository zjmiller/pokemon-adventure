const canPlayerMoveInDirection = require('../selectors/canPlayerMoveInDirection');
const isPlayerOnBerry = require('../selectors/isPlayerOnBerry');
const isPlayerOnMushroom = require('../selectors/isPlayerOnMushroom');
const isPlayerOnNpc = require('../selectors/isPlayerOnNpc');
const isPlayerOnGem = require('../selectors/isPlayerOnGem');
const getIdOfNpcPlayerIsOn = require('../selectors/getIdOfNpcPlayerIsOn');
const getNpcDamage = require('../selectors/getNpcDamage');
const getSpeciesIdOfNpc = require('../selectors/getSpeciesIdOfNpc')
const isPlayerDead = require('../selectors/isPlayerDead');
const throttle = require('lodash.throttle');
const shouldCapturedNpcCauseGemSpawn = require('../selectors/shouldCapturedNpcCauseGemSpawn');
const spawnGem = require('./spawnGem');
const getPlayerSpecies = require('../selectors/getPlayerSpecies');
const getEvolutionOfSpecies = require('../selectors/getEvolutionOfSpecies');
const doesSpeciesHaveEvolution = require('../selectors/doesSpeciesHaveEvolution');

function unthrottledMove({ playerId, direction }, { dispatch, getState }, actionsList) {
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

  const playerIsOnGem = isPlayerOnGem(getState(), playerId);
  if (playerIsOnGem) {
    const speciesId = getPlayerSpecies(getState(), playerId);
    const speciesDoesHaveEvolution = doesSpeciesHaveEvolution(getState(), speciesId);
    if (speciesDoesHaveEvolution) {
      const evolutionSpeciesId = getEvolutionOfSpecies(getState(), speciesId);

      const action = {
        type: 'EAT_GEM',
        playerId,
        speciesId,
        evolutionSpeciesId,
      };
      actionsList.push(action);
      dispatch(action);  
    }
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

    const capturedNpcShouldCauseGemSpawn = shouldCapturedNpcCauseGemSpawn(getState());
    if (capturedNpcShouldCauseGemSpawn) spawnGem({}, { dispatch, getState }, actionsList);
  }
}

const throttledMove = throttle(unthrottledMove, 4000);

module.exports = ({ playerId, direction }, { dispatch, getState }, actionsList) => {
  const playerCanMoveInDirection = canPlayerMoveInDirection(getState(), playerId, direction);
  if (playerCanMoveInDirection) {
    if (isPlayerDead(getState(), playerId)) throttledMove({ playerId, direction }, { dispatch, getState }, actionsList);
    else unthrottledMove({ playerId, direction }, { dispatch, getState }, actionsList);
  }
}
