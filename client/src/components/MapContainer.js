import React, {Component} from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
//Recompose is a React utility belt for function components and higher-order components
//I will use recompose to simplify the component and help infuse props before the map loads
import { compose, withProps } from "recompose";


const MapWithAMarker = compose(withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker/>
  </GoogleMap>
));


//Google Maps Api Key "AIzaSyC7lZx7iiP5OJjxv2r8U-rzLfU3C8MBzUA"
class MapContainer extends Component {
  constructor(props) {
    super(props);
    //set the map state
    this.state = {
      center: { lat: null, lng: null },
      zoom: null
    };
  }

  render() {
    return <MapWithAMarker isMarkerShown={true} />;
  }
}

export default MapContainer;