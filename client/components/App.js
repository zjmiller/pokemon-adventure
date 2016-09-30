import React from 'react';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';
import Terrain from './Terrain';

function App({ players }) {
  return (
    <div style={{
      border: '1px solid red',
      height: '640px',
      margin: '10px auto',
      position: 'relative',
      width: '960px',
    }}>
      <Terrain />
      { players.map( player => <Pokemon
        key={player.id}
        x={player.x}
        y={player.y}
        z={2}
        facing={player.facing}
        isPlayer={true}
        hidden={false}
        species={{
          img: 'bulbasaur-front.png',
          backgroundPosition:'-22px -22px',
          backgroundSize:  '80px 80px',
        }}
      />
    ) }

    </div>
  );
}

const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps)(App)
