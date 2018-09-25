// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { addProvider } from '../pages/addProvider';
import { ProvidersPage } from '../pages/ProvidersPage';

//socketIO service
import {socketio} from '../../services/socketIO';

// COMPONENT

export class AppRouter extends React.Component {
    state = {
        open: false,
        vertical: 'top',
        horizontal: 'right',
    };
    constructor(props) {
        super(props);
        let socket = new socketio();
        socket.listen('providers').subscribe(res => {
            console.log('New provider from Socket IO',res);
            this.handleOpen();
        });
      
    }

    handleOpen = () =>  {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { vertical, horizontal, open } = this.state;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical,  horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    autoHideDuration={6000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">New Update!</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <Router />
            </div>
           
        );
    }
}


export const Router = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/providers' component={ProvidersPage} />
                <Route path='/addProvider' component={addProvider} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);