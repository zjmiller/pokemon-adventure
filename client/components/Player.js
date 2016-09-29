import React from 'react';

function Player({ player }) {
  return (
    <div
      style={{
        backgroundColor: player.color,
        height: '32px',
        left: (player.x * 32) + 'px',
        opacity: '0.5',
        position: 'absolute',
        top: (player.y * 32) + 'px',
        width: '32px',
      }}
    />
  );
}

export default Player;
