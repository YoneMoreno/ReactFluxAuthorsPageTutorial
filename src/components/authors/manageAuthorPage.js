import React from 'react';
import {AuthorForm} from "./authorForm";
import AuthorApi from "../api/authorApi";
import toastr from 'toastr';

class ManageAuthorPage extends React.Component {
    state = {
        author: {
            id: '',
            firstName: '',
            lastName: '',
        },
    };

    setAuthorState = (event) => {
        let field = event.target.name;
        let value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    };

    saveAuthor = (event) => {
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author saved ;=)');
    };

    componentWillMount = () => {
        const authorId = this.id;

        if (authorId) {
            this.setState({author: AuthorApi.getAuthorById(authorId)});
        }
    };

    render() {
        return (
            <AuthorForm author={this.state.author}
                        onChange={this.setAuthorState}
                        onSave={this.saveAuthor}/>
        );
    };
}

export {ManageAuthorPage}