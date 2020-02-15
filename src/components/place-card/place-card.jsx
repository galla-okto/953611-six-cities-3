import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {card, onHover} = this.props;
    const {label, imageSrc, price, rating, name, type} = card;

    return (

    );
  }
}

PlaceCard.propTypes = {
  card:  PropTypes.shape({
    label: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onHover: PropTypes.func.isRequired,
};

export default PlaceCard;
