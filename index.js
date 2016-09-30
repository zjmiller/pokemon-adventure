const httpServer = require('./server/httpServer.js');
const PORT_NUMBER = process.env.PORT || 5000;
httpServer.listen(PORT_NUMBER);

const createWsServer = require('./server/wsServer.js');
const { createStore } = require('redux');
const rootReducer = require('./shared/reducers/rootReducer');
const store = createStore(rootReducer);
const actionsList = [];
createWsServer(httpServer, store, actionsList);
