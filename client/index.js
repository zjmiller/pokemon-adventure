import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import shortid from 'shortid';
import { createStore } from 'redux';
import rootReducer from '../shared/reducers/rootReducer';
import App from './components/App';
import createPlayer from './actions/createPlayer';
import movePlayer from './actions/movePlayer';
import changeSpecies from './actions/changeSpecies';
import tradeInSpecies from './actions/tradeInSpecies';
import pause from './actions/pause';
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
let haveRendered = false;

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
    if (playerDoesExist) {
      ReactDOM.render(
        <Provider store={store}>
          <App
            playerId={playerId}
            handleChangeSpecies={handleChangeSpecies}
            handleSpeciesTradeIn={handleSpeciesTradeIn}
          />
        </Provider>,
        document.getElementById('root')
      );
      haveRendered = true;
    }

  } else {
    // process incoming actions
    // console.log(JSON.stringify(data));
    data.actionsToProcess.forEach(action => store.dispatch(action));
    // console.log(playerId, store.getState());
    if (!haveRendered) {
      const playerDoesExist = doesPlayerExist(store.getState(), playerId);
      if (playerDoesExist) {
        ReactDOM.render(
          <Provider store={store}>
            <App
              playerId={playerId}
              handleChangeSpecies={handleChangeSpecies}
              handleSpeciesTradeIn={handleSpeciesTradeIn}
            />
          </Provider>,
          document.getElementById('root')
        );
        haveRendered = true;
      }
    }
  }

  // either way, update count so we know which actions we've processed
  haveProcessedBefore = data.haveProcessedBefore;
};

function handleChangeSpecies(speciesId){
  changeSpecies(ws, haveProcessedBefore, { playerId, speciesId });
}

function handleSpeciesTradeIn(speciesId){
  tradeInSpecies(ws, haveProcessedBefore, { playerId, speciesId });
}

// event listeners
window.addEventListener('keydown', e => {
  if ([32, 37, 38, 39, 40].some(n => n === e.which)) e.preventDefault();

  if (e.which === 32)
    pause(ws);
  else if (e.which === 37)
    movePlayer(ws, haveProcessedBefore, { playerId, direction: 'left' } );
  else if (e.which === 38)
    movePlayer(ws, haveProcessedBefore, { playerId, direction: 'up' } );
  else if (e.which === 39)
    movePlayer(ws, haveProcessedBefore, { playerId, direction: 'right' } );
  else if (e.which === 40)
    movePlayer(ws, haveProcessedBefore, { playerId, direction: 'down' } );
});
