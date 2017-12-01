import React, {Component} from "react";
import { GoogleMap, Marker } from "react-google-maps";

export default class Map extends Component {
    state = {
        center: {lat: null, lng: null},
        zoom: null
    };
        
    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center: { lat: -28.643387, lng: 153.612224 },
            zoom: 16
        });
    }



    render() {
    return <div ref="map" style={mapStyle} ref="map">
        map is here
        </div>;
    }
}





