import React from 'react';
import renderer from 'react-test-renderer';
import Offer from '../place-card/place-card.jsx';

const offers = {
  offer: {
    price: 400,
    name: `Lux`,
  }
};

it(`PlaceCard is rendered correctly`, () => {
  const {offer} = offers;

  const tree = renderer.create((
    <Offer
      offerCard={offer}
      key={1}
      onOfferHover={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
