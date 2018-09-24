// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapFulfilled, MapFetching, MapFetched } from '../../state/actions/MapActions';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';

class MapProviders extends Component {
    constructor(props) {
        super(props);

        this.mapDispatchToProps = (dispatch) => (
            bindActionCreators({ MapFulfilled, MapFetching, MapFetched }, dispatch)
        );
        
    }


    componentDidMount() {
        // let { dispatch } = this.props;
        //Loading Map
        // let action = MapFetching();
        // dispatch(action);

        
        this.props.map.setView([38.875532, -77.047822], 10);

        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png')
        });

        
        this.props.map.eachLayer(function (layer) {
            if(!layer._url)
                this.props.map.removeLayer(layer);
        }, this);


        L.layerGroup(this.props.layerGroup).addTo(this.props.map);

        L.polygon([
            [38.801165,-77.036123],
            [38.897422,-76.918020],
            [38.995682,-77.036123],
            [38.899559,-77.165213],
            [38.801165,-77.036123]
        ]).addTo(this.props.map);

        // action = MapFulfilled({'map':document.getElementById('map')});
        // dispatch(action);
    }


    render() {
        return (
            <div>
                {
                    
                    <LoadingIndicator busy={this.props.fetching} />
                }
            </div>
        );
    }
}

MapProviders.propTypes = {
    map: PropTypes.object,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func,
    layerGroup: PropTypes.array
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const {fetched, fetching } = state.map;

    console.log('new state',state);
    return {fetched, fetching };
};


const hoc = connect(mapStateToProps)(MapProviders);


// EXPORT COMPONENT

export { hoc as MapProviders };
