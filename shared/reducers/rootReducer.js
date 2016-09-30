const { combineReducers } = require('redux');
const locations = require('./locations.js');
const players = require('./players.js');
const terrain = require('./terrain.js');

module.exports = combineReducers({
  locations,
  players,
  terrain,
});
