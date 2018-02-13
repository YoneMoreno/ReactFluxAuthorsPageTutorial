import React from 'react';
import {AuthorForm} from "./authorForm";

class ManageAuthorPage extends React.Component {
    state = {
        author: {
            id: '',
            firstName: '',
            lastName: '',
        },
    };


    render() {
        return (
            <AuthorForm author={this.state.author}/>
        );
    };
}

export {ManageAuthorPage}