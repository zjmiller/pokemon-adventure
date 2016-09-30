import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import randomColor from 'randomcolor';
import shortid from 'shortid';
import store from '../shared/store';
import App from './components/App';

const wsClient = new WebSocket(location.origin.replace(/^http/, 'ws'), 'protocol-1');

if (!localStorage.getItem('pokemon-player-id')) {
  localStorage.setItem('pokemon-player-id', shortid.generate());
}

const yourPlayerId = localStorage.getItem('pokemon-player-id');

// this keeps track of which actions have been fed thru reducer
// E.g., 5 means that's every action before the 5th has been eaten
let haveProcessedBefore = 0;

wsClient.onopen = e => {
  const message = {
    action: 'createPlayer',
    options: {
      playerId: yourPlayerId,
      color: randomColor(),
    },
    haveProcessedBefore,
  }

  wsClient.send(JSON.stringify(message));
};

wsClient.onmessage = message => {
  console.log(message.data);
  const data = JSON.parse(message.data);
  data.actionsToProcess.forEach(action => store.dispatch(action));
  haveProcessedBefore = data.haveProcessedBefore;
  console.log(yourPlayerId, store.getState());
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

window.addEventListener('keydown', e => {
  if (e.which === 37) {
    e.preventDefault();

    const message = {
      action: 'movePlayer',
      options: {
        playerId: yourPlayerId,
        direction: 'left',
      },
      haveProcessedBefore,
    }

    wsClient.send(JSON.stringify(message));
  }

  if (e.which === 39) {
    e.preventDefault();

    const message = {
      action: 'movePlayer',
      options: {
        playerId: yourPlayerId,
        direction: 'right',
      },
      haveProcessedBefore,
    }

    wsClient.send(JSON.stringify(message));
  }
});
