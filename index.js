const httpServer = require('./server/httpServer.js');
const PORT_NUMBER = 5000;
httpServer.listen(PORT_NUMBER);

const createWsServer = require('./server/wsServer.js');
const store = require('./shared/store.js');
const actionsList = [];
createWsServer(httpServer, store, actionsList);
