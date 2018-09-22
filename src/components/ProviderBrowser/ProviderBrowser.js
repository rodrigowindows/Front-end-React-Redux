// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchProviders } from '../state/actions/ProvidersActions';
import { ProviderList } from './ProviderList';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


// COMPONENT

class ProviderBrowser extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProviders();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <ProviderList providers={this.props.providers} />
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
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
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    providers: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, providers } = state.providers;

    return { fetching, fetched, failed, providers };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchProviders }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(ProviderBrowser);


// EXPORT COMPONENT

export { hoc as ProviderBrowser };