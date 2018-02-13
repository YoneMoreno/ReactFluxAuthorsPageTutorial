import React from 'react';

const AuthorForm = (props) => {
    return (
        <form>
            <h1>Manage Author</h1>
            <label htmlFor="FirstName">First Name</label>
            <input type="text"
                   name="firstName"
                   className="form-control"
                   placeholder="First Name"
                   onChange={props.onChange}
                   value={props.author.firstName}/>
            <br/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text"
                   name="lastName"
                   className="form-control"
                   placeholder="Last Name"
                   onChange={props.onChange}
                   value={props.author.lastName}/>
            <br/>

            <input type="submit" value="Save" className="btn btn-default"/>
        </form>
    );
};

export {AuthorForm};