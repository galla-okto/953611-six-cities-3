import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from "prop-types";

const App = ({countOffers, offers}) => {
  return (
    <Main countOffers={countOffers} offers={offers}/>
  );
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired,

  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })
  ).isRequired,
};

export default App;
