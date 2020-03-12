import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import L from 'leaflet';

export default class MapOffers extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
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

    const offerCords = [52.3709553943508, 4.89309666406198];
    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    L
      .marker(offerCords, {icon})
      .addTo(map);
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}>xx</div>
    );
  }

}

MapOffers.propTypes = {
  offers: PropTypes.array.isRequired,
};
