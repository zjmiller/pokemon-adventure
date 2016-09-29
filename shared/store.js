const { createStore } = require('redux');
const rootReducer = require('./reducers/rootReducer');

module.exports = createStore(rootReducer);
