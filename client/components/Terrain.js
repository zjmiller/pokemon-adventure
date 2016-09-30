import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';

function Terrain({ terrain }) {
  function genTiles() {
    const tiles = [];
    terrain.forEach(location => {
      location.tiles.forEach((tile, i) => {
        tiles.push(
          <Tile
            key={[location.x, location.y, i]}
            tileId={tile.tileId}
            x={location.x}
            y={location.y}
            z={tile.z}
          />
        );
      });
    });
    return tiles;
  }

  return (
    <div>
      {genTiles()}
    </div>
  );
}

const mapStateToProps = state => ({
  terrain: state.terrain,
});

export default connect(mapStateToProps)(Terrain);
