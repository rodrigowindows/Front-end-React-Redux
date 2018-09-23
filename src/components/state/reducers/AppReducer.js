// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchProvidersReducer } from './FetchProvidersReducer';
import { FetchMapReducer } from './FetchMapReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    providers: FetchProvidersReducer,map:FetchMapReducer
});