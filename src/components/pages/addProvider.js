// IMPORT PACKAGE REFERENCES

import React from 'react';
import fetch from 'node-fetch';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Send from '@material-ui/icons/Send';

// COMPONENT

class addProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            inputName: '',
            inputLat: '',
            inputLon: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLat = this.handleChangeLat.bind(this);
        this.handleChangeLon = this.handleChangeLon.bind(this);
    }
  
    handleSubmit() {
        fetch('http://18.191.149.21:5000/createNewProvider?lat='+this.state.inputLat+'&lon='+this.state.inputLon+'&name='+this.state.inputName, {
            method: 'POST'
        });
        this.props.history.push('/providers');
    }

    handleChangeName (event) {
        this.setState({
            inputName: event.target.value
        });
    }

    handleChangeLat (event) {
        this.setState({
            inputLat: event.target.value
        });
    }

    handleChangeLon (event) {
        this.setState({
            inputLon: event.target.value
        });
    }
    render() {
        return (
            <main className="p-3 animated fadeIn">
                <div >
                    <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}} >
                        <TextField
                            id="standard-name"
                            label="Provider Name"
                            value={this.state.inputName}
                            onChange={this.handleChangeName}
                            margin="normal"
                            fullWidth
                        />
                    </div>

                    <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                        <TextField
                            id="standard-lat"
                            label="Coordinate(latitude)"
                            value={this.state.inputLat}
                            onChange={this.handleChangeLat}
                            margin="normal"
                            fullWidth
                        />
                    </div>
                    <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                        <TextField
                            id="standard-lon"
                            label="Coordinate(Longitude)"
                            value={this.state.inputLon}
                            onChange={this.handleChangeLon}
                            margin="normal"
                            fullWidth
                        />
                    </div>
                    <div style={{display: 'flex',  padding: '10px'}}>
                        <Button variant="fab" color="primary" aria-label="Edit" onClick={this.handleSubmit} >
                            <Icon><Send /></Icon>
                        </Button>
                    </div>
                </div>
            </main>
        );
    }
    static propTypes = {
        history: PropTypes.object.isRequired
    }
}

withRouter(addProvider);

export {addProvider};