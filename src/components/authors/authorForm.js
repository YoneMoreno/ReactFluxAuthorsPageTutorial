import React from 'react';
import {Input} from "../common/textInput";
import Link from "react-router-dom/es/Link";

const AuthorForm = (props) => {
    return (
        <form>
            <h1>Manage author</h1>
            <Input
                name="firstName"
                label="First Name"
                value={props.author.firstName}
                onChange={props.onChange}
            />

            <Input
                name="lastName"
                label="Last Name"
                value={props.author.lastName}
                onChange={props.onChange}
            />

            <button type="submit" value="Save" className="btn btn-default" onClick={props.onSave}><Link to="/authors">Save
                author</Link>
            </button>
        </form>
    );
};

export {AuthorForm};