import React from "react";
import renderer from "react-test-renderer";
import Main from '../main/main.jsx';

const offers = [
  `Noisy`,
  `Warmer`,
  `Ice`
];

it(`<Main /> should render offers`, () => {
  const tree = renderer
    .create(<Main countOffers={111} offers={offers}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
