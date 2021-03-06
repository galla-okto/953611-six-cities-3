import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const offers = [
  {
    id: `offer_001`,
    price: 400,
    name: `Lux`,
  }
];

it(`Should card's name be pressed`, () => {
  const onPlaceCardNameClick = jest.fn();

  const main = mount(
      <Main
        countOffers={5}
        offers={offers}
        onPlaceCardNameClick={onPlaceCardNameClick}
      />
  );

  const mainLink = main.find(`.place-card__name`);

  mainLink.props().onClick();

  expect(onPlaceCardNameClick.mock.calls.length).toBe(1);
});
