import React from 'react';
import { connect } from 'react-redux';
import PlayerProfile from './PlayerProfile';

function PlayerProfiles({ playerId, hp, infoForOtherPlayers, handleChangeSpecies, handleSpeciesTradeIn }){
  return (
    <div style={{
      float: 'right',
      height: '1500px',
      position: 'relative',
      width: '248px',
    }}>
      <PlayerProfile
        playerId={playerId}
        hp={hp}
        yourProfile={true}
        handleChangeSpecies={handleChangeSpecies}
        handleSpeciesTradeIn={handleSpeciesTradeIn}
      />
      {infoForOtherPlayers.map(({otherPlayerId, otherPlayerHp}) => <PlayerProfile key={otherPlayerId} playerId={otherPlayerId} hp={otherPlayerHp} yourProfile={false} />)}
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => ({
  hp: state.players.find(player => player.id === playerId).hp,
  infoForOtherPlayers: state.players.filter(player =>
    player.id !== playerId
  ).map(player =>
    ({ otherPlayerId: player.id, otherPlayerHp: player.hp })
  )
});

export default connect(mapStateToProps)(PlayerProfiles);
