import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const offers = [
  `Lux`,
  `Econom`,
  `VIP`
];

it(`Should card's name be pressed`, () => {
  const onPlaceCardNameLinkClick = jest.fn();

  const main = shallow(
      <Main
        countOffers={5}
        offers={offers}
        onPlaceCardNameLinkClick={onPlaceCardNameLinkClick}
      />
  );

  const mainLink = main.find(`.place-card__name a`);

  mainLink.props().onClick();

  expect(onPlaceCardNameLinkClick.mock.calls.length).toBe(1);
});
