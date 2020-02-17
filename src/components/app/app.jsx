import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from "prop-types";

const placeCardNameHandler = () => {};

const App = ({countOffers, listOffers}) => {
  return (
    <Main
      countOffers={countOffers}
      listOffers={listOffers}
      onPlaceCardNameClick={placeCardNameHandler}
    />
  );
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
  listOffers: PropTypes.array.isRequired,
};

export default App;
