// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProvidersPage } from '../pages/ProvidersPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/providers' component={ProvidersPage} />
                <Route path='/about' component={AboutPage} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);