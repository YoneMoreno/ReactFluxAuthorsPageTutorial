import React from 'react';
import {Input} from "../common/textInput";
import Link from "react-router-dom/es/Link";

class AuthorForm extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.state.author === undefined) {
            this.props.author = {
                author: {
                    id: '',
                    firstName: '',
                    lastName: '',

                }
            };
        }
    }

    render() {
        return (
            <form>
                <h1>Manage author</h1>
                <Input
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                />

                <Input
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                />

                <button type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}><Link
                    to="/authors">Save
                    author</Link>
                </button>
            </form>
        );
    }
}

export {AuthorForm}