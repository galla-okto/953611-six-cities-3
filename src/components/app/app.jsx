import React from 'react';
import Main from '../main/main.jsx';
import types from './../main/types.js';

const placeCardNameLinkHandler = () => {};

const App = ({countOffers, offers}) => {
  return (
    <Main
      countOffers={countOffers}
      offers={offers}
      onPlaceCardNameLinkClick={placeCardNameLinkHandler}
    />
  );
};

App.propTypes = types;

export default App;
