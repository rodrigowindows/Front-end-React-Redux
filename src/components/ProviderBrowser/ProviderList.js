// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { ProviderListItem } from './ProviderListItem';


// COMPONENT

const renderList = (providers,layerGroup) => (
    <div className="list-group animated fadeIn">
        {providers.map((provider,index) => renderListItem(provider,layerGroup[index]))}
    </div>
);

const renderListItem = (provider,layerMarker) => (
    <Fragment key={provider._id}>
        <ProviderListItem name={provider.name} lat={provider.lat} lon={provider.lon} id={provider._id} layerMarker={layerMarker}  />
    </Fragment>
);

const ProviderList = (props) => (
    <Fragment>
        {renderList(props.providers,props.layerGroup)}
    </Fragment>
);

ProviderList.propTypes = {
    providers: PropTypes.array.isRequired,
    layerGroup: PropTypes.array.isRequired
};

export { ProviderList };