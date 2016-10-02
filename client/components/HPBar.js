import React from 'react';
import { connect } from 'react-redux';
import getSpeciesDamage from '../selectors/getSpeciesDamage';
import getUniqueSpeciesOnMap from '../selectors/getUniqueSpeciesOnMap';
import DmgGuide from './DmgGuide';

function genHPBlocks(hp) {
  const result = [];
  let bgColor;
  if (hp > 8) {
    bgColor = '#090';
  } else if (hp > 4) {
    bgColor = '#963';
  } else {
    bgColor = '#933';
  }

  let boxShadowColor;
  if (hp > 8) {
    boxShadowColor = '#060';
  } else if (hp > 4) {
    boxShadowColor = '#630';
  } else {
    boxShadowColor = '#600';
  }

  boxShadowColor = '#333'

  for (let i = 1; i <= 20; i++) {
    let filledIn;
    if (i + hp > 20) {
      filledIn = true;
    } else {
      filledIn = false;
    }
    result.push(
      <div
        key={i}
        style={{
          backgroundClip: 'content-box',
          backgroundColor: filledIn ? bgColor : 'transparent',
          border: '1px solid transparent',
          boxShadow: `${boxShadowColor} 0 0 5px inset`,
          height: '32px',
          marginLeft: (175 - 32 - 5) + 'px',
          opacity: 1,
          width: '32px',
        }}
      />
    );
  }
  return result;
}

function HPBar({ hp, speciesAndDmgInfo }){
  const hpBlocks = genHPBlocks(hp);
  const numberAtDmgLevel = [];
  const dmgGuides = speciesAndDmgInfo.sort((a, b) =>
    a.speciesId < b.speciesId ? -1 : 1
  ).map(unit => {

    numberAtDmgLevel[unit.damage] =
      numberAtDmgLevel[unit.damage]
      ? numberAtDmgLevel[unit.damage] + 1
      : 1;

    return (
      <DmgGuide
        key={unit.speciesId}
        speciesId={unit.speciesId}
        damage={unit.damage}
        numberAtDmgLevel={numberAtDmgLevel[unit.damage]}
      />
    );

  });
  return (
    <div
      style={{
        float: 'left',
        height: '640px',
        position: 'relative',
        width: '175px',
      }}
    >
    {hpBlocks}
    {dmgGuides}
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => {
  const player = state.players.find(player => player.id === playerId);
  return {
    hp: player ? player.hp : 0,
    speciesAndDmgInfo: getUniqueSpeciesOnMap(state).map(
    speciesId => ({
      speciesId,
      damage: getSpeciesDamage(state, speciesId),
    })
  ),
  };
};

export default connect(mapStateToProps)(HPBar);
