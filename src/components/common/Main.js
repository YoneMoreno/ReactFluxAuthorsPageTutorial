import React from 'react';

import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import {Home} from "../HomePage";
import {AuthorPage} from "../authors/authorPage";
import {About} from "../about/aboutPage";
import Redirect from "react-router-dom/es/Redirect";


const Main = () => (
    <Switch>
        <Route exact path="/Home" component={Home}/>
        <Route path="/authors" component={AuthorPage}/>
        <Route path="/about" component={About}/>
        <Redirect from="*" to="/Home"/>
    </Switch>
);

export {Main}
