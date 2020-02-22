import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "./../place-card/place-card.jsx";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };

    this.handleOfferHover = this.handleOfferHover.bind(this);
  }

  handleOfferHover(activeOffer) {
    this.setState({activeOffer});
  }

  render() {
    const {listOffers} = this.props;
    const {onPlaceCardNameClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {listOffers.map((offer, index) => (<Offer offerCard={offer}
          key={`${offer.id}+${index}`}
          onOfferHover={this.handleOfferHover}
          onTitleClick={onPlaceCardNameClick}/>))}
      </div>
    );
  }
}

PlaceList.propTypes = {
  listOffers: PropTypes.array.isRequired,
  onPlaceCardNameClick: PropTypes.func.isRequired,
};

export default PlaceList;
