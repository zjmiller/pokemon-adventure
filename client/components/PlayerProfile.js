import React from 'react';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';

function PlayerProfile({ playerId, bgColor, yourProfile, handleChangeSpecies }){
  return (
    <div>
      <div
        style={{
          backgroundColor: bgColor,
          marginBottom: '10px',
          padding: '10px',
        }}
      >
        { playerId }
      </div>
      <Pokedex playerId={playerId} yourPokedex={yourProfile} handleChangeSpecies={handleChangeSpecies} />
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => ({
  bgColor: state.players.find(player => player.id === playerId).color,
});

export default connect(mapStateToProps)(PlayerProfile);
