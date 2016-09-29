import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

function App({ players }) {
  return (
    <div style={{
      border: '1px solid red',
      height: '640px',
      margin: '10px auto',
      position: 'relative',
      width: '960px',
    }}>
      { players.map( player => <Player key={player.id} player={player} /> ) }
    </div>
  );
}

const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps)(App)
