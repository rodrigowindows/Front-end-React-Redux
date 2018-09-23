// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapFulfilled, MapEmpty } from '../../state/actions/MapActions';

class MapProviders extends Component {
    constructor(props) {
        super(props);

        this.mapDispatchToProps = (dispatch) => (
            bindActionCreators({ MapFulfilled,MapEmpty }, dispatch)
        );
        
    }


    componentDidMount() {
    
        if(!this.props.fetched){
            var map = L.map('map', {
                minZoom: 2,
                maxZoom: 20,
                layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
                attributionControl: false,
            });
            map.setView([38.875532, -77.047822], 10);

            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
                iconUrl: require('leaflet/dist/images/marker-icon.png'),
                shadowUrl: require('leaflet/dist/images/marker-shadow.png')
            });

            
            (this.props.providers).forEach(function(element) {
                console.log(element);
                L.marker([element.lat, element.lon]).addTo(map);
            });
            L.polygon([
                [38.801165,-77.036123],
                [38.897422,-76.918020],
                [38.995682,-77.036123],
                [38.899559,-77.165213],
                [38.801165,-77.036123]
            ]).addTo(map);
    
            let { dispatch } = this.props;
            let action = MapFulfilled(document.getElementById('map'));
            dispatch(action);
        }
        else{
            setTimeout(function() { //Start the timer
                document.getElementById('map').appendChild(this.props.map);
            }.bind(this), 500);
        }
    }


    render() {
        return (
            <div>
                {
                    <div id="map" style={{ height: 300 }}></div>
                }
            </div>
        );
    }
}

MapProviders.propTypes = {
    providers: PropTypes.array.isRequired,
    map: PropTypes.object,
    fetched: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    dispatch: PropTypes.func
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const {fetched, failed, map } = state.map;

    console.log('new state',state);
    return {fetched, failed, map };
};


const hoc = connect(mapStateToProps)(MapProviders);


// EXPORT COMPONENT

export { hoc as MapProviders };
