import React from 'react';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';
import Terrain from './Terrain';
import Item from './Item';

function App({ players, berries }) {
  console.log(berries);

  return (
    <div style={{
      border: '1px solid red',
      height: '640px',
      margin: '10px auto',
      position: 'relative',
      width: '960px',
    }}>
      <Terrain />
      {players.map( player => <Pokemon
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
      )}
      {berries.map(({x, y, itemType}) =>
        <Item key={[x, y]} x={x} y={y} z={2} itemType={itemType} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const berries = state.locations
    .filter(loc => loc.berry)
    .map(loc => ({
      x: loc.x,
      y: loc.y,
      itemType: state.itemTypes.find(item => item.id === 1),
    }));

  return {
    berries,
    players: state.players.map(player => {
      const {x, y} = state.locations.find(loc => loc.player === player.id);
      return Object.assign(
        {},
        player,
        { x, y }
      );
    }),
  };
};

export default connect(mapStateToProps)(App)
