import React from 'react';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';
import rgbToRgba from '../../shared/utils/rgbToRgba';

function PlayerProfile({ playerId, playerName, hp, bgColor, yourProfile, handleChangeSpecies, handleSpeciesTradeIn }){
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
        key={i}
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
          backgroundColor: rgbToRgba(bgColor, 0.5),
          fontFamily: 'Arial',
          fontSize: '14px',
          fontWeight: '700',
          padding: '10px',
        }}
      >
        {yourProfile ? 'You' : ''}
        { ` — ${playerName}` }

      </div>
      <div
        style={{
          height: '20px',
          lineHeight: '20px',
        }}
      >
        { hpBlocks }
      </div>
      <Pokedex
        playerId={playerId}
        yourPokedex={yourProfile}
        handleChangeSpecies={handleChangeSpecies}
        handleSpeciesTradeIn={handleSpeciesTradeIn}
      />
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => ({
  bgColor: state.players.find(player => player.id === playerId).color,
  playerName: state.players.find(player => player.id === playerId).playerName,
});

export default connect(mapStateToProps)(PlayerProfile);
