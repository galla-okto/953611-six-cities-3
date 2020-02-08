import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const Settings = {
  COUNT_OFFERS: 312
};

const offers = [
  {title: `Beautiful &amp; luxurious apartment at great location`, price: 120, flat: true, stars: 4, favorite: false},
  {title: `Wood and stone place`, price: 80, flat: false, stars: 4, favorite: true},
  {title: `Canal View Prinsengracht`, price: 132, flat: true, stars: 4, favorite: false},
  {title: `Nice, cozy, warm big bed apartment`, price: 180, flat: true, stars: 5, favorite: false},
  {title: `Wood and stone place`, price: 80, flat: false, stars: 4, favorite: false}
];

ReactDOM.render(
    <App
      countOffers={Settings.COUNT_OFFERS}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
