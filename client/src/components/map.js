import React, {Component} from "react";

export default class Map extends Component {
    constructor(props) {
    super(props);
    this.state = {};
    }

    componentDidMount() {
        this.map = new google.maps.Map(
            this.refs.map,{
                center: EIFFEL_TOWER_POSITION,
                zoom: 16
            }
        );
    }

    render() {
    return <div ref="map" style={mapStyle} ref="map">
        map is here
        </div>;
    }
}





