// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const ProviderListItem = ({id, name, lat, lon}) => (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
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
    id: PropTypes.string.isRequired
};

export { ProviderListItem };