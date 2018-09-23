
// FETCH ACTION NAMES

export const MAP_EMPTY = 'MAP_EMPTY';
export const MAP_FULFILLED = 'MAP_FULFILLED';



// ACTION GENERATORS



export function MapFulfilled(map) {
    return {
        type: 'MAP_FULFILLED',
        payload : map
    };
}

export function MapEmpty() {
    return {
        type: 'MAP_EMPTY',
        payload : null
    };
}

