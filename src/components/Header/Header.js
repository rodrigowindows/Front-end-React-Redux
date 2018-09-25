// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENT

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light alert-dark">
        <a className="navbar-brand" href="/">
            <i className="fa fa-user-md fa-2x" style={{color: 'dodgerblue'}}></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/' activeClassName='menu selected' exact={true}>HOME</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/providers' activeClassName='menu selected'>PROVIDERS</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/addProvider' activeClassName='menu selected'>ADD PROVIDERS</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);