const { combineReducers } = require('redux');
const players = require('./players.js');
const terrain = require('./terrain.js');

module.exports = combineReducers({
  players,
  terrain,
});
