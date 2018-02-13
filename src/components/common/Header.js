import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-faded">
            <a href="/" className="navbar-brand">
                <img width="15px" height="15px"
                     src="https://lh3.googleusercontent.com/9Sz9ezINa2MxhHdD_JvgSURUdsrSeslGxX-krVLWgl1foGVl2ckCmJBpoVP8lGws4-Y=w300"
                     alt="pluralsight logo"/>
            </a>
            <ul className="navbar navbar-nav">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>

    );
};

export {Header}