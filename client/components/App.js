import React from 'react';
import HPBar from './HPBar';
import Map from './Map';
import PlayerProfiles from './PlayerProfiles';

function App({ playerId, handleChangeName, handleChangeSpecies, handleSpeciesTradeIn }) {
  return (
    <div
      style={{
        height: '640px',
        margin: '20px',
        width: '1395px',
      }}
    >
      <HPBar playerId={playerId} />
      <PlayerProfiles
        playerId={playerId}
        handleChangeName={handleChangeName}
        handleChangeSpecies={handleChangeSpecies}
        handleSpeciesTradeIn={handleSpeciesTradeIn}
      />
      <Map />
    </div>
  );
}

export default App;
