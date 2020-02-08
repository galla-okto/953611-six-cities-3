import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const Settings = {
  COUNT_OFFERS: 312
};

const offers = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

ReactDOM.render(
    <App
      countOffers={Settings.COUNT_OFFERS}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
