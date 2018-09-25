// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProviders } from '../state/actions/ProvidersActions';

// COMPONENT

class ProviderListItem extends React.Component {
    constructor(props) {
        super(props);

        this.mapDispatchToProps = (dispatch) => (
            bindActionCreators({ fetchProviders }, dispatch)
        );
        
    }

    deleteItem = ( id ) => {
        console.log('Delete',id); 

        
        fetch('http://18.191.149.21:5000/deleteProvider?_id='+id, {
            method: 'DELETE'
        });
        
        // let { dispatch } = this.props;
        // let action = fetchProviders();
        // dispatch(action);
    };

    tealToggle = ( layerMarker ) => {
        layerMarker.openPopup(); 
    };
    

    render() {
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <a href="#" onClick={this.tealToggle.bind(this, this.props.layerMarker)}> <h5 className="mb-1">Name: {this.props.name}</h5></a>
                    <a href="#" onClick={this.deleteItem.bind(this, this.props.id)}> <small className="text-muted">DELETE</small> </a>
                </div>
                <small className="text-muted">Coordinate: ({this.props.lat},{this.props.lon})</small>
            </div>
        );
    }
}

ProviderListItem.propTypes = {
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    layerMarker: PropTypes.object.isRequired,
    dispatch: PropTypes.func,
};


const hoc = connect()(ProviderListItem);
export { hoc as ProviderListItem };