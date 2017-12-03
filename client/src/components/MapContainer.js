import React, {Component} from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";


const MapWithAMarker = 
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))


//Google Maps Api Key "AIzaSyC7lZx7iiP5OJjxv2r8U-rzLfU3C8MBzUA"
class MapContainer extends Component {
  //set the map state
  state = {
    center: { lat: 26.122438, lng: -80.137314 },
    zoom: 11
  };

  render() {
    return <MapWithAMarker googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7lZx7iiP5OJjxv2r8U-rzLfU3C8MBzUA&v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `400px` }} />} mapElement={<div style={{ height: `100%` }} />} />;
  }
}

export default MapContainer;