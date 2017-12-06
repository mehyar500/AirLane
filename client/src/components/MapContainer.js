import React, {Component} from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
// Recompose is a React utility belt for function components and higher-order components
// I will use recompose to simplify the component and help infuse props before the map loads
import { compose, withProps } from "recompose";

// assign the map to const and return initiallizing google map with the JS file and the neccessary props
// Google Maps Api Key "AIzaSyC7lZx7iiP5OJjxv2r8U-rzLfU3C8MBzUA"
const MapWithAMarker = compose(withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `480px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker/>
  </GoogleMap>
));


class MapContainer extends Component {
  constructor(props) {
    super(props);
    //set the map state
    this.state = {
      isMarkerShown: false,
      center: { lat: null, lng: null },
      zoom: null
    };
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  // quick test code to see if containerElement presence check meant error did not occur
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.containerElement) {
  //     super.componentDidUpdate(prevProps, prevState);
  //   }
  // }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return <MapWithAMarker
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
  }
}

export default MapContainer;