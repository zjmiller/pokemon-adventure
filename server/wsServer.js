const WebSocketServer = require('ws').Server;
const createPlayer = require('./actions/createPlayer.js');
const movePlayer = require('./actions/movePlayer.js');
const spawnBerry = require('./actions/spawnBerry.js');
const spawnMushroom = require('./actions/spawnMushroom.js');
const spawnNpc = require('./actions/spawnNpc.js');
const spawnGem = require('./actions/spawnGem.js');
const changeSpecies = require('./actions/changeSpecies.js');
const tradeInSpecies = require('./actions/tradeInSpecies.js');
const getNumBerries = require('./selectors/getNumBerries.js');
const getNumMushrooms = require('./selectors/getNumMushrooms.js');
const getNumNpcs = require('./selectors/getNumNpcs.js');
const tryToMoveNpcInRandomDirection = require('./actions/tryToMoveNpcInRandomDirection.js');

module.exports = function createWsServer(httpServer, store, actionsList) {
  const wsServerOpts = {
    server: httpServer,
  };

  const wsServer = new WebSocketServer(wsServerOpts);

  setInterval(() => {
    if (getNumBerries(store.getState()) < 10)
      spawnBerry({}, store, actionsList);
    if (getNumMushrooms(store.getState()) < 10)
      spawnMushroom({}, store, actionsList);
    if (getNumNpcs(store.getState()) < 5)
      spawnNpc({}, store, actionsList);
  }, 1000);

  setInterval(() => {
    store.getState().npcs.forEach(npc => {
      const opts = { npcId: npc.id };
      tryToMoveNpcInRandomDirection(opts, store, actionsList);
    });
  }, 1000);

  wsServer.on('connection', connection => {

    let haveProcessedBefore;

    if (connection.readyState === connection.OPEN) {
      // send preloaded state, and get haveProcessedBefore ready for use
      haveProcessedBefore = actionsList.length;
      connection.send(JSON.stringify({
        state: store.getState(),
        haveProcessedBefore: actionsList.length,
      }));
    }

    // on incoming message, trigger relevant action
    connection.on('message', dataString => {
      const data = JSON.parse(dataString);
      if (data.action === 'createPlayer') createPlayer(data.options, store, actionsList);
      if (data.action === 'movePlayer') movePlayer(data.options, store, actionsList);
      if (data.action === 'changeSpecies') changeSpecies(data.options, store, actionsList);
      if (data.action === 'tradeInSpecies') tradeInSpecies(data.options, store, actionsList);
    });

    // respond to incoming action indirectly via store changes
    store.subscribe(() => {
      if (connection.readyState === connection.OPEN) {
        const returnMsg = {
          actionsToProcess: actionsList.slice(haveProcessedBefore),
          haveProcessedBefore: actionsList.length,
        };
        haveProcessedBefore = actionsList.length;
        connection.send(JSON.stringify(returnMsg));
      }
    });
  });
}
