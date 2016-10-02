import React, { Component } from 'react';
import { connect } from 'react-redux';

function DmgGuide({damage, species, numberAtDmgLevel}) {
  const img = './imgs/' + species.img;
  const {backgroundPosition, backgroundSize} = species;

  return (
    <div style={{
      backgroundColor: '#fff',
      backgroundImage: `url(${img})`,
      backgroundPosition,
      backgroundSize,
      border: '1px solid #999',
      borderRadius: '32px',
      height: '32px',
      bottom: (damage * 32) + 'px',
      height: '32px',
      position: 'absolute',
      right: (numberAtDmgLevel * 32 + 5) + 'px',
      width: '32px',
    }}/>
  );
}

const mapStateToProps = (state, {speciesId}) => ({
  species: state.pokemonSpecies.find(species => species.id === speciesId),
});

export default connect(mapStateToProps)(DmgGuide);
