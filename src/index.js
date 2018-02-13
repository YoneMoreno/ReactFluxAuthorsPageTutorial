import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from "./components/HomePage";
import {About} from "./components/about/aboutPage";
import {Header} from "./components/common/Header";
import {AuthorPage} from "./components/authors/authorPage";

class App extends React.Component {
    render() {
        var Child;

        switch (this.props.route) {
            case 'about' :
                Child = About;
                break;
            case 'authors':
                Child = AuthorPage;
                break;
            default:
                Child = Home;
        }

        return (
            <div>
                <Header/>
                <Child/>
            </div>
        );
    }
}

function render() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route}/>, document.getElementById('root'));
}

window.addEventListener('hashchange', render);
render();


