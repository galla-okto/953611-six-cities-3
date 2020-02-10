import React from 'react';
import Main from '../main/main.jsx';
import types from './../main/types.js';

const placeCardNameHandler = () => {};

const App = ({countOffers, offers}) => {
  return (
    <Main
      countOffers={countOffers}
      offers={offers}
      onPlaceCardNameClick={placeCardNameHandler}
    />
  );
};

App.propTypes = types;

export default App;
