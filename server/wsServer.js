const WebSocketServer = require('websocket').server;
const createPlayer = require('./actions/createPlayer.js');
const movePlayer = require('./actions/movePlayer.js');
const spawnBerry = require('./actions/spawnBerry.js');
const spawnMushroom = require('./actions/spawnMushroom.js');

const getNumBerriesOnMap = require('./selectors/getNumBerriesOnMap.js');
const getNumMushroomsOnMap = require('./selectors/getNumMushroomsOnMap.js');

module.exports = function createWsServer(httpServer, store, actionsList) {
  const wsServerOpts = {
    httpServer,
    autoAcceptConnections: true,
  };

  const wsServer = new WebSocketServer(wsServerOpts);

  setInterval(() => {
    if (getNumBerriesOnMap(store.getState()) < 5)
      spawnBerry({}, store, actionsList);
    if (getNumMushroomsOnMap(store.getState()) < 10)
      spawnMushroom({}, store, actionsList);
  }, 1000);

  const wsServerConnectHandler = connection => {
    let haveProcessedBefore;

    const connectionMessageHandler = message => {
      const msg = JSON.parse(message.utf8Data);
      if (msg.action === 'createPlayer') createPlayer(msg.options, store, actionsList);
      if (msg.action === 'movePlayer') movePlayer(msg.options, store, actionsList);
    }

    store.subscribe(() => {
      const returnMsg = {
        actionsToProcess: actionsList.slice(haveProcessedBefore),
        haveProcessedBefore: actionsList.length,
      };

      haveProcessedBefore = actionsList.length;

      connection.send(JSON.stringify(returnMsg));
    });

    connection.on('message', connectionMessageHandler);
  };

  wsServer.on('connect', wsServerConnectHandler);
}
