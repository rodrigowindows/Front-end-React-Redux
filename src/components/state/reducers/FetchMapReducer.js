import {
    MAP_FETCHING,
    MAP_FULFILLED,
    MAP_FETCHED
} from '../actions/MapActions';


// INITIALIZE STATE

const initialState = {
    fetched: false,
    fetching: false
};


// REDUCER

export const FetchMapReducer = (state = initialState, action) => {
    console.log('new action',action);
    switch(action.type) {
        case MAP_FETCHING:
            return {
                ...state,
                fetching: true
            };
        case MAP_FETCHED:
            return {
                ...state,
                fetching: false
            };
        case MAP_FULFILLED:
            return {
                ...state,
                fetched: true,
                fetching: false
            };
        default:
            return state;
    }
    
};