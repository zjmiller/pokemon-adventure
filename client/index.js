import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import shortid from 'shortid';
import store from '../shared/store';
import App from './components/App';
import createPlayer from './actions/createPlayer';
import movePlayer from './actions/movePlayer';

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

ws.onopen = e => {
  createPlayer(ws, haveProcessedBefore, { playerId });
};

ws.onmessage = message => {
  console.log(message.data);
  const data = JSON.parse(message.data);
  data.actionsToProcess.forEach(action => store.dispatch(action));
  haveProcessedBefore = data.haveProcessedBefore;
  console.log(playerId, store.getState());
};

// render React hierarchy

ReactDOM.render(
  <Provider store={store}>
    <App playerId={playerId} />
  </Provider>,
  document.getElementById('root')
);

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
