import React from 'react';
import { connect } from 'react-redux';

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
          marginLeft: (50 - 32 - 5) + 'px',
          opacity: 1,
          width: '32px',
        }}
      />
    );
  }
  return result;
}

function HPBar({ hp }){
  const hpBlocks = genHPBlocks(hp);
  return (
    <div
      style={{
        float: 'left',
        height: '640px',
        width: '50px',
      }}
    >
    {hpBlocks}
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => {
  const player = state.players.find(player => player.id === playerId);
  return {
    hp: player ? player.hp : 0,
  };
};

export default connect(mapStateToProps)(HPBar);
