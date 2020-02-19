import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from ".//place-card.jsx";

configure({adapter: new Adapter()});

const mock = {
  offer: {
    price: 400,
    name: `Lux`,
  }
};

it(`When user move over card`, () => {
  const {offer} = mock;
  const onHover = jest.fn();

  const PlaceCardExample = shallow(<PlaceCard
    offer={offer}
    key={1}
    onHover={onHover}
  />);

  const card = PlaceCardExample.find(`.place-card`);

  card.simulate(`mouseover`, {preventDefault() {}});

  expect(onHover).toHaveBeenCalledTimes(1);
});
