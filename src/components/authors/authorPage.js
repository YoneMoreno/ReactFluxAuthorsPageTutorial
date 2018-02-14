import React from 'react';
import AuthorApi from "../api/authorApi";
import {AuthorList} from "./authorList";
import Link from "react-router-dom/es/Link";
import AuthorStore from "../../stores/authorStore";

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        this.setState({authors: AuthorStore.getAllAuthors()});
    }

    render() {
        return (
            <div>
                <h1>Authors:</h1>
                <button><Link to="/author" className="btn btn-default">Add author</Link></button>
                < AuthorList
                    authors={this.state.authors
                    }
                />
            </div>
        );
    }
}

export {AuthorPage}
