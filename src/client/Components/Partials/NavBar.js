import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" exact={true} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/notice">Notice </NavLink>
        </li>
        <li className="nav-item ">
            <NavLink activeClassName="active" className="nav-link" to="/blog">Blog </NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/event">Events </NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/news">Newsfeed </NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/gallery">Gallery </NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/contact">Contact </NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/member">Members </NavLink>
        </li>
        {/* <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/about">About </NavLink>
        </li> */}
        {/* <li className="nav-item dropdown">
            <NavLink activeClassName="active" className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink activeClassName="active" className="dropdown-item" to="#">Action</NavLink>
            <NavLink activeClassName="active" className="dropdown-item" to="#">Another action</NavLink>
            <div className="dropdown-divider"></div>
            <NavLink activeClassName="active" className="dropdown-item" to="#">Something else here</NavLink>
            </div>
        </li> */}
    </ul>
</div>
);

export default NavBar;
