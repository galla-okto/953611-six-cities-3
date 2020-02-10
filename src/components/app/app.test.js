import React from "react";
import renderer from "react-test-renderer";
import App from './app.jsx';

const offers = [
  `Good`,
  `Better`,
  `The best`
];

it(`<App /> should render count of offers and offers`, () => {
  const tree = renderer
    .create(<App
      countOffers={3}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
