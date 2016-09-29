const WebSocketServer = require('websocket').server;
const createPlayer = require('./actions/createPlayer.js');

module.exports = function createWsServer(httpServer, store, actionsList) {
  const wsServerOpts = {
    httpServer,
    autoAcceptConnections: true,
  };

  const wsServer = new WebSocketServer(wsServerOpts);

  const wsServerConnectHandler = connection => {
    const connectionMessageHandler = message => {
      const msg = JSON.parse(message.utf8Data);
      if (msg.action === 'createPlayer') createPlayer(msg.options, store, actionsList);

      const returnMsg = {
        actionsToProcess: actionsList.slice(msg.haveProcessedBefore),
        haveProcessedBefore: actionsList.length,
      };

      connection.send(JSON.stringify(returnMsg));
    }

    connection.on('message', connectionMessageHandler);
  };

  wsServer.on('connect', wsServerConnectHandler);
}
