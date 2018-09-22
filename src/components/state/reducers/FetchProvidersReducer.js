import {
    FETCH_PROVIDERS_PENDING,
    FETCH_PROVIDERS_FULFILLED,
    FETCH_PROVIDERS_REJECTED
} from '../actions/ProvidersActions';


// INITIALIZE STATE

const initialState = {
    providers: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchProvidersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROVIDERS_PENDING:
            return {
                ...state,
                providers: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_PROVIDERS_FULFILLED:
            return {
                ...state,
                providers: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_PROVIDERS_REJECTED:
            return {
                ...state,
                providers: [],
                fetching: false,
                fetched: false,
                failed: true
            };

        default:
            return state;
    }
};