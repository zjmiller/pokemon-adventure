const { combineReducers } = require('redux');
const itemTypes = require('./itemTypes.js');
const locations = require('./locations.js');
const npcs = require('./npcs.js');
const players = require('./players.js');
const pokemonSpecies = require('./pokemonSpecies.js');
const terrain = require('./terrain.js');
const totalCounts = require('./totalCounts');

module.exports = combineReducers({
  itemTypes,
  locations,
  npcs,
  players,
  pokemonSpecies,
  terrain,
  totalCounts,
});
