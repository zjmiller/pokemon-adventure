import React from 'react';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';
import Terrain from './Terrain';
import Item from './Item';
import isPlayerHidden from '../selectors/isPlayerHidden';

function Map({ players, berries, mushrooms }) {
  return (
    <div style={{
      height: '640px',
      marginLeft: '50px',
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
          hidden={player.hidden}
          species={player.species}
        />
      )}
      {berries.map(({x, y, itemType}) =>
        <Item key={[x, y]} x={x} y={y} z={2} itemType={itemType} />
      )}
      {mushrooms.map(({x, y, itemType}) =>
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
    })
  );

  const mushrooms = state.locations
    .filter(loc => loc.mushroom)
    .map(loc => ({
      x: loc.x,
      y: loc.y,
      itemType: state.itemTypes.find(item => item.id === 2),
    })
  );

  const players = state.players.map(player => {
    const { x, y } = state.locations.find(loc => loc.player === player.id);
    const species = state.pokemonSpecies.find(species => species.id === player.pokemonSpeciesId)
    const hidden = isPlayerHidden(state, player.id);
    return Object.assign(
      {},
      player,
      {
        x,
        y,
        species,
        hidden,
      }
    );
  });

  return {
    berries,
    mushrooms,
    players,
  };
};

export default connect(mapStateToProps)(Map)
