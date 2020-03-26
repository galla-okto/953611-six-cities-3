import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {xyAmsterdam, zoom, tileLayerAddress, tileLayerOptions, iconMap} from "../../const.js";
import L from 'leaflet';

export default class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const city = xyAmsterdam;
    const zoomSize = zoom;

    if (this.myRef.current) {
      const map = L.map(this.myRef.current, {
        center: city,
        zoom: zoomSize,
        zoomControl: false,
        marker: true
      });

      map.setView(city, zoomSize);

      L.tileLayer(tileLayerAddress, tileLayerOptions).addTo(map);

      const offerCords = xyAmsterdam;
      const icon = L.icon(iconMap);

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
