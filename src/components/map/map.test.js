import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./map.jsx";

const offer = [
  {
    id: `offer_011`,
    price: 190,
    name: `Beautiful & luxurious apartment at great location`,
    xy: [42.3909553943508, 6.85309666406198],
  }
];

it(`Map is rendered correctly`, () => {
  const tree = renderer.create(
      <Map
        listOffers={offer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
