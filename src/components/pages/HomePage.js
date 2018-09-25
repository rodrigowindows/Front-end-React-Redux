// IMPORT PACKAGE REFERENCES

import React from 'react';

// IMPORT IMAGES

import react from '../../images/react-small.png';
import redux from '../../images/redux-small.png';
import leaflet from '../../images/leaflet.png';
import socketio from '../../images/socket-io.svg';
import flask from '../../images/flask.png';
import mongodb from '../../images/mongodb.png';
import realtime from '../../images/realtime.gif';

// COMPONENT

const HomePage = () => (
    <main>
        <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
            <h1 className="display-6 text-center">Welcome</h1>
            <p className="lead text-center">RealTime App Page using React + Redux + LeafLet + Socket.IO, Web Service using Flask + MongoDB </p>
            <hr className="my-4" />
            <div className="text-center">
                <img className="m-3" height="50" src={react} alt="React" />
                <img className="m-3" height="50" src={redux} alt="Redux" />
                <img className="m-3" height="50" src={leaflet} alt="LeafLet" />
                <img className="m-3" height="50" src={socketio} alt="Socket.IO" />
                <img className="m-3" height="50" src={flask} alt="Flask" />
                <img className="m-3" height="50" src={mongodb} alt="MongoDB" />
            
            </div>
            <div className="text-center" >
                <img  style={{ maxwidth:'25%', maxheight:'30vh', height: '400px', width: '600px'  }} className="m-3" src={realtime} alt="Realtime" />
            </div>
        </div>
    </main>
);

export { HomePage };