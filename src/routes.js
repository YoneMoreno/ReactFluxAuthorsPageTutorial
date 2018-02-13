import React from 'react';
import {Home} from "./components/HomePage";
import {About} from "./components/about/aboutPage";
import {AuthorPage} from "./components/authors/authorPage";
import Router from "react-router-dom/es/Router";
import Route from "react-router-dom/es/Route";
import DefaultRoute from "react-router-dom/es/Route";

const routes = (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="authors" component={AuthorPage}/>
        <Route path="about" component={About}/>
        <DefaultRoute component={Home}/>
    </Router>
);

export {routes}
