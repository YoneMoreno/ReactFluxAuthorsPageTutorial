import React from 'react';

const About = () => {
    window.addEventListener('beforeunload', (event) => {
        if (!(window.confirm("DO YOU really want to exit a fun page like this?"))) {
            event.preventDefault();
        }
    });

    window.onbeforeunload = (event) => {
        if (!(window.confirm("DO YOU really want to exit a fun page like this?"))) {
            event.preventDefault();
        }
    };

    return (
        <div>
            <h1>About</h1>
            <p>This app uses:</p>
            <ul>
                <li>React</li>
                <li>Flux</li>
                <li>Bootstrap</li>
            </ul>
        </div>
    );
};

export {About}