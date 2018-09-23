import {
    MAP_EMPTY,
    MAP_FULFILLED
} from '../actions/MapActions';


// INITIALIZE STATE

const initialState = {
    map:null,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchMapReducer = (state = initialState, action) => {
    console.log('new action',action,'new state',state);
    switch(action.type) {
        case MAP_EMPTY:
            return {
                ...state,
                map: null,
                fetched: false,
                failed: false
            };
        case MAP_FULFILLED:
            return {
                ...state,
                map: action.payload,
                fetched: true,
                failed: false
            };
        default:
            return state;
    }
    
};