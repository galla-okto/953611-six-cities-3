import PropTypes from "prop-types";

const types = {
  countOffers: PropTypes.number.isRequired,
  listOffers: PropTypes.array.isRequired,
  onPlaceCardNameClick: PropTypes.func,
};

export default types;
