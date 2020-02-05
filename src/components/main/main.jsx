import React from 'react';

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {countOffers} = props;

  return (
      <div>
        <header>
          <ul>
            <li>Paris</li>
            <li>Cologne</li>
            <li>Brussels</li>
          </ul>
        </header>
        <main>
          <h2> {countOffers} places to stay in </h2>
        </main>
      </div>
  );
}

export default Main;
