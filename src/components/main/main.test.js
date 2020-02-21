import React from "react";
import renderer from "react-test-renderer";
import Main from '../main/main.jsx';

const offers = [
  {
    price: 1120,
    name: `Noisy`,
  }, {
    price: 380,
    name: `Warmer`
  }
];

it(`<Main /> should render offers`, () => {
  const tree = renderer
    .create(<Main
      countOffers={4}
      offers={offers}
      onPlaceCardNameClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
