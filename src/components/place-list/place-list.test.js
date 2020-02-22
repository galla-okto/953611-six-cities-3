import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from '../place-list/place-list.jsx';

const offer = [
  {
    price: 400,
    name: `Lux`,
  }
];

it(`PlaceCard is rendered correctly`, () => {
  const tree = renderer.create((
    <PlaceList
      listOffers={offer}
      onPlaceCardNameClick={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
