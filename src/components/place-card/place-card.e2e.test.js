import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./place-card.jsx";

configure({adapter: new Adapter()});

const offers = {
  offer: {
    price: 400,
    name: `Lux`,
  }
};

it(`When user move over card`, () => {
  const {offer} = offers;
  const onOfferHover = jest.fn();
  const onTitleClick = jest.fn();

  const offerScreen = shallow(<Offer
    offerCard={offer}
    onOfferHover={onOfferHover}
    onTitleClick={onTitleClick}
  />);

  const offerCard = offerScreen.find(`.place-card`);

  offerCard.simulate(`mouseover`);

  expect(onOfferHover).toHaveBeenCalledTimes(1);

  expect(onOfferHover.mock.calls[0]).toMatchObject(offer);
});
