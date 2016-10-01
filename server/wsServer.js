const WebSocketServer = require('ws').Server;
const createPlayer = require('./actions/createPlayer.js');
const movePlayer = require('./actions/movePlayer.js');
const spawnBerry = require('./actions/spawnBerry.js');
const spawnMushroom = require('./actions/spawnMushroom.js');
const spawnNpc = require('./actions/spawnNpc.js');

const getNumBerriesOnMap = require('./selectors/getNumBerriesOnMap.js');
const getNumMushroomsOnMap = require('./selectors/getNumMushroomsOnMap.js');

module.exports = function createWsServer(httpServer, store, actionsList) {
  const wsServerOpts = {
    server: httpServer,
  };

  const wsServer = new WebSocketServer(wsServerOpts);

  setInterval(() => {
    if (getNumBerriesOnMap(store.getState()) < 10)
      spawnBerry({}, store, actionsList);
    if (getNumMushroomsOnMap(store.getState()) < 10)
      spawnMushroom({}, store, actionsList);
    spawnNpc({}, store, actionsList);
  }, 1000);

  wsServer.on('connection', connection => {

    // send preloaded state, and get haveProcessedBefore ready for use
    let haveProcessedBefore = actionsList.length;
    connection.send(JSON.stringify({
      state: store.getState(),
      haveProcessedBefore: actionsList.length,
    }));

    // on incoming message, trigger relevant action
    connection.on('message', dataString => {
      const data = JSON.parse(dataString);
      if (data.action === 'createPlayer') createPlayer(data.options, store, actionsList);
      if (data.action === 'movePlayer') movePlayer(data.options, store, actionsList);
    });

    // respond to incoming action indirectly via store changes
    store.subscribe(() => {
      const returnMsg = {
        actionsToProcess: actionsList.slice(haveProcessedBefore),
        haveProcessedBefore: actionsList.length,
      };
      haveProcessedBefore = actionsList.length;
      connection.send(JSON.stringify(returnMsg));
    });
  });
}
