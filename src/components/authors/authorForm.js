import React from 'react';

const AuthorForm = () => {
    return (
        <form>
            <h1>Manage Author</h1>
            <label htmlFor="FirstName">First Name</label>
            <input type="text"
                   name="firstName"
                   className="form-control"
                   placeholder="First Name"
                   value=""/>
            <br/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text"
                   name="lastName"
                   className="form-control"
                   placeholder="Last Name"
                   value=""/>
            <br/>

            <input type="submit" value="Save" className="btn btn-default"/>
        </form>
    );
};

export {AuthorForm};