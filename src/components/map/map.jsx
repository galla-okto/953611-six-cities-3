import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {xyAmsterdam} from "../../const.js";
import L from 'leaflet';

export default class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const city = xyAmsterdam;
    const zoomSize = 12;

    if (this.myRef.current) {
      const map = L.map(this.myRef.current, {
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
        if (element.xy !== undefined) {
          L
          .marker(element.xy, {icon})
          .addTo(map);
        }
      });
    }
  }

  componentWillUnmount() {
    this.myRef = null;
  }

  render() {
    return (
      <div ref={this.myRef} style={{height: `100%`}}>
      </div>
    );
  }

}

Map.propTypes = {
  listOffers: PropTypes.array.isRequired,
};
