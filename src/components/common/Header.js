import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-faded">
            <a href="/" className="navbar-brand">
                <img src="../../images/plsght.png" alt="pluralsight logo"/>
            </a>
            <ul className="navbar navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
            </ul>
        </nav>

    );
};

export {Header}