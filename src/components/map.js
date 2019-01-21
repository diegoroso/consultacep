import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerImg from '../assets/images/marker.png'

const GoogleMapMarker = () => <img className="map-marker" src={MarkerImg} alt='Marker'/>;

class Map extends Component {
  render() {
    const { location, zoom, marker } = this.props.state.data;

    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD2WqEZVC_PPsnICgtGQ5PPEsp07ooyISE' }}
          center={location}
          zoom={zoom}
        >
          {marker ? <GoogleMapMarker
            lat={location.lat}
            lng={location.lng}
          ></GoogleMapMarker> : null}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
