// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchProvidersReducer } from './FetchProvidersReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    providers: FetchProvidersReducer
});