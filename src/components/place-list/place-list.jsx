import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "./../place-card/place-card.jsx";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  onHover(card) {
    this.setState.state = {activeCard: card};
  }

  render() {
    const {offers} = this.props;

    return (
      <>
      {offers.map((offer, index) => (<PlaceCard offer={offer} key={index} onHover={this.onHover}/>))}
      </>
    );
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PlaceList;
