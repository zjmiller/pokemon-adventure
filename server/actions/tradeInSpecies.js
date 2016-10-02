const getEvolutionOfSpecies = require('../selectors/getEvolutionOfSpecies');

module.exports = ({playerId, speciesId}, { dispatch, getState }, actionsList) => {

  const action = {
    type: 'TRADE_IN_SPECIES',
    playerId,
    pokemonSpeciesId: speciesId,
    evolutionId: getEvolutionOfSpecies(getState(), speciesId),
  };

  // It is important actionsList.push(action) comes before dispatch(action)
  // dispatch triggers a websocket push
  // and this push is a set of actions
  // for the set to be complete, actionsList must be up-to-date
  actionsList.push(action);
  dispatch(action);
}
