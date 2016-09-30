const { combineReducers } = require('redux');
const itemTypes = require('./itemTypes.js');
const locations = require('./locations.js');
const players = require('./players.js');
const pokemonSpecies = require('./pokemonSpecies.js');
const terrain = require('./terrain.js');

module.exports = combineReducers({
  itemTypes,
  locations,
  players,
  pokemonSpecies,
  terrain,
});
