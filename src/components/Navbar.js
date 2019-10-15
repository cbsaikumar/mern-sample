import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
    <nav className="nav-wrapper teal">
        <div className="container">
            <a href="/" className="brand-logo left">My React App</a>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </nav>
)

export default Navbar;