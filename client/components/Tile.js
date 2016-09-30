import React, { Component } from 'react';
import tileIdToOffsetCoords from '../tileIdToOffsetCoords';
const sprite1 = './imgs/hyptosis-1.png';
const sprite2 = './imgs/hyptosis-2.png';
const sprite3 = './imgs/hyptosis-3.png';

const sprites = [];
sprites[1] = sprite1;
sprites[2] = sprite2;
sprites[3] = sprite3;

class Tile extends Component {
  render() {
    const leftPos = this.props.x * 32;
    const topPos = this.props.y * 32;

    let tileId, spriteNumber;

    if (this.props.tileId >= 1800) {
      tileId = this.props.tileId - 1800;
      spriteNumber = 3;
    } else if (this.props.tileId >= 900) {
      tileId = this.props.tileId - 900;
      spriteNumber = 2;
    } else {
      tileId = this.props.tileId;
      spriteNumber = 1;
    }

    const [xOffsetForSprite, yOffsetForSprite] = tileIdToOffsetCoords(this.props.tileId);

    return (
      <div
        style={{
          backgroundImage: `url(${sprites[spriteNumber]})`,
          height: '32px',
          backgroundPosition: `${-32 * xOffsetForSprite}px ${-32 * yOffsetForSprite}px`,
          left: leftPos + 'px',
          position: 'absolute',
          top: topPos + 'px',
          width: '32px',
          zIndex: this.props.z,
        }}
      />
    );
  }
}

export default Tile;
