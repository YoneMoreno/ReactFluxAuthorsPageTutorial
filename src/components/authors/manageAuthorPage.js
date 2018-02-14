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

    componentDidMount = () => {
        const queryAuthorId = this.props.location.pathname; //from the path '/author:id'
        const authorId = queryAuthorId.substr(queryAuthorId.lastIndexOf("/") + 1);

        if (authorId) {
            this.setState({author: AuthorApi.getAuthorById(authorId)});
        }
        // console.log(authorId.substr(authorId.lastIndexOf("/") + 1));

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