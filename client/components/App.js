import React from 'react';
import HPBar from './HPBar';
import Map from './Map';
import PlayerProfiles from './PlayerProfiles';

function App({ playerId }) {
  return (
    <div
      style={{
        height: '640px',
        margin: '20px',
        width: '1295px',
      }}
    >
      <HPBar playerId={playerId} />
      <PlayerProfiles playerId={playerId} />
      <Map />
    </div>
  );
}

export default App;
