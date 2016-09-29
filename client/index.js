import shortid from 'shortid';
import store from '../shared/store';

const wsClient = new WebSocket('ws://localhost:3000/', 'protocol-1');

if (localStorage.getItem('pokemon-player-id') === null) {
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
    },
    haveProcessedBefore,
  }

  wsClient.send(JSON.stringify(message));
};

wsClient.onmessage = message => {
  const data = JSON.parse(message.data);
  data.actionsToProcess.forEach(action => store.dispatch(action));
  haveProcessedBefore = data.haveProcessedBefore;
};
