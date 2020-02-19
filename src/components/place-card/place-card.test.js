import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from '../place-card/place-card.jsx';

const offer = {
  offer: {
    price: 400,
    name: `Lux`,
  }
};

it(`PlaceCard is rendered correctly`, () => {
  const tree = renderer.create((
    <PlaceCard
      offer={offer}
      key={1}
      onHover={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
