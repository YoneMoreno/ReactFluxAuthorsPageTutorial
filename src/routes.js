import React from 'react';
import {Home} from "./components/HomePage";
import {About} from "./components/about/aboutPage";
import {AuthorPage} from "./components/authors/authorPage";
import Route from 'react-router';

const routes = (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="authors" component={AuthorPage}/>
        <Route path="about" component={About}/>
        <DefaultRoute component={Home}/>
    </Router>
);

export {routes}
