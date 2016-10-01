import React from 'react';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';

function PlayerProfile({ playerId, bgColor }){
  return (
    <div>
      <div
        style={{
          backgroundColor: bgColor,
        }}
      >
        { playerId }
      </div>
      <Pokedex playerId={playerId} />
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => ({
  bgColor: state.players.find(player => player.id === playerId).color,
});

export default connect(mapStateToProps)(PlayerProfile);
