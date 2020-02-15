import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "./../place-card/place-card.jsx";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    const createOffers = () =>
      offers.map((offer, index) => (<PlaceCard offer={offer} key={index}/>));

    return (
      <>
      {createOffers(offers)}
      </>
    );
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PlaceList;
