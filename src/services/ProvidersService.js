// IMPORT DATA FROM STATIC JSON FILE

import fetch from 'node-fetch';


// COMPONENT

export const fetchProviders = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        fetch('http://18.191.149.21:5000/providers')
            .then(res => res.json())
            .then(json => resolve(json.data))
            .catch(err => reject(err));
    });
};