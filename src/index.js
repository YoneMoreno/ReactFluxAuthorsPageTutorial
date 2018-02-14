import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {Main} from "./components/common/Main";
import {Header} from "./components/common/Header";
import initializeActions from './actions/initializeActions';


const App = () => {

    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
};

initializeActions.initApp();

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>

    , document.getElementById("root"));
