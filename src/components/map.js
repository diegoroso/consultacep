import '../assets/styles/maps.scss'
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerImg from '../assets/images/marker.png'

const GoogleMapMarker = () => <img className="googlemaps-marker" src={MarkerImg} alt='Marker'/>;

export class Map extends Component {
  render() {
    const { coordinates, zoom, marker } = this.props.location.data;

    return (
      <div className='googlemaps'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD2WqEZVC_PPsnICgtGQ5PPEsp07ooyISE' }}
          center={coordinates}
          zoom={zoom}
        >
          {marker ? <GoogleMapMarker
            lat={coordinates.lat}
            lng={coordinates.lng}
          ></GoogleMapMarker> : null}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
