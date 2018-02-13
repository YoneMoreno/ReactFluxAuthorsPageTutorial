import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {Main} from "./components/common/Main";
import {Header} from "./components/common/Header";

const App = () => {

    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>

    , document.getElementById("root"));
