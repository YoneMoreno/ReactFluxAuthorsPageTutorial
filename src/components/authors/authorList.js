import React from 'react';

const AuthorList = (props) => {
    const createAuthorRow = function (author) {
        return (
            <tr key={author.id}>
                <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
        );
    };


    return (
        <div>
            <table className="table">
                <thead>
                <th>ID</th>
                <th>Name</th>
                </thead>
                <tbody>
                {props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        </div>
    );
};

export {AuthorList}
