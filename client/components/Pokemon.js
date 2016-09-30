import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const leftPos = this.props.x * 32;
    const topPos = this.props.y * 32;
    const { backgroundPosition, backgroundSize } = this.props.species;
    const imgURL = './imgs/' + this.props.species.img;

    const styles = {
      backgroundImage: `url(${imgURL})`,
      backgroundPosition,
      backgroundSize,
      height: '32px',
      position: 'absolute',
      left: leftPos + 'px',
      opacity: this.props.hidden ? '0.5' : '1',
      top: topPos + 'px',
      transform: this.props.facing === 'left' ? 'scale(1, 1)' : 'scale(-1, 1)',
      transition: this.props.isPlayer
        ? 'opacity 0.5s ease-out'
        : 'top 0.5s linear, left 0.5s linear',
      width: '32px',
      zIndex: this.props.z,
    };

    return (
      <div style={styles}>
      </div>
    );
  }
}

export default Pokemon;
