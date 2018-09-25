// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware, compose } from 'redux';

// IMPORT MIDDLEWARE

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// IMPORT REDUCERS

import { AppReducer } from '../reducers/AppReducer';


// CONFIGURE STORE

const allStoreEnhancers = compose (
    applyMiddleware(thunk, promiseMiddleware())
);
// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const createAppStore = () => {
    return createStore(AppReducer,allStoreEnhancers);
};