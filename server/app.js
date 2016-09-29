const httpServer = require('./httpServer.js');
const PORT_NUMBER = 3000;
httpServer.listen(PORT_NUMBER);

const createWsServer = require('./wsServer.js');
const store = require('../shared/store.js');
const actionsList = [];
createWsServer(httpServer, store, actionsList);
