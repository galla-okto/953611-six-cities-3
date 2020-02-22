import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const Settings = {
  COUNT_OFFERS: 317
};

ReactDOM.render(
    <App
      countOffers={Settings.COUNT_OFFERS}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
