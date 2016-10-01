import React from 'react';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';

function Pokedexes({ playerId, otherPlayerIds }){
  return (
    <div style={{
      float: 'right',
      height: '1500px',
      position: 'relative',
      width: '276px',
    }}>
      <Pokedex playerId={playerId} />
      {otherPlayerIds.map(otherPlayerId => <Pokedex playerId={otherPlayerId} />)}
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => ({
  otherPlayerIds: state.players.filter(player => player.id !== playerId).map(player => player.id)
});

export default connect(mapStateToProps)(Pokedexes);
