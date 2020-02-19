import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "./../place-card/place-card.jsx";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeCard: null};
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(evt) {
    this.setState({activeCard: evt.target});
  }

  render() {
    const {listOffers} = this.props;

    return (
      <>
        {listOffers.map((offer, index) => (<PlaceCard offer={offer} key={index} onHover={this.handleHover}/>))}
      </>
    );
  }
}

PlaceList.propTypes = {
  listOffers: PropTypes.array.isRequired,
};

export default PlaceList;
