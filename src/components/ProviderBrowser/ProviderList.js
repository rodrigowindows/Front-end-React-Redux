// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { ProviderListItem } from './ProviderListItem';


// COMPONENT

const renderList = providers => (
    <div className="list-group animated fadeIn">
        {providers.map(provider => renderListItem(provider))}
    </div>
);

const renderListItem = provider => (
    <Fragment key={provider._id}>
        <ProviderListItem name={provider.name} lat={provider.lat} lon={provider.lon} id={provider._id} />
    </Fragment>
);

const ProviderList = (props) => (
    <Fragment>
        {renderList(props.providers)}
    </Fragment>
);

ProviderList.propTypes = {
    providers: PropTypes.array.isRequired
};

export { ProviderList };