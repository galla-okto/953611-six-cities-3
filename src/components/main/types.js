import PropTypes from "prop-types";

const types = {
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPlaceCardNameClick: PropTypes.func,
};

export default types;
