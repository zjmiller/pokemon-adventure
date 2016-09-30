import React from 'react';
import { connect } from 'react-redux';
import HPBar from './HPBar';
import Map from './Map';

function App({ playerId }) {
  return (
    <div
      style={{
        height: '640px',
        margin: '20px',
        width: '1010px',
      }}
    >
      <HPBar playerId={playerId} />
      <Map />
    </div>
  );
}

export default App;
