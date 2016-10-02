import React from 'react';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';

function PlayerProfile({ playerId, hp, bgColor, yourProfile, handleChangeSpecies }){
  let hpBarColor;
  if (hp > 8) {
    hpBarColor = '#090';
  } else if (hp > 4) {
    hpBarColor = '#963';
  } else {
    hpBarColor = '#933';
  }

  const hpBlocks = [];
  for (let i = 0; i < hp; i++) {
    hpBlocks.push(
      <div
        style={{
          backgroundClip: 'content-box',
          backgroundColor: hpBarColor,
          border: '1px solid transparent',
          display: 'inline-block',
          height: '10px',
          width: (248 / 20) + 'px',
        }}
      />
    );
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: bgColor,
          padding: '10px',
        }}
      >
        { playerId }
      </div>
      { hpBlocks }
      <Pokedex playerId={playerId} yourPokedex={yourProfile} handleChangeSpecies={handleChangeSpecies} />
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => ({
  bgColor: state.players.find(player => player.id === playerId).color,
});

export default connect(mapStateToProps)(PlayerProfile);
