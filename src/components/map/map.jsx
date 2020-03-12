import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {xyAmsterdam} from "../../const.js";
import L from 'leaflet';

export default class MapOffers extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = xyAmsterdam;
    const zoomSize = 12;

    const map = L.map(`map`, {
      center: city,
      zoom: zoomSize,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoomSize);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    const offerCords = xyAmsterdam;
    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    L
      .marker(offerCords, {icon})
      .addTo(map);

    const {listOffers} = this.props;
    listOffers.forEach((element) => {
      L
      .marker(element.xy, {icon})
      .addTo(map);
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }

}

MapOffers.propTypes = {
  listOffers: PropTypes.array.isRequired,
};
