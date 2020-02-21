import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./place-card.jsx";

configure({adapter: new Adapter()});

const mock = {
  offer: {
    price: 400,
    name: `Lux`,
  }
};

it(`When user move over card`, () => {
  const {offer} = mock;
  const onOfferHover = jest.fn();
  const onTitleClick = jest.fn();

  const PlaceCardExample = shallow(<Offer
    offer={offer}
    onOfferHover={onOfferHover}
    onTitleClick={onTitleClick}
  />);

  const card = PlaceCardExample.find(`.place-card`);

  card.simulate(`mouseover`, {preventDefault() {}});

  expect(onOfferHover).toHaveBeenCalledTimes(1);
});
