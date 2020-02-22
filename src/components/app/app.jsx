import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from "prop-types";

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

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
