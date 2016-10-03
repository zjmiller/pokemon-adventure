import React, { Component } from 'react';
import { connect } from 'react-redux';
import canSpeciesEvolve from '../selectors/canSpeciesEvolve';

function Pokedex({ pokedex, pokemonSpecies, state, yourPokedex, handleChangeSpecies, handleSpeciesTradeIn }) {
  const squares = [];

  pokemonSpecies.forEach((species, i) => {
    const canCapture = species !== undefined;
    let backgroundPosition;
    let backgroundSize;
    let img;
    let hasCaptured;

    if (canCapture) {
      img = './imgs/' + species.img;
      backgroundPosition = species.backgroundPosition;
      backgroundSize = species.backgroundSize;
      hasCaptured = pokedex[species.id] > 0;
    }

    const top = Math.floor(i / 7) * 36;
    const left = (i - Math.floor(i / 7) * 7) * 36;

    const capturedThreeOrMore = hasCaptured && pokedex[species.id] >= 3;

    const thisSpeciesCanEvolve = canSpeciesEvolve(state, species.id);

    squares.push(
      <div
        key={i}
        style={{
          backgroundColor:'#f8f8f8',
          backgroundImage: canCapture && `url(${img})`,
          backgroundPosition,
          backgroundSize,
          border: '1px solid #999',
          boxSizing: 'border-box',
          height: '32px',
          left: left + 'px',
          opacity: (canCapture && !hasCaptured) ? '0.3' : '1',
          position: 'absolute',
          top: top + 'px',
          WebkitFilter: (canCapture && !hasCaptured) ? 'grayscale(500%)' : '',
          width: '32px',
        }}
        onClick={hasCaptured ? () => handleChangeSpecies(species.id) : () => {} }
      >
        {hasCaptured ? <div style={{
            backgroundColor: (capturedThreeOrMore && thisSpeciesCanEvolve) ? 'rgba(255, 100, 100, 0.85)' : 'rgba(255, 255, 255, 0.85)',
            bottom: '1px',
            borderRadius: '14px',
            cursor: (capturedThreeOrMore && thisSpeciesCanEvolve) ? 'pointer' : 'default',
            fontFamily: 'Helvetica Neue',
            fontSize: '12px',
            fontWeight: 600,
            height: '14px',
            lineHeight: '14px',
            position: 'absolute',
            right: '1px',
            textAlign: 'center',
            width: '14px',
          }}
            onClick={e => {
              if (capturedThreeOrMore && thisSpeciesCanEvolve) {
                e.stopPropagation();
                handleSpeciesTradeIn(species.id);
              }
            }}
          >{species && pokedex[species.id]} </div>: ''}
      </div>
    );
  });

  return (
    <div style={{
      height: '250px',
      position: 'relative',
      width: '276px',
    }}>
      {squares}
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => {
  return {
    state: state,
    pokedex: state.players.find(player => player.id === playerId).pokedex,
    pokemonSpecies: state.pokemonSpecies,
  };
};

export default connect(mapStateToProps)(Pokedex);
