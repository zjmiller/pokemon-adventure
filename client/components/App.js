import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import Pokemon from './Pokemon';
import Terrain from './Terrain';
import Item from './Item';

function App({ players, berries, mushrooms }) {
  return (
    <Map />
  );
}

export default Map;
