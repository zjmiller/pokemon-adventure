import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokedex from './Pokedex';
import rgbToRgba from '../../shared/utils/rgbToRgba';
import { Button, ControlLabel, FormControl, Modal } from 'react-bootstrap';

class PlayerProfile extends Component {
  constructor(props){
    super(props);
    this.state = { showModal: false, value: '' }
    this.open = () => {
      this.setState({ showModal: true });
    };
    this.close = () => {
      this.setState({ showModal: false });
    }
    this.saveAndClose = () => {
      props.handleChangeName(props.playerId, this.state.value);
      this.setState({ showModal: false });
    }
    this.handleChange = e => {
      this.setState({ value: e.target.value });
    };
  }

  render() {
    const {
      playerId,
      playerName,
      hp,
      bgColor,
      yourProfile,
      handleChangeName,
      handleChangeSpecies,
      handleSpeciesTradeIn
    } = this.props;

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

    const modal =
    <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Header>
        <Modal.Title>Change Player Name</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ControlLabel>Enter new name here:</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={e => (e.which === 13) && this.saveAndClose()}
          placeholder={playerName}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.close}>Cancel</Button>
        <Button bsStyle="primary" onClick={this.saveAndClose}>Save new name</Button>
      </Modal.Footer>
    </Modal>

    return (
      <div>
        {yourProfile ? modal : ''}
        <div
          style={{
            backgroundColor: rgbToRgba(bgColor, 0.5),
            fontFamily: 'Arial',
            fontSize: '14px',
            fontWeight: '700',
            padding: '10px',
          }}
        >
          {yourProfile ? 'You — ' : ''}
          {playerName}{' '}
          {
            yourProfile
              ? <span
                  style={{
                    color: '#369',
                    cursor: 'pointer',
                    fontSize: '9px',
                    fontWeight: 300,
                  }}
                  onClick={this.open}
                >
                  (change your name)
                </span>
              : ''
          }

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
}

const mapStateToProps = (state, { playerId }) => ({
  bgColor: state.players.find(player => player.id === playerId).color,
  playerName: state.players.find(player => player.id === playerId).playerName,
});

export default connect(mapStateToProps)(PlayerProfile);
