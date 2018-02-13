import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-faded">
            <a href="/" className="navbar-brand">
                <img width="15px" height="15px"
                     src="https://lh3.googleusercontent.com/9Sz9ezINa2MxhHdD_JvgSURUdsrSeslGxX-krVLWgl1foGVl2ckCmJBpoVP8lGws4-Y=w300"
                     alt="pluralsight logo"/>
            </a>
            <ul className="navbar navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/#authors">Authors</a></li>
                <li><a href="/#about">About</a></li>
            </ul>
        </nav>

    );
};

export {Header}