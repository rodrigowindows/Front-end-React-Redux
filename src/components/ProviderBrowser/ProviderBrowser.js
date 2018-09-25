// IMPORT PACKAGE REFERENCES
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import L from 'leaflet';

// IMPORT PROJECT REFERENCES

import { fetchProviders,willUnmont } from '../state/actions/ProvidersActions';
import { ProviderList } from './ProviderList';
import {MapProviders} from './map/map';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';

//socketIO service
import {socketio} from '../../services/socketIO';


const mapStyle = {
    height: '180px',
    with:'180px'
};

// COMPONENT

function pushMarkers(providers) {

    let layerArray = new Array();
    (providers).forEach(function(element) {
        layerArray.push(L.marker([element.lat, element.lon],{title:element.id}).bindPopup('<b>Provider</b><br>'+ element.name));
    });
    return layerArray;
}

function mapRender() {
    let map = L.map('map', {
        minZoom: 2,
        maxZoom: 20,
        layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
        attributionControl: false,
    });



    return map;
}

class ProviderBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map:null,
            subscription:null,
        };
        
    }

    componentDidMount() {
        let socket = new socketio();
        let subscription = socket.listen('providers').subscribe(res => {
            console.log('New provider from Socket IO',res,this.props);
            if(this.props.fetched){
                this.props.fetchProviders();
            }
                
        });
        this.setState({subscription:subscription});
        this.setState({map:mapRender()});
        this.props.fetchProviders();
        
    }
    componentWillUnmount(){
        this.state.subscription.unsubscribe();
        this.props.willUnmont();
    }


    
    render() {
        let { map } = this.state;
        if(this.props.fetched){
            this.layerGroup=pushMarkers(this.props.providers,map);
        }

        return (
            <div>
                {
                    <div id="map"  style={this.props.fetched ? { height: 300, display:'block' } : { height: 300, display:'none' }}></div>  
                }
                {
                    this.props.fetched && <Fragment >   <MapProviders  providers={this.props.providers}  map={map} layerGroup={this.layerGroup} style={mapStyle}  /> <ProviderList providers={this.props.providers} layerGroup={this.layerGroup} /></Fragment> 
                   
                }
                {
                    <LoadingIndicator busy={this.props.fetching}  />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of providers" />
                }
            </div>
        );
    }
}

ProviderBrowser.propTypes = {
    fetchProviders: PropTypes.func.isRequired,
    willUnmont: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    providers: PropTypes.array.isRequired,

};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, providers } = state.providers;
    console.log('new state',state);
    return { fetching, fetched, failed, providers };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchProviders,willUnmont }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(ProviderBrowser);


// EXPORT COMPONENT

export { hoc as ProviderBrowser };