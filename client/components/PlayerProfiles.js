import React from 'react';
import { connect } from 'react-redux';
import PlayerProfile from './PlayerProfile';

function PlayerProfiles({ playerId, otherPlayerIds, handleChangeSpecies }){
  return (
    <div style={{
      float: 'right',
      height: '1500px',
      position: 'relative',
      width: '248px',
    }}>
      <PlayerProfile playerId={playerId} yourProfile={true} handleChangeSpecies={handleChangeSpecies} />
      {otherPlayerIds.map(otherPlayerId => <PlayerProfile key={otherPlayerId} playerId={otherPlayerId} yourProfile={false} />)}
    </div>
  );
}

const mapStateToProps = (state, { playerId }) => ({
  otherPlayerIds: state.players.filter(player => player.id !== playerId).map(player => player.id)
});

export default connect(mapStateToProps)(PlayerProfiles);
