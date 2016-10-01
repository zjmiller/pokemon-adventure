const randomColor = require('randomColor');
const getRandomUnoccupiedLocation = require('../selectors/getRandomUnoccupiedLocation.js');

module.exports = ({ playerId }, { dispatch, getState }, actionsList) => {
  const randomUnoccupiedLocation = getRandomUnoccupiedLocation(getState());

  const possibleBeginningPokemonSpeciesIds = [1, 4, 7];

  const randomSpeciesId = possibleBeginningPokemonSpeciesIds[Math.floor(Math.random() * 3)];

  const action = {
    type: 'CREATE_PLAYER',
    playerId,
    color: randomColor({ format: 'rgb' }),
    pokemonSpeciesId: randomSpeciesId,
    x: randomUnoccupiedLocation.x,
    y: randomUnoccupiedLocation.y,
  };

  // It is important actionsList.push(action) comes before dispatch(action)
  // dispatch triggers a websocket push
  // and this push is a set of actions
  // for the set to be complete, actionsList must be up-to-date
  actionsList.push(action);
  dispatch(action);
}
