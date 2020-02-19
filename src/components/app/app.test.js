import React from "react";
import renderer from "react-test-renderer";
import App from './app.jsx';

const offers = [
  {
    price: 120,
    name: `Beautiful & luxurious apartment at great location`,
  }, {
    price: 80,
    name: `Wood and stone place`
  }
];

it(`<App /> should render count of offers and offers`, () => {
  const tree = renderer
    .create(<App
      countOffers={3}
      listOffers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
