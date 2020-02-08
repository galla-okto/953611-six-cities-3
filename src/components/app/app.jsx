import React from 'react';
import Main from '../main/main.jsx';
import types from './../main/types.js';

const App = ({countOffers, offers}) => {
  return (
    <Main countOffers={countOffers} offers={offers}/>
  );
};

App.propTypes = types;

export default App;
