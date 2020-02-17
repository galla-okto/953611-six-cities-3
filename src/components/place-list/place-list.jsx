import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "./../place-card/place-card.jsx";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeCard: null};
    this.onHover = this.onHover.bind(this);
  }

  onHover(card) {
    this.setState({activeCard: card});
  }

  render() {
    const {listOffers} = this.props;

    return (
      <React.Fragment>
        {listOffers.map((offer, index) => (<PlaceCard offer={offer} key={index} onHover={this.onHover}/>))}
      </React.Fragment>
    );
  }
}

PlaceList.propTypes = {
  listOffers: PropTypes.array.isRequired,
};

export default PlaceList;
