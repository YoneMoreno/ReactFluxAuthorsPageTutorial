import React from 'react';
import PropTypes from 'prop-types'
import Link from "react-router-dom/es/Link";
import {ManageAuthorPage} from "./manageAuthorPage";
import AuthorActions from "../api/authorApi";

const AuthorList = (props) => {

    const deleteAuthor = (id, event) => {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.sucess('Deleted');
    };

    const createAuthorRow = function (author) {
        return (
            <tr key={author.id}>
                <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                <td><Link to={"author/" + author.id}>{author.id}</Link></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
        )
            ;
    };


    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        </div>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
};

export {AuthorList}
