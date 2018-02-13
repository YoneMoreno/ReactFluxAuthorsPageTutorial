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

    setAuthorState = (event) => {
        let field = event.target.name;
        let value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    };

    render() {
        return (
            <AuthorForm author={this.state.author}
                        onChange={this.setAuthorState}/>
        );
    };
}

export {ManageAuthorPage}