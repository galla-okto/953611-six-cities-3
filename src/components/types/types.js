import PropTypes from "prop-types";

const types = {countOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default types;
