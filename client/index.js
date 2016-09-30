import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import shortid from 'shortid';
import { createStore } from 'redux';
import rootReducer from '../shared/reducers/rootReducer';
import App from './components/App';
import createPlayer from './actions/createPlayer';
import movePlayer from './actions/movePlayer';
import doesPlayerExist from './selectors/doesPlayerExist';

// declare store up here so it can be accessed throughout
let store;

// get or set player id in local storage
if (!localStorage.getItem('pokemon-player-id')) {
  localStorage.setItem('pokemon-player-id', shortid.generate());
}
const playerId = localStorage.getItem('pokemon-player-id');

// this keeps track of which actions have been fed thru reducer
// E.g., 5 means that's every action before the 5th has been eaten
let haveProcessedBefore = 0;

const ws = new WebSocket(location.origin.replace(/^http/, 'ws'), 'protocol-1');

// set up WebSocket
ws.onmessage = message => {
  const data = JSON.parse(message.data);
  if (data.state) {
    // initialize store using preloaded state
    store = createStore(rootReducer, data.state);

    // create player if needed
    const playerDoesExist = doesPlayerExist(store.getState(), playerId);
    if (!playerDoesExist) createPlayer(ws, haveProcessedBefore, { playerId });

    // render React hierarchy
    ReactDOM.render(
      <Provider store={store}>
        <App playerId={playerId} />
      </Provider>,
      document.getElementById('root')
    );
  } else {
    // process incoming actions
    console.log(JSON.stringify(data));
    data.actionsToProcess.forEach(action => store.dispatch(action));
    console.log(playerId, store.getState());
  }

  // either way, update count so we know which actions we've processed
  haveProcessedBefore = data.haveProcessedBefore;
};

// event listeners
window.addEventListener('keydown', e => {
  if ([37, 38, 39, 40].some(n => n === e.which)) e.preventDefault();

  if (e.which === 37)
    movePlayer(ws, haveProcessedBefore, { playerId, direction: 'left' } );
  else if (e.which === 38)
    movePlayer(ws, haveProcessedBefore, { playerId, direction: 'up' } );
  else if (e.which === 39)
    movePlayer(ws, haveProcessedBefore, { playerId, direction: 'right' } );
  else if (e.which === 40)
    movePlayer(ws, haveProcessedBefore, { playerId, direction: 'down' } );
});
