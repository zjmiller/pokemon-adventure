import React, { Component } from 'react';

class Item extends Component {
  render() {
    const leftPos = this.props.x * 32;
    const topPos = this.props.y * 32;
    const { img, backgroundPosition, backgroundSize } = this.props.itemType;
    const imgUrl = './imgs/' + this.props.itemType.img;;
    const styles = {
      backgroundImage: `url(${imgUrl})`,
      backgroundPosition,
      backgroundSize,
      height: '32px',
      position: 'absolute',
      left: leftPos + 'px',
      opacity: '1',
      top: topPos + 'px',
      width: '32px',
      zIndex: this.props.z,
    };

    return (
      <div style={styles}>
      </div>
    );
  }
}

export default Item;
