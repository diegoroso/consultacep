import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMapMarker = () => <img className="map-marker" src={'/marker.png'} alt='Marker' />;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: -23.054166,
      lng: -46.3558554
    },
    zoom: 18
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD2WqEZVC_PPsnICgtGQ5PPEsp07ooyISE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <GoogleMapMarker
            lat={-23.054166}
            lng={-46.3558554}
          ></GoogleMapMarker>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;