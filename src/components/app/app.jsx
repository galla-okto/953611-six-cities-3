import React from 'react';
import Main from '../main/main.jsx';

const App = ({countOffers, offers}) => {
  // eslint-disable-next-line react/prop-types

  return (
    <Main countOffers={countOffers} offers={offers}/>
  );
};

export default App;
