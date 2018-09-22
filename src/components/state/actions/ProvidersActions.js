import { fetchProviders } from '../../../services/ProvidersService';

// FETCH PROVIDERS ACTION NAMES

export const FETCH_PROVIDERS = 'FETCH_PROVIDERS';
export const FETCH_PROVIDERS_PENDING = 'FETCH_PROVIDERS_PENDING';
export const FETCH_PROVIDERS_FULFILLED = 'FETCH_PROVIDERS_FULFILLED';
export const FETCH_PROVIDERS_REJECTED = 'FETCH_PROVIDERS_REJECTED';


// ACTION GENERATORS

const fetchProvidersAction = () => ({
    type: FETCH_PROVIDERS,
    payload: fetchProviders()
});


// EXPORT ACTIONS

export { fetchProvidersAction as fetchProviders };