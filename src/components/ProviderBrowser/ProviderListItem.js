// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
// import L from 'leaflet';


// COMPONENT

const tealToggle = ( layerMarker ) => {
    console.log('test',layerMarker); 
    layerMarker.openPopup(); 
};


const ProviderListItem = ({id, name, lat, lon, layerMarker}) => (
    <a href="#" onClick={tealToggle.bind(this, layerMarker)} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Name: {name}</h5>
            <small className="text-muted">ID: {id}</small>
        </div>
        <small className="text-muted">Coordinate: ({lat},{lon})</small>
    </a>
);

ProviderListItem.propTypes = {
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    layerMarker: PropTypes.object.isRequired
};

export { ProviderListItem };